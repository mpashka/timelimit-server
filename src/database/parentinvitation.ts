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

import * as Sequelize from 'sequelize'
import { AdultRole, adultRoles } from '../model/adultrole'
import { createEnumColumn, familyIdColumn, idWithinFamilyColumn, timestampColumn } from './columns'
import { SequelizeAttributes } from './types'

// @tag:parent-invitation
// Приглашение родителя по почте: в семье его нет, пока он сам не согласится при входе.
// Адрес — первичный ключ: вход по почте находит семью по адресу во всей базе, и приглашение
// в две семьи сразу сделало бы этот поиск неоднозначным.
export interface ParentInvitationAttributes {
  mail: string
  familyId: string
  invitedByUserId: string
  createdAt: string
  role: AdultRole // @tag:adult-role
  confirmByCode: boolean // @tag:family-join-link
  // выдан приглашённому и ждёт, пока админ его введёт
  confirmCode: string | null // @tag:family-join-link
}

export type ParentInvitationModel = Sequelize.Model<ParentInvitationAttributes> & ParentInvitationAttributes
export type ParentInvitationModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): ParentInvitationModel;
}

export const attributes: SequelizeAttributes<ParentInvitationAttributes> = {
  mail: {
    type: Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  familyId: { ...familyIdColumn },
  invitedByUserId: { ...idWithinFamilyColumn },
  createdAt: { ...timestampColumn },
  // @tag:adult-role
  role: {
    ...createEnumColumn([...adultRoles]),
    defaultValue: 'manager'
  },
  // @tag:family-join-link
  confirmByCode: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
  confirmCode: { type: Sequelize.STRING(4), allowNull: true, defaultValue: null }
}

export const createParentInvitationModel = (sequelize: Sequelize.Sequelize): ParentInvitationModelStatic => sequelize.define('ParentInvitation', attributes) as ParentInvitationModelStatic
