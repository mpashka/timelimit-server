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

// @tag:url-filter
export interface UrlFilter {
  enabled: boolean
  allow: Array<string>
  block: Array<string>
}

export const maxUrlFilterEntries = 1000
export const maxUrlFilterEntryLength = 256

function hasControlChars (value: string): boolean {
  for (let i = 0; i < value.length; i++) {
    const code = value.charCodeAt(i)

    if (code < 32 || code === 127) return true
  }

  return false
}

export function getUrlFilterListProblem (list: Array<string>): string | null {
  if (list.length > maxUrlFilterEntries) return 'more than ' + maxUrlFilterEntries + ' entries'

  const seen = new Set<string>()

  for (const entry of list) {
    if (typeof entry !== 'string' || entry.length === 0) return 'empty entry'
    if (entry.length > maxUrlFilterEntryLength) return 'entry longer than ' + maxUrlFilterEntryLength + ' chars'
    if (hasControlChars(entry)) return 'entry contains control characters'
    if (seen.has(entry)) return 'duplicate entry'

    seen.add(entry)
  }

  return null
}
