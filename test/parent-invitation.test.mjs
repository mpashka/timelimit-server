// @tag:parent-invitation
import assert from 'node:assert/strict'
import { Buffer } from 'node:buffer'
import { createHmac } from 'node:crypto'
import { test } from 'node:test'
import integrityModule from '../build/function/sync/apply-actions/integrity.js'
import binaryModule from '../build/util/binary-number.js'
import invitationModule from '../build/function/parent-invitation/index.js'

const { assertActionIntegrity } = integrityModule
const { intToBuffer, longToBuffer } = binaryModule
const { inviteParent } = invitationModule

const forgedWithEmptyPassword = ({ deviceId, sequenceNumber, encodedAction }) => {
  const id = Buffer.from(deviceId, 'utf8')
  const body = Buffer.from(encodedAction, 'utf8')

  return 'password:' + createHmac('sha256', Buffer.alloc(0))
    .update(longToBuffer(BigInt(sequenceNumber))).update(intToBuffer(id.length)).update(id)
    .update(intToBuffer(body.length)).update(body)
    .digest().toString('base64')
}

test('a parent without a password can not be impersonated by a signature over the empty hash', async () => {
  const action = { type: 'parent', userId: 'usr002', sequenceNumber: 1, encodedAction: '{}' }
  action.integrity = forgedWithEmptyPassword({ deviceId: 'dev001', ...action })

  const cache = { getSecondPasswordHashOfParent: async () => '' }

  await assert.rejects(() => assertActionIntegrity({ action, cache, deviceId: 'dev001', parentSessionUserId: null }))
})

const createTransaction = ({ user = null, invitation = null }) => {
  const created = []

  return {
    created,
    legacy: {
      transaction: 'transaction',
      database: {
        user: { findOne: async () => user },
        parentInvitation: {
          findOne: async () => invitation,
          create: async (row) => { created.push(row) }
        }
      }
    }
  }
}

test('an invitation never takes an address of this family or one invited elsewhere, but takes one with its own family', async () => {
  const invite = (transaction) => inviteParent({ transaction, familyId: 'f000000001', invitedByUserId: 'usr001', mail: ' Mama@Example.com ', role: 'manager' })

  await assert.rejects(() => invite(createTransaction({ user: { familyId: 'f000000001' } })), (ex) => ex.statusCode === 409)
  await assert.rejects(() => invite(createTransaction({ invitation: { familyId: 'f000000002', createdAt: '1' } })), (ex) => ex.statusCode === 409)

  const again = createTransaction({ invitation: { familyId: 'f000000001', createdAt: '5', role: 'manager' } })
  assert.deepEqual(await invite(again), { mail: 'mama@example.com', createdAt: 5, role: 'manager' })
  assert.equal(again.created.length, 0)

  const ownFamily = createTransaction({ user: { familyId: 'f000000002' } })
  await invite(ownFamily)
  assert.equal(ownFamily.created[0].mail, 'mama@example.com')
})
