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

import * as Sequelize from 'sequelize'
import { BadRequest, Conflict, NotFound } from 'http-errors'
import { SimpleDatabaseTransaction } from '../../database/simple'
import { UserModel } from '../../database/user'
import { sanitizeMailAddress } from '../../util/mail'
import { generateConfirmCode, generateIdWithinFamily } from '../../util/token'
import { WebsocketApi } from '../../websocket'
import { announceUserListChange } from '../family-adults'

const registerTokenRegex = /^[a-z0-9]{20,64}$/

// @tag:family-join-google
export function sanitizeChildMail (mail: string): string {
  const sanitized = sanitizeMailAddress(mail)

  if (!sanitized) throw new BadRequest('not a mail address')

  return sanitized.toLowerCase()
}

// @tag:family-join-google
export async function setChildMail ({ transaction, websocket, familyId, childUserId, mail, confirmByCode }: {
  transaction: SimpleDatabaseTransaction
  websocket: WebsocketApi
  familyId: string
  childUserId: string
  mail: string | null
  confirmByCode: boolean // @tag:family-join-link
}): Promise<void> {
  const child = await transaction.legacy.database.user.findOne({
    where: { familyId, userId: childUserId, type: 'child' },
    transaction: transaction.legacy.transaction
  })

  if (!child) throw new Conflict('no child ' + childUserId + ' in this family')

  const childMail = mail === null ? null : sanitizeChildMail(mail)

  const childMailConfirmByCode = childMail !== null && confirmByCode

  if (child.childMail === childMail && child.childMailConfirmByCode === childMailConfirmByCode) return

  if (childMail !== null && child.childMail !== childMail) await assertMailFreeForChild({ transaction, mail: childMail })

  await child.update({ childMail, childMailConfirmByCode }, { transaction: transaction.legacy.transaction })

  await announceUserListChange({ transaction, websocket, familyId, devicesChanged: false, level: 1 })
}

// @tag:family-join-google
// Адрес взрослого не отдаётся ребёнку: вход по нему уже ведёт в режим родителя.
async function assertMailFreeForChild ({ transaction, mail }: {
  transaction: SimpleDatabaseTransaction
  mail: string
}): Promise<void> {
  const otherChild = await transaction.legacy.database.user.findOne({
    where: { childMail: mail },
    attributes: ['userId'],
    transaction: transaction.legacy.transaction
  })

  if (otherChild) throw new Conflict('mail is already linked to another child')

  const adult = await transaction.legacy.database.user.findOne({
    where: Sequelize.where(Sequelize.fn('lower', Sequelize.col('mail')), mail),
    attributes: ['userId'],
    transaction: transaction.legacy.transaction
  })

  if (adult) throw new Conflict('mail belongs to an adult')
}

// @tag:family-join-google
export async function findLinkedChild ({ transaction, mail }: {
  transaction: SimpleDatabaseTransaction
  mail: string
}): Promise<{ child: UserModel, familyName: string }> {
  const child = await transaction.legacy.database.user.findOne({
    where: { childMail: mail, type: 'child' },
    transaction: transaction.legacy.transaction
  })

  if (!child) throw new NotFound('mail is not linked to any child')

  const family = await transaction.legacy.database.family.findOne({
    where: { familyId: child.familyId },
    attributes: ['name'],
    transaction: transaction.legacy.transaction
  })

  return { child, familyName: family?.name ?? '' }
}

// @tag:family-join-google
// Возвращает цифры, которые админ должен ввести, прежде чем устройство заведётся, или null.
export async function createJoinRegisterToken ({ transaction, mail, registerToken }: {
  transaction: SimpleDatabaseTransaction
  mail: string
  registerToken: string
}): Promise<{ confirmCode: string | null }> {
  if (!registerTokenRegex.test(registerToken)) throw new BadRequest('registerToken must be 20..64 characters of [a-z0-9]')

  const { child } = await findLinkedChild({ transaction, mail })

  const existing = await transaction.legacy.database.addDeviceToken.findOne({
    where: { token: registerToken },
    attributes: ['token'],
    transaction: transaction.legacy.transaction
  })

  if (existing) throw new Conflict('registerToken is already used')

  const confirmCode = child.childMailConfirmByCode ? generateConfirmCode() : null // @tag:family-join-link

  await transaction.legacy.database.addDeviceToken.create({
    token: registerToken,
    familyId: child.familyId,
    deviceId: generateIdWithinFamily(),
    createdAt: Date.now().toString(),
    userId: child.userId,
    confirmCode
  }, { transaction: transaction.legacy.transaction })

  return { confirmCode }
}

// @tag:family-join-link
export async function confirmDeviceJoin ({ transaction, familyId, code }: {
  transaction: SimpleDatabaseTransaction
  familyId: string
  code: string
}): Promise<void> {
  const [confirmed] = await transaction.legacy.database.addDeviceToken.update({ confirmCode: null }, {
    where: { familyId, confirmCode: code.trim() },
    transaction: transaction.legacy.transaction
  })

  if (confirmed === 0) throw new Conflict('no device waits for this code: check the four digits on the child\'s screen')
}
