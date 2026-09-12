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

import { getUrlFilterListProblem } from '../model/urlfilter'
import { ParentAction } from './basetypes'
import { InvalidActionParameterException } from './meta/exception'
import { assertIdWithinFamily } from './meta/util'

const actionType = 'UpdateUserUrlFilterAction'

// @tag:url-filter
export class UpdateUserUrlFilterAction extends ParentAction {
  readonly userId: string
  readonly enabled: boolean
  readonly allow: Array<string>
  readonly block: Array<string>

  constructor ({ userId, enabled, allow, block }: {
    userId: string
    enabled: boolean
    allow: Array<string>
    block: Array<string>
  }) {
    super()

    assertIdWithinFamily({ actionType, field: 'userId', value: userId })

    for (const [field, list] of [['allow', allow], ['block', block]] as const) {
      const problem = getUrlFilterListProblem(list)

      if (problem !== null) {
        throw new InvalidActionParameterException({
          actionType,
          staticMessage: field + ': ' + problem
        })
      }
    }

    this.userId = userId
    this.enabled = enabled
    this.allow = allow
    this.block = block
  }

  static parse = ({ userId, enabled, allow, block }: SerializedUpdateUserUrlFilterAction) => (
    new UpdateUserUrlFilterAction({ userId, enabled, allow, block })
  )
}

export interface SerializedUpdateUserUrlFilterAction {
  type: 'UPDATE_USER_URL_FILTER'
  userId: string
  enabled: boolean
  allow: Array<string>
  block: Array<string>
}
