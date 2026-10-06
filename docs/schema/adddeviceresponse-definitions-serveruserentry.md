# ServerUserEntry Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## ServerUserEntry Type

`object` ([ServerUserEntry](adddeviceresponse-definitions-serveruserentry.md))

# ServerUserEntry Properties

| Property                                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                              |
| :-------------------------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                                                 | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-id.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/id")                                                 |
| [name](#name)                                             | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-name.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/name")                                             |
| [password](#password)                                     | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-password.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/password")                                     |
| [secondPasswordSalt](#secondpasswordsalt)                 | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-secondpasswordsalt.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/secondPasswordSalt")                 |
| [type](#type)                                             | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-type.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/type")                                             |
| [timeZone](#timezone)                                     | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-timezone.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/timeZone")                                     |
| [disableLimitsUntil](#disablelimitsuntil)                 | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-disablelimitsuntil.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/disableLimitsUntil")                 |
| [mail](#mail)                                             | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-mail.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/mail")                                             |
| [currentDevice](#currentdevice)                           | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-currentdevice.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/currentDevice")                           |
| [categoryForNotAssignedApps](#categoryfornotassignedapps) | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-categoryfornotassignedapps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/categoryForNotAssignedApps") |
| [relaxPrimaryDevice](#relaxprimarydevice)                 | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-relaxprimarydevice.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/relaxPrimaryDevice")                 |
| [mailNotificationFlags](#mailnotificationflags)           | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-mailnotificationflags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/mailNotificationFlags")           |
| [blockedTimes](#blockedtimes)                             | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-blockedtimes.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/blockedTimes")                             |
| [flags](#flags)                                           | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-flags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/flags")                                           |
| [llc](#llc)                                               | `string`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-llc.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/llc")                                               |
| [pbd](#pbd)                                               | `number`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-pbd.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/pbd")                                               |
| [urlFilter](#urlfilter)                                   | `object`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-urlfilter.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/urlFilter")                                                              |
| [adultRole](#adultrole)                                   | `string`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-adultrole.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/adultRole")                                   |
| [childMail](#childmail)                                   | `string`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-childmail.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/childMail")                                   |
| [childMailConfirmByCode](#childmailconfirmbycode)         | `boolean` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-childmailconfirmbycode.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/childMailConfirmByCode")         |
| [requests](#requests)                                     | `array`   | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-requests.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/requests")                                     |
| [appAllowances](#appallowances)                           | `array`   | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-appallowances.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/appAllowances")                           |
| [appRules](#apprules)                                     | `array`   | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-apprules.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/appRules")                                     |
| [newApps](#newapps)                                       | `array`   | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-newapps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/newApps")                                       |

## id



`id`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-id.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/id")

### id Type

`string`

## name



`name`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-name.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/name")

### name Type

`string`

## password



`password`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-password.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/password")

### password Type

`string`

## secondPasswordSalt



`secondPasswordSalt`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-secondpasswordsalt.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/secondPasswordSalt")

### secondPasswordSalt Type

`string`

## type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-type.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"child"`  |             |
| `"parent"` |             |

## timeZone



`timeZone`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-timezone.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/timeZone")

### timeZone Type

`string`

## disableLimitsUntil



`disableLimitsUntil`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-disablelimitsuntil.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/disableLimitsUntil")

### disableLimitsUntil Type

`number`

## mail



`mail`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-mail.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/mail")

### mail Type

`string`

## currentDevice



`currentDevice`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-currentdevice.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/currentDevice")

### currentDevice Type

`string`

## categoryForNotAssignedApps



`categoryForNotAssignedApps`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-categoryfornotassignedapps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/categoryForNotAssignedApps")

### categoryForNotAssignedApps Type

`string`

## relaxPrimaryDevice



`relaxPrimaryDevice`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-relaxprimarydevice.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/relaxPrimaryDevice")

### relaxPrimaryDevice Type

`boolean`

## mailNotificationFlags



`mailNotificationFlags`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-mailnotificationflags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/mailNotificationFlags")

### mailNotificationFlags Type

`number`

## blockedTimes



`blockedTimes`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-blockedtimes.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/blockedTimes")

### blockedTimes Type

`string`

## flags



`flags`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-flags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/flags")

### flags Type

`number`

## llc



`llc`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-llc.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/llc")

### llc Type

`string`

## pbd



`pbd`

* is optional

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-pbd.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/pbd")

### pbd Type

`number`

## urlFilter



`urlFilter`

* is optional

* Type: `object` ([UrlFilter](adddeviceresponse-definitions-urlfilter.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-urlfilter.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/urlFilter")

### urlFilter Type

`object` ([UrlFilter](adddeviceresponse-definitions-urlfilter.md))

## adultRole



`adultRole`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-adultrole.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/adultRole")

### adultRole Type

`string`

### adultRole Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"admin"`   |             |
| `"manager"` |             |
| `"member"`  |             |

## childMail



`childMail`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-childmail.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/childMail")

### childMail Type

`string`

## childMailConfirmByCode



`childMailConfirmByCode`

* is optional

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-childmailconfirmbycode.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/childMailConfirmByCode")

### childMailConfirmByCode Type

`boolean`

## requests



`requests`

* is optional

* Type: `object[]` ([ServerChildRequest](adddeviceresponse-definitions-serverchildrequest.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-requests.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/requests")

### requests Type

`object[]` ([ServerChildRequest](adddeviceresponse-definitions-serverchildrequest.md))

## appAllowances



`appAllowances`

* is optional

* Type: `object[]` ([ServerAppAllowance](adddeviceresponse-definitions-serverappallowance.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-appallowances.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/appAllowances")

### appAllowances Type

`object[]` ([ServerAppAllowance](adddeviceresponse-definitions-serverappallowance.md))

## appRules



`appRules`

* is optional

* Type: `object[]` ([ServerAppRule](adddeviceresponse-definitions-serverapprule.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-apprules.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/appRules")

### appRules Type

`object[]` ([ServerAppRule](adddeviceresponse-definitions-serverapprule.md))

## newApps



`newApps`

* is optional

* Type: `object[]` ([ServerNewApp](adddeviceresponse-definitions-servernewapp.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-newapps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/newApps")

### newApps Type

`object[]` ([ServerNewApp](adddeviceresponse-definitions-servernewapp.md))
