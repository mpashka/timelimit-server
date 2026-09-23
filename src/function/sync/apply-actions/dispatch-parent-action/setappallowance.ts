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
import { SetAppAllowanceAction } from '../../../../action'
import { Cache } from '../cache'
import { MissingUserException } from '../exception/missing-item'

// @tag:app-allowance
export async function dispatchSetAppAllowance ({ action, cache }: {
  action: SetAppAllowanceAction
  cache: Cache
}) {
  const child = await cache.transaction.legacy.database.user.findOne({
    where: { familyId: cache.familyId, userId: action.userId, type: 'child' },
    attributes: ['userId'],
    transaction: cache.transaction.legacy.transaction
  })

  if (!child) throw new MissingUserException()

  await putAppAllowance({ cache, userId: action.userId, packageName: action.packageName, until: action.until, extendOnly: false })
}

export async function putAppAllowance ({ cache, userId, packageName, until, extendOnly }: {
  cache: Cache
  userId: string
  packageName: string
  until: number
  extendOnly: boolean
}) {
  const database = cache.transaction.legacy.database
  const transaction = cache.transaction.legacy.transaction
  const where = { familyId: cache.familyId, userId, packageName }
  const existing = await database.appAllowance.findOne({ where, transaction })

  if (until === 0) {
    if (existing) await existing.destroy({ transaction })
  } else if (existing) {
    const newUntil = extendOnly ? Math.max(until, parseInt(existing.until, 10)) : until

    existing.until = newUntil.toString(10)
    await existing.save({ transaction })
  } else {
    await database.appAllowance.create({ ...where, until: until.toString(10) }, { transaction })
  }

  cache.invalidiateUserList = true
  cache.incrementTriggeredSyncLevel(2)
}
