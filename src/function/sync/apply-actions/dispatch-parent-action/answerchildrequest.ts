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
import { AnswerChildRequestAction } from '../../../../action'
import { maxAllowanceDuration } from '../../../../model/childrequest'
import { Cache } from '../cache'
import { ChildRequestRefusedException, MissingChildRequestException } from '../exception/child-request'
import { MissingCategoryException } from '../exception/missing-item'
import { putAppAllowance } from './setappallowance'

// @tag:child-request
export async function dispatchAnswerChildRequest ({ action, cache, parentUserId }: {
  action: AnswerChildRequestAction
  cache: Cache
  parentUserId: string
}) {
  const database = cache.transaction.legacy.database
  const transaction = cache.transaction.legacy.transaction
  const now = Date.now()

  const request = await database.childRequest.findOne({
    where: { familyId: cache.familyId, requestId: action.requestId },
    transaction
  })

  if (!request) throw new MissingChildRequestException()
  if (request.answerKind !== null) throw new ChildRequestRefusedException('already answered')

  if (action.answer !== 'deny' && (action.until <= now || action.until > now + maxAllowanceDuration)) {
    throw new ChildRequestRefusedException('until must be within the next 48 hours')
  }

  if (action.answer === 'app') {
    await putAppAllowance({ cache, userId: request.userId, packageName: request.packageName, until: action.until, extendOnly: true })
  } else if (action.answer === 'category') {
    const categoryId = request.categoryId !== '' ? request.categoryId : await categoryForUnassignedApps({ cache, childId: request.userId })

    if (categoryId === '') throw new ChildRequestRefusedException('the app has no category and the child has no category for apps without one')

    const category = await database.category.findOne({
      where: { familyId: cache.familyId, categoryId, childId: request.userId },
      attributes: ['disableLimitsUntil'],
      transaction
    })

    if (!category) throw new MissingCategoryException()

    if (parseInt(category.disableLimitsUntil, 10) < action.until) {
      await database.category.update({ disableLimitsUntil: action.until.toString(10) }, {
        where: { familyId: cache.familyId, categoryId },
        transaction
      })

      cache.categoriesWithModifiedBaseData.add(categoryId)
    }
  }

  request.answerKind = action.answer
  request.answerUntil = action.until.toString(10)
  request.answerWord = action.word
  request.answerParentUserId = parentUserId
  request.answeredAt = now.toString(10)
  await request.save({ transaction })

  cache.invalidiateUserList = true
  cache.incrementTriggeredSyncLevel(2)
}

async function categoryForUnassignedApps ({ cache, childId }: { cache: Cache, childId: string }): Promise<string> {
  const child = await cache.transaction.legacy.database.user.findOne({
    where: { familyId: cache.familyId, userId: childId },
    attributes: ['categoryForNotAssignedApps'],
    transaction: cache.transaction.legacy.transaction
  })

  return child?.categoryForNotAssignedApps ?? ''
}
