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
import { maxAllowanceDuration } from '../model/childrequest'
import { AppLogicAction } from './basetypes'
import { assertPackageName } from './createchildrequest'
import { InvalidActionParameterException } from './meta/exception'
import { assertIdWithinFamily, assertSafeInteger } from './meta/util'

const maxAppUsageItems = 100
const dayMs = 1000 * 60 * 60 * 24

function fail (actionType: string, staticMessage: string): never {
  throw new InvalidActionParameterException({ actionType, staticMessage })
}

// @tag:parent-code
export class GrantByParentCodeAction extends AppLogicAction {
  readonly code: string
  readonly step: number
  readonly grant: 'app' | 'category'
  readonly packageName: string
  readonly categoryId: string
  readonly until: number

  constructor ({ code, step, grant, packageName, categoryId, until }: Omit<SerializedGrantByParentCodeAction, 'type'>) {
    super()

    const actionType = 'GrantByParentCodeAction'

    if (!/^[0-9]{6}$/.test(code)) fail(actionType, 'code must be six digits')
    assertSafeInteger({ actionType, field: 'step', value: step })
    assertSafeInteger({ actionType, field: 'until', value: until })

    if (grant === 'app') {
      assertPackageName({ actionType, packageName })
      if (categoryId !== '') fail(actionType, 'categoryId must be empty for an app grant')
    } else {
      assertIdWithinFamily({ actionType, field: 'categoryId', value: categoryId })
      if (packageName !== '') fail(actionType, 'packageName must be empty for a category grant')
    }

    if (until <= step * 30_000 || until > step * 30_000 + maxAllowanceDuration) fail(actionType, 'until must be within 48 hours after the step')

    this.code = code
    this.step = step
    this.grant = grant
    this.packageName = packageName
    this.categoryId = categoryId
    this.until = until
  }

  static parse = ({ code, step, grant, packageName, categoryId, until }: SerializedGrantByParentCodeAction) => (
    new GrantByParentCodeAction({ code, step, grant, packageName, categoryId, until })
  )
}

export interface SerializedGrantByParentCodeAction {
  type: 'GRANT_BY_PARENT_CODE'
  code: string
  step: number
  grant: 'app' | 'category'
  packageName: string
  categoryId: string
  until: number
}

// @tag:app-usage
export class SetAppUsageAction extends AppLogicAction {
  readonly day: number
  readonly items: Array<SerializedAppUsageItem>

  constructor ({ day, items }: { day: number, items: Array<SerializedAppUsageItem> }) {
    super()

    const actionType = 'SetAppUsageAction'

    assertSafeInteger({ actionType, field: 'day', value: day })
    if (day < 0) fail(actionType, 'day must not be negative')
    if (items.length === 0 || items.length > maxAppUsageItems) fail(actionType, 'items must have 1 to ' + maxAppUsageItems + ' entries')

    const seen = new Set<string>()

    for (const item of items) {
      assertPackageName({ actionType, packageName: item.packageName })
      assertSafeInteger({ actionType, field: 'ms', value: item.ms })
      if (item.ms < 0 || item.ms > dayMs) fail(actionType, 'ms must be within a day')
      if (seen.has(item.packageName)) fail(actionType, 'duplicate packageName')
      seen.add(item.packageName)
    }

    this.day = day
    this.items = items
  }

  static parse = ({ day, items }: SerializedSetAppUsageAction) => new SetAppUsageAction({ day, items })
}

export interface SerializedAppUsageItem {
  packageName: string
  ms: number
}

export interface SerializedSetAppUsageAction {
  type: 'SET_APP_USAGE'
  day: number
  items: Array<SerializedAppUsageItem>
}

// @tag:new-app
export class ReportNewAppAction extends AppLogicAction {
  readonly packageName: string
  readonly title: string
  readonly section: string
  readonly installedAt: number

  constructor ({ packageName, title, section, installedAt }: Omit<SerializedReportNewAppAction, 'type'>) {
    super()

    const actionType = 'ReportNewAppAction'

    assertPackageName({ actionType, packageName })
    if (title.length > 100) fail(actionType, 'title longer than 100 chars')
    if (!/^[a-z_]{0,32}$/.test(section)) fail(actionType, 'section must be a lowercase word')
    assertSafeInteger({ actionType, field: 'installedAt', value: installedAt })
    if (installedAt < 0) fail(actionType, 'installedAt must not be negative')

    this.packageName = packageName
    this.title = title
    this.section = section
    this.installedAt = installedAt
  }

  static parse = ({ packageName, title, section, installedAt }: SerializedReportNewAppAction) => (
    new ReportNewAppAction({ packageName, title, section, installedAt })
  )
}

export interface SerializedReportNewAppAction {
  type: 'REPORT_NEW_APP'
  packageName: string
  title: string
  section: string
  installedAt: number
}

// @tag:new-app
export class ForgetNewAppAction extends AppLogicAction {
  readonly packageName: string

  constructor ({ packageName }: { packageName: string }) {
    super()
    assertPackageName({ actionType: 'ForgetNewAppAction', packageName })
    this.packageName = packageName
  }

  static parse = ({ packageName }: SerializedForgetNewAppAction) => new ForgetNewAppAction({ packageName })
}

export interface SerializedForgetNewAppAction {
  type: 'FORGET_NEW_APP'
  packageName: string
}

// @tag:device-state
export class SetForegroundAppAction extends AppLogicAction {
  readonly packageName: string

  constructor ({ packageName }: { packageName: string }) {
    super()
    if (packageName !== '') assertPackageName({ actionType: 'SetForegroundAppAction', packageName })
    this.packageName = packageName
  }

  static parse = ({ packageName }: SerializedSetForegroundAppAction) => new SetForegroundAppAction({ packageName })
}

export interface SerializedSetForegroundAppAction {
  type: 'SET_FOREGROUND_APP'
  packageName: string
}
