/*
 * server component for the TimeLimit App
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
import {
  ForgetNewAppAction, GrantByParentCodeAction, ReportNewAppAction, SetAppUsageAction, SetForegroundAppAction
} from '../../../../action'
import { parentCodeAt, parentCodeStepMs } from '../../../../model/parentcode'
import { reportForegroundApp } from '../../../device-state'
import { putAppAllowance } from '../dispatch-parent-action/setappallowance'
import { Cache } from '../cache'
import { ChildRequestRefusedException } from '../exception/child-request'
import { MissingCategoryException } from '../exception/missing-item'

const appUsageRetentionDays = 30
const parentCodeMaxAgeSteps = (24 * 60 * 60 * 1000) / parentCodeStepMs

export async function childOfDevice ({ cache, deviceId }: { cache: Cache, deviceId: string }): Promise<string | null> {
  const database = cache.transaction.legacy.database
  const transaction = cache.transaction.legacy.transaction
  const device = await database.device.findOne({ where: { familyId: cache.familyId, deviceId }, attributes: ['currentUserId'], transaction })

  if (!device || device.currentUserId === '') return null

  const child = await database.user.findOne({
    where: { familyId: cache.familyId, userId: device.currentUserId, type: 'child' },
    attributes: ['userId'],
    transaction
  })

  return child ? child.userId : null
}

async function requireChildOfDevice (cache: Cache, deviceId: string): Promise<string> {
  const childId = await childOfDevice({ cache, deviceId })

  if (childId === null) throw new ChildRequestRefusedException('the sender is not a device of a child')

  return childId
}

// @tag:parent-code
export async function dispatchGrantByParentCode ({ deviceId, action, cache }: { deviceId: string, action: GrantByParentCodeAction, cache: Cache }) {
  const childId = await requireChildOfDevice(cache, deviceId)
  const database = cache.transaction.legacy.database
  const transaction = cache.transaction.legacy.transaction
  const nowStep = Math.floor(Date.now() / parentCodeStepMs)

  if (action.step > nowStep + 1 || action.step < nowStep - parentCodeMaxAgeSteps) {
    throw new ChildRequestRefusedException('the code step is outside of the last 24 hours')
  }

  const family = await database.family.findOne({ where: { familyId: cache.familyId }, attributes: ['parentCodeSecret'], transaction })

  if (!family?.parentCodeSecret || parentCodeAt(family.parentCodeSecret, action.step) !== action.code) {
    throw new ChildRequestRefusedException('wrong parent code')
  }

  if (action.grant === 'app') {
    await putAppAllowance({ cache, userId: childId, packageName: action.packageName, until: action.until, extendOnly: true })
    return
  }

  const category = await database.category.findOne({
    where: { familyId: cache.familyId, categoryId: action.categoryId, childId },
    attributes: ['disableLimitsUntil'],
    transaction
  })

  if (!category) throw new MissingCategoryException()

  if (parseInt(category.disableLimitsUntil, 10) < action.until) {
    await database.category.update({ disableLimitsUntil: action.until.toString(10) }, {
      where: { familyId: cache.familyId, categoryId: action.categoryId },
      transaction
    })

    cache.categoriesWithModifiedBaseData.add(action.categoryId)
    cache.incrementTriggeredSyncLevel(2)
  }
}

// @tag:app-usage
export async function dispatchSetAppUsage ({ deviceId, action, cache }: { deviceId: string, action: SetAppUsageAction, cache: Cache }) {
  const childId = await requireChildOfDevice(cache, deviceId)
  const database = cache.transaction.legacy.database
  const transaction = cache.transaction.legacy.transaction

  for (const item of action.items) {
    const where = { familyId: cache.familyId, deviceId, day: action.day, packageName: item.packageName }
    const existing = await database.appUsage.findOne({ where, transaction })

    if (existing) {
      existing.ms = item.ms.toString(10)
      existing.userId = childId
      await existing.save({ transaction })
    } else {
      await database.appUsage.create({ ...where, userId: childId, ms: item.ms.toString(10) }, { transaction })
    }
  }

  await database.appUsage.destroy({
    where: { familyId: cache.familyId, deviceId, day: { [Sequelize.Op.lt]: action.day - appUsageRetentionDays } },
    transaction
  })

  const limited = await database.appRule.count({
    where: {
      familyId: cache.familyId,
      userId: childId,
      packageName: { [Sequelize.Op.in]: action.items.map((item) => item.packageName) },
      limitMinutes: { [Sequelize.Op.gte]: 0 }
    },
    transaction
  })

  if (limited > 0) {
    cache.invalidiateUserList = true
    cache.incrementTriggeredSyncLevel(2)
  }
}

// @tag:new-app
export async function dispatchReportNewApp ({ deviceId, action, cache }: { deviceId: string, action: ReportNewAppAction, cache: Cache }) {
  const childId = await requireChildOfDevice(cache, deviceId)
  const database = cache.transaction.legacy.database
  const transaction = cache.transaction.legacy.transaction

  const categoryIds = (await database.category.findAll({ where: { familyId: cache.familyId, childId }, attributes: ['categoryId'], transaction }))
    .map((item) => item.categoryId)
  const assigned = await database.categoryApp.count({
    where: { familyId: cache.familyId, categoryId: { [Sequelize.Op.in]: categoryIds }, packageName: action.packageName },
    transaction
  })

  if (assigned > 0) return

  const where = { familyId: cache.familyId, userId: childId, packageName: action.packageName }
  const values = { title: action.title, section: action.section, installedAt: action.installedAt.toString(10), deviceId }
  const existing = await database.newApp.findOne({ where, transaction })

  if (existing) {
    Object.assign(existing, values)
    await existing.save({ transaction })
  } else {
    await database.newApp.create({ ...where, ...values }, { transaction })
  }

  cache.invalidiateUserList = true
  cache.incrementTriggeredSyncLevel(2)
}

// @tag:new-app
export async function dispatchForgetNewApp ({ deviceId, action, cache }: { deviceId: string, action: ForgetNewAppAction, cache: Cache }) {
  const childId = await requireChildOfDevice(cache, deviceId)
  const removed = await cache.transaction.legacy.database.newApp.destroy({
    where: { familyId: cache.familyId, userId: childId, packageName: action.packageName },
    transaction: cache.transaction.legacy.transaction
  })

  if (removed > 0) {
    cache.invalidiateUserList = true
    cache.incrementTriggeredSyncLevel(1)
  }
}

// @tag:device-state
export async function dispatchSetForegroundApp ({ deviceId, action, cache }: { deviceId: string, action: SetForegroundAppAction, cache: Cache }) {
  reportForegroundApp(cache.familyId, deviceId, action.packageName)
}
