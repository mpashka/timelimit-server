# ServerDataStatus Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## ServerDataStatus Type

`object` ([ServerDataStatus](adddeviceresponse-definitions-serverdatastatus.md))

# ServerDataStatus Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                    |
| :---------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [devices](#devices)           | `object` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicelist.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/devices")                              |
| [devices2](#devices2)         | `array`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-devices2.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/devices2")         |
| [apps](#apps)                 | `array`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-apps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/apps")                 |
| [rmCategories](#rmcategories) | `array`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-rmcategories.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/rmCategories") |
| [categoryBase](#categorybase) | `array`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-categorybase.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/categoryBase") |
| [categoryApp](#categoryapp)   | `array`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-categoryapp.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/categoryApp")   |
| [usedTimes](#usedtimes)       | `array`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-usedtimes.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/usedTimes")       |
| [rules](#rules)               | `array`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-rules.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/rules")               |
| [tasks](#tasks)               | `array`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-tasks.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/tasks")               |
| [users](#users)               | `object` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/users")                                  |
| [krq](#krq)                   | `array`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-krq.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/krq")                   |
| [kr](#kr)                     | `array`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-kr.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/kr")                     |
| [pings](#pings)               | `array`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-pings.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/pings")               |
| [deviceStates](#devicestates) | `array`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-devicestates.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/deviceStates") |
| [dh](#dh)                     | `object` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdhkey.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/dh")                                        |
| [u2f](#u2f)                   | `object` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-u2fdata.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/u2f")                                           |
| [fullVersion](#fullversion)   | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-fullversion.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/fullVersion")   |
| [message](#message)           | `string` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-message.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/message")           |
| [apiLevel](#apilevel)         | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-apilevel.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/apiLevel")         |

## devices



`devices`

* is optional

* Type: `object` ([ServerDeviceList](adddeviceresponse-definitions-serverdevicelist.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicelist.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/devices")

### devices Type

`object` ([ServerDeviceList](adddeviceresponse-definitions-serverdevicelist.md))

## devices2



`devices2`

* is optional

* Type: `object[]` ([ServerExtendedDeviceData](adddeviceresponse-definitions-serverextendeddevicedata.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-devices2.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/devices2")

### devices2 Type

`object[]` ([ServerExtendedDeviceData](adddeviceresponse-definitions-serverextendeddevicedata.md))

## apps



`apps`

* is optional

* Type: `object[]` ([ServerInstalledAppsData](adddeviceresponse-definitions-serverinstalledappsdata.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-apps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/apps")

### apps Type

`object[]` ([ServerInstalledAppsData](adddeviceresponse-definitions-serverinstalledappsdata.md))

## rmCategories



`rmCategories`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-rmcategories.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/rmCategories")

### rmCategories Type

`string[]`

## categoryBase



`categoryBase`

* is optional

* Type: `object[]` ([ServerUpdatedCategoryBaseData](adddeviceresponse-definitions-serverupdatedcategorybasedata.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-categorybase.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/categoryBase")

### categoryBase Type

`object[]` ([ServerUpdatedCategoryBaseData](adddeviceresponse-definitions-serverupdatedcategorybasedata.md))

## categoryApp



`categoryApp`

* is optional

* Type: `object[]` ([ServerUpdatedCategoryAssignedApps](adddeviceresponse-definitions-serverupdatedcategoryassignedapps.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-categoryapp.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/categoryApp")

### categoryApp Type

`object[]` ([ServerUpdatedCategoryAssignedApps](adddeviceresponse-definitions-serverupdatedcategoryassignedapps.md))

## usedTimes



`usedTimes`

* is optional

* Type: `object[]` ([ServerUpdatedCategoryUsedTimes](adddeviceresponse-definitions-serverupdatedcategoryusedtimes.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-usedtimes.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/usedTimes")

### usedTimes Type

`object[]` ([ServerUpdatedCategoryUsedTimes](adddeviceresponse-definitions-serverupdatedcategoryusedtimes.md))

## rules



`rules`

* is optional

* Type: `object[]` ([ServerUpdatedTimeLimitRules](adddeviceresponse-definitions-serverupdatedtimelimitrules.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-rules.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/rules")

### rules Type

`object[]` ([ServerUpdatedTimeLimitRules](adddeviceresponse-definitions-serverupdatedtimelimitrules.md))

## tasks



`tasks`

* is optional

* Type: `object[]` ([ServerUpdatedCategoryTasks](adddeviceresponse-definitions-serverupdatedcategorytasks.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-tasks.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/tasks")

### tasks Type

`object[]` ([ServerUpdatedCategoryTasks](adddeviceresponse-definitions-serverupdatedcategorytasks.md))

## users



`users`

* is optional

* Type: `object` ([ServerUserList](adddeviceresponse-definitions-serveruserlist.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/users")

### users Type

`object` ([ServerUserList](adddeviceresponse-definitions-serveruserlist.md))

## krq



`krq`

* is optional

* Type: `object[]` ([ServerKeyRequest](adddeviceresponse-definitions-serverkeyrequest.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-krq.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/krq")

### krq Type

`object[]` ([ServerKeyRequest](adddeviceresponse-definitions-serverkeyrequest.md))

## kr



`kr`

* is optional

* Type: `object[]` ([ServerKeyResponse](adddeviceresponse-definitions-serverkeyresponse.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-kr.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/kr")

### kr Type

`object[]` ([ServerKeyResponse](adddeviceresponse-definitions-serverkeyresponse.md))

## pings



`pings`

* is optional

* Type: `object[]` ([ServerPing](adddeviceresponse-definitions-serverping.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-pings.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/pings")

### pings Type

`object[]` ([ServerPing](adddeviceresponse-definitions-serverping.md))

## deviceStates



`deviceStates`

* is optional

* Type: `object[]` ([ServerDeviceState](adddeviceresponse-definitions-serverdevicestate.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-devicestates.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/deviceStates")

### deviceStates Type

`object[]` ([ServerDeviceState](adddeviceresponse-definitions-serverdevicestate.md))

## dh



`dh`

* is optional

* Type: `object` ([ServerDhKey](adddeviceresponse-definitions-serverdhkey.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdhkey.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/dh")

### dh Type

`object` ([ServerDhKey](adddeviceresponse-definitions-serverdhkey.md))

## u2f



`u2f`

* is optional

* Type: `object` ([U2fData](adddeviceresponse-definitions-u2fdata.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-u2fdata.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/u2f")

### u2f Type

`object` ([U2fData](adddeviceresponse-definitions-u2fdata.md))

## fullVersion



`fullVersion`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-fullversion.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/fullVersion")

### fullVersion Type

`number`

## message



`message`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-message.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/message")

### message Type

`string`

## apiLevel



`apiLevel`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-apilevel.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/apiLevel")

### apiLevel Type

`number`
