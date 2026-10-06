// @tag:family-join-google
import assert from 'node:assert/strict'
import { test } from 'node:test'
import childMailModule from '../build/function/child-mail/index.js'
import addDeviceModule from '../build/function/child/add-device.js'

const { setChildMail, createJoinRegisterToken } = childMailModule
const { addChildDevice } = addDeviceModule

const matches = (row, where) => Object.entries(where).every(([key, value]) => row[key] === value)

const transactionWith = ({ users = [], adultMails = [], tokens = [] }) => {
  const devices = []
  const user = {
    findOne: async ({ where }) => {
      if (where.constructor.name === 'Where') return adultMails.includes(where.logic) ? { userId: 'adu001' } : null
      const row = users.find((item) => matches(item, where))
      return row ? { ...row, update: async (values) => Object.assign(row, values) } : null
    }
  }
  const legacy = {
    transaction: 'transaction',
    database: {
      user,
      family: { update: async () => {}, findOne: async () => ({ name: 'Family' }) },
      addDeviceToken: {
        findOne: async ({ where }) => {
          const row = tokens.find((item) => matches(item, where))
          return row ? { ...row, destroy: async () => {} } : null
        },
        create: async (row) => { tokens.push(row) }
      },
      device: { create: async (row) => { devices.push(row) }, findAll: async () => [] }
    }
  }
  return { tokens, devices, users, transaction: { legacy, enqueueAfterCommit: () => {} } }
}

const set = (transaction, childUserId, mail) => setChildMail({ transaction, websocket: {}, familyId: 'f000000001', childUserId, mail })
const kid = (userId, childMail = null) => ({ familyId: 'f000000001', userId, type: 'child', childMail })

test('a child mail goes only to a child, and only when no other child or adult has it', async () => {
  const { transaction, users } = transactionWith({
    users: [{ familyId: 'f000000001', userId: 'adu001', type: 'parent', childMail: null }, kid('kid001'), kid('kid002', 'taken@example.com')],
    adultMails: ['mama@example.com']
  })

  await assert.rejects(set(transaction, 'adu001', 'kid@example.com'), { status: 409 })
  await assert.rejects(set(transaction, 'kid001', 'taken@example.com'), { message: 'mail is already linked to another child' })
  await assert.rejects(set(transaction, 'kid001', 'Mama@Example.com'), { status: 409 })

  await set(transaction, 'kid001', ' Kid@Example.com ')
  assert.equal(users[1].childMail, 'kid@example.com')
})

test('join leaves a register code for the linked child, and add-device puts the device to that child', async () => {
  const { transaction, tokens, devices } = transactionWith({ users: [kid('kid001', 'kid@example.com')] })
  const registerToken = 'abcdefghij0123456789'

  await assert.rejects(createJoinRegisterToken({ transaction, mail: 'other@example.com', registerToken }), { status: 404 })
  await createJoinRegisterToken({ transaction, mail: 'kid@example.com', registerToken })
  assert.equal(tokens[0].userId, 'kid001')
  await assert.rejects(createJoinRegisterToken({ transaction, mail: 'kid@example.com', registerToken }), { status: 409 })

  await addChildDevice({
    database: { transaction: async (body) => body(transaction) },
    eventHandler: { countEvent: () => {} },
    websocket: {},
    request: { registerToken, deviceName: 'Tab', childDevice: { model: 'x' }, clientLevel: null }
  }).catch(() => {})
  assert.equal(devices[0]?.currentUserId, 'kid001')
})
