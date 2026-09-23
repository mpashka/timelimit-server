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
import { ParentAction } from './basetypes'
import { assertPackageName } from './createchildrequest'
import { InvalidActionParameterException } from './meta/exception'
import { assertIdWithinFamily, assertSafeInteger } from './meta/util'

const actionType = 'SetAppAllowanceAction'

// @tag:app-allowance
export class SetAppAllowanceAction extends ParentAction {
  readonly userId: string
  readonly packageName: string
  readonly until: number

  constructor ({ userId, packageName, until }: {
    userId: string
    packageName: string
    until: number
  }) {
    super()

    assertIdWithinFamily({ actionType, field: 'userId', value: userId })
    assertPackageName({ actionType, packageName })
    assertSafeInteger({ actionType, field: 'until', value: until })

    if (until < 0) {
      throw new InvalidActionParameterException({ actionType, staticMessage: 'until must not be negative' })
    }

    this.userId = userId
    this.packageName = packageName
    this.until = until
  }

  static parse = ({ userId, packageName, until }: SerializedSetAppAllowanceAction) => (
    new SetAppAllowanceAction({ userId, packageName, until })
  )
}

export interface SerializedSetAppAllowanceAction {
  type: 'SET_APP_ALLOWANCE'
  userId: string
  packageName: string
  until: number
}
