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
// @tag:child-request
export const childRequestLifetime = 1000 * 60 * 30
export const childRequestRepeatAfterDenial = 1000 * 60 * 30
export const childRequestListWindow = 1000 * 60 * 60 * 24
export const childRequestRetention = 1000 * 60 * 60 * 24 * 2
export const maxAllowanceDuration = 1000 * 60 * 60 * 48
export const maxRequestWordLength = 100
export const maxPackageNameLength = 256

export type ChildRequestAnswerKind = 'app' | 'category' | 'deny'

export interface ChildRequestAnswer {
  kind: ChildRequestAnswerKind
  until: number
  word: string
  parentUserId: string
  at: number
  repeatAfter: number
}

export interface ServerChildRequest {
  id: string
  packageName: string
  categoryId: string
  deviceId: string
  word: string
  createdAt: number
  expiresAt: number
  answer?: ChildRequestAnswer
}

export interface ServerAppAllowance {
  packageName: string
  until: number
}

export const repeatAfterOf = (kind: ChildRequestAnswerKind, at: number) => kind === 'deny' ? at + childRequestRepeatAfterDenial : 0

// @tag:child-request
export function getNewChildRequestRefusal ({ existing, packageName, now }: {
  existing: Array<ServerChildRequest>
  packageName: string
  now: number
}): string | null {
  for (const request of existing) {
    if (request.packageName !== packageName) continue

    if (request.answer === undefined && now < request.expiresAt) return 'a request for this app is still waiting'
    if (request.answer !== undefined && now < request.answer.repeatAfter) return 'the parent denied this app less than 30 minutes ago'
  }

  return null
}
