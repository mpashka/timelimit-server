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
import { RegisterChildDeviceRequest } from '../../api/schema'
import { SimpleDatabase, SimpleDatabaseTransaction } from '../../database/simple'
import { generateAuthToken, generateVersionId } from '../../util/token'
import { WebsocketApi } from '../../websocket'
import { prepareDeviceEntry } from '../device/prepare-device-entry'
import { notifyClientsAboutChangesDelayed } from '../websocket'
import { generateServerDataStatus } from '../sync/get-server-data-status'
import { EventHandler } from '../../monitoring/eventhandler'
import { ServerDataStatus } from '../../object/serverdatastatus'
import { createEmptyClientDataStatus } from '../../object/clientdatastatus'

export const addChildDevice = async ({ database, eventHandler, websocket, request }: {
  database: SimpleDatabase
  eventHandler: EventHandler
  websocket: WebsocketApi
  request: RegisterChildDeviceRequest
  // no transaction here because this is directly called from an API endpoint
}): Promise<{
  deviceId: string
  deviceAuthToken: string
  data: ServerDataStatus
}> => {
  return database.transaction(async (transaction) => {
    const entry = await transaction.legacy.database.addDeviceToken.findOne({
      where: {
        token: request.registerToken.toLowerCase()
      },
      transaction: transaction.legacy.transaction
    })

    if (!entry) {
      throw new Unauthorized()
    }

    // @tag:family-join-link
    if (entry.confirmCode !== null && entry.confirmCode !== undefined) {
      throw new Conflict('waiting for the administrator to enter the code shown on this device')
    }

    await entry.destroy({ transaction: transaction.legacy.transaction })

    const { deviceId, familyId } = entry
    const deviceAuthToken = generateAuthToken()
    const userId = await existingChildId({ transaction, familyId, userId: entry.userId })

    await transaction.legacy.database.device.create(prepareDeviceEntry({
      familyId,
      deviceId,
      deviceAuthToken,
      deviceName: request.deviceName,
      newDeviceInfo: request.childDevice,
      userId, // @tag:family-join-google
      isUserKeptSignedIn: false
    }), { transaction: transaction.legacy.transaction })

    await transaction.legacy.database.family.update({
      deviceListVersion: generateVersionId()
    }, {
      where: {
        familyId
      },
      transaction: transaction.legacy.transaction
    })

    await notifyClientsAboutChangesDelayed({
      familyId,
      websocket,
      transaction,
      generalLevel: 1,
      targetedLevels: new Map(),
      sourceDeviceId: deviceId
    })

    const data = await generateServerDataStatus({
      transaction,
      viewerParentUserId: null,
      clientStatus: createEmptyClientDataStatus({ clientLevel: request.clientLevel || null }),
      familyId: entry.familyId,
      deviceId,
      eventHandler
    })

    return {
      deviceId,
      deviceAuthToken,
      data
    }
  })
}

// @tag:family-join-google
// Ребёнка могли удалить, пока код ждал устройство: тогда устройство заводится без пользователя.
async function existingChildId ({ transaction, familyId, userId }: {
  transaction: SimpleDatabaseTransaction
  familyId: string
  userId: string | null
}): Promise<string> {
  if (!userId) return ''

  const child = await transaction.legacy.database.user.findOne({
    where: { familyId, userId, type: 'child' },
    attributes: ['userId'],
    transaction: transaction.legacy.transaction
  })

  return child ? userId : ''
}
