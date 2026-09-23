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

// @tag:app-rule @tag:app-usage @tag:new-app
export async function up (queryInterface: QueryInterface, sequelize: Sequelize) {
  await sequelize.transaction({
    type: Transaction.TYPES.EXCLUSIVE
  }, async (transaction) => {
    const dialect = sequelize.getDialect()
    const q = (name: string) => dialect === 'mysql' || dialect === 'mariadb' ? '`' + name + '`' : '"' + name + '"'
    const bigint = dialect === 'postgres' || dialect === 'mysql' || dialect === 'mariadb' ? 'BIGINT' : 'LONG'
    const userForeignKey = 'FOREIGN KEY (' + q('familyId') + ', ' + q('userId') + ') REFERENCES ' + q('Users') +
      ' (' + q('familyId') + ', ' + q('userId') + ') ON UPDATE CASCADE ON DELETE CASCADE'
    const table = (name: string, columns: Array<string>, primaryKey: Array<string>) => sequelize.query(
      'CREATE TABLE ' + q(name) + ' (' + columns.join(',') + ',' +
      'PRIMARY KEY (' + primaryKey.map(q).join(', ') + '),' + userForeignKey + ')',
      { transaction }
    )

    await table('AppRules', [
      q('familyId') + ' VARCHAR(10) NOT NULL',
      q('userId') + ' VARCHAR(6) NOT NULL',
      q('packageName') + ' VARCHAR(256) NOT NULL',
      q('days') + ' INTEGER NOT NULL',
      q('limitMinutes') + ' INTEGER NOT NULL'
    ], ['familyId', 'userId', 'packageName'])

    await table('AppUsages', [
      q('familyId') + ' VARCHAR(10) NOT NULL',
      q('deviceId') + ' VARCHAR(6) NOT NULL',
      q('day') + ' INTEGER NOT NULL',
      q('packageName') + ' VARCHAR(256) NOT NULL',
      q('userId') + ' VARCHAR(6) NOT NULL',
      q('ms') + ' ' + bigint + ' NOT NULL'
    ], ['familyId', 'deviceId', 'day', 'packageName'])

    await queryInterface.addIndex('AppUsages', ['familyId', 'userId', 'day'], { transaction })

    await table('NewApps', [
      q('familyId') + ' VARCHAR(10) NOT NULL',
      q('userId') + ' VARCHAR(6) NOT NULL',
      q('packageName') + ' VARCHAR(256) NOT NULL',
      q('title') + ' VARCHAR(100) NOT NULL',
      q('section') + ' VARCHAR(32) NOT NULL',
      q('installedAt') + ' ' + bigint + ' NOT NULL',
      q('deviceId') + ' VARCHAR(6) NOT NULL'
    ], ['familyId', 'userId', 'packageName'])
  })
}

export async function down (queryInterface: QueryInterface, sequelize: Sequelize) {
  await sequelize.transaction({
    type: Transaction.TYPES.EXCLUSIVE
  }, async (transaction) => {
    await queryInterface.dropTable('NewApps', { transaction })
    await queryInterface.dropTable('AppUsages', { transaction })
    await queryInterface.dropTable('AppRules', { transaction })
  })
}
