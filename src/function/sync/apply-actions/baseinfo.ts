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

import { SimpleDatabaseTransaction } from '../../../database/simple'
import { resolveSubject, Subject } from '../subject'
import { SourceFamilyNotFoundException } from './exception/illegal-state'

export interface ApplyActionBaseInfo {
  subject: Subject
  hasFullVersion: boolean
}

export async function getApplyActionBaseInfo ({ transaction, deviceAuthToken }: {
  transaction: SimpleDatabaseTransaction
  deviceAuthToken: string
}): Promise<ApplyActionBaseInfo> {
  const subject = await resolveSubject({ transaction, authToken: deviceAuthToken })

  const familyEntryUnsafe = await transaction.legacy.database.family.findOne({
    where: {
      familyId: subject.familyId
    },
    transaction: transaction.legacy.transaction,
    attributes: ['hasFullVersion']
  })

  if (!familyEntryUnsafe) {
    throw new SourceFamilyNotFoundException()
  }

  return {
    subject,
    hasFullVersion: familyEntryUnsafe.hasFullVersion
  }
}
