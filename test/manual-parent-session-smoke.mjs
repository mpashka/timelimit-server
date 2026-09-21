// @tag:parent-console
// Сквозная проверка входа пользователем: семья с устройством и без него, сессия родителя,
// действие и ручка /parent/* от её имени, ответ на её запрос ключа, отзыв и уборка.
// Требует запущенного сервера и базы, поэтому вне `npm run test:unit` — запускается руками:
//
//   npm run build
//   NODE_ENV=development PORT=8099 MAIL_SENDER=test@example.com \
//     DATABASE_URL=postgres://... node build/index.js > /tmp/server.log
//   DATABASE_URL=postgres://... node test/manual-parent-session-smoke.mjs /tmp/server.log
//
// NODE_ENV=development заставляет сервер печатать письма в лог — отсюда берётся код входа.
// DATABASE_URL нужен самой проверке: уборку строк видно только в базе.
import { Buffer } from 'node:buffer'
import { readFileSync } from 'node:fs'
import pg from 'pg'

const base = 'http://127.0.0.1:8099'
const logFile = process.argv[2]

const db = new pg.Client({ connectionString: process.env.DATABASE_URL })
await db.connect()

const post = async (path, body) => {
  const res = await fetch(base + path, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body)
  })

  const text = await res.text()

  try {
    return { status: res.status, body: text ? JSON.parse(text) : null }
  } catch {
    return { status: res.status, body: null }
  }
}

const expect = (label, condition, detail) => {
  console.log((condition ? 'OK   ' : 'FAIL ') + label + (detail === undefined ? '' : ' -> ' + JSON.stringify(detail)))
  if (!condition) process.exitCode = 1
}

const lastCode = () => {
  const log = readFileSync(logFile, 'utf8')
  const codes = [...log.matchAll(/"code": "([^"]+)"/g)].map((m) => m[1])
  return codes[codes.length - 1]
}

const mailAuthToken = async (mail) => {
  const sent = await post('/auth/send-mail-login-code-v2', { mail, locale: 'en' })
  await new Promise((r) => setTimeout(r, 300))
  const signedIn = await post('/auth/sign-in-by-mail-code', {
    mailLoginToken: sent.body.mailLoginToken,
    receivedCode: lastCode()
  })
  return signedIn.body.mailAuthToken
}

const emptyStatus = () => ({ devices: '', apps: {}, categories: {}, users: '' })

const bcryptish = (length) => '$2a$10$' + 'a'.repeat(length)
const password = { hash: bcryptish(53), secondHash: bcryptish(53), secondSalt: bcryptish(22) }

const family = await post('/parent/create-family', {
  mailAuthToken: await mailAuthToken('parent@example.com'),
  parentPassword: password,
  parentDevice: { model: 'test' },
  deviceName: 'android of the parent',
  timeZone: 'Europe/Berlin',
  parentName: 'Parent'
})
expect('family created', family.status === 200, family.body)

const session = await post('/session/sign-in', { mailAuthToken: await mailAuthToken('parent@example.com') })
expect('session issued', session.status === 200 && session.body.sessionToken.startsWith('s:'), session.body)
expect('session id is not the device id', session.body.sessionId !== family.body.ownDeviceId, {
  sessionId: session.body.sessionId, deviceId: family.body.ownDeviceId
})

const sessionToken = session.body.sessionToken
const userId = session.body.userId

const pulled = await post('/sync/pull-status', { deviceAuthToken: sessionToken, status: emptyStatus() })
expect('session may pull the family status', pulled.status === 200, pulled.status)
expect('api level announces the parent session', pulled.body.apiLevel === 11, pulled.body.apiLevel)

const deviceList = await post('/sync/pull-status', {
  deviceAuthToken: family.body.deviceAuthToken,
  status: emptyStatus()
})
const deviceIds = (deviceList.body.devices?.data || []).map((device) => device.deviceId)
expect('the session is no device of the family', !deviceIds.includes(session.body.sessionId), deviceIds)

const addChild = (sequenceNumber) => post('/sync/push-actions', {
  deviceAuthToken: sessionToken,
  actions: [{
    encodedAction: JSON.stringify({ type: 'ADD_USER', userId: 'chi001', name: 'Child', userType: 'child', timeZone: 'Europe/Berlin' }),
    sequenceNumber,
    integrity: 'device',
    type: 'parent',
    userId
  }]
})

const pushed = await addChild(0)
expect('session pushed a parent action', pushed.status === 200 && pushed.body.shouldDoFullSync === false, pushed.body)

const afterPush = await post('/sync/pull-status', { deviceAuthToken: family.body.deviceAuthToken, status: emptyStatus() })
const childNames = (afterPush.body.users?.data || []).map((user) => user.name)
expect('the child added by the session is visible to the device', childNames.includes('Child'), childNames)

const repeated = await addChild(0)
expect('a repeated sequence number is refused', repeated.body.shouldDoFullSync === true, repeated.body)

const foreignParent = await post('/sync/push-actions', {
  deviceAuthToken: sessionToken,
  actions: [{
    encodedAction: JSON.stringify({ type: 'ADD_USER', userId: 'chi002', name: 'Other', userType: 'child', timeZone: 'Europe/Berlin' }),
    sequenceNumber: 1,
    integrity: 'device',
    type: 'parent',
    userId: 'chi001'
  }]
})
expect('the session may not act as another user', foreignParent.body.shouldDoFullSync === true, foreignParent.body)

