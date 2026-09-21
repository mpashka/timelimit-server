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

import { QueryInterface, QueryTypes, Sequelize, Transaction } from 'sequelize'

// @tag:parent-console
// KeyRequests.senderDeviceId и DeviceDhKeys.deviceId хранят не устройство, а предъявителя, — и
// ссылались на Devices, поэтому сессия родителя не могла ни послать запрос ключа, ни получить
// ключ Диффи — Хеллмана: база отвергала строку раньше, чем до неё доходило приложение.
// Уборку этих строк теперь делает код: remove-device, delete-families и
// function/parent-session/cleanup. Под sqlite внешние ключи не включаются, там делать нечего.
const constraints = [
  { table: 'KeyRequests', column: 'senderDeviceId', name: 'KeyRequests_familyId_senderDeviceId_fkey' },
  { table: 'DeviceDhKeys', column: 'deviceId', name: 'DeviceDhKeys_familyId_deviceId_fkey' }
]

export async function up (queryInterface: QueryInterface, sequelize: Sequelize) {
  await sequelize.transaction({
    type: Transaction.TYPES.EXCLUSIVE
  }, async (transaction) => {
    const dialect = sequelize.getDialect()

    for (const constraint of constraints) {
      if (dialect === 'postgres') {
        await sequelize.query(
          'ALTER TABLE "' + constraint.table + '" DROP CONSTRAINT IF EXISTS "' + constraint.name + '"',
          { transaction }
        )
      } else if (dialect === 'mysql' || dialect === 'mariadb') {
        const rows: Array<{ CONSTRAINT_NAME: string }> = await sequelize.query(
          'SELECT DISTINCT CONSTRAINT_NAME FROM information_schema.KEY_COLUMN_USAGE ' +
          'WHERE TABLE_SCHEMA = DATABASE() AND TABLE_NAME = \'' + constraint.table + '\' ' +
          'AND COLUMN_NAME = \'' + constraint.column + '\' AND REFERENCED_TABLE_NAME = \'Devices\'',
          { transaction, type: QueryTypes.SELECT }
        )

        for (const row of rows) {
          await sequelize.query(
            'ALTER TABLE `' + constraint.table + '` DROP FOREIGN KEY `' + row.CONSTRAINT_NAME + '`',
            { transaction }
          )
        }
      }
    }
  })
}

// Восстановить ограничения можно только там, где строк предъявителей-сессий уже нет.
export async function down (queryInterface: QueryInterface, sequelize: Sequelize) {
  await sequelize.transaction({
    type: Transaction.TYPES.EXCLUSIVE
  }, async (transaction) => {
    const dialect = sequelize.getDialect()

    for (const constraint of constraints) {
      if (dialect === 'postgres') {
        await sequelize.query(
          'ALTER TABLE "' + constraint.table + '" ADD CONSTRAINT "' + constraint.name + '" ' +
          'FOREIGN KEY ("familyId", "' + constraint.column + '") REFERENCES "Devices" ("familyId", "deviceId") ' +
          'ON UPDATE CASCADE ON DELETE CASCADE',
          { transaction }
        )
      } else if (dialect === 'mysql' || dialect === 'mariadb') {
        await sequelize.query(
          'ALTER TABLE `' + constraint.table + '` ADD CONSTRAINT `' + constraint.name + '` ' +
          'FOREIGN KEY (`familyId`, `' + constraint.column + '`) REFERENCES `Devices` (`familyId`, `deviceId`) ' +
          'ON UPDATE CASCADE ON DELETE CASCADE',
          { transaction }
        )
      }
    }
  })
}
