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

import * as Sequelize from 'sequelize'
import { json } from 'body-parser'
import { createHmac } from 'crypto'
import { Router } from 'express'
import { BadRequest, Forbidden, NotImplemented, Unauthorized } from 'http-errors'
import { config } from '../config'
import { SimpleDatabase, SimpleDatabaseTransaction } from '../database/simple'
import { deleteAccount } from '../function/cleanup/account-deletion'
import { deleteFamilyByAdmin, leaveFamily, removeAdult, setAdultRole } from '../function/family-adults'
import { confirmDeviceJoin, setChildMail } from '../function/child-mail'
import { removeDevice } from '../function/device/remove-device'
import { createAddDeviceToken } from '../function/parent/create-add-device-token'
import { createFamily } from '../function/parent/create-family'
import { getStatusByMailToken } from '../function/parent/get-status-by-mail-address'
import { linkMailAddress } from '../function/parent/link-mail-address'
import {
  confirmParentInvitation, describeInvitationLetter, findOwnFamilySize, findReceivedParentInvitation, inviteParent,
  listParentInvitations, revokeParentInvitation
} from '../function/parent-invitation'
import { recoverParentPassword } from '../function/parent/recover-parent-password'
import { signInIntoFamily } from '../function/parent/sign-in-into-family'
import { resolveSubject } from '../function/sync/subject'
import { validateU2fIntegrity, U2fValidationError } from '../function/u2f'
import { createIdentityToken, MissingSignSecretException } from '../util/identity-token'
import { canSendMail, sendInvitationMail } from '../util/mail'
import { WebsocketApi } from '../websocket'
import { AdultRole, adultRoleRefusal } from '../model/adultrole'
import { AddDeviceResponse, CreateAddDeviceTokenResponse, StatusOfMailAddressResponse } from '../object/apiresponse'
import { EventHandler } from '../monitoring/eventhandler'
import {
  isCreateFamilyByMailTokenRequest,
  isCreateRegisterDeviceTokenRequest, isLinkParentMailAddressRequest,
  isListParentInvitationsRequest, isParentInvitationRequest, isInviteParentRequest,
  isConfirmParentInvitationRequest, isConfirmDeviceJoinRequest, isSendInvitationMailRequest,
  isSetAdultRoleRequest, isSetChildMailRequest, isRemoveAdultRequest, isLeaveFamilyRequest, isDeleteFamilyRequest,
  isMailAuthTokenRequestBody, isRecoverParentPasswordRequest,
  isRemoveDeviceRequest, isSignIntoFamilyRequest, isRequestIdentityTokenRequest,
  isDeleteAccountPayload, isGetAppIconsRequest, isGetAppUsageRequest, isGetLaunchableAppsRequest
} from './validator'

