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
import { SetAppRuleAction } from '../../../../action'
import { Cache } from '../cache'
import { MissingUserException } from '../exception/missing-item'

// @tag:app-rule
export async function dispatchSetAppRule ({ action, cache }: { action: SetAppRuleAction, cache: Cache }) {
  const database = cache.transaction.legacy.database
  const transaction = cache.transaction.legacy.transaction
  const child = await database.user.findOne({ where: { familyId: cache.familyId, userId: action.userId, type: 'child' }, attributes: ['userId'], transaction })

  if (!child) throw new MissingUserException()

  const where = { familyId: cache.familyId, userId: action.userId, packageName: action.packageName }
  const existing = await database.appRule.findOne({ where, transaction })
  const isNoRule = action.days === 127 && action.limitMinutes === -1

  if (isNoRule) {
    if (existing) await existing.destroy({ transaction })
  } else if (existing) {
    existing.days = action.days
    existing.limitMinutes = action.limitMinutes
    await existing.save({ transaction })
  } else {
    await database.appRule.create({ ...where, days: action.days, limitMinutes: action.limitMinutes }, { transaction })
  }

  cache.invalidiateUserList = true
  cache.incrementTriggeredSyncLevel(2)
}
