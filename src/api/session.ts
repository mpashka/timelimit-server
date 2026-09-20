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
import { BadRequest } from 'http-errors'
import { SimpleDatabase } from '../database/simple'
import { revokeParentSession, signInParentSession } from '../function/parent-session'
import { isMailAuthTokenRequestBody, isRevokeParentSessionRequest } from './validator'

// @tag:parent-console
// Вход человеком вместо регистрации устройства: средства управления (веб-админка через BFF, CLI,
// MCP) устройствами семьи не являются и ходят на сервер под тем, кто вошёл.
// Контракт — docs/implementation/web-admin.md, «Вход пользователем».
export const createSessionRouter = ({ database }: {
  database: SimpleDatabase
}) => {
  const router = Router()

  router.post('/sign-in', json(), async (req, res, next) => {
    try {
      if (!isMailAuthTokenRequestBody(req.body)) {
        throw new BadRequest()
      }

      const result = await signInParentSession({
        database,
        mailAuthToken: req.body.mailAuthToken
      })

      res.json(result)
    } catch (ex) {
      next(ex)
    }
  })

  router.post('/revoke', json(), async (req, res, next) => {
    try {
      if (!isRevokeParentSessionRequest(req.body)) {
        throw new BadRequest()
      }

      await revokeParentSession({
        database,
        sessionToken: req.body.sessionToken
      })

      res.json({ ok: true })
    } catch (ex) {
      next(ex)
    }
  })

  return router
}
