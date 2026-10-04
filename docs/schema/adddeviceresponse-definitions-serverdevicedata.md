# ServerDeviceData Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## ServerDeviceData Type

`object` ([ServerDeviceData](adddeviceresponse-definitions-serverdevicedata.md))

# ServerDeviceData Properties

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

## deviceId



`deviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/deviceId")

### deviceId Type

`string`

## name



`name`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-name.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/name")

### name Type

`string`

## model



`model`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-model.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/model")

### model Type

`string`

## addedAt



`addedAt`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-addedat.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/addedAt")

### addedAt Type

`number`

## currentUserId



`currentUserId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-currentuserid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/currentUserId")

### currentUserId Type

`string`

## networkTime



`networkTime`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-networktime.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/networkTime")

### networkTime Type

`string`

### networkTime Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value           | Explanation |
| :-------------- | :---------- |
| `"disabled"`    |             |
| `"enabled"`     |             |
| `"if possible"` |             |

## cProtectionLevel



`cProtectionLevel`

* is required

* Type: `string` ([ProtectionLevel](adddeviceresponse-definitions-serverdevicedata-properties-protectionlevel.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-protectionlevel.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cProtectionLevel")

### cProtectionLevel Type

`string` ([ProtectionLevel](adddeviceresponse-definitions-serverdevicedata-properties-protectionlevel.md))

### cProtectionLevel Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"device owner"`          |             |
| `"none"`                  |             |
| `"password device admin"` |             |
| `"simple device admin"`   |             |

## hProtectionLevel



`hProtectionLevel`

* is required

* Type: `string` ([ProtectionLevel](adddeviceresponse-definitions-serverdevicedata-properties-protectionlevel-1.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-protectionlevel-1.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hProtectionLevel")

### hProtectionLevel Type

`string` ([ProtectionLevel](adddeviceresponse-definitions-serverdevicedata-properties-protectionlevel-1.md))

### hProtectionLevel Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                     | Explanation |
| :------------------------ | :---------- |
| `"device owner"`          |             |
| `"none"`                  |             |
| `"password device admin"` |             |
| `"simple device admin"`   |             |

## cUsageStats



`cUsageStats`

* is required

* Type: `string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cUsageStats")

### cUsageStats Type

`string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus.md))

### cUsageStats Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"granted"`      |             |
| `"not granted"`  |             |
| `"not required"` |             |

## hUsageStats



`hUsageStats`

* is required

* Type: `string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-1.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-1.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hUsageStats")

### hUsageStats Type

`string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-1.md))

### hUsageStats Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"granted"`      |             |
| `"not granted"`  |             |
| `"not required"` |             |

## cNotificationAccess



`cNotificationAccess`

* is required

* Type: `string` ([NewPermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-newpermissionstatus.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-newpermissionstatus.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cNotificationAccess")

### cNotificationAccess Type

`string` ([NewPermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-newpermissionstatus.md))

### cNotificationAccess Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"granted"`       |             |
| `"not granted"`   |             |
| `"not supported"` |             |

## hNotificationAccess



`hNotificationAccess`

* is required

* Type: `string` ([NewPermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-newpermissionstatus-1.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-newpermissionstatus-1.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hNotificationAccess")

### hNotificationAccess Type

`string` ([NewPermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-newpermissionstatus-1.md))

### hNotificationAccess Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"granted"`       |             |
| `"not granted"`   |             |
| `"not supported"` |             |

## cAppVersion



`cAppVersion`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-cappversion.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cAppVersion")

### cAppVersion Type

`number`

## hAppVersion



`hAppVersion`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-happversion.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hAppVersion")

### hAppVersion Type

`number`

## tDisablingAdmin



`tDisablingAdmin`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-tdisablingadmin.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/tDisablingAdmin")

### tDisablingAdmin Type

`boolean`

## reboot



`reboot`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-reboot.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/reboot")

### reboot Type

`boolean`

## hadManipulation



`hadManipulation`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-hadmanipulation.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hadManipulation")

### hadManipulation Type

`boolean`

## hadManipulationFlags



`hadManipulationFlags`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-hadmanipulationflags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hadManipulationFlags")

### hadManipulationFlags Type

`number`

## reportUninstall



`reportUninstall`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-reportuninstall.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/reportUninstall")

### reportUninstall Type

`boolean`

## isUserKeptSignedIn



`isUserKeptSignedIn`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-isuserkeptsignedin.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/isUserKeptSignedIn")

### isUserKeptSignedIn Type

`boolean`

## showDeviceConnected



`showDeviceConnected`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-showdeviceconnected.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/showDeviceConnected")

### showDeviceConnected Type

`boolean`

## defUser



`defUser`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-defuser.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/defUser")

### defUser Type

`string`

## defUserTimeout



`defUserTimeout`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-defusertimeout.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/defUserTimeout")

### defUserTimeout Type

`number`

## rebootIsManipulation



`rebootIsManipulation`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-rebootismanipulation.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/rebootIsManipulation")

### rebootIsManipulation Type

`boolean`

## cOverlay



`cOverlay`

* is required

* Type: `string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-2.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-2.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cOverlay")

### cOverlay Type

`string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-2.md))

### cOverlay Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"granted"`      |             |
| `"not granted"`  |             |
| `"not required"` |             |

## hOverlay



`hOverlay`

* is required

* Type: `string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-3.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-3.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/hOverlay")

### hOverlay Type

`string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus-3.md))

### hOverlay Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"granted"`      |             |
| `"not granted"`  |             |
| `"not required"` |             |

## asEnabled



`asEnabled`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-asenabled.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/asEnabled")

### asEnabled Type

`boolean`

## wasAsEnabled



`wasAsEnabled`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-wasasenabled.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/wasAsEnabled")

### wasAsEnabled Type

`boolean`

## activityLevelBlocking



`activityLevelBlocking`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-activitylevelblocking.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/activityLevelBlocking")

### activityLevelBlocking Type

`boolean`

## qOrLater



`qOrLater`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-qorlater.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/qOrLater")

### qOrLater Type

`boolean`

## mFlags



`mFlags`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-mflags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/mFlags")

### mFlags Type

`number`

## pk



`pk`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-pk.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/pk")

### pk Type

`string`

## pType



`pType`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-ptype.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/pType")

### pType Type

`string`

## pLevel



`pLevel`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-plevel.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/pLevel")

### pLevel Type

`number`

## exFlags



`exFlags`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicedata-properties-exflags.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/exFlags")

### exFlags Type

`number`
