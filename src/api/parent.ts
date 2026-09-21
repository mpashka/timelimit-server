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
import { createHmac } from 'crypto'
import { Router } from 'express'
import { BadRequest, Forbidden, Unauthorized } from 'http-errors'
import { config } from '../config'
import { SimpleDatabase, SimpleDatabaseTransaction } from '../database/simple'
import { deleteAccount } from '../function/cleanup/account-deletion'
import { removeDevice } from '../function/device/remove-device'
import { createAddDeviceToken } from '../function/parent/create-add-device-token'
import { createFamily } from '../function/parent/create-family'
import { getStatusByMailToken } from '../function/parent/get-status-by-mail-address'
import { linkMailAddress } from '../function/parent/link-mail-address'
import { recoverParentPassword } from '../function/parent/recover-parent-password'
import { signInIntoFamily } from '../function/parent/sign-in-into-family'
import { resolveSubject } from '../function/sync/subject'
import { validateU2fIntegrity, U2fValidationError } from '../function/u2f'
import { createIdentityToken, MissingSignSecretException } from '../util/identity-token'
import { WebsocketApi } from '../websocket'
import { EventHandler } from '../monitoring/eventhandler'
import {
  isCreateFamilyByMailTokenRequest,
  isCreateRegisterDeviceTokenRequest, isLinkParentMailAddressRequest,
  isMailAuthTokenRequestBody, isRecoverParentPasswordRequest,
  isRemoveDeviceRequest, isSignIntoFamilyRequest, isRequestIdentityTokenRequest,
  isDeleteAccountPayload
} from './validator'

