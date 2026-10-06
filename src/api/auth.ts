/*
 * server component for the TimeLimit App
 * Copyright (C) 2019 - 2026 Jonas Lochmann
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, version 3 of the License.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import { json } from 'body-parser'
import { Router } from 'express'
import { BadRequest, NotImplemented, Unauthorized } from 'http-errors'
import { createJoinRegisterToken, findLinkedChild, sanitizeChildMail } from '../function/child-mail'
import { config } from '../config'
import { SimpleDatabase } from '../database/simple'
import { createAuthTokenByMailAddress } from '../function/authentication'
import { isMailAddressKnownToServer } from '../function/parent-invitation'
import { sendLoginCode, signInByMailCode } from '../function/authentication/login-by-mail'
import { GoogleIdTokenException, verifyGoogleIdToken } from '../util/google-id-token'
import { canSendMail, isMailAddressCoveredByWhitelist, isMailServerBlacklisted, sanitizeMailAddress } from '../util/mail'
import {
  isJoinPreviewRequest,
  isJoinRequest,
  isSendMailLoginCodeRequest,
  isSignInByGoogleRequest,
  isSignInByMailCodeRequest
} from './validator'

export const createAuthRouter = (database: SimpleDatabase) => {
  const router = Router()

  // @tag:parent-invitation
  const isMailAddressAllowed = async (mail: string) => isMailAddressCoveredByWhitelist(mail) ||
    await database.transaction((transaction) => isMailAddressKnownToServer({ transaction, mail }))

  const assertGoogleSignInEnabled = () => {
    if (config.googleClientIds.length === 0) {
      throw new NotImplemented('sign in by google is disabled because GOOGLE_CLIENT_ID is not set')
    }
  }

  const verifiedGoogleMail = async (idToken: string) => (await verifyGoogleIdToken({
    idToken,
    clientIds: config.googleClientIds
  }).catch((ex) => {
    if (ex instanceof GoogleIdTokenException) throw new Unauthorized('invalid google id token: ' + ex.message)
    else throw ex
  })).mail

  // @tag:family-join-link
  router.get('/capabilities', (_, res) => {
    res.json({ mailLogin: canSendMail(), googleSignIn: config.googleClientIds.length > 0 })
  })

  router.post('/send-mail-login-code-v2', json(), async (req, res, next) => {
    try {
      // @tag:family-join-link
      if (!canSendMail()) {
        throw new NotImplemented('this server sends no mail because MAIL_TRANSPORT is not set: sign in with Google')
      }

      if (!isSendMailLoginCodeRequest(req.body)) {
        throw new BadRequest()
      }

      const mail = sanitizeMailAddress(req.body.mail)

      if (!mail) {
        throw new BadRequest()
      }

      if (!await isMailAddressAllowed(mail)) {
        res.json({ mailAddressNotWhitelisted: true })
      } else if (isMailServerBlacklisted(mail)) {
        res.json({ mailServerBlacklisted: true })
      } else {
        const { mailLoginToken } = await sendLoginCode({
          mail,
          deviceAuthToken: req.body.deviceAuthToken,
          locale: req.body.locale,
          database
        })

        res.json({ mailLoginToken })
      }
    } catch (ex) {
      next(ex)
    }
  })

  router.post('/sign-in-by-mail-code', json(), async (req, res, next) => {
    try {
      if (!isSignInByMailCodeRequest(req.body)) {
        throw new BadRequest()
      }

      const { mailAuthToken } = await signInByMailCode({
        receivedCode: req.body.receivedCode,
        mailLoginToken: req.body.mailLoginToken,
        database
      })

      res.json({ mailAuthToken })
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:parent-console
  router.post('/sign-in-by-google', json(), async (req, res, next) => {
    try {
      assertGoogleSignInEnabled()

      if (!isSignInByGoogleRequest(req.body)) {
        throw new BadRequest()
      }

      const { locale } = req.body

      const mail = sanitizeMailAddress(await verifiedGoogleMail(req.body.idToken))

      if (!mail) {
        throw new BadRequest()
      }

      if (!await isMailAddressAllowed(mail)) {
        res.json({ mailAddressNotWhitelisted: true })
      } else if (isMailServerBlacklisted(mail)) {
        res.json({ mailServerBlacklisted: true })
      } else {
        const mailAuthToken = await database.transaction(
          (transaction) => createAuthTokenByMailAddress({ mail, locale, transaction })
        )

        res.json({ mailAuthToken })
      }
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:family-join-google
  router.post('/join-preview', json(), async (req, res, next) => {
    try {
      assertGoogleSignInEnabled()

      if (!isJoinPreviewRequest(req.body)) {
        throw new BadRequest()
      }

      const mail = sanitizeChildMail(await verifiedGoogleMail(req.body.idToken))
      const { child, familyName } = await database.transaction((transaction) => findLinkedChild({ transaction, mail }))

      res.json({ familyName, childName: child.name })
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:family-join-google
  router.post('/join', json(), async (req, res, next) => {
    try {
      assertGoogleSignInEnabled()

      if (!isJoinRequest(req.body)) {
        throw new BadRequest()
      }

      const { registerToken } = req.body
      const mail = sanitizeChildMail(await verifiedGoogleMail(req.body.idToken))

      const { confirmCode } = await database.transaction((transaction) => createJoinRegisterToken({ transaction, mail, registerToken }))

      res.json(confirmCode === null ? { ok: true } : { ok: true, confirmCode }) // @tag:family-join-link
    } catch (ex) {
      next(ex)
    }
  })

  return router
}
