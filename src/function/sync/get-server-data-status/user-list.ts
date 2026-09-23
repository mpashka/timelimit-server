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
import { SimpleDatabaseTransaction } from '../../../database/simple'
import { ServerAppAllowance, ServerChildRequest, childRequestListWindow } from '../../../model/childrequest'
import { toServerChildRequest } from '../../child-request'
import { UrlFilter } from '../../../model/urlfilter'
import { ServerUserList } from '../../../object/serverdatastatus'
import { FamilyEntry } from './family-entry'

export async function getUserList ({ transaction, familyEntry }: {
  transaction: SimpleDatabaseTransaction
  familyEntry: FamilyEntry
}): Promise<ServerUserList> {
  const users = (await transaction.legacy.database.user.findAll({
    where: {
      familyId: familyEntry.familyId
    },
    attributes: [
      'userId',
      'name',
      'passwordHash',
      'secondPasswordSalt',
      'type',
      'timeZone',
      'disableTimelimitsUntil',
      'mail',
      'currentDevice',
      'categoryForNotAssignedApps',
      'relaxPrimaryDeviceRule',
      'mailNotificationFlags',
      'flags',
      'urlFilter'
    ],
    transaction: transaction.legacy.transaction
  })).map((item) => ({
    userId: item.userId,
    name: item.name,
    passwordHash: item.passwordHash,
    secondPasswordSalt: item.secondPasswordSalt,
    type: item.type,
    timeZone: item.timeZone,
    disableTimelimitsUntil: item.disableTimelimitsUntil,
    mail: item.mail,
    currentDevice: item.currentDevice,
    categoryForNotAssignedApps: item.categoryForNotAssignedApps,
    relaxPrimaryDeviceRule: item.relaxPrimaryDeviceRule,
    mailNotificationFlags: item.mailNotificationFlags,
    flags: item.flags,
    urlFilter: item.urlFilter
  }))

  const limitLoginCategories = (await transaction.legacy.database.userLimitLoginCategory.findAll({
    where: {
      familyId: familyEntry.familyId
    },
    attributes: [
      'userId',
      'categoryId',
      'preBlockDuration'
    ],
    transaction: transaction.legacy.transaction
  })).map((item) => ({
    userId: item.userId,
    categoryId: item.categoryId,
    preBlockDuration: item.preBlockDuration
  }))

  const getLimitLoginCategory = (userId: string) => {
    const item = limitLoginCategories.find((item) => item.userId === userId)

    if (item) {
      return item
    } else {
      return undefined
    }
  }

  // @tag:child-request @tag:app-allowance
  const now = Date.now()
  const requests = new Map<string, Array<ServerChildRequest>>()
  const allowances = new Map<string, Array<ServerAppAllowance>>()

  for (const row of await transaction.legacy.database.childRequest.findAll({
    where: { familyId: familyEntry.familyId, createdAt: { [Sequelize.Op.gte]: (now - childRequestListWindow).toString(10) } },
    order: [['createdAt', 'DESC']],
    transaction: transaction.legacy.transaction
  })) {
    requests.set(row.userId, [...(requests.get(row.userId) ?? []), toServerChildRequest(row)])
  }

  for (const row of await transaction.legacy.database.appAllowance.findAll({
    where: { familyId: familyEntry.familyId, until: { [Sequelize.Op.gt]: now.toString(10) } },
    transaction: transaction.legacy.transaction
  })) {
    allowances.set(row.userId, [...(allowances.get(row.userId) ?? []), { packageName: row.packageName, until: parseInt(row.until, 10) }])
  }

  return {
    version: familyEntry.userListVersion,
    parentCodeSecret: familyEntry.parentCodeSecret ?? undefined, // @tag:parent-code
    data: users.map((item) => {
      const limitLoginCategory = getLimitLoginCategory(item.userId)

      return {
        id: item.userId,
        name: item.name,
        password: item.passwordHash,
        secondPasswordSalt: item.secondPasswordSalt,
        type: item.type,
        timeZone: item.timeZone,
        disableLimitsUntil: parseInt(item.disableTimelimitsUntil, 10),
        mail: item.mail,
        currentDevice: item.currentDevice,
        categoryForNotAssignedApps: item.categoryForNotAssignedApps,
        relaxPrimaryDevice: item.relaxPrimaryDeviceRule,
        mailNotificationFlags: item.mailNotificationFlags,
        blockedTimes: '',
        flags: parseInt(item.flags, 10),
        llc: limitLoginCategory?.categoryId,
        pbd: limitLoginCategory?.preBlockDuration,
        urlFilter: item.urlFilter !== null ? JSON.parse(item.urlFilter) as UrlFilter : undefined, // @tag:url-filter
        requests: item.type === 'child' ? requests.get(item.userId) ?? [] : undefined,
        appAllowances: item.type === 'child' ? allowances.get(item.userId) ?? [] : undefined
      }
    })
  }
}
