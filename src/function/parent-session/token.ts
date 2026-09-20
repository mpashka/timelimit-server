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

// @tag:parent-console
// Токен сессии едет в том же поле запроса, что и токен устройства: новое поле завести нельзя,
// запросы валидируются со additionalProperties: false. Различать их можно по виду, а не по
// договорённости — токен устройства это ровно [a-zA-Z0-9]{32} (authTokenColumn), поэтому двоеточие
// в префиксе с ним не столкнётся.
export const parentSessionTokenPrefix = 's:'

export const sessionTokenToWireFormat = (sessionToken: string) => parentSessionTokenPrefix + sessionToken

export const parseSessionTokenFromWireFormat = (token: string): string | null => (
  token.startsWith(parentSessionTokenPrefix) ? token.substring(parentSessionTokenPrefix.length) : null
)
