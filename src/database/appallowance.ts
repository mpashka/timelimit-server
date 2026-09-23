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
import { familyIdColumn, idWithinFamilyColumn, timestampColumn } from './columns'
import { SequelizeAttributes } from './types'

// @tag:app-allowance
export interface AppAllowanceAttributes {
  familyId: string
  userId: string
  packageName: string
  until: string
}

export type AppAllowanceModel = Sequelize.Model<AppAllowanceAttributes> & AppAllowanceAttributes
export type AppAllowanceModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): AppAllowanceModel;
}

export const attributes: SequelizeAttributes<AppAllowanceAttributes> = {
  familyId: { ...familyIdColumn, primaryKey: true },
  userId: { ...idWithinFamilyColumn, primaryKey: true },
  packageName: { type: Sequelize.STRING(256), allowNull: false, primaryKey: true },
  until: { ...timestampColumn }
}

export const createAppAllowanceModel = (sequelize: Sequelize.Sequelize): AppAllowanceModelStatic => sequelize.define('AppAllowance', attributes) as AppAllowanceModelStatic
