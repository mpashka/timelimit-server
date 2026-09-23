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
import { generateParentCodeSecret } from '../../../model/parentcode'
import { attributesVersion5 as familyAttributes } from '../../family'

// @tag:child-request @tag:app-allowance @tag:parent-code
export async function up (queryInterface: QueryInterface, sequelize: Sequelize) {
  await sequelize.transaction({
    type: Transaction.TYPES.EXCLUSIVE
  }, async (transaction) => {
    const dialect = sequelize.getDialect()
    const q = (name: string) => dialect === 'mysql' || dialect === 'mariadb' ? '`' + name + '`' : '"' + name + '"'
    const bigint = dialect === 'postgres' || dialect === 'mysql' || dialect === 'mariadb' ? 'BIGINT' : 'LONG'
    const userForeignKey = 'FOREIGN KEY (' + q('familyId') + ', ' + q('userId') + ') REFERENCES ' + q('Users') +
      ' (' + q('familyId') + ', ' + q('userId') + ') ON UPDATE CASCADE ON DELETE CASCADE'

    await sequelize.query(
      'CREATE TABLE ' + q('ChildRequests') + ' (' +
      q('familyId') + ' VARCHAR(10) NOT NULL,' +
      q('requestId') + ' VARCHAR(6) NOT NULL,' +
      q('userId') + ' VARCHAR(6) NOT NULL,' +
      q('deviceId') + ' VARCHAR(6) NOT NULL,' +
      q('packageName') + ' VARCHAR(256) NOT NULL,' +
      q('categoryId') + ' VARCHAR(6) NOT NULL,' +
      q('word') + ' VARCHAR(100) NOT NULL,' +
      q('createdAt') + ' ' + bigint + ' NOT NULL,' +
      q('answerKind') + ' VARCHAR(8) NULL,' +
      q('answerUntil') + ' ' + bigint + ' NOT NULL DEFAULT 0,' +
      q('answerWord') + ' VARCHAR(100) NOT NULL DEFAULT \'\',' +
      q('answerParentUserId') + ' VARCHAR(6) NOT NULL DEFAULT \'\',' +
      q('answeredAt') + ' ' + bigint + ' NOT NULL DEFAULT 0,' +
      'PRIMARY KEY (' + q('familyId') + ', ' + q('requestId') + '),' +
      userForeignKey + ')',
      { transaction }
    )

    await queryInterface.addIndex('ChildRequests', ['familyId', 'userId', 'packageName'], { transaction })

    await sequelize.query(
      'CREATE TABLE ' + q('AppAllowances') + ' (' +
      q('familyId') + ' VARCHAR(10) NOT NULL,' +
      q('userId') + ' VARCHAR(6) NOT NULL,' +
      q('packageName') + ' VARCHAR(256) NOT NULL,' +
      q('until') + ' ' + bigint + ' NOT NULL,' +
      'PRIMARY KEY (' + q('familyId') + ', ' + q('userId') + ', ' + q('packageName') + '),' +
      userForeignKey + ')',
      { transaction }
    )

    await queryInterface.addColumn('Families', 'parentCodeSecret', { ...familyAttributes.parentCodeSecret }, { transaction })

    const [families] = await sequelize.query('SELECT ' + q('familyId') + ' FROM ' + q('Families'), { transaction })

    for (const family of families as Array<{ familyId: string }>) {
      await sequelize.query(
        'UPDATE ' + q('Families') + ' SET ' + q('parentCodeSecret') + ' = :secret WHERE ' + q('familyId') + ' = :familyId',
        { transaction, replacements: { secret: generateParentCodeSecret(), familyId: family.familyId } }
      )
    }
  })
}

export async function down (queryInterface: QueryInterface, sequelize: Sequelize) {
  await sequelize.transaction({
    type: Transaction.TYPES.EXCLUSIVE
  }, async (transaction) => {
    await queryInterface.removeColumn('Families', 'parentCodeSecret', { transaction })
    await queryInterface.dropTable('AppAllowances', { transaction })
    await queryInterface.dropTable('ChildRequests', { transaction })
  })
}
