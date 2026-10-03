/*
 * server component for the TimeLimit App
 * Copyright (C) 2026 Jonas Lochmann
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

import { Conflict } from 'http-errors'
import { PlaintextParentPassword, assertPlaintextParentPasswordValid } from '../../api/schema'
import { SimpleDatabase, SimpleDatabaseTransaction } from '../../database/simple'
import { maxMailNotificationFlags } from '../../database/user'
import { sanitizeMailAddress } from '../../util/mail'
import { generateIdWithinFamily, generateVersionId } from '../../util/token'
import { WebsocketApi } from '../../websocket'
import { requireMailAndLocaleByAuthToken } from '../authentication'
import { ParentSessionInfo, createSession } from '../parent-session'
import { notifyClientsAboutChangesDelayed } from '../websocket'

// @tag:parent-invitation
export interface ParentInvitationInfo {
  mail: string
  createdAt: number
}

// @tag:parent-invitation
export interface ReceivedParentInvitation {
  inviterName: string
  inviterMail: string
}

// @tag:parent-invitation
export async function inviteParent ({ transaction, familyId, invitedByUserId, mail: rawMail }: {
  transaction: SimpleDatabaseTransaction
  familyId: string
  invitedByUserId: string
  mail: string
}): Promise<ParentInvitationInfo> {
  const mail = invitationAddressOf(rawMail)

  if (!mail) {
    throw new Conflict('not a mail address: ' + rawMail)
  }

  const existingUser = await transaction.legacy.database.user.findOne({
    where: { mail },
    attributes: ['familyId'],
    transaction: transaction.legacy.transaction
  })

  if (existingUser) {
    throw new Conflict(existingUser.familyId === familyId
      ? mail + ' is already a parent of this family'
      : mail + ' already belongs to another family')
  }

  const existingInvitation = await transaction.legacy.database.parentInvitation.findOne({
    where: { mail },
    transaction: transaction.legacy.transaction
  })

  if (existingInvitation) {
    if (existingInvitation.familyId !== familyId) {
      throw new Conflict(mail + ' is already invited into another family')
    }

    return { mail, createdAt: parseInt(existingInvitation.createdAt, 10) }
  }

  const createdAt = Date.now()

  await transaction.legacy.database.parentInvitation.create({
    mail,
    familyId,
    invitedByUserId,
    createdAt: createdAt.toString(10)
  }, { transaction: transaction.legacy.transaction })

  return { mail, createdAt }
}

// @tag:parent-invitation
export async function listParentInvitations ({ transaction, familyId }: {
  transaction: SimpleDatabaseTransaction
  familyId: string
}): Promise<Array<ParentInvitationInfo>> {
  const rows = await transaction.legacy.database.parentInvitation.findAll({
    where: { familyId },
    order: [['createdAt', 'ASC']],
    transaction: transaction.legacy.transaction
  })

  return rows.map((row) => ({ mail: row.mail, createdAt: parseInt(row.createdAt, 10) }))
}

// @tag:parent-invitation
export async function revokeParentInvitation ({ transaction, familyId, mail }: {
  transaction: SimpleDatabaseTransaction
  familyId: string
  mail: string
}): Promise<void> {
  const removed = await transaction.legacy.database.parentInvitation.destroy({
    where: { familyId, mail: invitationAddressOf(mail) ?? mail },
    transaction: transaction.legacy.transaction
  })

  if (removed === 0) {
    throw new Conflict('no invitation for ' + mail + ' in this family')
  }
}

// @tag:parent-invitation
export async function findReceivedParentInvitation ({ transaction, mail }: {
  transaction: SimpleDatabaseTransaction
  mail: string
}): Promise<ReceivedParentInvitation | null> {
  const invitation = await transaction.legacy.database.parentInvitation.findOne({
    where: { mail: mail.toLowerCase() },
    transaction: transaction.legacy.transaction
  })

  if (!invitation) return null

  const inviter = await transaction.legacy.database.user.findOne({
    where: { familyId: invitation.familyId, userId: invitation.invitedByUserId },
    attributes: ['name', 'mail'],
    transaction: transaction.legacy.transaction
  })

  return { inviterName: inviter?.name ?? '', inviterMail: inviter?.mail ?? '' }
}

// @tag:parent-invitation
// Приглашённый адрес и адрес родителя уже прошли решение «пускать»: один — от родителя семьи,
// другой — когда-то при создании семьи. MAIL_WHITELIST сервера держит только первых родителей.
export async function isMailAddressKnownToServer ({ transaction, mail }: {
  transaction: SimpleDatabaseTransaction
  mail: string
}): Promise<boolean> {
  const user = await transaction.legacy.database.user.findOne({
    where: { mail, type: 'parent' },
    attributes: ['userId'],
    transaction: transaction.legacy.transaction
  })

  if (user) return true

  const invitation = await transaction.legacy.database.parentInvitation.findOne({
    where: { mail: mail.toLowerCase() },
    attributes: ['mail'],
    transaction: transaction.legacy.transaction
  })

  return invitation !== null
}

// @tag:parent-invitation
// Пароль необязателен: в средство управления родитель входит почтой или Google, а пароль нужен
// только режиму родителя на устройстве. Задать его позже — /parent/recover-parent-password.
export const acceptParentInvitation = async ({ database, websocket, mailAuthToken, parentName, timeZone, password }: {
  database: SimpleDatabase
  websocket: WebsocketApi
  mailAuthToken: string
  parentName: string
  timeZone: string
  password: PlaintextParentPassword | null
  // no transaction here because this is directly called from an API endpoint
}): Promise<ParentSessionInfo> => {
  if (password) assertPlaintextParentPasswordValid(password)

  return database.transaction(async (transaction) => {
    const { mail } = await requireMailAndLocaleByAuthToken({ mailAuthToken, transaction, invalidate: true })

    const invitation = await transaction.legacy.database.parentInvitation.findOne({
      where: { mail: mail.toLowerCase() },
      transaction: transaction.legacy.transaction
    })

    if (!invitation) {
      throw new Conflict('no invitation for ' + mail + ': it was revoked or already used')
    }

    const { familyId } = invitation
    const userId = await generateFreeUserId({ transaction, familyId })

    await transaction.legacy.database.user.create({
      familyId,
      userId,
      name: parentName,
      passwordHash: password ? password.hash : '',
      secondPasswordHash: password ? password.secondHash : '',
      secondPasswordSalt: password ? password.secondSalt : '',
      type: 'parent',
      mail,
      timeZone,
      disableTimelimitsUntil: '0',
      currentDevice: '',
      categoryForNotAssignedApps: '',
      relaxPrimaryDeviceRule: false,
      mailNotificationFlags: maxMailNotificationFlags,
      blockedTimes: '',
      flags: '0'
    }, { transaction: transaction.legacy.transaction })

    await invitation.destroy({ transaction: transaction.legacy.transaction })

    await transaction.legacy.database.family.update({
      userListVersion: generateVersionId()
    }, {
      where: { familyId },
      transaction: transaction.legacy.transaction
    })

    await notifyClientsAboutChangesDelayed({
      familyId,
      sourceDeviceId: null,
      generalLevel: 1,
      targetedLevels: new Map(),
      transaction,
      websocket
    })

    return createSession({ transaction, familyId, userId })
  })
}

// @tag:parent-invitation
export const declineParentInvitation = async ({ database, mailAuthToken }: {
  database: SimpleDatabase
  mailAuthToken: string
}): Promise<void> => {
  await database.transaction(async (transaction) => {
    const { mail } = await requireMailAndLocaleByAuthToken({ mailAuthToken, transaction, invalidate: true })

    await transaction.legacy.database.parentInvitation.destroy({
      where: { mail: mail.toLowerCase() },
      transaction: transaction.legacy.transaction
    })
  })
}

// Адрес из Google приходит строчными, а родитель мог набрать его как угодно.
function invitationAddressOf (input: string): string | null {
  return sanitizeMailAddress(input)?.toLowerCase() ?? null
}

async function generateFreeUserId ({ transaction, familyId }: {
  transaction: SimpleDatabaseTransaction
  familyId: string
}): Promise<string> {
  for (;;) {
    const userId = generateIdWithinFamily()

    const taken = await transaction.legacy.database.user.count({
      where: { familyId, userId },
      transaction: transaction.legacy.transaction
    })

    if (taken === 0) return userId
  }
}
