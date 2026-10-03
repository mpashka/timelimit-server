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
import { attributes as parentInvitationAttributes } from '../../parentinvitation'
import { attributesVersion8 as userAttributes } from '../../user'

// @tag:adult-role
export async function up (queryInterface: QueryInterface, sequelize: Sequelize) {
  await sequelize.transaction({
    type: Transaction.TYPES.EXCLUSIVE
  }, async (transaction) => {
    await queryInterface.addColumn('Users', 'adultRole', { ...userAttributes.adultRole }, { transaction })
    await queryInterface.addColumn('ParentInvitations', 'role', { ...parentInvitationAttributes.role }, { transaction })
  })
}

export async function down (queryInterface: QueryInterface, sequelize: Sequelize) {
  await sequelize.transaction({
    type: Transaction.TYPES.EXCLUSIVE
  }, async (transaction) => {
    await queryInterface.removeColumn('ParentInvitations', 'role', { transaction })
    await queryInterface.removeColumn('Users', 'adultRole', { transaction })
  })
}
