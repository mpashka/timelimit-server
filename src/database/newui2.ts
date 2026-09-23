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

const packageNameColumn = { type: Sequelize.STRING(256), allowNull: false }

// @tag:app-rule
export interface AppRuleAttributes {
  familyId: string
  userId: string
  packageName: string
  days: number
  limitMinutes: number
}

export type AppRuleModel = Sequelize.Model<AppRuleAttributes> & AppRuleAttributes
export type AppRuleModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): AppRuleModel;
}

export const createAppRuleModel = (sequelize: Sequelize.Sequelize): AppRuleModelStatic => sequelize.define('AppRule', {
  familyId: { ...familyIdColumn, primaryKey: true },
  userId: { ...idWithinFamilyColumn, primaryKey: true },
  packageName: { ...packageNameColumn, primaryKey: true },
  days: { type: Sequelize.INTEGER, allowNull: false },
  limitMinutes: { type: Sequelize.INTEGER, allowNull: false }
} satisfies SequelizeAttributes<AppRuleAttributes>) as AppRuleModelStatic

// @tag:app-usage
export interface AppUsageAttributes {
  familyId: string
  deviceId: string
  day: number
  packageName: string
  userId: string
  ms: string
}

export type AppUsageModel = Sequelize.Model<AppUsageAttributes> & AppUsageAttributes
export type AppUsageModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): AppUsageModel;
}

export const createAppUsageModel = (sequelize: Sequelize.Sequelize): AppUsageModelStatic => sequelize.define('AppUsage', {
  familyId: { ...familyIdColumn, primaryKey: true },
  deviceId: { ...idWithinFamilyColumn, primaryKey: true },
  day: { type: Sequelize.INTEGER, allowNull: false, primaryKey: true },
  packageName: { ...packageNameColumn, primaryKey: true },
  userId: { ...idWithinFamilyColumn },
  ms: { ...timestampColumn }
} satisfies SequelizeAttributes<AppUsageAttributes>) as AppUsageModelStatic

// @tag:new-app
export interface NewAppAttributes {
  familyId: string
  userId: string
  packageName: string
  title: string
  section: string
  installedAt: string
  deviceId: string
}

export type NewAppModel = Sequelize.Model<NewAppAttributes> & NewAppAttributes
export type NewAppModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): NewAppModel;
}

export const createNewAppModel = (sequelize: Sequelize.Sequelize): NewAppModelStatic => sequelize.define('NewApp', {
  familyId: { ...familyIdColumn, primaryKey: true },
  userId: { ...idWithinFamilyColumn, primaryKey: true },
  packageName: { ...packageNameColumn, primaryKey: true },
  title: { type: Sequelize.STRING(100), allowNull: false },
  section: { type: Sequelize.STRING(32), allowNull: false },
  installedAt: { ...timestampColumn },
  deviceId: { ...idWithinFamilyColumn }
} satisfies SequelizeAttributes<NewAppAttributes>) as NewAppModelStatic
