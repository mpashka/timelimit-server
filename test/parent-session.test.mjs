// @tag:parent-console
import assert from 'node:assert/strict'
import { test } from 'node:test'
import subjectModule from '../build/function/sync/subject.js'
import integrityModule from '../build/function/sync/apply-actions/integrity.js'

const { resolveSubject } = subjectModule
const { assertActionIntegrity } = integrityModule

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
          update: async (values) => { updated.push(['parentSession', values]) },
          destroy: async () => { deleted.push('parentSession') }
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

  assert.deepEqual(transaction.deleted, ['parentSession'])
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
