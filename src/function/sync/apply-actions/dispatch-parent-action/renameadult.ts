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


import { RenameAdultAction } from '../../../../action'
import { Cache } from '../cache'
import { MissingUserException } from '../exception/missing-item'

// @tag:adult-role
// Кто кого вправе переименовать, решает проверка роли до dispatch (adult-role.ts).
export async function dispatchRenameAdult ({ action, cache }: {
  action: RenameAdultAction
  cache: Cache
}) {
  const [updated] = await cache.transaction.legacy.database.user.update({
    name: action.name
  }, {
    where: {
      familyId: cache.familyId,
      userId: action.userId,
      type: 'parent'
    },
    transaction: cache.transaction.legacy.transaction
  })

  if (updated === 0) {
    throw new MissingUserException()
  }

  cache.invalidiateUserList = true
  cache.incrementTriggeredSyncLevel(1)
}
