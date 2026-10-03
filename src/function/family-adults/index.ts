/*
 * server component for the TimeLimit App
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */


import { Conflict, Forbidden } from 'http-errors'
import { SimpleDatabaseTransaction } from '../../database/simple'
import { UserModel } from '../../database/user'
import { AdultRole } from '../../model/adultrole'
import { generateVersionId } from '../../util/token'
import { WebsocketApi } from '../../websocket'
import { requireMailAndLocaleByAuthToken } from '../authentication'
import { deleteFamilyAndNotify } from '../cleanup/account-deletion'
import { ApplyActionException } from '../sync/apply-actions/exception'
import { assertParentRemovable, removeUserFromFamily } from '../sync/apply-actions/dispatch-parent-action/removeuser'
import { notifyClientsAboutChangesDelayed } from '../websocket'

// @tag:adult-role
export async function setAdultRole ({ transaction, websocket, familyId, userId, role }: {
  transaction: SimpleDatabaseTransaction
  websocket: WebsocketApi
  familyId: string
  userId: string
  role: AdultRole
}): Promise<void> {
  const adult = await requireAdult({ transaction, familyId, userId })

  if (adult.adultRole === role) return

  if (role !== 'admin') await assertNotLastAdmin({ transaction, familyId, adult, what: 'be demoted' })

  await adult.update({ adultRole: role }, { transaction: transaction.legacy.transaction })

  await announceUserListChange({ transaction, websocket, familyId, devicesChanged: false, level: 1 })
}

// @tag:adult-role
export async function removeAdult ({ transaction, websocket, familyId, actorUserId, userId }: {
  transaction: SimpleDatabaseTransaction
  websocket: WebsocketApi
  familyId: string
  actorUserId: string
  userId: string
}): Promise<void> {
  if (userId === actorUserId) throw new Conflict('you can not remove yourself — leave the family instead')

  await removeFromFamily({ transaction, websocket, familyId, adult: await requireAdult({ transaction, familyId, userId }), what: 'be removed' })
}

// @tag:adult-role
export async function leaveFamily ({ transaction, websocket, familyId, userId }: {
  transaction: SimpleDatabaseTransaction
  websocket: WebsocketApi
  familyId: string
  userId: string
}): Promise<void> {
  await removeFromFamily({ transaction, websocket, familyId, adult: await requireAdult({ transaction, familyId, userId }), what: 'leave the family' })
}

// @tag:adult-role
// Свежая почта именно этого взрослого — трение перед необратимым: сессии одной мало.
export async function deleteFamilyByAdmin ({ transaction, websocket, familyId, admin, mailAuthToken }: {
  transaction: SimpleDatabaseTransaction
  websocket: WebsocketApi
  familyId: string
  admin: UserModel
  mailAuthToken: string
}): Promise<void> {
  const { mail } = await requireMailAndLocaleByAuthToken({ mailAuthToken, transaction, invalidate: true })

  if (admin.mail === '' || mail.toLowerCase() !== admin.mail.toLowerCase()) {
    throw new Forbidden('the mail confirmation must be of your own address' + (admin.mail === '' ? '' : ' ' + admin.mail))
  }

  const mailReceivers = (await transaction.legacy.database.user.findAll({
    where: { familyId, type: 'parent' },
    attributes: ['mail'],
    transaction: transaction.legacy.transaction
  })).map((item) => item.mail).filter((item) => item !== '')

  await deleteFamilyAndNotify({ transaction, familyId, websocket, mailReceivers })
}

async function removeFromFamily ({ transaction, websocket, familyId, adult, what }: {
  transaction: SimpleDatabaseTransaction
  websocket: WebsocketApi
  familyId: string
  adult: UserModel
  what: string
}): Promise<void> {
  await assertNotLastAdmin({ transaction, familyId, adult, what })

  try {
    await assertParentRemovable({ transaction, familyId, user: adult })
  } catch (ex) {
    if (ex instanceof ApplyActionException) throw new Conflict(ex.staticMessage)
    throw ex
  }

  const { devicesChanged } = await removeUserFromFamily({ transaction, familyId, user: adult })

  await announceUserListChange({ transaction, websocket, familyId, devicesChanged, level: 2 })
}

async function requireAdult ({ transaction, familyId, userId }: {
  transaction: SimpleDatabaseTransaction
  familyId: string
  userId: string
}): Promise<UserModel> {
  const adult = await transaction.legacy.database.user.findOne({
    where: { familyId, userId, type: 'parent' },
    transaction: transaction.legacy.transaction
  })

  if (!adult) throw new Conflict('no adult ' + userId + ' in this family')

  return adult
}

async function assertNotLastAdmin ({ transaction, familyId, adult, what }: {
  transaction: SimpleDatabaseTransaction
  familyId: string
  adult: UserModel
  what: string
}): Promise<void> {
  if (adult.adultRole !== 'admin') return

  const admins = await transaction.legacy.database.user.count({
    where: { familyId, type: 'parent', adultRole: 'admin' },
    transaction: transaction.legacy.transaction
  })

  if (admins <= 1) {
    throw new Conflict('the last admin can not ' + what + ' — delete the family or make another adult an admin first')
  }
}

async function announceUserListChange ({ transaction, websocket, familyId, devicesChanged, level }: {
  transaction: SimpleDatabaseTransaction
  websocket: WebsocketApi
  familyId: string
  devicesChanged: boolean
  level: 1 | 2
}): Promise<void> {
  await transaction.legacy.database.family.update({
    userListVersion: generateVersionId(),
    ...(devicesChanged ? { deviceListVersion: generateVersionId() } : {})
  }, {
    where: { familyId },
    transaction: transaction.legacy.transaction
  })

  await notifyClientsAboutChangesDelayed({
    familyId,
    sourceDeviceId: null,
    generalLevel: level,
    targetedLevels: new Map(),
    transaction,
    websocket
  })
}
