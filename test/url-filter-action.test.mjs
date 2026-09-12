// @tag:url-filter
import assert from 'node:assert/strict'
import { test } from 'node:test'
import serialization from '../build/action/serialization/index.js'
import validator from '../build/api/validator.js'

const { parseParentAction } = serialization
const { isSerializedParentAction } = validator

const base = { type: 'UPDATE_USER_URL_FILTER', userId: 'abcdef', enabled: true, allow: ['wikipedia.org'], block: ['*', 'google.com/search'] }

test('valid url filter action passes schema and parse', () => {
  assert.ok(isSerializedParentAction(base))

  const action = parseParentAction(base)

  assert.deepEqual([action.userId, action.enabled, action.allow, action.block], ['abcdef', true, ['wikipedia.org'], ['*', 'google.com/search']])
})

test('invalid url filter lists are rejected', () => {
  const invalidLists = [
    [''],
    ['a.org', 'a.org'],
    ['x'.repeat(257)],
    ['bad' + String.fromCharCode(10) + 'entry'],
    Array.from({ length: 1001 }, (_, i) => 'site' + i + '.org')
  ]

  for (const block of invalidLists) {
    assert.throws(() => parseParentAction({ ...base, block }))
    assert.throws(() => parseParentAction({ ...base, allow: block }))
  }

  assert.doesNotThrow(() => parseParentAction({ ...base, block: ['x'.repeat(256)] }))
  assert.doesNotThrow(() => parseParentAction({ ...base, allow: Array.from({ length: 1000 }, (_, i) => 'site' + i + '.org') }))
  assert.equal(isSerializedParentAction({ ...base, allow: [1] }), false)
})
