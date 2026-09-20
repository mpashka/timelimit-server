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

import { Unauthorized } from 'http-errors'
import { config } from '../../config'
import { SimpleDatabaseTransaction } from '../../database/simple'
import { parseSessionTokenFromWireFormat } from '../parent-session/token'

// @tag:parent-console
// Предъявитель — тот, кто предъявился в /sync/*: устройство семьи или сессия родителя.
// Это единственное место, где они различаются; дальше по протоколу subjectId занимает позицию
// deviceId — подпись действия, адресация ключей, оповещение по websocket.
export interface Subject {
  kind: 'device' | 'parentSession'
  familyId: string
  subjectId: string
  // родитель, под которым вошли; у устройства null — там текущего пользователя проверяет integrity
  parentUserId: string | null
  nextSequenceNumber: number
  saveNextSequenceNumber: (nextSequenceNumber: number) => Promise<void>
  reportUsage: () => Promise<void>
}

export async function resolveSubject ({ transaction, authToken }: {
  transaction: SimpleDatabaseTransaction
  authToken: string
}): Promise<Subject> {
  const sessionToken = parseSessionTokenFromWireFormat(authToken)

  return sessionToken === null
    ? resolveDevice({ transaction, deviceAuthToken: authToken })
    : resolveParentSession({ transaction, sessionToken })
}

async function resolveDevice ({ transaction, deviceAuthToken }: {
  transaction: SimpleDatabaseTransaction
  deviceAuthToken: string
}): Promise<Subject> {
  const deviceEntryUnsafe = await transaction.legacy.database.device.findOne({
    where: { deviceAuthToken },
    attributes: ['familyId', 'deviceId', 'nextSequenceNumber', 'lastConnectivity'],
    transaction: transaction.legacy.transaction
  })

  if (!deviceEntryUnsafe) {
    throw new Unauthorized('no device for this auth token')
  }

  const { familyId, deviceId, nextSequenceNumber, lastConnectivity } = deviceEntryUnsafe

  return {
    kind: 'device',
    familyId,
    subjectId: deviceId,
    parentUserId: null,
    nextSequenceNumber,
    saveNextSequenceNumber: async (value) => {
      await transaction.legacy.database.device.update({
        nextSequenceNumber: value
      }, {
        where: { familyId, deviceId },
        transaction: transaction.legacy.transaction
      })
    },
    reportUsage: async () => {
      const now = getRoundedTimestampForLastConnectivity()

      if (parseInt(lastConnectivity, 10) !== now) {
        await transaction.legacy.database.device.update({
          lastConnectivity: now.toString(10)
        }, {
          where: { familyId, deviceId },
          transaction: transaction.legacy.transaction
        })
      }
    }
  }
}

async function resolveParentSession ({ transaction, sessionToken }: {
  transaction: SimpleDatabaseTransaction
  sessionToken: string
}): Promise<Subject> {
  const sessionEntryUnsafe = await transaction.legacy.database.parentSession.findOne({
    where: { sessionToken },
    attributes: ['familyId', 'sessionId', 'userId', 'nextSequenceNumber', 'lastUsedAt'],
    transaction: transaction.legacy.transaction
  })

  if (!sessionEntryUnsafe) {
    throw new Unauthorized('no parent session for this token')
  }

  const { familyId, sessionId, userId, nextSequenceNumber, lastUsedAt } = sessionEntryUnsafe

  if (parseInt(lastUsedAt, 10) + config.parentSessionMaxIdleMs < Date.now()) {
    await transaction.legacy.database.parentSession.destroy({
      where: { sessionToken },
      transaction: transaction.legacy.transaction
    })

    throw new Unauthorized(
      'the parent session was not used for more than ' +
      (config.parentSessionMaxIdleMs / (1000 * 60 * 60 * 24)) +
      ' days (PARENT_SESSION_MAX_IDLE_DAYS) and was deleted; sign in again'
    )
  }

  return {
    kind: 'parentSession',
    familyId,
    subjectId: sessionId,
    parentUserId: userId,
    nextSequenceNumber,
    saveNextSequenceNumber: async (value) => {
      await transaction.legacy.database.parentSession.update({
        nextSequenceNumber: value
      }, {
        where: { sessionToken },
        transaction: transaction.legacy.transaction
      })
    },
    reportUsage: async () => {
      await transaction.legacy.database.parentSession.update({
        lastUsedAt: Date.now().toString(10)
      }, {
        where: { sessionToken },
        transaction: transaction.legacy.transaction
      })
    }
  }
}

const getRoundedTimestampForLastConnectivity = () => {
  const now = Date.now()

  return now - (now % (1000 * 60 * 60 * 12 /* 12 hours */))
}
