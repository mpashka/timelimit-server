// @tag:app-icon
import assert from 'node:assert/strict'
import { test } from 'node:test'
import serialization from '../build/action/serialization/index.js'
import newuiapplogic from '../build/action/newuiapplogic.js'

const { parseAppLogicAction } = serialization
const { isAppIconReplacedBy } = newuiapplogic

const png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='

test('the server takes an app icon only as a base64 PNG', () => {
  const item = { packageName: 'com.mojang.minecraftpe', title: 'Minecraft', icon: png }

  assert.doesNotThrow(() => parseAppLogicAction({ type: 'REPORT_APP_ICONS', items: [item] }))
  assert.throws(() => parseAppLogicAction({ type: 'REPORT_APP_ICONS', items: [{ ...item, icon: 'R0lGODlh' }] }))
  assert.throws(() => parseAppLogicAction({ type: 'REPORT_APP_ICONS', items: [item, item] }))
})

test('the icon of the newer app wins, an item without versionCode only replaces one without it', () => {
  assert.equal(isAppIconReplacedBy({ storedVersionCode: 5, incomingVersionCode: 6 }), true)
  assert.equal(isAppIconReplacedBy({ storedVersionCode: 5, incomingVersionCode: 5 }), true)
  assert.equal(isAppIconReplacedBy({ storedVersionCode: 5, incomingVersionCode: 4 }), false)
  assert.equal(isAppIconReplacedBy({ storedVersionCode: 5, incomingVersionCode: undefined }), false)
  assert.equal(isAppIconReplacedBy({ storedVersionCode: null, incomingVersionCode: undefined }), true)
  assert.equal(isAppIconReplacedBy({ storedVersionCode: null, incomingVersionCode: 0 }), true)
  assert.throws(() => parseAppLogicAction({ type: 'REPORT_APP_ICONS', items: [{ packageName: 'a.b', title: 'A', icon: png, versionCode: -1 }] }))
})
