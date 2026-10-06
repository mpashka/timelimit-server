// @tag:parent-invitation
import assert from 'node:assert/strict'
import { test } from 'node:test'
import signInModule from '../build/function/parent/sign-in-into-family.js'

const { signInIntoFamily } = signInModule

const childRow = { familyId: 'f123456789', userId: 'kid001', adultRole: 'admin', type: 'child', mail: 'kid@example.com' }

const databaseWith = (rows) => {
  const created = []
  const legacy = {
    transaction: 'transaction',
    database: {
      authtoken: {
        findOne: async () => ({ mail: 'kid@example.com', locale: 'en' }),
        destroy: async () => 1
      },
      user: {
        findOne: async ({ where }) => rows.find((row) => Object.entries(where).every(([key, value]) => row[key] === value)) ?? null
      },
      device: { create: async (row) => { created.push(row) } }
    }
  }
  return { created, database: { transaction: async (body) => body({ legacy }) } }
}

test("a child's mail does not sign a device into the family", async () => {
  const { created, database } = databaseWith([childRow])

  await assert.rejects(signInIntoFamily({
    database,
    eventHandler: { countEvent: () => {} },
    mailAuthToken: 'token',
    newDeviceInfo: { model: 'x' },
    deviceName: 'x',
    websocket: {},
    clientLevel: null
  }), { status: 409 })
  assert.deepEqual(created, [])
})
