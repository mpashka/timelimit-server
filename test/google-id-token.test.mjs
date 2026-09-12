// @tag:parent-console
import assert from 'node:assert/strict'
import { test } from 'node:test'
import { SignJWT, createLocalJWKSet, exportJWK, generateKeyPair } from 'jose'
import googleIdToken from '../build/util/google-id-token.js'

const { verifyGoogleIdToken, GoogleIdTokenException } = googleIdToken

const clientIds = ['other-client', 'our-client']
const { publicKey, privateKey } = await generateKeyPair('RS256')
const { privateKey: foreignKey } = await generateKeyPair('RS256')
const keySet = createLocalJWKSet({ keys: [{ ...(await exportJWK(publicKey)), kid: 'k1', alg: 'RS256' }] })

const claims = { iss: 'https://accounts.google.com', aud: 'our-client', email: 'Parent@Example.com', email_verified: true }

async function sign ({ payload = claims, key = privateKey, expiresIn = '1h' } = {}) {
  const jwt = new SignJWT(payload).setProtectedHeader({ alg: 'RS256', kid: 'k1' }).setIssuedAt()
  if (expiresIn) jwt.setExpirationTime(expiresIn)
  return jwt.sign(key)
}

const verify = async (idToken) => verifyGoogleIdToken({ idToken, clientIds, keySet })

test('valid google id token yields the mail address', async () => {
  assert.deepEqual(await verify(await sign()), { mail: 'Parent@Example.com' })
  assert.deepEqual(await verify(await sign({ payload: { ...claims, iss: 'accounts.google.com' } })), { mail: 'Parent@Example.com' })
})

test('invalid google id tokens are rejected', async () => {
  const invalid = [
    await sign({ key: foreignKey }),
    await sign({ payload: { ...claims, iss: 'https://evil.example.com' } }),
    await sign({ payload: { ...claims, aud: 'foreign-client' } }),
    await sign({ payload: { ...claims, email_verified: false } }),
    await sign({ payload: { ...claims, email_verified: 'true' } }),
    await sign({ payload: { ...claims, exp: Math.floor(Date.now() / 1000) - 3600 }, expiresIn: null }),
    await sign({ expiresIn: null })
  ]

  for (const idToken of invalid) {
    await assert.rejects(verify(idToken), GoogleIdTokenException)
  }

  await assert.rejects(verifyGoogleIdToken({ idToken: await sign(), clientIds: [], keySet }), GoogleIdTokenException)
})
