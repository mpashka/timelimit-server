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
import { ChildRequestAnswerKind } from '../model/childrequest'
import { ParentAction } from './basetypes'
import { assertWord } from './createchildrequest'
import { InvalidActionParameterException } from './meta/exception'
import { assertIdWithinFamily, assertSafeInteger } from './meta/util'

const actionType = 'AnswerChildRequestAction'

// @tag:child-request
export class AnswerChildRequestAction extends ParentAction {
  readonly requestId: string
  readonly answer: ChildRequestAnswerKind
  readonly until: number
  readonly word: string

  constructor ({ requestId, answer, until, word }: {
    requestId: string
    answer: ChildRequestAnswerKind
    until: number
    word: string
  }) {
    super()

    assertIdWithinFamily({ actionType, field: 'requestId', value: requestId })
    assertSafeInteger({ actionType, field: 'until', value: until })
    assertWord({ actionType, word })

    if ((answer === 'deny') !== (until === 0)) {
      throw new InvalidActionParameterException({ actionType, staticMessage: 'until must be 0 exactly for deny' })
    }

    this.requestId = requestId
    this.answer = answer
    this.until = until
    this.word = word
  }

  static parse = ({ requestId, answer, until, word }: SerializedAnswerChildRequestAction) => (
    new AnswerChildRequestAction({ requestId, answer, until, word })
  )
}

export interface SerializedAnswerChildRequestAction {
  type: 'ANSWER_CHILD_REQUEST'
  requestId: string
  answer: ChildRequestAnswerKind
  until: number
  word: string
}
