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
import { ChildRequestModel } from '../../database/childrequest'
import { ChildRequestAnswerKind, ServerChildRequest, childRequestLifetime, repeatAfterOf } from '../../model/childrequest'

// @tag:child-request
export function toServerChildRequest (row: ChildRequestModel): ServerChildRequest {
  const createdAt = parseInt(row.createdAt, 10)
  const result: ServerChildRequest = {
    id: row.requestId,
    packageName: row.packageName,
    categoryId: row.categoryId,
    deviceId: row.deviceId,
    word: row.word,
    createdAt,
    expiresAt: createdAt + childRequestLifetime
  }

  if (row.answerKind !== null) {
    const kind = row.answerKind as ChildRequestAnswerKind
    const at = parseInt(row.answeredAt, 10)

    result.answer = {
      kind,
      until: parseInt(row.answerUntil, 10),
      word: row.answerWord,
      parentUserId: row.answerParentUserId,
      at,
      repeatAfter: repeatAfterOf(kind, at)
    }
  }

  return result
}
