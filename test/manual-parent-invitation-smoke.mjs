// @tag:parent-invitation
// Сквозная проверка приглашения второго родителя: приглашение от сессии, вход приглашённого мимо
// MAIL_WHITELIST, согласие без пароля, отказ пустому хэшу, отзыв и отказ от приглашения.
// Вне `npm run test:unit` — нужен запущенный сервер с MAIL_WHITELIST=parent@example.com:
//
//   NODE_ENV=development PORT=8099 MAIL_SENDER=test@example.com MAIL_WHITELIST=parent@example.com \
//     DATABASE_URL=postgres://... node build/index.js > /tmp/server.log
//   node test/manual-parent-invitation-smoke.mjs /tmp/server.log
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


const sent = async (mail) => post('/auth/send-mail-login-code-v2', { mail, locale: 'en' })

const bcryptish = (length) => '$2a$10$' + 'a'.repeat(length)
const password = { hash: bcryptish(53), secondHash: bcryptish(53), secondSalt: bcryptish(22) }

expect('a stranger is still stopped by the whitelist', (await sent('mama@example.com')).body.mailAddressNotWhitelisted === true)

const family = await post('/parent/create-family', {
  mailAuthToken: await mailAuthToken('parent@example.com'),
  parentPassword: password,
  parentDevice: { model: 'test' },
  deviceName: 'android of the parent',
  timeZone: 'Europe/Berlin',
  parentName: 'Parent'
})
expect('family created', family.status === 200, family.body)
const deviceToken = family.body.deviceAuthToken

const session = await post('/session/sign-in', { mailAuthToken: await mailAuthToken('parent@example.com') })
const asParent = { deviceAuthToken: session.body.sessionToken, parentUserId: session.body.userId, parentPasswordSecondHash: 'device' }

const invited = await post('/parent/invite-parent', { ...asParent, mail: 'Mama@Example.com' })
expect('the parent invites by mail, stored lowercase', invited.status === 200 && invited.body.mail === 'mama@example.com', invited.body)

const ownMail = await post('/parent/invite-parent', { ...asParent, mail: 'parent@example.com' })
expect('an address of a parent can not be invited', ownMail.status === 409, ownMail.status)

const listed = await post('/parent/list-parent-invitations', asParent)
expect('the invitation is listed', listed.status === 200 && listed.body.invitations.length === 1, listed.body)

const mamaToken = await mailAuthToken('mama@example.com')
expect('the invited address passes the whitelist', typeof mamaToken === 'string', mamaToken)

const status = await post('/parent/get-status-by-mail-address', { mailAuthToken: mamaToken })
expect('the status tells who invites', status.body.status === 'without family' && status.body.invitation?.inviterName === 'Parent', status.body)

const accepted = await post('/session/accept-invitation', { mailAuthToken: mamaToken, parentName: 'Mama', timeZone: 'Europe/Belgrade' })
expect('accepting without a password gives a session', accepted.status === 200 && accepted.body.sessionToken.startsWith('s:') &&
  accepted.body.familyId === session.body.familyId, accepted.body)

const afterAccept = await post('/parent/list-parent-invitations', asParent)
expect('the invitation is used up', afterAccept.body.invitations.length === 0, afterAccept.body)

const asMama = { deviceAuthToken: accepted.body.sessionToken, parentUserId: accepted.body.userId, parentPasswordSecondHash: 'device' }
const mamaActs = await post('/parent/list-parent-invitations', asMama)
expect('the second parent acts with her session', mamaActs.status === 200, mamaActs.status)

const forged = await post('/parent/list-parent-invitations', { deviceAuthToken: deviceToken, parentUserId: accepted.body.userId, parentPasswordSecondHash: '' })
expect('an empty password hash does not confirm the parent without a password', forged.status === 401, forged.status)

const pulled = await post('/sync/pull-status', { deviceAuthToken: deviceToken, status: { devices: '', apps: {}, categories: {}, users: '' } })
const parents = pulled.body.users?.data.filter((user) => user.type === 'parent') ?? []
expect('the family device sees two parents', parents.length === 2, parents.map((user) => user.name))

const mamaAgain = await post('/session/sign-in', { mailAuthToken: await mailAuthToken('mama@example.com') })
expect('the second parent signs in again as a plain parent', mamaAgain.status === 200 && mamaAgain.body.userId === accepted.body.userId, mamaAgain.body)

await post('/parent/invite-parent', { ...asParent, mail: 'papa@example.com' })
const revoked = await post('/parent/revoke-parent-invitation', { ...asParent, mail: 'papa@example.com' })
expect('the parent revokes an invitation', revoked.status === 200, revoked.body)
expect('a revoked address is stopped by the whitelist again', (await sent('papa@example.com')).body.mailAddressNotWhitelisted === true)

await post('/parent/invite-parent', { ...asParent, mail: 'aunt@example.com' })
const declined = await post('/session/decline-invitation', { mailAuthToken: await mailAuthToken('aunt@example.com') })
const afterDecline = await post('/parent/list-parent-invitations', asParent)
expect('the invited declines and the invitation is gone', declined.status === 200 && afterDecline.body.invitations.length === 0, afterDecline.body)
