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
import * as Sequelize from 'sequelize'
import { familyIdColumn, idWithinFamilyColumn, optionalIdWithinFamilyColumn, timestampColumn } from './columns'
import { SequelizeAttributes } from './types'

// @tag:child-request
export interface ChildRequestAttributes {
  familyId: string
  requestId: string
  userId: string
  deviceId: string
  packageName: string
  categoryId: string
  word: string
  createdAt: string
  answerKind: string | null
  answerUntil: string
  answerWord: string
  answerParentUserId: string
  answeredAt: string
}

export type ChildRequestModel = Sequelize.Model<ChildRequestAttributes> & ChildRequestAttributes
export type ChildRequestModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): ChildRequestModel;
}

export const attributes: SequelizeAttributes<ChildRequestAttributes> = {
  familyId: { ...familyIdColumn, primaryKey: true },
  requestId: { ...idWithinFamilyColumn, primaryKey: true },
  userId: { ...idWithinFamilyColumn },
  deviceId: { ...idWithinFamilyColumn },
  packageName: { type: Sequelize.STRING(256), allowNull: false },
  categoryId: { ...optionalIdWithinFamilyColumn },
  word: { type: Sequelize.STRING(100), allowNull: false },
  createdAt: { ...timestampColumn },
  answerKind: { type: Sequelize.STRING(8), allowNull: true, defaultValue: null },
  answerUntil: { ...timestampColumn, defaultValue: '0' },
  answerWord: { type: Sequelize.STRING(100), allowNull: false, defaultValue: '' },
  answerParentUserId: { ...optionalIdWithinFamilyColumn, defaultValue: '' },
  answeredAt: { ...timestampColumn, defaultValue: '0' }
}

export const createChildRequestModel = (sequelize: Sequelize.Sequelize): ChildRequestModelStatic => sequelize.define('ChildRequest', attributes) as ChildRequestModelStatic