export const createParentRouter = ({
  database, websocket, eventHandler
}: {
  database: SimpleDatabase
  websocket: WebsocketApi
  eventHandler: EventHandler
}) => {
  const router = Router()

  router.post('/get-status-by-mail-address', json(), async (req, res, next) => {
    try {
      if (!isMailAuthTokenRequestBody(req.body)) {
        throw new BadRequest()
      }

      const { mailAuthToken } = req.body
      const { status, mail } = await database.transaction(async (transaction) => {
        return getStatusByMailToken({ transaction, mailAuthToken })
      })

      res.json({
        status,
        mail,
        canCreateFamily: !config.disableSignup,
        alwaysPro: config.alwaysPro
      })
    } catch (ex) {
      next(ex)
    }
  })

  router.post('/create-family', json(), async (req, res, next) => {
    try {
      if (config.disableSignup) {
        throw new Forbidden()
      }

      if (!isCreateFamilyByMailTokenRequest(req.body)) {
        throw new BadRequest()
      }

      const result = await createFamily({
        database,
        eventHandler,
        firstParentDevice: req.body.parentDevice,
        mailAuthToken: req.body.mailAuthToken,
        password: req.body.parentPassword,
        deviceName: req.body.deviceName,
        parentName: req.body.parentName,
        timeZone: req.body.timeZone,
        clientLevel: req.body.clientLevel || null
      })

      res.json({
        deviceAuthToken: result.deviceAuthToken,
        ownDeviceId: result.deviceId,
        data: result.data
      })
    } catch (ex) {
      next(ex)
    }
  })

  router.post('/sign-in-into-family', json(), async (req, res, next) => {
    try {
      if (!isSignIntoFamilyRequest(req.body)) {
        throw new BadRequest()
      }

      const result = await signInIntoFamily({
        database,
        eventHandler,
        newDeviceInfo: req.body.parentDevice,
        mailAuthToken: req.body.mailAuthToken,
        deviceName: req.body.deviceName,
        clientLevel: req.body.clientLevel || null,
        websocket
      })

      res.json({
        deviceAuthToken: result.deviceAuthToken,
        ownDeviceId: result.deviceId,
        data: result.data
      })
    } catch (ex) {
      next(ex)
    }
  })

  router.post('/recover-parent-password', json(), async (req, res, next) => {
    try {
      if (!isRecoverParentPasswordRequest(req.body)) {
        throw new BadRequest()
      }

      await recoverParentPassword({
        database,
        websocket,
        password: req.body.password,
        mailAuthToken: req.body.mailAuthToken
      })

      res.json({ ok: true })
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:parent-console
  // Предъявитель, а не устройство: сессия родителя годится всюду, где раньше требовался
  // deviceAuthToken. Устройства ни одна из ручек /parent/* по смыслу не требует — им нужны семья
  // и родитель, — поэтому отдельного отказа «тут нужно устройство» здесь нет.
  // Возвращается familyId, а не строка устройства: у сессии её нет.
  async function assertAuthValidAndReturnDetails ({ authToken, parentId, secondPasswordHash, transaction }: {
    authToken: string
    parentId: string
    secondPasswordHash: string
    transaction: SimpleDatabaseTransaction
  }) {
    const subject = await resolveSubject({ transaction, authToken })
    const { familyId, subjectId } = subject

    const requireParent = async (userId: string) => {
      const parentEntry = await transaction.legacy.database.user.findOne({
        where: {
          familyId,
          type: 'parent',
          userId
        },
        transaction: transaction.legacy.transaction
      })

      if (!parentEntry) {
        throw new Unauthorized()
      }

      return { familyId, parentEntry }
    }

    if (secondPasswordHash === 'device') {
      // у сессии сам факт входа и есть «родитель уже подтверждён», как у устройства с
      // isUserKeptSignedIn; действовать от имени другого родителя она при этом не может
      if (subject.parentUserId !== null) {
        if (subject.parentUserId !== parentId) throw new Unauthorized()

        return requireParent(subject.parentUserId)
      }

      const deviceEntry = await transaction.legacy.database.device.findOne({
        where: { familyId, deviceId: subjectId },
        attributes: ['isUserKeptSignedIn', 'currentUserId'],
        transaction: transaction.legacy.transaction
      })

      if (!deviceEntry || !deviceEntry.isUserKeptSignedIn) {
        throw new Unauthorized()
      }

      return requireParent(deviceEntry.currentUserId)
    } else if (secondPasswordHash.startsWith('u2f:')) {
      try {
        const familyEntryUnsafe = await transaction.legacy.database.family.findOne({
          where: {
            familyId
          },
          transaction: transaction.legacy.transaction,
          attributes: ['hasFullVersion']
        })

        if (!familyEntryUnsafe) {
          throw new Unauthorized()
        }

        const familyEntry = { hasFullVersion: familyEntryUnsafe.hasFullVersion }

        const hasFullVersion = familyEntry.hasFullVersion || config.alwaysPro

        const u2fResult = await validateU2fIntegrity({
          integrity: secondPasswordHash,
          hasFullVersion,
          familyId,
          deviceId: subjectId,
          transaction,
          calculateHmac: (secret) => createHmac('sha256', secret)
            .update('direct action')
            .digest()
        })

        if (u2fResult.userId !== parentId) throw new Unauthorized()

        return requireParent(u2fResult.userId)
      } catch (ex) {
        if (ex instanceof U2fValidationError) throw new Unauthorized()
        else throw ex
      }
    } else {
      const parentEntry = await transaction.legacy.database.user.findOne({
        where: {
          familyId,
          type: 'parent',
          userId: parentId,
          secondPasswordHash: secondPasswordHash
        },
        transaction: transaction.legacy.transaction
      })

      if (!parentEntry) {
        throw new Unauthorized()
      }

      return { familyId, parentEntry }
    }
  }

  router.post('/create-add-device-token', json(), async (req, res, next) => {
    try {
      if (!isCreateRegisterDeviceTokenRequest(req.body)) {
        throw new BadRequest()
      }

      const { token, deviceId } = await database.transaction(async (transaction) => {
        const { familyId } = await assertAuthValidAndReturnDetails({
          authToken: req.body.deviceAuthToken,
          parentId: req.body.parentId,
          secondPasswordHash: req.body.parentPasswordSecondHash,
          transaction
        })

        return createAddDeviceToken({ familyId, transaction })
      })

      res.json({ token, deviceId })
    } catch (ex) {
      next(ex)
    }
  })

  router.post('/link-mail-address', json(), async (req, res, next) => {
    try {
      if (!isLinkParentMailAddressRequest(req.body)) {
        throw new BadRequest()
      }

      await linkMailAddress({
        mailAuthToken: req.body.mailAuthToken,
        authToken: req.body.deviceAuthToken,
        parentPasswordSecondHash: req.body.parentPasswordSecondHash,
        parentUserId: req.body.parentUserId,
        websocket,
        database
      })

      res.json({ ok: true })
    } catch (ex) {
      next(ex)
    }
  })

  router.post('/remove-device', json(), async (req, res, next) => {
    try {
      if (!isRemoveDeviceRequest(req.body)) {
        throw new BadRequest()
      }

      await database.transaction(async (transaction) => {
        const { familyId } = await assertAuthValidAndReturnDetails({
          authToken: req.body.deviceAuthToken,
          parentId: req.body.parentUserId,
          secondPasswordHash: req.body.parentPasswordSecondHash,
          transaction
        })

        await removeDevice({
          transaction,
          familyId,
          deviceId: req.body.deviceId,
          websocket
        })
      })

      res.json({ ok: true })
    } catch (ex) {
      next(ex)
    }
  })

  router.post('/create-identity-token', json(), async (req, res, next) => {
    try {
      if (!isRequestIdentityTokenRequest(req.body)) {
        throw new BadRequest()
      }

      const body = req.body

      await database.transaction(async (transaction) => {
        const { familyId, parentEntry } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction
        })

        const token = await createIdentityToken({
          purpose: body.purpose,
          familyId,
          userId: parentEntry.userId,
          mail: parentEntry.mail
        })

        res.json({ token })
      })
    } catch (ex) {
      if (ex instanceof MissingSignSecretException) res.sendStatus(404)
      else next(ex)
    }
  })

  router.post('/delete-account', json(), async (req, res, next) => {
    try {
      if (!isDeleteAccountPayload(req.body)) {
        throw new BadRequest()
      }

      await deleteAccount({ database, request: req.body, websocket })

      res.sendStatus(200)
    } catch (ex) {
      next(ex)
    }
  })

  return router
}
