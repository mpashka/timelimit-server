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
import { ApplyActionException } from './index'

// @tag:child-request
export class ChildRequestRefusedException extends ApplyActionException {
  constructor (reason: string) {
    super({ staticMessage: 'child request refused: ' + reason })
  }
}

export class MissingChildRequestException extends ApplyActionException {
  constructor () {
    super({ staticMessage: 'referenced child request which does not exist' })
  }
}
