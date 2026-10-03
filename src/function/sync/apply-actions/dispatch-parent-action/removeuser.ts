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

import { createHash } from 'crypto'
import { InternalServerError } from 'http-errors'
import { difference } from 'lodash'
import * as Sequelize from 'sequelize'
import { RemoveUserAction } from '../../../../action'
import { SimpleDatabaseTransaction } from '../../../../database/simple'
import { UserModel } from '../../../../database/user'
import { deleteParentSessions } from '../../../parent-session/cleanup'
import { Cache } from '../cache'
import { ApplyActionException } from '../exception/index'
import { ApplyActionIntegrityException } from '../exception/integrity'
import { MissingUserException } from '../exception/missing-item'

export async function dispatchRemoveUser ({ action, cache, parentUserId }: {
  action: RemoveUserAction
  cache: Cache
  parentUserId: string
}) {
  const user = await cache.transaction.legacy.database.user.findOne({
    where: {
      familyId: cache.familyId,
      userId: action.userId
    },
    transaction: cache.transaction.legacy.transaction
  })

  if (!user) {
    throw new MissingUserException()
  }

  if (user.type === 'parent') {
    if (!parentUserId) {
      throw new InternalServerError()
    }

    if (parentUserId === action.userId) {
      throw new ApplyActionException({ staticMessage: 'users can not delete themself' })
    }

    const expectedIntegrityValue = createHash('sha512').update(
      action.userId + user.secondPasswordHash + 'remove'
    ).digest('hex').substring(0, 16)

    if (expectedIntegrityValue !== action.authentication) {
      throw new ApplyActionIntegrityException({ staticMessage: 'invalid authentication value for removing a user' })
    }

    await assertParentRemovable({ transaction: cache.transaction, familyId: cache.familyId, user })
  }

  const { devicesChanged } = await removeUserFromFamily({ transaction: cache.transaction, familyId: cache.familyId, user })

  if (devicesChanged) {
    cache.invalidiateDeviceList = true
  }

  cache.invalidiateUserList = true
  cache.incrementTriggeredSyncLevel(2)

  cache.doesUserExist.cache.set(action.userId, false)
  cache.getSecondPasswordHashOfParent.cache.delete(action.userId)
}

// @tag:adult-role
export async function assertParentRemovable ({ transaction, familyId, user }: {
  transaction: SimpleDatabaseTransaction
  familyId: string
  user: UserModel
}) {
  if (user.mail !== '') {
    const usersWithLinkedMail = await transaction.legacy.database.user.count({
      transaction: transaction.legacy.transaction,
      where: {
        familyId,
        type: 'parent',
        mail: {
          [Sequelize.Op.not]: ''
        }
      }
    })

    if (usersWithLinkedMail <= 1) {
      throw new ApplyActionException({ staticMessage: 'this user is the last one with a linked mail address' })
    }
  }

  const usersWithLimitLoginCategories = (await transaction.legacy.database.userLimitLoginCategory.findAll({
    transaction: transaction.legacy.transaction,
    where: {
      familyId
    },
    attributes: ['userId']
  })).map((item) => item.userId)

  const allParentUserIds = (await transaction.legacy.database.user.findAll({
    transaction: transaction.legacy.transaction,
    where: {
      familyId,
      type: 'parent'
    },
    attributes: ['userId']
  })).map((item) => item.userId)

  const allOtherParentUserIds = allParentUserIds.filter((item) => item !== user.userId)

  if (difference(allOtherParentUserIds, usersWithLimitLoginCategories).length === 0) {
    throw new ApplyActionException({ staticMessage: 'can not delete the last user without limit login category' })
  }
}

// @tag:adult-role
export async function removeUserFromFamily ({ transaction, familyId, user }: {
  transaction: SimpleDatabaseTransaction
  familyId: string
  user: UserModel
}): Promise<{ devicesChanged: boolean }> {
  if (user.type === 'child') {
    const categories = await transaction.legacy.database.category.findAll({
      where: {
        familyId,
        childId: user.userId
      },
      transaction: transaction.legacy.transaction
    })

    const categoryIds = { [Sequelize.Op.in]: categories.map((category) => category.categoryId) }

    await transaction.legacy.database.categoryApp.destroy({
      where: { familyId, categoryId: categoryIds },
      transaction: transaction.legacy.transaction
    })

    await transaction.legacy.database.timelimitRule.destroy({
      where: { familyId, categoryId: categoryIds },
      transaction: transaction.legacy.transaction
    })

    await transaction.legacy.database.usedTime.destroy({
      where: { familyId, categoryId: categoryIds },
      transaction: transaction.legacy.transaction
    })

    await transaction.legacy.database.category.destroy({
      where: { familyId, categoryId: categoryIds },
      transaction: transaction.legacy.transaction
    })
  } else {
    // сессии уходят и по внешнему ключу, но их запросы ключей и ключи Диффи — Хеллмана — только так
    await deleteParentSessions({ transaction, where: { familyId, userId: user.userId } })
  }

  const [updatedDevices1] = await transaction.legacy.database.device.update({
    currentUserId: '',
    isUserKeptSignedIn: false
  }, {
    where: {
      familyId,
      currentUserId: user.userId
    },
    transaction: transaction.legacy.transaction
  })

  const [updatedDevices2] = await transaction.legacy.database.device.update({
    defaultUserId: ''
  }, {
    where: {
      familyId,
      defaultUserId: user.userId
    },
    transaction: transaction.legacy.transaction
  })

  await user.destroy({ transaction: transaction.legacy.transaction })

  return { devicesChanged: updatedDevices1 > 0 || updatedDevices2 > 0 }
}
