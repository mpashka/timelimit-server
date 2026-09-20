/*
 * server component for the TimeLimit App
 * Copyright (C) 2019 - 2026 Jonas Lochmann
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

import { Conflict, Unauthorized } from 'http-errors'
import { SimpleDatabase, SimpleDatabaseTransaction } from '../../database/simple'
import { generateAuthToken, generateIdWithinFamily } from '../../util/token'
import { requireMailAndLocaleByAuthToken } from '../authentication'
import { parseSessionTokenFromWireFormat, sessionTokenToWireFormat } from './token'

// @tag:parent-console
export const signInParentSession = async ({ database, mailAuthToken }: {
  database: SimpleDatabase
  mailAuthToken: string
  // no transaction here because this is directly called from an API endpoint
}): Promise<{ sessionToken: string; sessionId: string; familyId: string; userId: string }> => {
  return database.transaction(async (transaction) => {
    const mailInfo = await requireMailAndLocaleByAuthToken({ mailAuthToken, transaction, invalidate: true })

    const userEntryUnsafe = await transaction.legacy.database.user.findOne({
      where: {
        mail: mailInfo.mail,
        type: 'parent'
      },
      attributes: ['familyId', 'userId'],
      transaction: transaction.legacy.transaction
    })

    if (!userEntryUnsafe) {
      throw new Conflict()
    }

    const familyId = userEntryUnsafe.familyId
    const userId = userEntryUnsafe.userId
    const sessionToken = generateAuthToken()
    const sessionId = await generateFreeSubjectId({ familyId, transaction })
    const now = Date.now().toString(10)

    await transaction.legacy.database.parentSession.create({
      sessionToken,
      familyId,
      sessionId,
      userId,
      createdAt: now,
      lastUsedAt: now,
      nextSequenceNumber: 0
    }, { transaction: transaction.legacy.transaction })

    return {
      sessionToken: sessionTokenToWireFormat(sessionToken),
      sessionId,
      familyId,
      userId
    }
  })
}

// @tag:parent-console
export const revokeParentSession = async ({ database, sessionToken }: {
  database: SimpleDatabase
  sessionToken: string
}): Promise<void> => {
  const storedToken = parseSessionTokenFromWireFormat(sessionToken)

  if (storedToken === null) {
    throw new Unauthorized('this is not a parent session token')
  }

  return database.transaction(async (transaction) => {
    const removed = await transaction.legacy.database.parentSession.destroy({
      where: { sessionToken: storedToken },
      transaction: transaction.legacy.transaction
    })

    if (removed === 0) {
      throw new Unauthorized('no session for this token')
    }
  })
}

// Идентификатор сессии занимает позицию deviceId в /sync/*, поэтому он обязан быть уникален
// не только среди сессий, но и среди устройств семьи: иначе ключ или оповещение уедет не туда.
async function generateFreeSubjectId ({ familyId, transaction }: {
  familyId: string
  transaction: SimpleDatabaseTransaction
}): Promise<string> {
  for (let attempt = 0; attempt < 10; attempt++) {
    const candidate = generateIdWithinFamily()

    const usedByDevice = await transaction.legacy.database.device.count({
      where: { familyId, deviceId: candidate },
      transaction: transaction.legacy.transaction
    })

    const usedBySession = await transaction.legacy.database.parentSession.count({
      where: { familyId, sessionId: candidate },
      transaction: transaction.legacy.transaction
    })

    if (usedByDevice === 0 && usedBySession === 0) return candidate
  }

  throw new Conflict('could not find a free subject id within the family')
}
