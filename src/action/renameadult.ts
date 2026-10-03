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
import { InvalidActionParameterException } from './meta/exception'
import { assertIdWithinFamily } from './meta/util'

const actionType = 'RenameAdultAction'

// @tag:adult-role
export class RenameAdultAction extends ParentAction {
  readonly userId: string
  readonly name: string

  constructor ({ userId, name }: {
    userId: string
    name: string
  }) {
    super()

    assertIdWithinFamily({ actionType, field: 'userId', value: userId })

    if (name.trim() === '') {
      throw new InvalidActionParameterException({
        actionType,
        staticMessage: 'new name must not be empty'
      })
    }

    this.userId = userId
    this.name = name
  }

  static parse = ({ userId, name }: SerializedRenameAdultAction) => (
    new RenameAdultAction({ userId, name })
  )
}

export interface SerializedRenameAdultAction {
  type: 'RENAME_ADULT'
  userId: string
  name: string
}
