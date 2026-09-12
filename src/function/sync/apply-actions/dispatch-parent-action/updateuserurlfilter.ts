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

import { UpdateUserUrlFilterAction } from '../../../../action'
import { UrlFilter } from '../../../../model/urlfilter'
import { Cache } from '../cache'
import { MissingUserException } from '../exception/missing-item'

// @tag:url-filter
export async function dispatchUpdateUserUrlFilter ({ action, cache }: {
  action: UpdateUserUrlFilterAction
  cache: Cache
}) {
  const userEntry = await cache.transaction.legacy.database.user.findOne({
    where: {
      familyId: cache.familyId,
      userId: action.userId
    },
    transaction: cache.transaction.legacy.transaction
  })

  if (!userEntry) {
    throw new MissingUserException()
  }

  const urlFilter: UrlFilter = { enabled: action.enabled, allow: action.allow, block: action.block }

  userEntry.urlFilter = JSON.stringify(urlFilter)

  await userEntry.save({ transaction: cache.transaction.legacy.transaction })

  cache.invalidiateUserList = true
  cache.incrementTriggeredSyncLevel(2)
}
