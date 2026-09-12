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
import { config } from '../config'
import { SimpleDatabase } from '../database/simple'
import { createAuthTokenByMailAddress } from '../function/authentication'
import { sendLoginCode, signInByMailCode } from '../function/authentication/login-by-mail'
import { GoogleIdTokenException, verifyGoogleIdToken } from '../util/google-id-token'
import { isMailAddressCoveredByWhitelist, isMailServerBlacklisted, sanitizeMailAddress } from '../util/mail'
import {
  isSendMailLoginCodeRequest,
  isSignInByGoogleRequest,
  isSignInByMailCodeRequest
} from './validator'

export const createAuthRouter = (database: SimpleDatabase) => {
  const router = Router()

  router.post('/send-mail-login-code-v2', json(), async (req, res, next) => {
    try {
      if (!isSendMailLoginCodeRequest(req.body)) {
        throw new BadRequest()
      }

      const mail = sanitizeMailAddress(req.body.mail)

      if (!mail) {
        throw new BadRequest()
      }

      if (!isMailAddressCoveredByWhitelist(mail)) {
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
      if (config.googleClientIds.length === 0) {
        throw new NotImplemented('sign in by google is disabled because GOOGLE_CLIENT_ID is not set')
      }

      if (!isSignInByGoogleRequest(req.body)) {
        throw new BadRequest()
      }

      const { locale } = req.body

      const verified = await verifyGoogleIdToken({
        idToken: req.body.idToken,
        clientIds: config.googleClientIds
      }).catch((ex) => {
        if (ex instanceof GoogleIdTokenException) throw new Unauthorized('invalid google id token: ' + ex.message)
        else throw ex
      })

      const mail = sanitizeMailAddress(verified.mail)

      if (!mail) {
        throw new BadRequest()
      }

      if (!isMailAddressCoveredByWhitelist(mail)) {
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

  return router
}
