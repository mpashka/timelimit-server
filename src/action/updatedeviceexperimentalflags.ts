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
import { maxExperimentalFlags } from '../database/device'
import { ParentAction } from './basetypes'
import { InvalidActionParameterException } from './meta/exception'
import { assertIdWithinFamily, assertSafeInteger } from './meta/util'

const actionType = 'UpdateDeviceExperimentalFlagsAction'

// @tag:device-flags
export class UpdateDeviceExperimentalFlagsAction extends ParentAction {
  readonly deviceId: string
  readonly mask: number
  readonly value: number

  constructor ({ deviceId, mask, value }: Omit<SerializedUpdateDeviceExperimentalFlagsAction, 'type'>) {
    super()

    assertIdWithinFamily({ actionType, field: 'deviceId', value: deviceId })
    assertSafeInteger({ actionType, field: 'mask', value: mask })
    assertSafeInteger({ actionType, field: 'value', value: value })

    for (const [field, flags] of [['mask', mask], ['value', value]] as const) {
      if (flags < 0 || flags > maxExperimentalFlags) {
        throw new InvalidActionParameterException({ actionType, staticMessage: field + ' must be 0..2^31-1' })
      }
    }

    this.deviceId = deviceId
    this.mask = mask
    this.value = value
  }

  static parse = ({ deviceId, mask, value }: SerializedUpdateDeviceExperimentalFlagsAction) => (
    new UpdateDeviceExperimentalFlagsAction({ deviceId, mask, value })
  )
}

export interface SerializedUpdateDeviceExperimentalFlagsAction {
  type: 'UPDATE_DEVICE_EXPERIMENTAL_FLAGS'
  deviceId: string
  mask: number
  value: number
}
