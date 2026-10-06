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
import { attributesVersion3 as addDeviceTokenAttributes } from '../../adddevicetoken'
import { attributes as invitationAttributes } from '../../parentinvitation'
import { attributesVersion10 as userAttributes } from '../../user'

// @tag:family-join-link
export async function up (queryInterface: QueryInterface, sequelize: Sequelize) {
  await sequelize.transaction({
    type: Transaction.TYPES.EXCLUSIVE
  }, async (transaction) => {
    await queryInterface.addColumn('Users', 'childMailConfirmByCode', { ...userAttributes.childMailConfirmByCode }, { transaction })
    await queryInterface.addColumn('AddDeviceTokens', 'confirmCode', { ...addDeviceTokenAttributes.confirmCode }, { transaction })
    await queryInterface.addColumn('ParentInvitations', 'confirmByCode', { ...invitationAttributes.confirmByCode }, { transaction })
    await queryInterface.addColumn('ParentInvitations', 'confirmCode', { ...invitationAttributes.confirmCode }, { transaction })
  })
}

export async function down (queryInterface: QueryInterface, sequelize: Sequelize) {
  await sequelize.transaction({
    type: Transaction.TYPES.EXCLUSIVE
  }, async (transaction) => {
    await queryInterface.removeColumn('ParentInvitations', 'confirmCode', { transaction })
    await queryInterface.removeColumn('ParentInvitations', 'confirmByCode', { transaction })
    await queryInterface.removeColumn('AddDeviceTokens', 'confirmCode', { transaction })
    await queryInterface.removeColumn('Users', 'childMailConfirmByCode', { transaction })
  })
}
