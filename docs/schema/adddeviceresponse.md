# AddDeviceResponse Schema

```txt
https://timelimit.io/AddDeviceResponse
```

`POST /parent/create-family`, `POST /parent/sign-in-into-family`.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json](AddDeviceResponse.schema.json "open original schema") |

## AddDeviceResponse Type

`object` ([AddDeviceResponse](adddeviceresponse.md))

# AddDeviceResponse Properties

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                |
| :---------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------- |
| [deviceAuthToken](#deviceauthtoken) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-properties-deviceauthtoken.md "https://timelimit.io/AddDeviceResponse#/properties/deviceAuthToken") |
| [ownDeviceId](#owndeviceid)         | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-properties-owndeviceid.md "https://timelimit.io/AddDeviceResponse#/properties/ownDeviceId")         |
| [data](#data)                       | `object` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus.md "https://timelimit.io/AddDeviceResponse#/properties/data")          |

## deviceAuthToken



`deviceAuthToken`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-properties-deviceauthtoken.md "https://timelimit.io/AddDeviceResponse#/properties/deviceAuthToken")

### deviceAuthToken Type

`string`

## ownDeviceId



`ownDeviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-properties-owndeviceid.md "https://timelimit.io/AddDeviceResponse#/properties/ownDeviceId")

### ownDeviceId Type

`string`

## data



`data`

* is required

* Type: `object` ([ServerDataStatus](adddeviceresponse-definitions-serverdatastatus.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus.md "https://timelimit.io/AddDeviceResponse#/properties/data")

### data Type

`object` ([ServerDataStatus](adddeviceresponse-definitions-serverdatastatus.md))

# AddDeviceResponse Definitions

## Definitions group ServerDataStatus

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus"}
```

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

### devices



`devices`

* is optional

* Type: `object` ([ServerDeviceList](adddeviceresponse-definitions-serverdevicelist.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicelist.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/devices")

#### devices Type

`object` ([ServerDeviceList](adddeviceresponse-definitions-serverdevicelist.md))

### devices2



`devices2`

* is optional

* Type: `object[]` ([ServerExtendedDeviceData](adddeviceresponse-definitions-serverextendeddevicedata.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-devices2.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/devices2")

#### devices2 Type

`object[]` ([ServerExtendedDeviceData](adddeviceresponse-definitions-serverextendeddevicedata.md))

### apps



`apps`

* is optional

* Type: `object[]` ([ServerInstalledAppsData](adddeviceresponse-definitions-serverinstalledappsdata.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-apps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/apps")

#### apps Type

`object[]` ([ServerInstalledAppsData](adddeviceresponse-definitions-serverinstalledappsdata.md))

### rmCategories



`rmCategories`

* is optional

* Type: `string[]`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-rmcategories.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/rmCategories")

#### rmCategories Type

`string[]`

### categoryBase



`categoryBase`

* is optional

* Type: `object[]` ([ServerUpdatedCategoryBaseData](adddeviceresponse-definitions-serverupdatedcategorybasedata.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-categorybase.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/categoryBase")

#### categoryBase Type

`object[]` ([ServerUpdatedCategoryBaseData](adddeviceresponse-definitions-serverupdatedcategorybasedata.md))

### categoryApp



`categoryApp`

* is optional

* Type: `object[]` ([ServerUpdatedCategoryAssignedApps](adddeviceresponse-definitions-serverupdatedcategoryassignedapps.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-categoryapp.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/categoryApp")

#### categoryApp Type

`object[]` ([ServerUpdatedCategoryAssignedApps](adddeviceresponse-definitions-serverupdatedcategoryassignedapps.md))

### usedTimes



`usedTimes`

* is optional

* Type: `object[]` ([ServerUpdatedCategoryUsedTimes](adddeviceresponse-definitions-serverupdatedcategoryusedtimes.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-usedtimes.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/usedTimes")

#### usedTimes Type

`object[]` ([ServerUpdatedCategoryUsedTimes](adddeviceresponse-definitions-serverupdatedcategoryusedtimes.md))

### rules



`rules`

* is optional

* Type: `object[]` ([ServerUpdatedTimeLimitRules](adddeviceresponse-definitions-serverupdatedtimelimitrules.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-rules.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/rules")

#### rules Type

`object[]` ([ServerUpdatedTimeLimitRules](adddeviceresponse-definitions-serverupdatedtimelimitrules.md))

### tasks



`tasks`

* is optional

* Type: `object[]` ([ServerUpdatedCategoryTasks](adddeviceresponse-definitions-serverupdatedcategorytasks.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-tasks.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/tasks")

#### tasks Type

`object[]` ([ServerUpdatedCategoryTasks](adddeviceresponse-definitions-serverupdatedcategorytasks.md))

### users



`users`

* is optional

* Type: `object` ([ServerUserList](adddeviceresponse-definitions-serveruserlist.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/users")

#### users Type

`object` ([ServerUserList](adddeviceresponse-definitions-serveruserlist.md))

### krq



`krq`

* is optional

* Type: `object[]` ([ServerKeyRequest](adddeviceresponse-definitions-serverkeyrequest.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-krq.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/krq")

#### krq Type

`object[]` ([ServerKeyRequest](adddeviceresponse-definitions-serverkeyrequest.md))

### kr



`kr`

* is optional

* Type: `object[]` ([ServerKeyResponse](adddeviceresponse-definitions-serverkeyresponse.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-kr.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/kr")

#### kr Type

`object[]` ([ServerKeyResponse](adddeviceresponse-definitions-serverkeyresponse.md))

### pings



`pings`

* is optional

* Type: `object[]` ([ServerPing](adddeviceresponse-definitions-serverping.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-pings.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/pings")

#### pings Type

`object[]` ([ServerPing](adddeviceresponse-definitions-serverping.md))

### deviceStates



`deviceStates`

* is optional

* Type: `object[]` ([ServerDeviceState](adddeviceresponse-definitions-serverdevicestate.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-devicestates.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/deviceStates")

#### deviceStates Type

`object[]` ([ServerDeviceState](adddeviceresponse-definitions-serverdevicestate.md))

### dh



`dh`

* is optional

* Type: `object` ([ServerDhKey](adddeviceresponse-definitions-serverdhkey.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdhkey.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/dh")

#### dh Type

`object` ([ServerDhKey](adddeviceresponse-definitions-serverdhkey.md))

### u2f



`u2f`

* is optional

* Type: `object` ([U2fData](adddeviceresponse-definitions-u2fdata.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-u2fdata.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/u2f")

#### u2f Type

`object` ([U2fData](adddeviceresponse-definitions-u2fdata.md))

### fullVersion



`fullVersion`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-fullversion.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/fullVersion")

#### fullVersion Type

`number`

### message



`message`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-message.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/message")

#### message Type

`string`

### apiLevel



`apiLevel`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdatastatus-properties-apilevel.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDataStatus/properties/apiLevel")

#### apiLevel Type

`number`

## Definitions group ServerDeviceList

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceList"}
```

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                          |
| :------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [version](#version) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicelist-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceList/properties/version") |
| [data](#data-1)     | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicelist-properties-data.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceList/properties/data")       |

### version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicelist-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceList/properties/version")

#### version Type

`string`

### data



`data`

* is required

* Type: `object[]` ([ServerDeviceData](adddeviceresponse-definitions-serverdevicedata.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicelist-properties-data.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceList/properties/data")

#### data Type

`object[]` ([ServerDeviceData](adddeviceresponse-definitions-serverdevicedata.md))

## Definitions group ServerDeviceData

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData"}
```

| Property                                        | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                      |
| :---------------------------------------------- | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deviceId](#deviceid)                           | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/deviceId")                           |
| [name](#name)                                   | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-name.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/name")                                   |
| [model](#model)                                 | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-model.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/model")                                 |
| [addedAt](#addedat)                             | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-addedat.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/addedAt")                             |
| [currentUserId](#currentuserid)                 | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-currentuserid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/currentUserId")                 |
| [networkTime](#networktime)                     | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-networktime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/networkTime")                     |
| [cProtectionLevel](#cprotectionlevel)           | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-protectionlevel.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cProtectionLevel")            |
| [hProtectionLevel](#hprotectionlevel)           | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-protectionlevel-1.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hProtectionLevel")          |
| [cUsageStats](#cusagestats)                     | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cUsageStats")         |
| [hUsageStats](#husagestats)                     | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-1.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hUsageStats")       |
| [cNotificationAccess](#cnotificationaccess)     | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-newpermissionstatus.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cNotificationAccess")     |
| [hNotificationAccess](#hnotificationaccess)     | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-newpermissionstatus-1.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hNotificationAccess")   |
| [cAppVersion](#cappversion)                     | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-cappversion.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cAppVersion")                     |
| [hAppVersion](#happversion)                     | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-happversion.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hAppVersion")                     |
| [tDisablingAdmin](#tdisablingadmin)             | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-tdisablingadmin.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/tDisablingAdmin")             |
| [reboot](#reboot)                               | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-reboot.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/reboot")                               |
| [hadManipulation](#hadmanipulation)             | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-hadmanipulation.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hadManipulation")             |
| [hadManipulationFlags](#hadmanipulationflags)   | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-hadmanipulationflags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hadManipulationFlags")   |
| [reportUninstall](#reportuninstall)             | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-reportuninstall.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/reportUninstall")             |
| [isUserKeptSignedIn](#isuserkeptsignedin)       | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-isuserkeptsignedin.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/isUserKeptSignedIn")       |
| [showDeviceConnected](#showdeviceconnected)     | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-showdeviceconnected.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/showDeviceConnected")     |
| [defUser](#defuser)                             | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-defuser.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/defUser")                             |
| [defUserTimeout](#defusertimeout)               | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-defusertimeout.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/defUserTimeout")               |
| [rebootIsManipulation](#rebootismanipulation)   | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-rebootismanipulation.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/rebootIsManipulation")   |
| [cOverlay](#coverlay)                           | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-2.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cOverlay")          |
| [hOverlay](#hoverlay)                           | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-3.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hOverlay")          |
| [asEnabled](#asenabled)                         | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-asenabled.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/asEnabled")                         |
| [wasAsEnabled](#wasasenabled)                   | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-wasasenabled.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/wasAsEnabled")                   |
| [activityLevelBlocking](#activitylevelblocking) | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-activitylevelblocking.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/activityLevelBlocking") |
| [qOrLater](#qorlater)                           | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-qorlater.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/qOrLater")                           |
| [mFlags](#mflags)                               | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-mflags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/mFlags")                               |
| [pk](#pk)                                       | `string`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-pk.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/pk")                                       |
| [pType](#ptype)                                 | `string`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-ptype.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/pType")                                 |
| [pLevel](#plevel)                               | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-plevel.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/pLevel")                               |
| [exFlags](#exflags)                             | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-exflags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/exFlags")                             |

### deviceId



`deviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/deviceId")

#### deviceId Type

`string`

### name



`name`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-name.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/name")

#### name Type

`string`

### model



`model`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-model.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/model")

#### model Type

`string`

### addedAt



`addedAt`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-addedat.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/addedAt")

#### addedAt Type

`number`

### currentUserId



`currentUserId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-currentuserid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/currentUserId")

#### currentUserId Type

`string`

### networkTime



`networkTime`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-networktime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/networkTime")

#### networkTime Type

`string`

#### networkTime Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"disabled"`    |             |
| `"enabled"`     |             |
| `"if possible"` |             |

### cProtectionLevel



`cProtectionLevel`

* is required

* Type: `string` ([ProtectionLevel](adddeviceresponse-definitions-serverdevicedata-properties-protectionlevel.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-protectionlevel.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cProtectionLevel")

#### cProtectionLevel Type

`string` ([ProtectionLevel](adddeviceresponse-definitions-serverdevicedata-properties-protectionlevel.md))

#### cProtectionLevel Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"device owner"`          |             |
| `"none"`                  |             |
| `"password device admin"` |             |
| `"simple device admin"`   |             |

### hProtectionLevel



`hProtectionLevel`

* is required

* Type: `string` ([ProtectionLevel](adddeviceresponse-definitions-serverdevicedata-properties-protectionlevel-1.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-protectionlevel-1.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hProtectionLevel")

#### hProtectionLevel Type

`string` ([ProtectionLevel](adddeviceresponse-definitions-serverdevicedata-properties-protectionlevel-1.md))

#### hProtectionLevel Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"device owner"`          |             |
| `"none"`                  |             |
| `"password device admin"` |             |
| `"simple device admin"`   |             |

### cUsageStats



`cUsageStats`

* is required

* Type: `string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cUsageStats")

#### cUsageStats Type

`string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus.md))

#### cUsageStats Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"granted"`      |             |
| `"not granted"`  |             |
| `"not required"` |             |

### hUsageStats



`hUsageStats`

* is required

* Type: `string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-1.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-1.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hUsageStats")

#### hUsageStats Type

`string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-1.md))

#### hUsageStats Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"granted"`      |             |
| `"not granted"`  |             |
| `"not required"` |             |

### cNotificationAccess



`cNotificationAccess`

* is required

* Type: `string` ([NewPermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-newpermissionstatus.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-newpermissionstatus.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cNotificationAccess")

#### cNotificationAccess Type

`string` ([NewPermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-newpermissionstatus.md))

#### cNotificationAccess Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"granted"`       |             |
| `"not granted"`   |             |
| `"not supported"` |             |

### hNotificationAccess



`hNotificationAccess`

* is required

* Type: `string` ([NewPermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-newpermissionstatus-1.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-newpermissionstatus-1.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hNotificationAccess")

#### hNotificationAccess Type

`string` ([NewPermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-newpermissionstatus-1.md))

#### hNotificationAccess Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"granted"`       |             |
| `"not granted"`   |             |
| `"not supported"` |             |

### cAppVersion



`cAppVersion`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-cappversion.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cAppVersion")

#### cAppVersion Type

`number`

### hAppVersion



`hAppVersion`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-happversion.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hAppVersion")

#### hAppVersion Type

`number`

### tDisablingAdmin



`tDisablingAdmin`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-tdisablingadmin.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/tDisablingAdmin")

#### tDisablingAdmin Type

`boolean`

### reboot



`reboot`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-reboot.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/reboot")

#### reboot Type

`boolean`

### hadManipulation



`hadManipulation`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-hadmanipulation.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hadManipulation")

#### hadManipulation Type

`boolean`

### hadManipulationFlags



`hadManipulationFlags`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-hadmanipulationflags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hadManipulationFlags")

#### hadManipulationFlags Type

`number`

### reportUninstall



`reportUninstall`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-reportuninstall.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/reportUninstall")

#### reportUninstall Type

`boolean`

### isUserKeptSignedIn



`isUserKeptSignedIn`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-isuserkeptsignedin.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/isUserKeptSignedIn")

#### isUserKeptSignedIn Type

`boolean`

### showDeviceConnected



`showDeviceConnected`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-showdeviceconnected.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/showDeviceConnected")

#### showDeviceConnected Type

`boolean`

### defUser



`defUser`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-defuser.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/defUser")

#### defUser Type

`string`

### defUserTimeout



`defUserTimeout`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-defusertimeout.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/defUserTimeout")

#### defUserTimeout Type

`number`

### rebootIsManipulation



`rebootIsManipulation`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-rebootismanipulation.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/rebootIsManipulation")

#### rebootIsManipulation Type

`boolean`

### cOverlay



`cOverlay`

* is required

* Type: `string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-2.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-2.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cOverlay")

#### cOverlay Type

`string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-2.md))

#### cOverlay Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"granted"`      |             |
| `"not granted"`  |             |
| `"not required"` |             |

### hOverlay



`hOverlay`

* is required

* Type: `string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-3.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-3.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hOverlay")

#### hOverlay Type

`string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-3.md))

#### hOverlay Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"granted"`      |             |
| `"not granted"`  |             |
| `"not required"` |             |

### asEnabled



`asEnabled`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-asenabled.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/asEnabled")

#### asEnabled Type

`boolean`

### wasAsEnabled



`wasAsEnabled`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-wasasenabled.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/wasAsEnabled")

#### wasAsEnabled Type

`boolean`

### activityLevelBlocking



`activityLevelBlocking`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-activitylevelblocking.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/activityLevelBlocking")

#### activityLevelBlocking Type

`boolean`

### qOrLater



`qOrLater`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-qorlater.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/qOrLater")

#### qOrLater Type

`boolean`

### mFlags



`mFlags`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-mflags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/mFlags")

#### mFlags Type

`number`

### pk



`pk`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-pk.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/pk")

#### pk Type

`string`

### pType



`pType`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-ptype.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/pType")

#### pType Type

`string`

### pLevel



`pLevel`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-plevel.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/pLevel")

#### pLevel Type

`number`

### exFlags



`exFlags`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-exflags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/exFlags")

#### exFlags Type

`number`

## Definitions group ProtectionLevel

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ProtectionLevel"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group RuntimePermissionStatus

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/RuntimePermissionStatus"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group NewPermissionStatus

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/NewPermissionStatus"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group ServerExtendedDeviceData

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerExtendedDeviceData"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                            |
| :---------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deviceId](#deviceid-1) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverextendeddevicedata-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerExtendedDeviceData/properties/deviceId") |
| [appsBase](#appsbase)   | `object` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servercryptcontainer.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerExtendedDeviceData/properties/appsBase")                         |
| [appsDiff](#appsdiff)   | `object` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servercryptcontainer.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerExtendedDeviceData/properties/appsDiff")                         |

### deviceId



`deviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverextendeddevicedata-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerExtendedDeviceData/properties/deviceId")

#### deviceId Type

`string`

### appsBase



`appsBase`

* is optional

* Type: `object` ([ServerCryptContainer](adddeviceresponse-definitions-servercryptcontainer.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servercryptcontainer.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerExtendedDeviceData/properties/appsBase")

#### appsBase Type

`object` ([ServerCryptContainer](adddeviceresponse-definitions-servercryptcontainer.md))

### appsDiff



`appsDiff`

* is optional

* Type: `object` ([ServerCryptContainer](adddeviceresponse-definitions-servercryptcontainer.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servercryptcontainer.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerExtendedDeviceData/properties/appsDiff")

#### appsDiff Type

`object` ([ServerCryptContainer](adddeviceresponse-definitions-servercryptcontainer.md))

## Definitions group ServerCryptContainer

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerCryptContainer"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                  |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [version](#version-1) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servercryptcontainer-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerCryptContainer/properties/version") |
| [data](#data-2)       | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servercryptcontainer-properties-data.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerCryptContainer/properties/data")       |

### version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servercryptcontainer-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerCryptContainer/properties/version")

#### version Type

`string`

### data



`data`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servercryptcontainer-properties-data.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerCryptContainer/properties/data")

#### data Type

`string`

## Definitions group ServerInstalledAppsData

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData"}
```

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [deviceId](#deviceid-2)   | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/deviceId")     |
| [version](#version-2)     | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/version")       |
| [apps](#apps-1)           | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-apps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/apps")             |
| [activities](#activities) | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-activities.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/activities") |

### deviceId



`deviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/deviceId")

#### deviceId Type

`string`

### version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/version")

#### version Type

`string`

### apps



`apps`

* is required

* Type: `object[]` ([SerializedInstalledApp](adddeviceresponse-definitions-serializedinstalledapp.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-apps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/apps")

#### apps Type

`object[]` ([SerializedInstalledApp](adddeviceresponse-definitions-serializedinstalledapp.md))

### activities



`activities`

* is required

* Type: `object[]` ([SerializedAppActivityItem](adddeviceresponse-definitions-serializedappactivityitem.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-activities.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/activities")

#### activities Type

`object[]` ([SerializedAppActivityItem](adddeviceresponse-definitions-serializedappactivityitem.md))

## Definitions group SerializedInstalledApp

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp"}
```

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                       |
| :-------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [packageName](#packagename)       | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-packagename.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/packageName")          |
| [title](#title)                   | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-title.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/title")                      |
| [isLaunchable](#islaunchable)     | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-islaunchable.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/isLaunchable")        |
| [recommendation](#recommendation) | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-apprecommendation.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/recommendation") |

### packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-packagename.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/packageName")

#### packageName Type

`string`

### title



`title`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-title.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/title")

#### title Type

`string`

### isLaunchable



`isLaunchable`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-islaunchable.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/isLaunchable")

#### isLaunchable Type

`boolean`

### recommendation



`recommendation`

* is required

* Type: `string` ([AppRecommendation](adddeviceresponse-definitions-serializedinstalledapp-properties-apprecommendation.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-apprecommendation.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/recommendation")

#### recommendation Type

`string` ([AppRecommendation](adddeviceresponse-definitions-serializedinstalledapp-properties-apprecommendation.md))

#### recommendation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"blacklist"` |             |
| `"none"`      |             |
| `"whitelist"` |             |

## Definitions group AppRecommendation

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/AppRecommendation"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group SerializedAppActivityItem

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/SerializedAppActivityItem"}
```

| Property | Type     | Required | Nullable       | Defined by                                                                                                                                                                                |
| :------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [p](#p)  | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serializedappactivityitem-properties-p.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedAppActivityItem/properties/p") |
| [c](#c)  | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serializedappactivityitem-properties-c.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedAppActivityItem/properties/c") |
| [t](#t)  | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serializedappactivityitem-properties-t.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedAppActivityItem/properties/t") |

### p



`p`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serializedappactivityitem-properties-p.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedAppActivityItem/properties/p")

#### p Type

`string`

### c



`c`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serializedappactivityitem-properties-c.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedAppActivityItem/properties/c")

#### c Type

`string`

### t



`t`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serializedappactivityitem-properties-t.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedAppActivityItem/properties/t")

#### t Type

`string`

## Definitions group ServerUpdatedCategoryBaseData

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData"}
```

| Property                                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                                  |
| :------------------------------------------------ | :-------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [categoryId](#categoryid)                         | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/categoryId")                         |
| [childId](#childid)                               | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-childid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/childId")                               |
| [title](#title-1)                                 | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-title.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/title")                                   |
| [blockedTimes](#blockedtimes)                     | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-blockedtimes.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/blockedTimes")                     |
| [extraTime](#extratime)                           | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-extratime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/extraTime")                           |
| [extraTimeDay](#extratimeday)                     | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-extratimeday.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/extraTimeDay")                     |
| [tempBlocked](#tempblocked)                       | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-tempblocked.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/tempBlocked")                       |
| [tempBlockTime](#tempblocktime)                   | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-tempblocktime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/tempBlockTime")                   |
| [version](#version-3)                             | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/version")                               |
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

### categoryId



`categoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/categoryId")

#### categoryId Type

`string`

### childId



`childId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-childid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/childId")

#### childId Type

`string`

### title



`title`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-title.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/title")

#### title Type

`string`

### blockedTimes



`blockedTimes`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-blockedtimes.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/blockedTimes")

#### blockedTimes Type

`string`

### extraTime



`extraTime`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-extratime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/extraTime")

#### extraTime Type

`number`

### extraTimeDay



`extraTimeDay`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-extratimeday.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/extraTimeDay")

#### extraTimeDay Type

`number`

### tempBlocked



`tempBlocked`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-tempblocked.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/tempBlocked")

#### tempBlocked Type

`boolean`

### tempBlockTime



`tempBlockTime`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-tempblocktime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/tempBlockTime")

#### tempBlockTime Type

`number`

### version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/version")

#### version Type

`string`

### parentCategoryId



`parentCategoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-parentcategoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/parentCategoryId")

#### parentCategoryId Type

`string`

### blockAllNotifications



`blockAllNotifications`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-blockallnotifications.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/blockAllNotifications")

#### blockAllNotifications Type

`boolean`

### timeWarnings



`timeWarnings`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-timewarnings.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/timeWarnings")

#### timeWarnings Type

`number`

### mblCharging



`mblCharging`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-mblcharging.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/mblCharging")

#### mblCharging Type

`number`

### mblMobile



`mblMobile`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-mblmobile.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/mblMobile")

#### mblMobile Type

`number`

### sort



`sort`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-sort.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/sort")

#### sort Type

`number`

### networks



`networks`

* is required

* Type: `object[]` ([ServerCategoryNetworkId](adddeviceresponse-definitions-servercategorynetworkid.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-networks.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/networks")

#### networks Type

`object[]` ([ServerCategoryNetworkId](adddeviceresponse-definitions-servercategorynetworkid.md))

### dlu



`dlu`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-dlu.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/dlu")

#### dlu Type

`number`

### flags



`flags`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-flags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/flags")

#### flags Type

`number`

### blockNotificationDelay



`blockNotificationDelay`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-blocknotificationdelay.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/blockNotificationDelay")

#### blockNotificationDelay Type

`number`

### atw



`atw`

* is required

* Type: `number[]`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorybasedata-properties-atw.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryBaseData/properties/atw")

#### atw Type

`number[]`

## Definitions group ServerCategoryNetworkId

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerCategoryNetworkId"}
```

| Property                            | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                        |
| :---------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [itemId](#itemid)                   | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servercategorynetworkid-properties-itemid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerCategoryNetworkId/properties/itemId")                   |
| [hashedNetworkId](#hashednetworkid) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servercategorynetworkid-properties-hashednetworkid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerCategoryNetworkId/properties/hashedNetworkId") |

### itemId



`itemId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servercategorynetworkid-properties-itemid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerCategoryNetworkId/properties/itemId")

#### itemId Type

`string`

### hashedNetworkId



`hashedNetworkId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servercategorynetworkid-properties-hashednetworkid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerCategoryNetworkId/properties/hashedNetworkId")

#### hashedNetworkId Type

`string`

## Definitions group ServerUpdatedCategoryAssignedApps

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryAssignedApps"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                  |
| :-------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [categoryId](#categoryid-1) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryassignedapps-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryAssignedApps/properties/categoryId") |
| [apps](#apps-2)             | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryassignedapps-properties-apps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryAssignedApps/properties/apps")             |
| [version](#version-4)       | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryassignedapps-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryAssignedApps/properties/version")       |

### categoryId



`categoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryassignedapps-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryAssignedApps/properties/categoryId")

#### categoryId Type

`string`

### apps



`apps`

* is required

* Type: `string[]`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryassignedapps-properties-apps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryAssignedApps/properties/apps")

#### apps Type

`string[]`

### version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryassignedapps-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryAssignedApps/properties/version")

#### version Type

`string`

## Definitions group ServerUpdatedCategoryUsedTimes

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes"}
```

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                        |
| :------------------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [categoryId](#categoryid-2)           | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/categoryId")             |
| [times](#times)                       | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-times.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/times")                       |
| [sessionDurations](#sessiondurations) | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-sessiondurations.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/sessionDurations") |
| [version](#version-5)                 | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/version")                   |

### categoryId



`categoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/categoryId")

#### categoryId Type

`string`

### times



`times`

* is required

* Type: `object[]` ([ServerUsedTimeItem](adddeviceresponse-definitions-serverusedtimeitem.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-times.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/times")

#### times Type

`object[]` ([ServerUsedTimeItem](adddeviceresponse-definitions-serverusedtimeitem.md))

### sessionDurations



`sessionDurations`

* is required

* Type: `object[]` ([ServerSessionDurationItem](adddeviceresponse-definitions-serversessiondurationitem.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-sessiondurations.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/sessionDurations")

#### sessionDurations Type

`object[]` ([ServerSessionDurationItem](adddeviceresponse-definitions-serversessiondurationitem.md))

### version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/version")

#### version Type

`string`

## Definitions group ServerUsedTimeItem

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerUsedTimeItem"}
```

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                          |
| :-------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [day](#day)     | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverusedtimeitem-properties-day.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUsedTimeItem/properties/day")     |
| [time](#time)   | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverusedtimeitem-properties-time.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUsedTimeItem/properties/time")   |
| [start](#start) | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverusedtimeitem-properties-start.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUsedTimeItem/properties/start") |
| [end](#end)     | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverusedtimeitem-properties-end.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUsedTimeItem/properties/end")     |

### day



`day`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverusedtimeitem-properties-day.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUsedTimeItem/properties/day")

#### day Type

`number`

### time



`time`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverusedtimeitem-properties-time.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUsedTimeItem/properties/time")

#### time Type

`number`

### start



`start`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverusedtimeitem-properties-start.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUsedTimeItem/properties/start")

#### start Type

`number`

### end



`end`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverusedtimeitem-properties-end.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUsedTimeItem/properties/end")

#### end Type

`number`

## Definitions group ServerSessionDurationItem

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerSessionDurationItem"}
```

| Property    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                    |
| :---------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [md](#md)   | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serversessiondurationitem-properties-md.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerSessionDurationItem/properties/md")   |
| [spd](#spd) | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serversessiondurationitem-properties-spd.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerSessionDurationItem/properties/spd") |
| [sm](#sm)   | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serversessiondurationitem-properties-sm.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerSessionDurationItem/properties/sm")   |
| [em](#em)   | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serversessiondurationitem-properties-em.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerSessionDurationItem/properties/em")   |
| [l](#l)     | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serversessiondurationitem-properties-l.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerSessionDurationItem/properties/l")     |
| [d](#d)     | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serversessiondurationitem-properties-d.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerSessionDurationItem/properties/d")     |

### md

the maximum duration of a session (maxSessionDuration)

`md`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serversessiondurationitem-properties-md.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerSessionDurationItem/properties/md")

#### md Type

`number`

### spd

the pause duration after a session (sessionPauseDuration)

`spd`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serversessiondurationitem-properties-spd.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerSessionDurationItem/properties/spd")

#### spd Type

`number`

### sm

the start minute of the day of the session/ the rule
which created this session (startMinuteOfDay)

`sm`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serversessiondurationitem-properties-sm.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerSessionDurationItem/properties/sm")

#### sm Type

`number`

### em

the end minute of the day of the session/ the rule
which created this session (endMinuteOfDay)

`em`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serversessiondurationitem-properties-em.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerSessionDurationItem/properties/em")

#### em Type

`number`

### l

the timestamp of the last usage of this session (lastUsage)

`l`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serversessiondurationitem-properties-l.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerSessionDurationItem/properties/l")

#### l Type

`number`

### d

the duration of the last/ current session (lastSessionDuration)

`d`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serversessiondurationitem-properties-d.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerSessionDurationItem/properties/d")

#### d Type

`number`

## Definitions group ServerUpdatedTimeLimitRules

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedTimeLimitRules"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                      |
| :-------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [categoryId](#categoryid-3) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedtimelimitrules-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedTimeLimitRules/properties/categoryId") |
| [version](#version-6)       | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedtimelimitrules-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedTimeLimitRules/properties/version")       |
| [rules](#rules-1)           | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedtimelimitrules-properties-rules.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedTimeLimitRules/properties/rules")           |

### categoryId



`categoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedtimelimitrules-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedTimeLimitRules/properties/categoryId")

#### categoryId Type

`string`

### version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedtimelimitrules-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedTimeLimitRules/properties/version")

#### version Type

`string`

### rules



`rules`

* is required

* Type: `object[]` ([ServerTimeLimitRule](adddeviceresponse-definitions-servertimelimitrule.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedtimelimitrules-properties-rules.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedTimeLimitRules/properties/rules")

#### rules Type

`object[]` ([ServerTimeLimitRule](adddeviceresponse-definitions-servertimelimitrule.md))

## Definitions group ServerTimeLimitRule

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule"}
```

| Property                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                    |
| :------------------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                 | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-id.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/id")               |
| [extraTime](#extratime-1) | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-extratime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/extraTime") |
| [dayMask](#daymask)       | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-daymask.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/dayMask")     |
| [maxTime](#maxtime)       | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-maxtime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/maxTime")     |
| [start](#start-1)         | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-start.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/start")         |
| [end](#end-1)             | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-end.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/end")             |
| [session](#session)       | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-session.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/session")     |
| [pause](#pause)           | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-pause.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/pause")         |
| [perDay](#perday)         | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-perday.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/perDay")       |

### id



`id`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-id.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/id")

#### id Type

`string`

### extraTime



`extraTime`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-extratime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/extraTime")

#### extraTime Type

`boolean`

### dayMask



`dayMask`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-daymask.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/dayMask")

#### dayMask Type

`number`

### maxTime



`maxTime`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-maxtime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/maxTime")

#### maxTime Type

`number`

### start



`start`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-start.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/start")

#### start Type

`number`

### end



`end`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-end.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/end")

#### end Type

`number`

### session



`session`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-session.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/session")

#### session Type

`number`

### pause



`pause`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-pause.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/pause")

#### pause Type

`number`

### perDay



`perDay`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servertimelimitrule-properties-perday.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerTimeLimitRule/properties/perDay")

#### perDay Type

`boolean`

## Definitions group ServerUpdatedCategoryTasks

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTasks"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                    |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [categoryId](#categoryid-4) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytasks-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTasks/properties/categoryId") |
| [version](#version-7)       | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytasks-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTasks/properties/version")       |
| [tasks](#tasks-1)           | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytasks-properties-tasks.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTasks/properties/tasks")           |

### categoryId



`categoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytasks-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTasks/properties/categoryId")

#### categoryId Type

`string`

### version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytasks-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTasks/properties/version")

#### version Type

`string`

### tasks



`tasks`

* is required

* Type: `object[]` ([ServerUpdatedCategoryTask](adddeviceresponse-definitions-serverupdatedcategorytask.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytasks-properties-tasks.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTasks/properties/tasks")

#### tasks Type

`object[]` ([ServerUpdatedCategoryTask](adddeviceresponse-definitions-serverupdatedcategorytask.md))

## Definitions group ServerUpdatedCategoryTask

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTask"}
```

| Property  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                |
| :-------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [i](#i)   | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytask-properties-i.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTask/properties/i") |
| [t](#t-1) | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytask-properties-t.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTask/properties/t") |
| [d](#d-1) | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytask-properties-d.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTask/properties/d") |
| [p](#p-1) | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytask-properties-p.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTask/properties/p") |
| [l](#l-1) | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytask-properties-l.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTask/properties/l") |

### i



`i`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytask-properties-i.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTask/properties/i")

#### i Type

`string`

### t



`t`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytask-properties-t.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTask/properties/t")

#### t Type

`string`

### d



`d`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytask-properties-d.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTask/properties/d")

#### d Type

`number`

### p



`p`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytask-properties-p.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTask/properties/p")

#### p Type

`boolean`

### l



`l`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytask-properties-l.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTask/properties/l")

#### l Type

`number`

## Definitions group ServerUserList

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerUserList"}
```

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                        |
| :------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [version](#version-8)                 | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserList/properties/version")                   |
| [data](#data-3)                       | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist-properties-data.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserList/properties/data")                         |
| [parentCodeSecret](#parentcodesecret) | `string` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist-properties-parentcodesecret.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserList/properties/parentCodeSecret") |

### version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserList/properties/version")

#### version Type

`string`

### data



`data`

* is required

* Type: `object[]` ([ServerUserEntry](adddeviceresponse-definitions-serveruserentry.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist-properties-data.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserList/properties/data")

#### data Type

`object[]` ([ServerUserEntry](adddeviceresponse-definitions-serveruserentry.md))

### parentCodeSecret



`parentCodeSecret`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist-properties-parentcodesecret.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserList/properties/parentCodeSecret")

#### parentCodeSecret Type

`string`

## Definitions group ServerUserEntry

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry"}
```

| Property                                                  | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                              |
| :-------------------------------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-1)                                               | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-id.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/id")                                                 |
| [name](#name-1)                                           | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-name.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/name")                                             |
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
| [blockedTimes](#blockedtimes-1)                           | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-blockedtimes.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/blockedTimes")                             |
| [flags](#flags-1)                                         | `number`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-flags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/flags")                                           |
| [llc](#llc)                                               | `string`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-llc.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/llc")                                               |
| [pbd](#pbd)                                               | `number`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-pbd.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/pbd")                                               |
| [urlFilter](#urlfilter)                                   | `object`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-urlfilter.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/urlFilter")                                                              |
| [adultRole](#adultrole)                                   | `string`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-adultrole.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/adultRole")                                   |
| [childMail](#childmail)                                   | `string`  | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-childmail.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/childMail")                                   |
| [requests](#requests)                                     | `array`   | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-requests.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/requests")                                     |
| [appAllowances](#appallowances)                           | `array`   | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-appallowances.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/appAllowances")                           |
| [appRules](#apprules)                                     | `array`   | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-apprules.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/appRules")                                     |
| [newApps](#newapps)                                       | `array`   | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-newapps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/newApps")                                       |

### id



`id`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-id.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/id")

#### id Type

`string`

### name



`name`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-name.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/name")

#### name Type

`string`

### password



`password`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-password.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/password")

#### password Type

`string`

### secondPasswordSalt



`secondPasswordSalt`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-secondpasswordsalt.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/secondPasswordSalt")

#### secondPasswordSalt Type

`string`

### type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-type.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/type")

#### type Type

`string`

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value      | Explanation |
| :--------- | :---------- |
| `"child"`  |             |
| `"parent"` |             |

### timeZone



`timeZone`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-timezone.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/timeZone")

#### timeZone Type

`string`

### disableLimitsUntil



`disableLimitsUntil`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-disablelimitsuntil.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/disableLimitsUntil")

#### disableLimitsUntil Type

`number`

### mail



`mail`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-mail.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/mail")

#### mail Type

`string`

### currentDevice



`currentDevice`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-currentdevice.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/currentDevice")

#### currentDevice Type

`string`

### categoryForNotAssignedApps



`categoryForNotAssignedApps`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-categoryfornotassignedapps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/categoryForNotAssignedApps")

#### categoryForNotAssignedApps Type

`string`

### relaxPrimaryDevice



`relaxPrimaryDevice`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-relaxprimarydevice.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/relaxPrimaryDevice")

#### relaxPrimaryDevice Type

`boolean`

### mailNotificationFlags



`mailNotificationFlags`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-mailnotificationflags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/mailNotificationFlags")

#### mailNotificationFlags Type

`number`

### blockedTimes



`blockedTimes`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-blockedtimes.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/blockedTimes")

#### blockedTimes Type

`string`

### flags



`flags`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-flags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/flags")

#### flags Type

`number`

### llc



`llc`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-llc.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/llc")

#### llc Type

`string`

### pbd



`pbd`

* is optional

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-pbd.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/pbd")

#### pbd Type

`number`

### urlFilter



`urlFilter`

* is optional

* Type: `object` ([UrlFilter](adddeviceresponse-definitions-urlfilter.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-urlfilter.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/urlFilter")

#### urlFilter Type

`object` ([UrlFilter](adddeviceresponse-definitions-urlfilter.md))

### adultRole



`adultRole`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-adultrole.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/adultRole")

#### adultRole Type

`string`

#### adultRole Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"admin"`   |             |
| `"manager"` |             |
| `"member"`  |             |

### childMail



`childMail`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-childmail.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/childMail")

#### childMail Type

`string`

### requests



`requests`

* is optional

* Type: `object[]` ([ServerChildRequest](adddeviceresponse-definitions-serverchildrequest.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-requests.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/requests")

#### requests Type

`object[]` ([ServerChildRequest](adddeviceresponse-definitions-serverchildrequest.md))

### appAllowances



`appAllowances`

* is optional

* Type: `object[]` ([ServerAppAllowance](adddeviceresponse-definitions-serverappallowance.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-appallowances.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/appAllowances")

#### appAllowances Type

`object[]` ([ServerAppAllowance](adddeviceresponse-definitions-serverappallowance.md))

### appRules



`appRules`

* is optional

* Type: `object[]` ([ServerAppRule](adddeviceresponse-definitions-serverapprule.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-apprules.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/appRules")

#### appRules Type

`object[]` ([ServerAppRule](adddeviceresponse-definitions-serverapprule.md))

### newApps



`newApps`

* is optional

* Type: `object[]` ([ServerNewApp](adddeviceresponse-definitions-servernewapp.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserentry-properties-newapps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserEntry/properties/newApps")

#### newApps Type

`object[]` ([ServerNewApp](adddeviceresponse-definitions-servernewapp.md))

## Definitions group UrlFilter

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/UrlFilter"}
```

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                            |
| :------------------ | :-------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [enabled](#enabled) | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-urlfilter-properties-enabled.md "https://timelimit.io/AddDeviceResponse#/definitions/UrlFilter/properties/enabled") |
| [allow](#allow)     | `array`   | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-urlfilter-properties-allow.md "https://timelimit.io/AddDeviceResponse#/definitions/UrlFilter/properties/allow")     |
| [block](#block)     | `array`   | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-urlfilter-properties-block.md "https://timelimit.io/AddDeviceResponse#/definitions/UrlFilter/properties/block")     |

### enabled



`enabled`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-urlfilter-properties-enabled.md "https://timelimit.io/AddDeviceResponse#/definitions/UrlFilter/properties/enabled")

#### enabled Type

`boolean`

### allow



`allow`

* is required

* Type: `string[]`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-urlfilter-properties-allow.md "https://timelimit.io/AddDeviceResponse#/definitions/UrlFilter/properties/allow")

#### allow Type

`string[]`

### block



`block`

* is required

* Type: `string[]`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-urlfilter-properties-block.md "https://timelimit.io/AddDeviceResponse#/definitions/UrlFilter/properties/block")

#### block Type

`string[]`

## Definitions group ServerChildRequest

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest"}
```

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                      |
| :---------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id-2)                   | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverchildrequest-properties-id.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/id")                   |
| [packageName](#packagename-1) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverchildrequest-properties-packagename.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/packageName") |
| [categoryId](#categoryid-5)   | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverchildrequest-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/categoryId")   |
| [deviceId](#deviceid-3)       | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverchildrequest-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/deviceId")       |
| [word](#word)                 | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverchildrequest-properties-word.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/word")               |
| [createdAt](#createdat)       | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverchildrequest-properties-createdat.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/createdAt")     |
| [expiresAt](#expiresat)       | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverchildrequest-properties-expiresat.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/expiresAt")     |
| [answer](#answer)             | `object` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/answer")                             |

### id



`id`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverchildrequest-properties-id.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/id")

#### id Type

`string`

### packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverchildrequest-properties-packagename.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/packageName")

#### packageName Type

`string`

### categoryId



`categoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverchildrequest-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/categoryId")

#### categoryId Type

`string`

### deviceId



`deviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverchildrequest-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/deviceId")

#### deviceId Type

`string`

### word



`word`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverchildrequest-properties-word.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/word")

#### word Type

`string`

### createdAt



`createdAt`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverchildrequest-properties-createdat.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/createdAt")

#### createdAt Type

`number`

### expiresAt



`expiresAt`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverchildrequest-properties-expiresat.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/expiresAt")

#### expiresAt Type

`number`

### answer



`answer`

* is optional

* Type: `object` ([ChildRequestAnswer](adddeviceresponse-definitions-childrequestanswer.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerChildRequest/properties/answer")

#### answer Type

`object` ([ChildRequestAnswer](adddeviceresponse-definitions-childrequestanswer.md))

## Definitions group ChildRequestAnswer

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer"}
```

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                          |
| :---------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [kind](#kind)                 | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-childrequestanswerkind.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/kind") |
| [until](#until)               | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-until.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/until")                 |
| [word](#word-1)               | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-word.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/word")                   |
| [parentUserId](#parentuserid) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-parentuserid.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/parentUserId")   |
| [at](#at)                     | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-at.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/at")                       |
| [repeatAfter](#repeatafter)   | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-repeatafter.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/repeatAfter")     |

### kind



`kind`

* is required

* Type: `string` ([ChildRequestAnswerKind](adddeviceresponse-definitions-childrequestanswer-properties-childrequestanswerkind.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-childrequestanswerkind.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/kind")

#### kind Type

`string` ([ChildRequestAnswerKind](adddeviceresponse-definitions-childrequestanswer-properties-childrequestanswerkind.md))

#### kind Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"app"`      |             |
| `"category"` |             |
| `"deny"`     |             |

### until



`until`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-until.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/until")

#### until Type

`number`

### word



`word`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-word.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/word")

#### word Type

`string`

### parentUserId



`parentUserId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-parentuserid.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/parentUserId")

#### parentUserId Type

`string`

### at



`at`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-at.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/at")

#### at Type

`number`

### repeatAfter



`repeatAfter`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-repeatafter.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/repeatAfter")

#### repeatAfter Type

`number`

## Definitions group ChildRequestAnswerKind

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswerKind"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group ServerAppAllowance

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerAppAllowance"}
```

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                      |
| :---------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [packageName](#packagename-2) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverappallowance-properties-packagename.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerAppAllowance/properties/packageName") |
| [until](#until-1)             | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverappallowance-properties-until.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerAppAllowance/properties/until")             |

### packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverappallowance-properties-packagename.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerAppAllowance/properties/packageName")

#### packageName Type

`string`

### until



`until`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverappallowance-properties-until.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerAppAllowance/properties/until")

#### until Type

`number`

## Definitions group ServerAppRule

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerAppRule"}
```

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                              |
| :---------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [packageName](#packagename-3) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverapprule-properties-packagename.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerAppRule/properties/packageName")   |
| [days](#days)                 | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverapprule-properties-days.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerAppRule/properties/days")                 |
| [limitMinutes](#limitminutes) | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverapprule-properties-limitminutes.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerAppRule/properties/limitMinutes") |
| [usedDay](#usedday)           | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverapprule-properties-usedday.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerAppRule/properties/usedDay")           |
| [usedMs](#usedms)             | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverapprule-properties-usedms.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerAppRule/properties/usedMs")             |

### packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverapprule-properties-packagename.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerAppRule/properties/packageName")

#### packageName Type

`string`

### days



`days`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverapprule-properties-days.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerAppRule/properties/days")

#### days Type

`number`

### limitMinutes



`limitMinutes`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverapprule-properties-limitminutes.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerAppRule/properties/limitMinutes")

#### limitMinutes Type

`number`

### usedDay



`usedDay`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverapprule-properties-usedday.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerAppRule/properties/usedDay")

#### usedDay Type

`number`

### usedMs



`usedMs`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverapprule-properties-usedms.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerAppRule/properties/usedMs")

#### usedMs Type

`number`

## Definitions group ServerNewApp

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerNewApp"}
```

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                          |
| :---------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [packageName](#packagename-4) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servernewapp-properties-packagename.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerNewApp/properties/packageName") |
| [title](#title-2)             | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servernewapp-properties-title.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerNewApp/properties/title")             |
| [section](#section)           | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servernewapp-properties-section.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerNewApp/properties/section")         |
| [installedAt](#installedat)   | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servernewapp-properties-installedat.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerNewApp/properties/installedAt") |
| [deviceId](#deviceid-4)       | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servernewapp-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerNewApp/properties/deviceId")       |

### packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servernewapp-properties-packagename.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerNewApp/properties/packageName")

#### packageName Type

`string`

### title



`title`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servernewapp-properties-title.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerNewApp/properties/title")

#### title Type

`string`

### section



`section`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servernewapp-properties-section.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerNewApp/properties/section")

#### section Type

`string`

### installedAt



`installedAt`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servernewapp-properties-installedat.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerNewApp/properties/installedAt")

#### installedAt Type

`number`

### deviceId



`deviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servernewapp-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerNewApp/properties/deviceId")

#### deviceId Type

`string`

## Definitions group ServerKeyRequest

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [srvSeq](#srvseq)           | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-srvseq.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/srvSeq")         |
| [senId](#senid)             | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-senid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/senId")           |
| [senSeq](#senseq)           | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-senseq.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/senSeq")         |
| [deviceId](#deviceid-5)     | `string` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/deviceId")     |
| [categoryId](#categoryid-6) | `string` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/categoryId") |
| [type](#type-1)             | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-type.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/type")             |
| [tempKey](#tempkey)         | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-tempkey.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/tempKey")       |
| [signature](#signature)     | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-signature.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/signature")   |

### srvSeq



`srvSeq`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-srvseq.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/srvSeq")

#### srvSeq Type

`number`

### senId



`senId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-senid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/senId")

#### senId Type

`string`

### senSeq



`senSeq`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-senseq.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/senSeq")

#### senSeq Type

`number`

### deviceId



`deviceId`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/deviceId")

#### deviceId Type

`string`

### categoryId



`categoryId`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/categoryId")

#### categoryId Type

`string`

### type



`type`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-type.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/type")

#### type Type

`number`

### tempKey



`tempKey`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-tempkey.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/tempKey")

#### tempKey Type

`string`

### signature



`signature`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverkeyrequest-properties-signature.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyRequest/properties/signature")

#### signature Type

`string`

## Definitions group ServerKeyResponse

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyResponse"}
```

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                |
| :------------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [srvSeq](#srvseq-1)       | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverkeyresponse-properties-srvseq.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyResponse/properties/srvSeq")       |
| [sender](#sender)         | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverkeyresponse-properties-sender.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyResponse/properties/sender")       |
| [rqSeq](#rqseq)           | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverkeyresponse-properties-rqseq.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyResponse/properties/rqSeq")         |
| [tempKey](#tempkey-1)     | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverkeyresponse-properties-tempkey.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyResponse/properties/tempKey")     |
| [cryptKey](#cryptkey)     | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverkeyresponse-properties-cryptkey.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyResponse/properties/cryptKey")   |
| [signature](#signature-1) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverkeyresponse-properties-signature.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyResponse/properties/signature") |

### srvSeq



`srvSeq`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverkeyresponse-properties-srvseq.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyResponse/properties/srvSeq")

#### srvSeq Type

`number`

### sender



`sender`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverkeyresponse-properties-sender.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyResponse/properties/sender")

#### sender Type

`string`

### rqSeq



`rqSeq`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverkeyresponse-properties-rqseq.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyResponse/properties/rqSeq")

#### rqSeq Type

`number`

### tempKey



`tempKey`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverkeyresponse-properties-tempkey.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyResponse/properties/tempKey")

#### tempKey Type

`string`

### cryptKey



`cryptKey`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverkeyresponse-properties-cryptkey.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyResponse/properties/cryptKey")

#### cryptKey Type

`string`

### signature



`signature`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverkeyresponse-properties-signature.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerKeyResponse/properties/signature")

#### signature Type

`string`

## Definitions group ServerPing

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerPing"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                |
| :---------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [deviceId](#deviceid-6) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverping-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerPing/properties/deviceId") |
| [token](#token)         | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverping-properties-token.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerPing/properties/token")       |
| [type](#type-2)         | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverping-properties-type.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerPing/properties/type")         |

### deviceId



`deviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverping-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerPing/properties/deviceId")

#### deviceId Type

`string`

### token



`token`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverping-properties-token.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerPing/properties/token")

#### token Type

`string`

### type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverping-properties-type.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerPing/properties/type")

#### type Type

`string`

#### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value    | Explanation |
| :------- | :---------- |
| `"ping"` |             |
| `"pong"` |             |

## Definitions group ServerDeviceState

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState"}
```

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                              |
| :---------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deviceId](#deviceid-7) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/deviceId") |
| [seen](#seen)           | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-seen.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/seen")         |
| [app](#app)             | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-app.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/app")           |
| [appSince](#appsince)   | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-appsince.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/appSince") |

### deviceId



`deviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/deviceId")

#### deviceId Type

`string`

### seen



`seen`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-seen.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/seen")

#### seen Type

`number`

### app



`app`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-app.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/app")

#### app Type

`string`

### appSince



`appSince`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-appsince.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/appSince")

#### appSince Type

`number`

## Definitions group ServerDhKey

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/ServerDhKey"}
```

| Property | Type     | Required | Nullable       | Defined by                                                                                                                                                    |
| :------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [v](#v)  | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdhkey-properties-v.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDhKey/properties/v") |
| [k](#k)  | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdhkey-properties-k.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDhKey/properties/k") |

### v



`v`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdhkey-properties-v.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDhKey/properties/v")

#### v Type

`string`

### k



`k`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdhkey-properties-k.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDhKey/properties/k")

#### k Type

`string`

## Definitions group U2fData

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/U2fData"}
```

| Property  | Type     | Required | Nullable       | Defined by                                                                                                                                            |
| :-------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [v](#v-1) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-u2fdata-properties-v.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fData/properties/v") |
| [d](#d-2) | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-u2fdata-properties-d.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fData/properties/d") |

### v



`v`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-u2fdata-properties-v.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fData/properties/v")

#### v Type

`string`

### d



`d`

* is required

* Type: `object[]` ([U2fItem](adddeviceresponse-definitions-u2fitem.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-u2fdata-properties-d.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fData/properties/d")

#### d Type

`object[]` ([U2fItem](adddeviceresponse-definitions-u2fitem.md))

## Definitions group U2fItem

Reference this group by using

```json
{"$ref":"https://timelimit.io/AddDeviceResponse#/definitions/U2fItem"}
```

| Property  | Type     | Required | Nullable       | Defined by                                                                                                                                            |
| :-------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [u](#u)   | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-u2fitem-properties-u.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fItem/properties/u") |
| [a](#a)   | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-u2fitem-properties-a.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fItem/properties/a") |
| [h](#h)   | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-u2fitem-properties-h.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fItem/properties/h") |
| [p](#p-2) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-u2fitem-properties-p.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fItem/properties/p") |

### u



`u`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-u2fitem-properties-u.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fItem/properties/u")

#### u Type

`string`

### a



`a`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-u2fitem-properties-a.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fItem/properties/a")

#### a Type

`number`

### h



`h`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-u2fitem-properties-h.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fItem/properties/h")

#### h Type

`string`

### p



`p`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-u2fitem-properties-p.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fItem/properties/p")

#### p Type

`string`
