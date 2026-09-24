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

import { UpdateDeviceExperimentalFlagsAction } from '../../../../action'
import { Cache } from '../cache'
import { MissingDeviceException } from '../exception/missing-item'

// @tag:device-flags
export async function dispatchUpdateDeviceExperimentalFlags ({ action, cache }: {
  action: UpdateDeviceExperimentalFlagsAction
  cache: Cache
}) {
  const where = { familyId: cache.familyId, deviceId: action.deviceId }
  const oldDevice = await cache.transaction.legacy.database.device.findOne({
    transaction: cache.transaction.legacy.transaction,
    where
  })

  if (!oldDevice) {
    throw new MissingDeviceException()
  }

  const experimentalFlags = (oldDevice.experimentalFlags & ~action.mask) | (action.value & action.mask)

  if (experimentalFlags === oldDevice.experimentalFlags) return

  await cache.transaction.legacy.database.device.update({ experimentalFlags }, {
    transaction: cache.transaction.legacy.transaction,
    where
  })

  cache.invalidiateDeviceList = true
  cache.incrementTriggeredSyncLevel(1)
  cache.incrementTargetedTriggeredSyncLevel(action.deviceId, 2)
}
