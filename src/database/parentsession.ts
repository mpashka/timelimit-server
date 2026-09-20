/*
 * server component for the TimeLimit App
 * Copyright (C) 2019 - 2026 Jonas Lochmann
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
import { authTokenColumn, familyIdColumn, idWithinFamilyColumn, timestampColumn } from './columns'
import { SequelizeAttributes } from './types'

// @tag:parent-console
// Сессия родителя: вошедший человек в средстве управления (веб-админка через BFF, CLI, MCP).
// Устройством семьи не является. sessionId живёт в том же пространстве имён, что deviceId, и
// занимает его позицию в /sync/*: подпись действия, адресация ключей, оповещение по websocket.
export interface ParentSessionAttributes {
  sessionToken: string
  familyId: string
  sessionId: string
  userId: string
  createdAt: string
  lastUsedAt: string
  nextSequenceNumber: number
}

export type ParentSessionModel = Sequelize.Model<ParentSessionAttributes> & ParentSessionAttributes
export type ParentSessionModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): ParentSessionModel;
}

export const attributes: SequelizeAttributes<ParentSessionAttributes> = {
  sessionToken: {
    ...authTokenColumn,
    primaryKey: true
  },
  familyId: { ...familyIdColumn },
  sessionId: { ...idWithinFamilyColumn },
  userId: { ...idWithinFamilyColumn },
  createdAt: { ...timestampColumn },
  lastUsedAt: { ...timestampColumn },
  nextSequenceNumber: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  }
}

export const createParentSessionModel = (sequelize: Sequelize.Sequelize): ParentSessionModelStatic => sequelize.define('ParentSession', attributes) as ParentSessionModelStatic
