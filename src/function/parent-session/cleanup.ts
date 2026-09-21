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

import * as Sequelize from 'sequelize'
import { SimpleDatabaseTransaction } from '../../database/simple'

// @tag:parent-console
// Единственный способ удалить сессию. Строки, адресованные предъявителю, умирали вместе с
// устройством по внешнему ключу; у сессии его нет (миграция
// 20260921-subject-tables-no-longer-require-a-device), поэтому их убирает код: иначе устройства
// семьи предлагают ответить на запрос ключа вечно, а ключ Диффи — Хеллмана живёт без владельца.
export async function deleteParentSessions ({ transaction, where }: {
  transaction: SimpleDatabaseTransaction
  where: Sequelize.WhereOptions
}): Promise<number> {
  const sessions = (await transaction.legacy.database.parentSession.findAll({
    where,
    attributes: ['familyId', 'sessionId'],
    transaction: transaction.legacy.transaction
  })).map((item) => ({ familyId: item.familyId, sessionId: item.sessionId }))

  if (sessions.length === 0) return 0

  for (const session of sessions) {
    await transaction.legacy.database.keyRequest.destroy({
      where: {
        familyId: session.familyId,
        senderDeviceId: session.sessionId
      },
      transaction: transaction.legacy.transaction
    })

    await transaction.legacy.database.deviceDhKey.destroy({
      where: {
        familyId: session.familyId,
        deviceId: session.sessionId
      },
      transaction: transaction.legacy.transaction
    })
  }

  return transaction.legacy.database.parentSession.destroy({
    where,
    transaction: transaction.legacy.transaction
  })
}
