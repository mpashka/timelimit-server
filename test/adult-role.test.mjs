// @tag:adult-role
import assert from 'node:assert/strict'
import { test } from 'node:test'
import actionModule from '../build/action/index.js'
import roleModule from '../build/model/adultrole.js'
import policyModule from '../build/function/sync/apply-actions/adult-role.js'

const { AddUserAction, IncrementCategoryExtraTimeAction, RemoveUserAction, RenameAdultAction } = actionModule
const { adultRoleRefusal } = roleModule
const { requiredAdultRoleForParentAction } = policyModule

const required = (action, targetUserType = null) => requiredAdultRoleForParentAction({ action, actorUserId: 'usr001', targetUserType })
const allows = (actual, needed) => adultRoleRefusal({ actual, required: needed, what: 'x' }) === null

test('a member only renames himself, a manager runs the family, an admin manages its adults', () => {
  const renameSelf = new RenameAdultAction({ userId: 'usr001', name: 'Me' })
  const renameOther = new RenameAdultAction({ userId: 'usr002', name: 'Other' })
  const extraTime = new IncrementCategoryExtraTimeAction({ categoryId: 'cat001', addedExtraTime: 60000, day: -1 })
  const addAdult = Object.assign(Object.create(AddUserAction.prototype), { userId: 'usr003', userType: 'parent' })

  assert.ok(allows('member', required(renameSelf)))
  assert.ok(!allows('member', required(extraTime)))
  assert.ok(allows('manager', required(extraTime)))
  assert.ok(!allows('manager', required(renameOther)))
  assert.ok(!allows('manager', required(addAdult)))
  assert.ok(allows('manager', required(new RemoveUserAction({ userId: 'chi001' }), 'child')))
  assert.ok(!allows('manager', required(new RemoveUserAction({ userId: 'usr002' }), 'parent')))
  assert.ok(allows('admin', required(addAdult)))
  assert.match(adultRoleRefusal({ actual: 'member', required: 'admin', what: 'this request' }), /needs the adult role admin/)
})
