// @tag:family-join-link
import assert from 'node:assert/strict'
import { test } from 'node:test'
import childMailModule from '../build/function/child-mail/index.js'
import addDeviceModule from '../build/function/child/add-device.js'
import invitationModule from '../build/function/parent-invitation/index.js'

const { createJoinRegisterToken, confirmDeviceJoin } = childMailModule
const { addChildDevice } = addDeviceModule
const { confirmParentInvitation } = invitationModule

const matches = (row, where) => Object.entries(where).every(([key, value]) => row[key] === value)

test('a child join with confirmByCode waits for the administrator to enter the four digits', async () => {
  const tokens = []
  const devices = []
  const child = { familyId: 'f000000001', userId: 'kid001', type: 'child', childMail: 'kid@example.com', childMailConfirmByCode: true }
  const legacy = {
    transaction: 'transaction',
    database: {
      user: { findOne: async ({ where }) => matches(child, where) ? child : null },
      family: { update: async () => {}, findOne: async () => ({ name: 'Family' }) },
      addDeviceToken: {
        findOne: async ({ where }) => tokens.find((row) => matches(row, where)) ?? null,
        create: async (row) => { tokens.push({ ...row, destroy: async () => {} }) },
        update: async (values, { where }) => {
          const rows = tokens.filter((row) => matches(row, where))
          rows.forEach((row) => Object.assign(row, values))
          return [rows.length]
        }
      },
      device: { create: async (row) => { devices.push(row) }, findAll: async () => [] }
    }
  }
  const transaction = { legacy, enqueueAfterCommit: () => {} }
  const registerToken = 'abcdefghij0123456789'
  const register = () => addChildDevice({
    database: { transaction: async (body) => body(transaction) },
    eventHandler: { countEvent: () => {} },
    websocket: {},
    request: { registerToken, deviceName: 'Tab', childDevice: { model: 'x' }, clientLevel: null }
  })

  const { confirmCode } = await createJoinRegisterToken({ transaction, mail: 'kid@example.com', registerToken })
  assert.match(confirmCode, /^[0-9]{4}$/)

  await assert.rejects(register(), { status: 409 })
  const wrong = confirmCode === '0000' ? '1111' : '0000'
  await assert.rejects(confirmDeviceJoin({ transaction, familyId: 'f000000001', code: wrong }), { status: 409 })
  await assert.rejects(confirmDeviceJoin({ transaction, familyId: 'f000000002', code: confirmCode }), { status: 409 })

  await confirmDeviceJoin({ transaction, familyId: 'f000000001', code: confirmCode })
  await register().catch(() => {})
  assert.equal(devices[0]?.currentUserId, 'kid001')
})

test('an invitation code is confirmed only by the same four digits and only after the invited person accepted', async () => {
  const invitation = { familyId: 'f000000001', mail: 'mama@example.com', confirmByCode: true, confirmCode: null }
  invitation.update = async (values) => Object.assign(invitation, values)
  const transaction = { legacy: { transaction: 't', database: { parentInvitation: { findOne: async ({ where }) => matches(invitation, where) ? invitation : null } } } }
  const confirm = (code) => confirmParentInvitation({ transaction, familyId: 'f000000001', mail: 'Mama@Example.com', code })

  await assert.rejects(confirm('1234'), { message: /has not accepted yet/ })
  invitation.confirmCode = '4821'
  await assert.rejects(confirm('1234'), { message: /wrong code/ })
  await confirm(' 4821 ')
  assert.equal(invitation.confirmByCode, false)
})
