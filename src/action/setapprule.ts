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

const actionType = 'SetAppRuleAction'

// @tag:app-rule
export class SetAppRuleAction extends ParentAction {
  readonly userId: string
  readonly packageName: string
  readonly days: number
  readonly limitMinutes: number

  constructor ({ userId, packageName, days, limitMinutes }: Omit<SerializedSetAppRuleAction, 'type'>) {
    super()

    assertIdWithinFamily({ actionType, field: 'userId', value: userId })
    assertPackageName({ actionType, packageName })
    assertSafeInteger({ actionType, field: 'days', value: days })
    assertSafeInteger({ actionType, field: 'limitMinutes', value: limitMinutes })

    if (days < 0 || days > 127) throw new InvalidActionParameterException({ actionType, staticMessage: 'days must be a weekday mask 0..127' })
    if (limitMinutes < -1 || limitMinutes > 1440) throw new InvalidActionParameterException({ actionType, staticMessage: 'limitMinutes must be -1..1440' })

    this.userId = userId
    this.packageName = packageName
    this.days = days
    this.limitMinutes = limitMinutes
  }

  static parse = ({ userId, packageName, days, limitMinutes }: SerializedSetAppRuleAction) => (
    new SetAppRuleAction({ userId, packageName, days, limitMinutes })
  )
}

export interface SerializedSetAppRuleAction {
  type: 'SET_APP_RULE'
  userId: string
  packageName: string
  days: number
  limitMinutes: number
}
