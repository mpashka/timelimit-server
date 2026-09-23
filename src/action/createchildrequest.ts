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
import { maxPackageNameLength, maxRequestWordLength } from '../model/childrequest'
import { AppLogicAction } from './basetypes'
import { InvalidActionParameterException } from './meta/exception'
import { assertIdWithinFamily } from './meta/util'

const actionType = 'CreateChildRequestAction'

// @tag:child-request
export class CreateChildRequestAction extends AppLogicAction {
  readonly requestId: string
  readonly packageName: string
  readonly categoryId: string
  readonly word: string

  constructor ({ requestId, packageName, categoryId, word }: {
    requestId: string
    packageName: string
    categoryId: string
    word: string
  }) {
    super()

    assertIdWithinFamily({ actionType, field: 'requestId', value: requestId })
    if (categoryId !== '') assertIdWithinFamily({ actionType, field: 'categoryId', value: categoryId })
    assertPackageName({ actionType, packageName })
    assertWord({ actionType, word })

    this.requestId = requestId
    this.packageName = packageName
    this.categoryId = categoryId
    this.word = word
  }

  static parse = ({ requestId, packageName, categoryId, word }: SerializedCreateChildRequestAction) => (
    new CreateChildRequestAction({ requestId, packageName, categoryId, word })
  )
}

export interface SerializedCreateChildRequestAction {
  type: 'CREATE_CHILD_REQUEST'
  requestId: string
  packageName: string
  categoryId: string
  word: string
}

export function assertPackageName ({ actionType, packageName }: { actionType: string, packageName: string }) {
  if (packageName.length === 0 || packageName.length > maxPackageNameLength) {
    throw new InvalidActionParameterException({ actionType, staticMessage: 'packageName must have 1 to ' + maxPackageNameLength + ' chars' })
  }
}

export function assertWord ({ actionType, word }: { actionType: string, word: string }) {
  if (word.length > maxRequestWordLength) {
    throw new InvalidActionParameterException({ actionType, staticMessage: 'word longer than ' + maxRequestWordLength + ' chars' })
  }
}
