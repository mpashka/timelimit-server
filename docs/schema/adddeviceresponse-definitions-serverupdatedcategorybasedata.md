# ServerUpdatedCategoryBaseData Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## ServerUpdatedCategoryBaseData Type

`object` ([ServerUpdatedCategoryBaseData](adddeviceresponse-definitions-serverupdatedcategorybasedata.md))

# ServerUpdatedCategoryBaseData Properties

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                  |
| :------------------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [categoryId](#categoryid)                         | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/categoryId")                         |
| [childId](#childid)                               | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-childid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/childId")                               |
| [title](#title)                                   | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-title.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/title")                                   |
| [blockedTimes](#blockedtimes)                     | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-blockedtimes.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/blockedTimes")                     |
| [extraTime](#extratime)                           | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-extratime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/extraTime")                           |
| [extraTimeDay](#extratimeday)                     | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-extratimeday.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/extraTimeDay")                     |
| [tempBlocked](#tempblocked)                       | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-tempblocked.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/tempBlocked")                       |
| [tempBlockTime](#tempblocktime)                   | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-tempblocktime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/tempBlockTime")                   |
| [version](#version)                               | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/version")                               |
| [parentCategoryId](#parentcategoryid)             | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-parentcategoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/parentCategoryId")             |
| [blockAllNotifications](#blockallnotifications)   | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-blockallnotifications.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/blockAllNotifications")   |
| [timeWarnings](#timewarnings)                     | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-timewarnings.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/timeWarnings")                     |
| [mblCharging](#mblcharging)                       | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-mblcharging.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/mblCharging")                       |
| [mblMobile](#mblmobile)                           | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-mblmobile.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/mblMobile")                           |
| [sort](#sort)                                     | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-sort.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/sort")                                     |
| [networks](#networks)                             | `array`   | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-networks.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/networks")                             |
| [dlu](#dlu)                                       | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-dlu.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/dlu")                                       |
| [flags](#flags)                                   | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-flags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/flags")                                   |
| [blockNotificationDelay](#blocknotificationdelay) | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-blocknotificationdelay.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/blockNotificationDelay") |
| [atw](#atw)                                       | `array`   | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-atw.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/atw")                                       |

## categoryId



`categoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/categoryId")

### categoryId Type

`string`

## childId



`childId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-childid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/childId")

### childId Type

`string`

## title



`title`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-title.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/title")

### title Type

`string`

## blockedTimes



`blockedTimes`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-blockedtimes.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/blockedTimes")

### blockedTimes Type

`string`

## extraTime



`extraTime`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-extratime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/extraTime")

### extraTime Type

`number`

## extraTimeDay



`extraTimeDay`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-extratimeday.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/extraTimeDay")

### extraTimeDay Type

`number`

## tempBlocked



`tempBlocked`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-tempblocked.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/tempBlocked")

### tempBlocked Type

`boolean`

## tempBlockTime



`tempBlockTime`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-tempblocktime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/tempBlockTime")

### tempBlockTime Type

`number`

## version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/version")

### version Type

`string`

## parentCategoryId



`parentCategoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-parentcategoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/parentCategoryId")

### parentCategoryId Type

`string`

## blockAllNotifications



`blockAllNotifications`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-blockallnotifications.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/blockAllNotifications")

### blockAllNotifications Type

`boolean`

## timeWarnings



`timeWarnings`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-timewarnings.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/timeWarnings")

### timeWarnings Type

`number`

## mblCharging



`mblCharging`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-mblcharging.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/mblCharging")

### mblCharging Type

`number`

## mblMobile



`mblMobile`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-mblmobile.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/mblMobile")

### mblMobile Type

`number`

## sort



`sort`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-sort.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/sort")

### sort Type

`number`

## networks



`networks`

* is required

* Type: `object[]` ([ServerCategoryNetworkId](adddeviceresponse-definitions-servercategorynetworkid.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-networks.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/networks")

### networks Type

`object[]` ([ServerCategoryNetworkId](adddeviceresponse-definitions-servercategorynetworkid.md))

## dlu



`dlu`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-dlu.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/dlu")

### dlu Type

`number`

## flags



`flags`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-flags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/flags")

### flags Type

`number`

## blockNotificationDelay



`blockNotificationDelay`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-blocknotificationdelay.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/blockNotificationDelay")

### blockNotificationDelay Type

`number`

## atw



`atw`

* is required

* Type: `number[]`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-atw.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/atw")

### atw Type

`number[]`
