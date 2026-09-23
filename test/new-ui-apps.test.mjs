// @tag:parent-code @tag:app-rule
import assert from 'node:assert/strict'
import { test } from 'node:test'
import parentcode from '../build/model/parentcode.js'
import serialization from '../build/action/serialization/index.js'

const { parentCodeAt } = parentcode
const { parseAppLogicAction, parseParentAction } = serialization

test('the server checks the parent code with RFC 6238: the SHA-1 vector at T=59 gives 287082', () => {
  assert.equal(parentCodeAt('GEZDGNBVGY3TQOJQGEZDGNBVGY3TQOJQ', 1), '287082')
})

test('a grant by parent code lasts at most 48 hours after the step it was entered at', () => {
  const step = 59666667
  const grant = { type: 'GRANT_BY_PARENT_CODE', code: '482913', step, grant: 'app', packageName: 'com.roblox.client', categoryId: '' }

  assert.doesNotThrow(() => parseAppLogicAction({ ...grant, until: step * 30000 + 48 * 3600000 }))
  assert.throws(() => parseAppLogicAction({ ...grant, until: step * 30000 + 48 * 3600000 + 1 }))
  assert.throws(() => parseAppLogicAction({ ...grant, grant: 'category', until: step * 30000 + 60000 }))
  assert.throws(() => parseParentAction({ type: 'SET_APP_RULE', userId: 'chi001', packageName: 'a', days: 128, limitMinutes: -1 }))
})