const maxAppIconsPerRequest = 500

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
      const { status, mail, invitation, ownFamily } = await database.transaction(async (transaction) => {
        const { status, mail } = await getStatusByMailToken({ transaction, mailAuthToken })
        // @tag:parent-invitation
        const invitation = await findReceivedParentInvitation({ transaction, mail })
        const ownFamilySize = invitation && status === 'with family' ? await findOwnFamilySize({ transaction, mail }) : null
        const ownFamily = ownFamilySize
          ? { children: ownFamilySize.children, devices: ownFamilySize.devices, adults: ownFamilySize.adults }
          : null

        return { status, mail, invitation, ownFamily }
      })

      const answer: StatusOfMailAddressResponse = {
        status,
        mail,
        invitation,
        ownFamily,
        canCreateFamily: !config.disableSignup,
        alwaysPro: config.alwaysPro
      }

      res.json(answer)
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

      const answer: AddDeviceResponse = {
        deviceAuthToken: result.deviceAuthToken,
        ownDeviceId: result.deviceId,
        data: result.data
      }

      res.json(answer)
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

      const answer: AddDeviceResponse = {
        deviceAuthToken: result.deviceAuthToken,
        ownDeviceId: result.deviceId,
        data: result.data
      }

      res.json(answer)
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
  // @tag:adult-role
  // Единственная проверка роли для /parent/*: каждая ручка называет нужную ей роль.
  async function assertAuthValidAndReturnDetails ({ requiredRole, ...auth }: {
    authToken: string
    parentId: string
    secondPasswordHash: string
    transaction: SimpleDatabaseTransaction
    requiredRole: AdultRole
  }) {
    const details = await findParentByAuth(auth)
    const refusal = adultRoleRefusal({ actual: details.parentEntry.adultRole, required: requiredRole, what: 'this request' })

    if (refusal !== null) throw new Forbidden(refusal)

    return details
  }

  async function findParentByAuth ({ authToken, parentId, secondPasswordHash, transaction }: {
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
      // @tag:parent-invitation
      // у родителя без пароля хэш пустой — пустое значение подтверждением быть не может
      if (secondPasswordHash === '') throw new Unauthorized()

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

  // @tag:parent-invitation
  router.post('/invite-parent', json(), async (req, res, next) => {
    try {
      if (!isInviteParentRequest(req.body)) {
        throw new BadRequest()
      }

      const body = req.body

      const invitation = await database.transaction(async (transaction) => {
        const { familyId, parentEntry } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction,
          requiredRole: 'admin'
        })

        return inviteParent({
          transaction, familyId, invitedByUserId: parentEntry.userId, mail: body.mail, role: body.role ?? 'manager', confirmByCode: body.confirmByCode ?? false
        })
      })

      res.json(invitation)
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:parent-invitation
  router.post('/list-parent-invitations', json(), async (req, res, next) => {
    try {
      if (!isListParentInvitationsRequest(req.body)) {
        throw new BadRequest()
      }

      const body = req.body

      const invitations = await database.transaction(async (transaction) => {
        const { familyId } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction,
          requiredRole: 'member'
        })

        return listParentInvitations({ transaction, familyId })
      })

      res.json({ invitations })
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:parent-invitation
  router.post('/revoke-parent-invitation', json(), async (req, res, next) => {
    try {
      if (!isParentInvitationRequest(req.body)) {
        throw new BadRequest()
      }

      const body = req.body

      await database.transaction(async (transaction) => {
        const { familyId } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction,
          requiredRole: 'admin'
        })

        await revokeParentInvitation({ transaction, familyId, mail: body.mail })
      })

      res.json({ ok: true })
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:family-join-link
  router.post('/confirm-parent-invitation', json(), async (req, res, next) => {
    try {
      if (!isConfirmParentInvitationRequest(req.body)) {
        throw new BadRequest()
      }

      const body = req.body

      await database.transaction(async (transaction) => {
        const { familyId } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction,
          requiredRole: 'admin'
        })

        await confirmParentInvitation({ transaction, familyId, mail: body.mail, code: body.code })
      })

      res.json({ ok: true })
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:family-join-link
  router.post('/confirm-device-join', json(), async (req, res, next) => {
    try {
      if (!isConfirmDeviceJoinRequest(req.body)) {
        throw new BadRequest()
      }

      const body = req.body

      await database.transaction(async (transaction) => {
        const { familyId } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction,
          requiredRole: 'admin'
        })

        await confirmDeviceJoin({ transaction, familyId, code: body.code })
      })

      res.json({ ok: true })
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:family-join-link
  router.post('/send-invitation-mail', json(), async (req, res, next) => {
    try {
      if (!isSendInvitationMailRequest(req.body)) {
        throw new BadRequest()
      }

      if (!canSendMail()) {
        throw new NotImplemented('this server sends no mail because MAIL_TRANSPORT is not set: copy the link and send it yourself')
      }

      const body = req.body

      if (!/^https?:\/\/\S+$/.test(body.link)) {
        throw new BadRequest('link must be an http(s) address')
      }

      const letter = await database.transaction(async (transaction) => {
        const { familyId, parentEntry } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction,
          requiredRole: 'admin'
        })

        return describeInvitationLetter({ transaction, familyId, inviterUserId: parentEntry.userId, mail: body.mail })
      })

      await sendInvitationMail({ ...letter, link: body.link })

      res.json({ ok: true })
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:adult-role
  router.post('/set-adult-role', json(), async (req, res, next) => {
    try {
      if (!isSetAdultRoleRequest(req.body)) {
        throw new BadRequest()
      }

      const body = req.body

      await database.transaction(async (transaction) => {
        const { familyId } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction,
          requiredRole: 'admin'
        })

        await setAdultRole({ transaction, websocket, familyId, userId: body.userId, role: body.role })
      })

      res.json({ ok: true })
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:family-join-google
  router.post('/set-child-mail', json(), async (req, res, next) => {
    try {
      if (!isSetChildMailRequest(req.body)) {
        throw new BadRequest()
      }

      const body = req.body

      await database.transaction(async (transaction) => {
        const { familyId } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction,
          requiredRole: 'admin'
        })

        await setChildMail({ transaction, websocket, familyId, childUserId: body.childUserId, mail: body.mail, confirmByCode: body.confirmByCode ?? false })
      })

      res.json({ ok: true })
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:adult-role
  router.post('/remove-adult', json(), async (req, res, next) => {
    try {
      if (!isRemoveAdultRequest(req.body)) {
        throw new BadRequest()
      }

      const body = req.body

      await database.transaction(async (transaction) => {
        const { familyId, parentEntry } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction,
          requiredRole: 'admin'
        })

        await removeAdult({ transaction, websocket, familyId, actorUserId: parentEntry.userId, userId: body.userId })
      })

      res.json({ ok: true })
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:adult-role
  router.post('/leave-family', json(), async (req, res, next) => {
    try {
      if (!isLeaveFamilyRequest(req.body)) {
        throw new BadRequest()
      }

      const body = req.body

      await database.transaction(async (transaction) => {
        const { familyId, parentEntry } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction,
          requiredRole: 'member'
        })

        await leaveFamily({ transaction, websocket, familyId, userId: parentEntry.userId })
      })

      res.json({ ok: true })
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:adult-role
  router.post('/delete-family', json(), async (req, res, next) => {
    try {
      if (!isDeleteFamilyRequest(req.body)) {
        throw new BadRequest()
      }

      const body = req.body

      await database.transaction(async (transaction) => {
        const { familyId, parentEntry } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction,
          requiredRole: 'admin'
        })

        await deleteFamilyByAdmin({ transaction, websocket, familyId, admin: parentEntry, mailAuthToken: body.mailAuthToken })
      })

      res.json({ ok: true })
    } catch (ex) {
      next(ex)
    }
  })

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
          transaction,
          requiredRole: 'manager'
        })

        return createAddDeviceToken({ familyId, transaction })
      })

      const answer: CreateAddDeviceTokenResponse = { token, deviceId }

      res.json(answer)
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
          transaction,
          requiredRole: 'manager'
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

  // @tag:app-usage
  router.post('/get-app-usage', json(), async (req, res, next) => {
    try {
      const body = req.body

      if (!isGetAppUsageRequest(body) || body.toDay < body.fromDay || body.toDay - body.fromDay > 31) {
        throw new BadRequest()
      }

      const items = await database.transaction(async (transaction) => {
        const { familyId } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction,
          requiredRole: 'member'
        })

        return (await transaction.legacy.database.appUsage.findAll({
          where: { familyId, userId: body.userId, day: { [Sequelize.Op.between]: [body.fromDay, body.toDay] } },
          attributes: ['deviceId', 'day', 'packageName', 'ms'],
          transaction: transaction.legacy.transaction
        })).map((row) => ({ deviceId: row.deviceId, day: row.day, packageName: row.packageName, ms: parseInt(row.ms, 10) }))
      })

      res.json({ items })
    } catch (ex) {
      next(ex)
    }
  })

  // @tag:app-icon
  router.post('/get-app-icons', json(), async (req, res, next) => {
    try {
      const body = req.body

      if (!isGetAppIconsRequest(body) || body.packageNames.length > maxAppIconsPerRequest) {
        throw new BadRequest()
      }

      const items = await database.transaction(async (transaction) => {
        const { familyId } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction,
          requiredRole: 'member'
        })

        if (body.packageNames.length === 0) return []

        return (await transaction.legacy.database.appIcon.findAll({
          where: { familyId, packageName: { [Sequelize.Op.in]: body.packageNames } },
          attributes: ['packageName', 'title', 'icon'],
          transaction: transaction.legacy.transaction
        })).map((row) => ({ packageName: row.packageName, title: row.title, icon: row.icon }))
      })

      res.json({ items })
    } catch (ex) {
      next(ex)
    }
  })

  // Which tablet has which app on its home screen: a tablet sends an icon only for those (REPORT_APP_ICONS)
  // @tag:app-service
  router.post('/get-launchable-apps', json(), async (req, res, next) => {
    try {
      const body = req.body

      if (!isGetLaunchableAppsRequest(body)) {
        throw new BadRequest()
      }

      const items = await database.transaction(async (transaction) => {
        const { familyId } = await assertAuthValidAndReturnDetails({
          authToken: body.deviceAuthToken,
          parentId: body.parentUserId,
          secondPasswordHash: body.parentPasswordSecondHash,
          transaction,
          requiredRole: 'member'
        })

        return (await transaction.legacy.database.appIconDevice.findAll({
          where: { familyId },
          attributes: ['deviceId', 'packageName'],
          transaction: transaction.legacy.transaction
        })).map((row) => ({ deviceId: row.deviceId, packageName: row.packageName }))
      })

      res.json({ items })
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
          transaction,
          requiredRole: 'admin'
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
