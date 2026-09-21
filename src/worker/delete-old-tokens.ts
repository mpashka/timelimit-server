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
import { config } from '../config'
import { SimpleDatabase } from '../database/simple'
import { deleteParentSessions } from '../function/parent-session/cleanup'

export function initDeleteOldTokensWorker ({ database }: {
  database: SimpleDatabase
}) {
  function doWorkSafe () {
    console.log('deleting old tokens now')

    deleteOldTokens({ database }).then(() => {
      console.log('finished deleting old tokens')
    }).catch((ex) => {
      console.warn('error deleting old tokens', ex)
    })
  }

  setTimeout(() => {
    doWorkSafe()

    setInterval(() => {
      doWorkSafe()
    }, 1000 * 60 * 60 /* every hour */)
  }, 1000 * 60 * 7 /* after 7 minutes */)
}

async function deleteOldTokens ({ database }: {
  database: SimpleDatabase
}) {
  await database.transaction(async (transaction) => {
    await transaction.legacy.database.authtoken.destroy({
      where: {
        createdAt: {
          [Sequelize.Op.lt]: (Date.now() - 1000 * 60 * 60 * 3 /* 3 hours */).toString()
        }
      },
      transaction: transaction.legacy.transaction
    })

    await transaction.legacy.database.addDeviceToken.destroy({
      where: {
        createdAt: {
          [Sequelize.Op.lt]: (Date.now() - 1000 * 60 * 60 * 3 /* 3 hours */).toString()
        }
      },
      transaction: transaction.legacy.transaction
    })

    await transaction.legacy.database.mailLoginToken.destroy({
      where: {
        createdAt: {
          [Sequelize.Op.lt]: (Date.now() - 1000 * 60 * 60 * 3 /* 3 hours */).toString()
        }
      },
      transaction: transaction.legacy.transaction
    })

    await transaction.legacy.database.deviceDhKey.destroy({
      where: {
        expireAt: {
          [Sequelize.Op.lt]: Date.now().toString()
        }
      },
      transaction: transaction.legacy.transaction
    })

    // @tag:parent-console
    // тот же срок, по которому сессию отвергает resolveSubject — иначе строка живёт вечно
    await deleteParentSessions({
      transaction,
      where: {
        lastUsedAt: {
          [Sequelize.Op.lt]: (Date.now() - config.parentSessionMaxIdleMs).toString()
        }
      }
    })
  })
}
