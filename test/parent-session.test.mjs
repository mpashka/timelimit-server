// @tag:parent-console
import assert from 'node:assert/strict'
import { test } from 'node:test'
import subjectModule from '../build/function/sync/subject.js'
import integrityModule from '../build/function/sync/apply-actions/integrity.js'

import validatorModule from '../build/api/validator.js'

const { resolveSubject, takeNextKeyReplySequenceNumber } = subjectModule
const { assertActionIntegrity } = integrityModule
const { isCreateFamilyWithParentSessionRequest } = validatorModule

const day = 1000 * 60 * 60 * 24

const createTransaction = ({ device = null, session = null }) => {
  const deleted = []
  const updated = []

  return {
    deleted,
    updated,
    legacy: {
      transaction: 'transaction',
      database: {
        device: {
          findOne: async () => device,
          update: async (values) => { updated.push(['device', values]) }
        },
        parentSession: {
          findOne: async () => session,
          findAll: async () => session === null ? [] : [{ familyId: 'f123456789', sessionId: 'ses001' }],
          update: async (values) => { updated.push(['parentSession', values]) },
          destroy: async () => { deleted.push('parentSession'); return 1 }
        },
        keyRequest: {
          destroy: async () => { deleted.push('keyRequest') }
        },
        deviceDhKey: {
          destroy: async () => { deleted.push('deviceDhKey') }
        }
      }
    }
  }
}

test('a device token resolves to the device itself', async () => {
  const transaction = createTransaction({
    device: { familyId: 'f123456789', deviceId: 'dev001', nextSequenceNumber: 7, lastConnectivity: '0' }
  })

  const subject = await resolveSubject({ transaction, authToken: 'a'.repeat(32) })

  assert.equal(subject.kind, 'device')
  assert.equal(subject.subjectId, 'dev001')
  assert.equal(subject.parentUserId, null)
  assert.equal(subject.nextSequenceNumber, 7)
})

test('a session token resolves to the parent session and its id takes the device position', async () => {
  const transaction = createTransaction({
    session: {
      familyId: 'f123456789',
      sessionId: 'ses001',
      userId: 'usr001',
      nextSequenceNumber: 3,
      lastUsedAt: Date.now().toString(10)
    }
  })

  const subject = await resolveSubject({ transaction, authToken: 's:' + 'b'.repeat(32) })

  assert.equal(subject.kind, 'parentSession')
  assert.equal(subject.subjectId, 'ses001')
  assert.equal(subject.parentUserId, 'usr001')
  assert.equal(subject.nextSequenceNumber, 3)

  await subject.reportUsage()
  await subject.saveNextSequenceNumber(4)

  assert.deepEqual(transaction.updated.map(([model]) => model), ['parentSession', 'parentSession'])
  assert.equal(transaction.updated[1][1].nextSequenceNumber, 4)
})

test('a session unused for too long is refused and removed', async () => {
  const transaction = createTransaction({
    session: {
      familyId: 'f123456789',
      sessionId: 'ses001',
      userId: 'usr001',
      nextSequenceNumber: 3,
      lastUsedAt: (Date.now() - 91 * day).toString(10)
    }
  })

  await assert.rejects(
    () => resolveSubject({ transaction, authToken: 's:' + 'b'.repeat(32) }),
    (ex) => ex.statusCode === 401 && /sign in again/.test(ex.message)
  )

  assert.deepEqual(transaction.deleted, ['keyRequest', 'deviceDhKey', 'parentSession'])
})

test('an unknown token is refused, and a session token never falls back to a device', async () => {
  const withoutDevice = createTransaction({})

  await assert.rejects(
    () => resolveSubject({ transaction: withoutDevice, authToken: 'a'.repeat(32) }),
    (ex) => ex.statusCode === 401
  )

  const deviceOnly = createTransaction({
    device: { familyId: 'f123456789', deviceId: 'dev001', nextSequenceNumber: 7, lastConnectivity: '0' }
  })

  await assert.rejects(
    () => resolveSubject({ transaction: deviceOnly, authToken: 's:' + 'b'.repeat(32) }),
    (ex) => ex.statusCode === 401
  )
})

const createCache = () => ({
  transaction: createTransaction({}),
  getSecondPasswordHashOfParent: async () => 'second-hash'
})

test('a session may act as its own parent, but not as another one', async () => {
  const action = { type: 'parent', integrity: 'device', userId: 'usr001', sequenceNumber: 1, encodedAction: '{}' }

  assert.deepEqual(
    await assertActionIntegrity({ action, cache: createCache(), deviceId: 'ses001', parentSessionUserId: 'usr001' }),
    { isChildLimitAdding: false, authentication: 'device' }
  )

  await assert.rejects(() => assertActionIntegrity({
    action, cache: createCache(), deviceId: 'ses001', parentSessionUserId: 'usr002'
  }))

  await assert.rejects(() => assertActionIntegrity({
    action: { ...action, integrity: 'childDevice' },
    cache: createCache(),
    deviceId: 'ses001',
    parentSessionUserId: 'usr001'
  }))
})

test('the key reply counter is taken from the device when the addressee is one', async () => {
  const transaction = createTransaction({
    device: { nextKeyReplySequenceNumber: '4' },
    session: { nextKeyReplySequenceNumber: '9' }
  })

  const taken = await takeNextKeyReplySequenceNumber({
    transaction, familyId: 'f123456789', subjectId: 'dev001'
  })

  assert.equal(taken, '4')
  assert.deepEqual(transaction.updated, [['device', { nextKeyReplySequenceNumber: '5' }]])
})

test('the key reply counter is taken from the parent session when the addressee is one', async () => {
  const transaction = createTransaction({
    session: { nextKeyReplySequenceNumber: '9' }
  })

  const taken = await takeNextKeyReplySequenceNumber({
    transaction, familyId: 'f123456789', subjectId: 'ses001'
  })

  assert.equal(taken, '9')
  assert.deepEqual(transaction.updated, [['parentSession', { nextKeyReplySequenceNumber: '10' }]])
})

test('an addressee that is neither a device nor a session yields no counter', async () => {
  const transaction = createTransaction({})

  assert.equal(
    await takeNextKeyReplySequenceNumber({ transaction, familyId: 'f123456789', subjectId: 'gone01' }),
    null
  )
  assert.deepEqual(transaction.updated, [])
})

test('creating a family for a parent session takes no device', () => {
  const body = {
    mailAuthToken: 'a'.repeat(32),
    parentPassword: { hash: 'h', secondHash: 's', secondSalt: 'x' },
    timeZone: 'Europe/Berlin',
    parentName: 'Parent'
  }

  assert.equal(isCreateFamilyWithParentSessionRequest(body), true)
  assert.equal(isCreateFamilyWithParentSessionRequest({ ...body, deviceName: 'phone' }), false)
  assert.equal(isCreateFamilyWithParentSessionRequest({ ...body, parentDevice: { model: 'test' } }), false)
})
