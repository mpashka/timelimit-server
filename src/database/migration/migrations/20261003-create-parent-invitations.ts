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

import { QueryInterface, Sequelize, Transaction } from 'sequelize'

// @tag:parent-invitation
export async function up (queryInterface: QueryInterface, sequelize: Sequelize) {
  await sequelize.transaction({
    type: Transaction.TYPES.EXCLUSIVE
  }, async (transaction) => {
    const dialect = sequelize.getDialect()
    const q = dialect === 'mysql' || dialect === 'mariadb' ? '`' : '"'
    const timestamp = dialect === 'sqlite' ? 'LONG' : 'BIGINT'

    await sequelize.query(
      `CREATE TABLE ${q}ParentInvitations${q} ` +
      `(${q}mail${q} VARCHAR(255) NOT NULL,` +
      `${q}familyId${q} VARCHAR(10) NOT NULL,` +
      `${q}invitedByUserId${q} VARCHAR(6) NOT NULL,` +
      `${q}createdAt${q} ${timestamp} NOT NULL,` +
      `PRIMARY KEY (${q}mail${q}),` +
      `FOREIGN KEY (${q}familyId${q}, ${q}invitedByUserId${q}) REFERENCES ${q}Users${q} (${q}familyId${q}, ${q}userId${q}) ON UPDATE CASCADE ON DELETE CASCADE` +
      ')',
      { transaction }
    )

    await queryInterface.addIndex('ParentInvitations', ['familyId'], { transaction })
  })
}

export async function down (queryInterface: QueryInterface, sequelize: Sequelize) {
  await sequelize.transaction({
    type: Transaction.TYPES.EXCLUSIVE
  }, async (transaction) => {
    await queryInterface.dropTable('ParentInvitations', { transaction })
  })
}
