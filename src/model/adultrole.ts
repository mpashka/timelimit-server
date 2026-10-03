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


// @tag:adult-role
// Права взрослого в семье: admin — всё, manager — всё, кроме состава взрослых и их ролей,
// member — только смотрит. Для детей значение столбца не используется.
export type AdultRole = 'admin' | 'manager' | 'member'

export const adultRoles: ReadonlyArray<AdultRole> = ['member', 'manager', 'admin']

// @tag:adult-role
export function adultRoleRefusal ({ actual, required, what }: {
  actual: AdultRole
  required: AdultRole
  what: string
}): string | null {
  if (adultRoles.indexOf(actual) >= adultRoles.indexOf(required)) return null

  return what + ' needs the adult role ' + required + ' or higher, but yours is ' + actual
}
