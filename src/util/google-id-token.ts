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

import { createRemoteJWKSet, jwtVerify, JWTVerifyGetKey } from 'jose'

const googleKeySet = createRemoteJWKSet(new URL('https://www.googleapis.com/oauth2/v3/certs'))

// @tag:parent-console
export async function verifyGoogleIdToken ({ idToken, clientIds, keySet = googleKeySet }: {
  idToken: string
  clientIds: Array<string>
  keySet?: JWTVerifyGetKey
}): Promise<{ mail: string }> {
  if (clientIds.length === 0) throw new GoogleIdTokenException('no client ids configured')

  try {
    const { payload } = await jwtVerify(idToken, keySet, {
      algorithms: ['RS256'],
      issuer: ['accounts.google.com', 'https://accounts.google.com'],
      audience: clientIds,
      requiredClaims: ['exp']
    })

    if (payload.email_verified !== true) throw new GoogleIdTokenException('email is not verified')
    if (typeof payload.email !== 'string') throw new GoogleIdTokenException('email is missing')

    return { mail: payload.email }
  } catch (ex) {
    if (ex instanceof GoogleIdTokenException) throw ex
    else if (ex instanceof Error) throw new GoogleIdTokenException(ex.message)
    else throw ex
  }
}

export class GoogleIdTokenException extends Error {}
