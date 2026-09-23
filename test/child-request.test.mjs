// @tag:child-request
import assert from 'node:assert/strict'
import { test } from 'node:test'
import model from '../build/model/childrequest.js'
import serialization from '../build/action/serialization/index.js'

const { getNewChildRequestRefusal, childRequestLifetime, childRequestRepeatAfterDenial } = model
const { parseParentAction } = serialization

const now = 1790000000000
const request = (packageName, createdAt, answer) => ({
  id: 'req001', packageName, categoryId: '', deviceId: 'dev001', word: '', createdAt,
  expiresAt: createdAt + childRequestLifetime, answer
})
const denied = (at) => ({ kind: 'deny', until: 0, word: '', parentUserId: 'par001', at, repeatAfter: at + childRequestRepeatAfterDenial })

test('one waiting request per app, again after expiry or 30 minutes after a denial', () => {
  const refusal = (existing) => getNewChildRequestRefusal({ existing, packageName: 'com.roblox.client', now })

  assert.equal(refusal([]), null)
  assert.notEqual(refusal([request('com.roblox.client', now - 60000)]), null)
  assert.equal(refusal([request('com.other', now - 60000)]), null)
  assert.equal(refusal([request('com.roblox.client', now - childRequestLifetime)]), null)
  assert.notEqual(refusal([request('com.roblox.client', now - 120000, denied(now - 60000))]), null)
  assert.equal(refusal([request('com.roblox.client', now - 3600000, denied(now - childRequestRepeatAfterDenial))]), null)
})

test('an answer carries until exactly when it allows', () => {
  const base = { type: 'ANSWER_CHILD_REQUEST', requestId: 'req001', word: '' }

  assert.doesNotThrow(() => parseParentAction({ ...base, answer: 'app', until: now }))
  assert.doesNotThrow(() => parseParentAction({ ...base, answer: 'deny', until: 0 }))
  assert.throws(() => parseParentAction({ ...base, answer: 'deny', until: now }))
  assert.throws(() => parseParentAction({ ...base, answer: 'category', until: 0 }))
})
