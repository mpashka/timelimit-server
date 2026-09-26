// @tag:app-icon
import assert from 'node:assert/strict'
import { test } from 'node:test'
import serialization from '../build/action/serialization/index.js'

const { parseAppLogicAction } = serialization

const png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=='

test('the server takes an app icon only as a base64 PNG', () => {
  const item = { packageName: 'com.mojang.minecraftpe', title: 'Minecraft', icon: png }

  assert.doesNotThrow(() => parseAppLogicAction({ type: 'REPORT_APP_ICONS', items: [item] }))
  assert.throws(() => parseAppLogicAction({ type: 'REPORT_APP_ICONS', items: [{ ...item, icon: 'R0lGODlh' }] }))
  assert.throws(() => parseAppLogicAction({ type: 'REPORT_APP_ICONS', items: [item, item] }))
})
