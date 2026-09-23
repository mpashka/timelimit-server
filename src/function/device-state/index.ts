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
import { ServerDeviceState } from '../../object/serverdatastatus'

// @tag:device-state
// ponytail: kept in the memory of this one process, empty after a restart until every device
// syncs again; move to a table when the server runs more than one process
const states = new Map<string, Map<string, ServerDeviceState>>()

function stateOf (familyId: string, deviceId: string): ServerDeviceState {
  let family = states.get(familyId)

  if (!family) {
    family = new Map()
    states.set(familyId, family)
  }

  let state = family.get(deviceId)

  if (!state) {
    state = { deviceId, seen: 0, app: '', appSince: 0 }
    family.set(deviceId, state)
  }

  return state
}

export function reportDeviceSeen (familyId: string, deviceId: string) {
  stateOf(familyId, deviceId).seen = Date.now()
}

export function reportForegroundApp (familyId: string, deviceId: string, packageName: string) {
  const state = stateOf(familyId, deviceId)
  const now = Date.now()

  state.seen = now

  if (state.app !== packageName) {
    state.app = packageName
    state.appSince = now
  }
}

export function getDeviceStates (familyId: string, deviceIds: Array<string>): Array<ServerDeviceState> {
  const family = states.get(familyId)

  return deviceIds.flatMap((deviceId) => {
    const state = family?.get(deviceId)

    return state ? [{ ...state }] : []
  })
}
