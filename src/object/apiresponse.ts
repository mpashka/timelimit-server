/*
 * server component for the TimeLimit App
 * Copyright (C) 2019 - 2026 Jonas Lochmann
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

import { AdultRole } from '../model/adultrole'
import { ServerDataStatus } from './serverdatastatus'

/*
 * Answers of /parent/* and /session/*. The names are the ones the Android client already uses for
 * them (AddDeviceResponse.kt, StatusOfMailAddress.kt, CreateAddDeviceTokenResponse.kt); they live
 * here and not in the routers so that scripts/build-schemas.js publishes their schemas and other
 * clients can generate types instead of transcribing the routers by hand.
 */

/** `POST /parent/create-family`, `POST /parent/sign-in-into-family`. */
export interface AddDeviceResponse {
  deviceAuthToken: string
  ownDeviceId: string
  data: ServerDataStatus
}

/** Does this mail address already belong to a family? */
export type MailAddressStatus = 'with family' | 'without family'

/** `POST /parent/get-status-by-mail-address`. */
export interface StatusOfMailAddressResponse {
  status: MailAddressStatus
  mail: string
  canCreateFamily: boolean
  alwaysPro: boolean
  /** Absent on a server without parent invitations, null when nobody invited this address. @tag:parent-invitation */
  invitation?: ReceivedParentInvitation | null
  /** The invited address's own family, given only together with an invitation. @tag:adult-role */
  ownFamily?: OwnFamily | null
}

// @tag:parent-invitation
export interface ReceivedParentInvitation {
  inviterName: string
  inviterMail: string
  role: AdultRole // @tag:adult-role
}

/** What an invited address loses by accepting: the family it already has. @tag:adult-role */
export interface OwnFamily {
  children: number
  devices: number
  adults: number
}

/** `POST /parent/create-add-device-token`. */
export interface CreateAddDeviceTokenResponse {
  token: string
  deviceId: string
}

/** Answer of every `POST /session/*` that opens a session. @tag:parent-console */
export interface ParentSessionInfo {
  sessionToken: string
  sessionId: string
  familyId: string
  userId: string
}
