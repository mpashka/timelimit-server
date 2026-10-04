// @tag:adult-role @tag:parent-invitation
// Сквозная проверка ролей взрослых и согласия взрослого со своей семьёй: пустая своя семья
// удаляется, непустая — отказ; права member / manager / admin, RENAME_ADULT, правило последнего
// админа, выход, удаление взрослого и семьи, замена секрета кода родителя. Вне `npm run test:unit` — нужен сервер и база:
//
//   NODE_ENV=development PORT=8099 MAIL_SENDER=test@example.com ALWAYS_PRO=yes \
//     MAIL_WHITELIST=parent@example.com,solo@example.com,busy@example.com \
//     DATABASE_URL=postgres://... node build/index.js > /tmp/server.log
//   DATABASE_URL=postgres://... node test/manual-adult-roles-smoke.mjs /tmp/server.log
import { createHash } from 'node:crypto'
import { readFileSync } from 'node:fs'
import pg from 'pg'

const base = process.env.BASE_URL ?? 'http://127.0.0.1:8099'
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
    return { status: res.status, body: text ? JSON.parse(text) : null, text }
  } catch {
    return { status: res.status, body: null, text }
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

const as = (session) => ({ deviceAuthToken: session.sessionToken, parentUserId: session.userId, parentPasswordSecondHash: 'device' })

const sequences = new Map()
const act = async (session, action) => {
  const sequenceNumber = sequences.get(session.sessionToken) ?? 0
  sequences.set(session.sessionToken, sequenceNumber + 1)

  return post('/sync/push-actions', {
    deviceAuthToken: session.sessionToken,
    actions: [{ encodedAction: JSON.stringify(action), sequenceNumber, integrity: 'device', type: 'parent', userId: session.userId }]
  })
}

const userRow = async (familyId, userId) => (await db.query('SELECT "name", "adultRole" FROM "Users" WHERE "familyId" = $1 AND "userId" = $2', [familyId, userId])).rows[0]
const familyExists = async (familyId) => (await db.query('SELECT 1 FROM "Families" WHERE "familyId" = $1', [familyId])).rowCount === 1
const parentCodeSecret = async (familyId) => (await db.query('SELECT "parentCodeSecret" FROM "Families" WHERE "familyId" = $1', [familyId])).rows[0].parentCodeSecret
// токен почты мимо письма: лимит кодов на адрес уже выбран
const directMailAuthToken = async (mail) => {
  const token = 'direct' + Math.random().toString(36).slice(2).padEnd(26, '0').slice(0, 26)
  await db.query('INSERT INTO "AuthTokens" ("token", "mail", "createdAt", "locale") VALUES ($1, $2, $3, $4)', [token, mail, Date.now(), 'en'])
  return token
}
const extraTime = async (familyId) => Number((await db.query('SELECT "extraTimeInMillis" FROM "Categories" WHERE "familyId" = $1 AND "categoryId" = $2', [familyId, 'cat001'])).rows[0].extraTimeInMillis)

// Сервер шлёт одному адресу не больше двух кодов за пять минут — токены почты здесь на счету.

// --- семья A: админ, ребёнок с категорией
const pavel = (await post('/session/create-family', {
  mailAuthToken: await mailAuthToken('parent@example.com'), parentPassword: password, timeZone: 'Europe/Berlin', parentName: 'Parent'
})).body
const familyId = pavel.familyId
expect('family A and the admin session', typeof pavel.sessionToken === 'string', pavel)

await act(pavel, { type: 'ADD_USER', userId: 'chi001', name: 'Child', userType: 'child', timeZone: 'Europe/Berlin' })
await act(pavel, { type: 'CREATE_CATEGORY', childId: 'chi001', categoryId: 'cat001', title: 'Games' })
expect('the admin adds a child with a category', (await extraTime(familyId)) === 0)

// --- S2: своя пустая семья удаляется при согласии
const solo = (await post('/session/create-family', {
  mailAuthToken: await mailAuthToken('solo@example.com'), parentPassword: password, timeZone: 'Europe/Berlin', parentName: 'Solo'
})).body
expect('solo has his own empty family', typeof solo.familyId === 'string' && solo.familyId !== familyId, solo)

const invitedSolo = await post('/parent/invite-parent', { ...as(pavel), mail: 'solo@example.com', role: 'member' })
expect('an address with its own family can be invited', invitedSolo.status === 200 && invitedSolo.body.role === 'member', invitedSolo.text)

const soloToken = await mailAuthToken('solo@example.com')
const soloStatus = await post('/parent/get-status-by-mail-address', { mailAuthToken: soloToken })
expect('S4: the status with family carries the invitation and the size of the own family',
  soloStatus.body.status === 'with family' && soloStatus.body.invitation?.inviterName === 'Parent' &&
  soloStatus.body.invitation?.role === 'member' &&
  JSON.stringify(soloStatus.body.ownFamily) === JSON.stringify({ children: 0, devices: 0, adults: 1 }), soloStatus.body)

const mama = (await post('/session/accept-invitation', { mailAuthToken: soloToken, parentName: 'Mama', timeZone: 'Europe/Belgrade' })).body
expect('S2: accepting moves him into family A', mama.familyId === familyId, mama)
expect('S2: his empty family is deleted', !(await familyExists(solo.familyId)))
expect('S2: he joined as member', (await userRow(familyId, mama.userId))?.adultRole === 'member')

// --- S3: своя непустая семья — отказ, семья цела
const busyFamily = await post('/parent/create-family', {
  mailAuthToken: await mailAuthToken('busy@example.com'),
  parentPassword: password,
  parentDevice: { model: 'test' },
  deviceName: 'tablet of busy',
  timeZone: 'Europe/Berlin',
  parentName: 'Busy'
})
const busyFamilyId = (await db.query('SELECT "familyId" FROM "Users" WHERE "mail" = $1', ['busy@example.com'])).rows[0].familyId
await post('/parent/invite-parent', { ...as(pavel), mail: 'busy@example.com' })
const busyToken = await mailAuthToken('busy@example.com')
const busyStatus = await post('/parent/get-status-by-mail-address', { mailAuthToken: busyToken })
expect('S4: the own family with a device is reported', busyStatus.body.ownFamily?.devices === 1 && busyStatus.body.invitation?.role === 'manager', busyStatus.body)
const busyAccept = await post('/session/accept-invitation', { mailAuthToken: busyToken, parentName: 'Busy', timeZone: 'Europe/Berlin' })
expect('S3: a non-empty own family is a conflict with the reason', busyAccept.status === 409 &&
  busyAccept.text.includes('you already have your own family with 0 children and 1 devices'), busyAccept.text)
expect('S3: the own family stays', busyFamily.status === 200 && await familyExists(busyFamilyId))
await post('/parent/revoke-parent-invitation', { ...as(pavel), mail: 'busy@example.com' })

// --- менеджер
await post('/parent/invite-parent', { ...as(pavel), mail: 'uncle@example.com' })
const uncle = (await post('/session/accept-invitation', { mailAuthToken: await mailAuthToken('uncle@example.com'), parentName: 'Uncle', timeZone: 'Europe/Berlin' })).body
expect('the invitation role defaults to manager', (await userRow(familyId, uncle.userId))?.adultRole === 'manager')

// --- pull-status: роли и код родителя
const pulledByPavel = await post('/sync/pull-status', { deviceAuthToken: pavel.sessionToken, status: emptyStatus() })
const roles = Object.fromEntries(pulledByPavel.body.users.data.filter((u) => u.type === 'parent').map((u) => [u.name, u.adultRole]))
expect('pull-status gives the role of every adult', roles.Parent === 'admin' && roles.Mama === 'member' && roles.Uncle === 'manager', roles)
expect('children carry no role', pulledByPavel.body.users.data.find((u) => u.type === 'child')?.adultRole === undefined)
expect('the admin session sees the parent code', typeof pulledByPavel.body.users.parentCodeSecret === 'string')
const pulledByMama = await post('/sync/pull-status', { deviceAuthToken: mama.sessionToken, status: emptyStatus() })
expect('the member session does not see the parent code', pulledByMama.status === 200 && pulledByMama.body.users.parentCodeSecret === undefined)
const pulledByUncle = await post('/sync/pull-status', { deviceAuthToken: uncle.sessionToken, status: emptyStatus() })
expect('the manager session sees the parent code', typeof pulledByUncle.body.users.parentCodeSecret === 'string')

// --- член
await act(mama, { type: 'INCREMENT_CATEGORY_EXTRATIME', categoryId: 'cat001', addedExtraTime: 60000 })
expect('a member can not give extra time', (await extraTime(familyId)) === 0)
const mamaInvites = await post('/parent/invite-parent', { ...as(mama), mail: 'x@example.com' })
expect('a member can not invite, and is told which role is needed', mamaInvites.status === 403 && mamaInvites.text.includes('needs the adult role admin'), mamaInvites.text)
const mamaDeviceToken = await post('/parent/create-add-device-token', { deviceAuthToken: mama.sessionToken, parentId: mama.userId, parentPasswordSecondHash: 'device' })
expect('a member can not connect a tablet', mamaDeviceToken.status === 403, mamaDeviceToken.status)
expect('a member reads the invitations', (await post('/parent/list-parent-invitations', as(mama))).status === 200)
expect('a member reads the app usage', (await post('/parent/get-app-usage', { ...as(mama), userId: 'chi001', fromDay: 0, toDay: 1 })).status === 200)
await act(mama, { type: 'RENAME_ADULT', userId: mama.userId, name: 'Mamochka' })
expect('a member renames herself', (await userRow(familyId, mama.userId))?.name === 'Mamochka')

// --- менеджер
await act(uncle, { type: 'INCREMENT_CATEGORY_EXTRATIME', categoryId: 'cat001', addedExtraTime: 60000 })
expect('a manager gives extra time', (await extraTime(familyId)) === 60000)
const uncleInvites = await post('/parent/invite-parent', { ...as(uncle), mail: 'x@example.com' })
expect('a manager can not invite', uncleInvites.status === 403, uncleInvites.status)
const uncleDeletes = await post('/parent/delete-family', { ...as(uncle), mailAuthToken: await mailAuthToken('uncle@example.com') })
expect('a manager can not delete the family', uncleDeletes.status === 403 && await familyExists(familyId), uncleDeletes.status)
await act(uncle, { type: 'RENAME_ADULT', userId: pavel.userId, name: 'Hacked' })
expect('a manager can not rename another adult', (await userRow(familyId, pavel.userId))?.name === 'Parent')
const removalProof = createHash('sha512').update(pavel.userId + password.secondHash + 'remove').digest('hex').substring(0, 16)
await act(uncle, { type: 'REMOVE_USER', userId: pavel.userId, authentication: removalProof })
expect('a manager can not remove an adult even with the password proof', (await userRow(familyId, pavel.userId)) !== undefined)

// --- админ
await act(pavel, { type: 'RENAME_ADULT', userId: mama.userId, name: 'Mama' })
expect('an admin renames another adult', (await userRow(familyId, mama.userId))?.name === 'Mama')
expect('an admin invites', (await post('/parent/invite-parent', { ...as(pavel), mail: 'x@example.com' })).status === 200)
await post('/parent/revoke-parent-invitation', { ...as(pavel), mail: 'x@example.com' })

// --- понижение до члена: секрет кода меняется, устройство члену не положено
const secretBeforeDemotion = await parentCodeSecret(familyId)
await post('/parent/set-adult-role', { ...as(pavel), userId: uncle.userId, role: 'member' })
expect('demoting to member replaces the parent code secret', (await parentCodeSecret(familyId)) !== secretBeforeDemotion)
const memberDevice = await post('/parent/sign-in-into-family', {
  mailAuthToken: await directMailAuthToken('uncle@example.com'), parentDevice: { model: 'test' }, deviceName: 'tablet of uncle'
})
expect('a member can not sign a device into the family', memberDevice.status === 403 && memberDevice.text.includes('needs the adult role manager'), memberDevice.text)
await post('/parent/set-adult-role', { ...as(pavel), userId: uncle.userId, role: 'manager' })

// --- последний админ
const demoteSelf = await post('/parent/set-adult-role', { ...as(pavel), userId: pavel.userId, role: 'manager' })
expect('the last admin can not be demoted', demoteSelf.status === 409 && demoteSelf.text.includes('the last admin can not be demoted'), demoteSelf.text)
const leaveLast = await post('/parent/leave-family', as(pavel))
expect('the last admin can not leave', leaveLast.status === 409 && leaveLast.text.includes('the last admin can not leave the family'), leaveLast.text)
const removeSelf = await post('/parent/remove-adult', { ...as(pavel), userId: pavel.userId })
expect('an admin can not remove himself', removeSelf.status === 409, removeSelf.text)
const managerSetsRole = await post('/parent/set-adult-role', { ...as(uncle), userId: uncle.userId, role: 'admin' })
expect('a manager can not change roles', managerSetsRole.status === 403, managerSetsRole.status)
const promote = await post('/parent/set-adult-role', { ...as(pavel), userId: uncle.userId, role: 'admin' })
expect('an admin makes the manager an admin', promote.status === 200 && (await userRow(familyId, uncle.userId))?.adultRole === 'admin', promote.text)
const uncleDemotesPavel = await post('/parent/set-adult-role', { ...as(uncle), userId: pavel.userId, role: 'manager' })
expect('admins are equal: one demotes another', uncleDemotesPavel.status === 200 && (await userRow(familyId, pavel.userId))?.adultRole === 'manager')
await post('/parent/set-adult-role', { ...as(uncle), userId: pavel.userId, role: 'admin' })

// --- выход и удаление взрослого
const secretBeforeLeave = await parentCodeSecret(familyId)
const mamaLeaves = await post('/parent/leave-family', as(mama))
expect('a member leaves the family', mamaLeaves.status === 200 && (await userRow(familyId, mama.userId)) === undefined, mamaLeaves.text)
expect('a member who leaves knew no parent code, the secret stays', (await parentCodeSecret(familyId)) === secretBeforeLeave)
expect('the session of who left is gone', (await post('/sync/pull-status', { deviceAuthToken: mama.sessionToken, status: emptyStatus() })).status === 401)
const removeUncle = await post('/parent/remove-adult', { ...as(pavel), userId: uncle.userId })
expect('an admin removes another adult', removeUncle.status === 200 && (await userRow(familyId, uncle.userId)) === undefined, removeUncle.text)
expect('removing an adult who knew the parent code replaces the secret', (await parentCodeSecret(familyId)) !== secretBeforeLeave)
expect('the session of the removed adult is gone', (await post('/parent/list-parent-invitations', as(uncle))).status === 401)

// --- удаление семьи
const foreignToken = await post('/parent/delete-family', { ...as(pavel), mailAuthToken: busyToken })
expect('a mail confirmation of another address does not delete the family', foreignToken.status === 403 && await familyExists(familyId), foreignToken.text)
const deleted = await post('/parent/delete-family', { ...as(pavel), mailAuthToken: await mailAuthToken('parent@example.com') })
expect('the admin deletes the family with his own fresh mail confirmation', deleted.status === 200 && !(await familyExists(familyId)), deleted.text)
expect('the admin session is gone with the family', (await post('/sync/pull-status', { deviceAuthToken: pavel.sessionToken, status: emptyStatus() })).status === 401)
expect('the other family is untouched', await familyExists(busyFamilyId))

await db.end()
