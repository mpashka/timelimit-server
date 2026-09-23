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
import { CreateChildRequestAction } from '../../../../action'
import { childRequestRetention, getNewChildRequestRefusal } from '../../../../model/childrequest'
import { toServerChildRequest } from '../../../child-request'
import { Cache } from '../cache'
import { childOfDevice } from './newui'
import { ChildRequestRefusedException } from '../exception/child-request'

// @tag:child-request
export async function dispatchCreateChildRequest ({ deviceId, action, cache }: {
  deviceId: string
  action: CreateChildRequestAction
  cache: Cache
}) {
  const { transaction, familyId } = cache
  const database = transaction.legacy.database
  const now = Date.now()

  const known = await database.childRequest.findOne({
    where: { familyId, requestId: action.requestId },
    transaction: transaction.legacy.transaction
  })

  if (known) return

  const childId = await childOfDevice({ cache, deviceId })

  if (childId === null) throw new ChildRequestRefusedException('the sender is not a device of a child')

  await database.childRequest.destroy({
    where: { familyId, createdAt: { [Sequelize.Op.lt]: (now - childRequestRetention).toString(10) } },
    transaction: transaction.legacy.transaction
  })

  const existing = await database.childRequest.findAll({
    where: { familyId, userId: childId, packageName: action.packageName },
    transaction: transaction.legacy.transaction
  })

  const refusal = getNewChildRequestRefusal({ existing: existing.map(toServerChildRequest), packageName: action.packageName, now })

  if (refusal !== null) throw new ChildRequestRefusedException(refusal)

  await database.childRequest.create({
    familyId,
    requestId: action.requestId,
    userId: childId,
    deviceId,
    packageName: action.packageName,
    categoryId: action.categoryId,
    word: action.word,
    createdAt: now.toString(10),
    answerKind: null,
    answerUntil: '0',
    answerWord: '',
    answerParentUserId: '',
    answeredAt: '0'
  }, { transaction: transaction.legacy.transaction })

  cache.invalidiateUserList = true
  cache.incrementTriggeredSyncLevel(2)
}
