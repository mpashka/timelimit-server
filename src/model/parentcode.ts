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
import { createHmac, randomBytes } from 'crypto'

const base32Alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'

// @tag:parent-code
export function generateParentCodeSecret (): string {
  const bytes = randomBytes(20)
  let bits = 0
  let value = 0
  let result = ''

  for (const byte of bytes) {
    value = (value << 8) | byte
    bits += 8

    while (bits >= 5) {
      result += base32Alphabet[(value >>> (bits - 5)) & 31]
      bits -= 5
    }
  }

  return result
}

export const parentCodeStepMs = 30_000

function decodeBase32 (text: string): Buffer {
  const bytes: Array<number> = []
  let bits = 0
  let value = 0

  for (const char of text) {
    const index = base32Alphabet.indexOf(char)

    if (index < 0) throw new Error('parent code secret is not base32')

    value = (value << 5) | index
    bits += 5

    if (bits >= 8) {
      bytes.push((value >>> (bits - 8)) & 255)
      bits -= 8
    }
  }

  return Buffer.from(bytes)
}

// @tag:parent-code
export function parentCodeAt (secret: string, step: number): string {
  const counter = Buffer.alloc(8)

  counter.writeBigUInt64BE(BigInt(step))

  const hmac = createHmac('sha1', decodeBase32(secret)).update(counter).digest()
  const offset = hmac[hmac.length - 1] & 15

  return String((hmac.readUInt32BE(offset) & 0x7fffffff) % 1_000_000).padStart(6, '0')
}
