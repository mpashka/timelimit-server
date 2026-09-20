// @tag:parent-console
// Сквозная проверка входа пользователем: семья, сессия родителя, действие от её имени, отзыв.
// Требует запущенного сервера и базы, поэтому вне `npm run test:unit` — запускается руками:
//
//   npm run build
//   NODE_ENV=development PORT=8099 MAIL_SENDER=test@example.com \
//     DATABASE_URL=postgres://... node build/index.js > /tmp/server.log
//   node test/manual-parent-session-smoke.mjs /tmp/server.log
//
// NODE_ENV=development заставляет сервер печатать письма в лог — отсюда берётся код входа.
import { readFileSync } from 'node:fs'

const base = 'http://127.0.0.1:8099'
const logFile = process.argv[2]

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

const revoked = await post('/session/revoke', { sessionToken })
expect('session revoked', revoked.status === 200, revoked.body)

const afterRevoke = await post('/sync/pull-status', { deviceAuthToken: sessionToken, status: emptyStatus() })
expect('a revoked session is refused', afterRevoke.status === 401, afterRevoke.status)

const deviceStillWorks = await post('/sync/pull-status', { deviceAuthToken: family.body.deviceAuthToken, status: emptyStatus() })
expect('the device keeps working as before', deviceStillWorks.status === 200, deviceStillWorks.status)