// ручка /parent/* от устройства работает как раньше — обоими способами подтверждения родителя
const addDeviceTokenByDevice = await post('/parent/create-add-device-token', {
  deviceAuthToken: family.body.deviceAuthToken,
  parentId: userId,
  parentPasswordSecondHash: 'device'
})
expect('a device still creates an add device token', addDeviceTokenByDevice.status === 200, addDeviceTokenByDevice.status)

const addDeviceTokenByPassword = await post('/parent/create-add-device-token', {
  deviceAuthToken: family.body.deviceAuthToken,
  parentId: userId,
  parentPasswordSecondHash: password.secondHash
})
expect('the parent password still works from a device', addDeviceTokenByPassword.status === 200, addDeviceTokenByPassword.status)

// @tag:parent-console
// ручка /parent/*, которой раньше хватало только устройства
const addDeviceToken = await post('/parent/create-add-device-token', {
  deviceAuthToken: sessionToken,
  parentId: userId,
  parentPasswordSecondHash: 'device'
})
expect('a session may create an add device token', addDeviceToken.status === 200 && !!addDeviceToken.body.token, addDeviceToken.body)

const addDeviceTokenForeign = await post('/parent/create-add-device-token', {
  deviceAuthToken: sessionToken,
  parentId: 'chi001',
  parentPasswordSecondHash: 'device'
})
expect('a session may not create it on behalf of another user', addDeviceTokenForeign.status === 401, addDeviceTokenForeign.status)

// @tag:parent-console
// запрос ключа от сессии и ответ устройства на него: до счётчика ответов у сессии отвечать было некому
const cryptoStatus = () => ({ ...emptyStatus(), clientLevel: 8 })
const base64 = (length) => Buffer.alloc(length, 7).toString('base64')

const keyRequest = await post('/sync/push-actions', {
  deviceAuthToken: sessionToken,
  actions: [{
    encodedAction: JSON.stringify({
      type: 'SEND_KEY_REQUEST',
      dsn: 0,
      deviceId: family.body.ownDeviceId,
      dataType: 1,
      tempKey: base64(32),
      signature: base64(64)
    }),
    sequenceNumber: 2,
    integrity: '',
    type: 'appLogic',
    userId: ''
  }]
})
expect('a session may send a key request', keyRequest.body.shouldDoFullSync === false, keyRequest.body)

const deviceSees = await post('/sync/pull-status', {
  deviceAuthToken: family.body.deviceAuthToken,
  status: cryptoStatus()
})
const pendingRequest = (deviceSees.body.krq || []).find((item) => item.senId === session.body.sessionId)
expect('the device sees the key request of the session', pendingRequest !== undefined, deviceSees.body.krq)

const keyReply = await post('/sync/push-actions', {
  deviceAuthToken: family.body.deviceAuthToken,
  actions: [{
    encodedAction: JSON.stringify({
      type: 'REPLY_TO_KEY_REQUEST',
      rsn: pendingRequest?.srvSeq ?? 0,
      tempKey: base64(32),
      encryptedKey: base64(16),
      signature: base64(64)
    }),
    sequenceNumber: 0,
    integrity: '',
    type: 'appLogic',
    userId: ''
  }]
})
expect('the device may reply to a key request of a session', keyReply.body.shouldDoFullSync === false, keyReply.body)

const sessionSeesReply = await post('/sync/pull-status', {
  deviceAuthToken: sessionToken,
  status: cryptoStatus()
})
expect(
  'the session receives the key response addressed to it',
  (sessionSeesReply.body.kr || []).some((item) => item.sender === family.body.ownDeviceId),
  sessionSeesReply.body.kr
)

const revoked = await post('/session/revoke', { sessionToken })
expect('session revoked', revoked.status === 200, revoked.body)

const afterRevoke = await post('/sync/pull-status', { deviceAuthToken: sessionToken, status: emptyStatus() })
expect('a revoked session is refused', afterRevoke.status === 401, afterRevoke.status)

const deviceStillWorks = await post('/sync/pull-status', { deviceAuthToken: family.body.deviceAuthToken, status: emptyStatus() })
expect('the device keeps working as before', deviceStillWorks.status === 200, deviceStillWorks.status)

// @tag:parent-console
// семья без единого устройства и уборка её сессий
const founderMail = 'founder@example.com'
const founder = await post('/session/create-family', {
  mailAuthToken: await mailAuthToken(founderMail),
  parentPassword: password,
  timeZone: 'Europe/Berlin',
  parentName: 'Founder'
})
expect('a family was created without a device', founder.status === 200 && founder.body.sessionToken.startsWith('s:'), founder.body)

const founderStatus = await post('/sync/pull-status', {
  deviceAuthToken: founder.body.sessionToken,
  status: emptyStatus()
})
expect('the founding session may pull the family status', founderStatus.status === 200, founderStatus.status)
expect('the new family has no device at all', (founderStatus.body.devices?.data || []).length === 0, founderStatus.body.devices)
expect('the founding session is the only parent of the new family',
  (founderStatus.body.users?.data || []).map((user) => user.id).includes(founder.body.userId),
  founderStatus.body.users)

const countSessions = async (familyId) => {
  const { rows } = await db.query('SELECT COUNT(*)::int AS count FROM "ParentSessions" WHERE "familyId" = $1', [familyId])
  return rows[0].count
}

expect('the session of the new family is stored', await countSessions(founder.body.familyId) === 1)

const deleted = await post('/parent/delete-account', {
  deviceAuthToken: founder.body.sessionToken,
  mailAuthTokens: [await mailAuthToken(founderMail)]
})
expect('a session may delete its family', deleted.status === 200, deleted.status)
expect('deleting the family removed its sessions', await countSessions(founder.body.familyId) === 0)

await db.end()
