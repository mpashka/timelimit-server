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


import { AddUserAction, ParentAction, RemoveUserAction, RenameAdultAction } from '../../../action'
import { AdultRole, adultRoleRefusal } from '../../../model/adultrole'
import { Cache } from './cache'
import { ApplyActionException } from './exception'
import { MissingUserException } from './exception/missing-item'

// @tag:adult-role
export function requiredAdultRoleForParentAction ({ action, actorUserId, targetUserType }: {
  action: ParentAction
  actorUserId: string
  // тип пользователя, которого убирают REMOVE_USER; null — его нет
  targetUserType: 'parent' | 'child' | null
}): AdultRole {
  if (action instanceof RenameAdultAction) return action.userId === actorUserId ? 'member' : 'admin'
  if (action instanceof AddUserAction) return action.userType === 'parent' ? 'admin' : 'manager'
  if (action instanceof RemoveUserAction) return targetUserType === 'child' ? 'manager' : 'admin'

  return 'manager'
}

// @tag:adult-role
// Единственная проверка роли для действий синхронизации: зовётся после подписи, когда автор известен.
export async function assertAdultRoleAllowsParentAction ({ action, actorUserId, cache }: {
  action: ParentAction
  actorUserId: string
  cache: Cache
}): Promise<void> {
  const { database, transaction } = cache.transaction.legacy

  const actor = await database.user.findOne({
    where: { familyId: cache.familyId, userId: actorUserId, type: 'parent' },
    attributes: ['adultRole'],
    transaction
  })

  if (!actor) throw new MissingUserException()

  const target = action instanceof RemoveUserAction ? await database.user.findOne({
    where: { familyId: cache.familyId, userId: action.userId },
    attributes: ['type'],
    transaction
  }) : null

  const required = requiredAdultRoleForParentAction({ action, actorUserId, targetUserType: target?.type ?? null })

  if (adultRoleRefusal({ actual: actor.adultRole, required, what: 'this action' }) !== null) {
    throw new ApplyActionException({ staticMessage: action.constructor.name + ' needs the adult role ' + required })
  }
}
