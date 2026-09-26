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
import { QueryInterface, Sequelize, Transaction } from 'sequelize'

// @tag:app-icon
export async function up (queryInterface: QueryInterface, sequelize: Sequelize) {
  await sequelize.transaction({
    type: Transaction.TYPES.EXCLUSIVE
  }, async (transaction) => {
    const dialect = sequelize.getDialect()
    const q = (name: string) => dialect === 'mysql' || dialect === 'mariadb' ? '`' + name + '`' : '"' + name + '"'

    await sequelize.query(
      'CREATE TABLE ' + q('AppIcons') + ' (' +
      q('familyId') + ' VARCHAR(10) NOT NULL,' +
      q('packageName') + ' VARCHAR(256) NOT NULL,' +
      q('title') + ' VARCHAR(100) NOT NULL,' +
      q('icon') + ' TEXT NOT NULL,' +
      'PRIMARY KEY (' + q('familyId') + ', ' + q('packageName') + '),' +
      'FOREIGN KEY (' + q('familyId') + ') REFERENCES ' + q('Families') + ' (' + q('familyId') + ') ON UPDATE CASCADE ON DELETE CASCADE)',
      { transaction }
    )
  })
}

export async function down (queryInterface: QueryInterface, sequelize: Sequelize) {
  await sequelize.transaction({
    type: Transaction.TYPES.EXCLUSIVE
  }, async (transaction) => {
    await queryInterface.dropTable('AppIcons', { transaction })
  })
}
