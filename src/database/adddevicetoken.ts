/*
 * server component for the TimeLimit App
 * Copyright (C) 2019 Jonas Lochmann
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
import { familyIdColumn, idWithinFamilyColumn, labelColumn, optionalIdWithinFamilyColumn, timestampColumn } from './columns'
import { SequelizeAttributes } from './types'

export interface AddDeviceTokenAttributesVersion1 {
  token: string
  familyId: string
  deviceId: string
  createdAt: string
}

// @tag:family-join-google
export interface AddDeviceTokenAttributesVersion2 {
  // null = устройство заводится без пользователя, как раньше
  userId: string | null
}

export type AddDeviceTokenAttributes = AddDeviceTokenAttributesVersion1 & AddDeviceTokenAttributesVersion2

export type AddDeviceTokenModel = Sequelize.Model<AddDeviceTokenAttributes> & AddDeviceTokenAttributes
export type AddDeviceTokenModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): AddDeviceTokenModel;
}

export const attributesVersion1: SequelizeAttributes<AddDeviceTokenAttributesVersion1> = {
  token: {
    ...labelColumn,
    primaryKey: true
  },
  familyId: { ...familyIdColumn },
  deviceId: { ...idWithinFamilyColumn },
  createdAt: { ...timestampColumn }
}

// @tag:family-join-google
export const attributesVersion2: SequelizeAttributes<AddDeviceTokenAttributesVersion2> = {
  userId: { ...optionalIdWithinFamilyColumn, allowNull: true, defaultValue: null }
}

export const attributes: SequelizeAttributes<AddDeviceTokenAttributes> = {
  ...attributesVersion1,
  ...attributesVersion2
}

export const createAddDeviceTokenModel = (sequelize: Sequelize.Sequelize): AddDeviceTokenModelStatic => sequelize.define('AddDeviceToken', attributes) as AddDeviceTokenModelStatic
