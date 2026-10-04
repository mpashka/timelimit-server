# SerializedInstalledApp Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## SerializedInstalledApp Type

`object` ([SerializedInstalledApp](adddeviceresponse-definitions-serializedinstalledapp.md))

# SerializedInstalledApp Properties

| Property                          | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                       |
| :-------------------------------- | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [packageName](#packagename)       | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-packagename.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/packageName")          |
| [title](#title)                   | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-title.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/title")                      |
| [isLaunchable](#islaunchable)     | `boolean` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-islaunchable.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/isLaunchable")        |
| [recommendation](#recommendation) | `string`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-apprecommendation.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/recommendation") |

## packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-packagename.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/packageName")

### packageName Type

`string`

## title



`title`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-title.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/title")

### title Type

`string`

## isLaunchable



`isLaunchable`

* is required

* Type: `boolean`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-islaunchable.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/isLaunchable")

### isLaunchable Type

`boolean`

## recommendation



`recommendation`

* is required

* Type: `string` ([AppRecommendation](adddeviceresponse-definitions-serializedinstalledapp-properties-apprecommendation.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serializedinstalledapp-properties-apprecommendation.md "https://timelimit.io/AddDeviceResponse#/definitions/SerializedInstalledApp/properties/recommendation")

### recommendation Type

`string` ([AppRecommendation](adddeviceresponse-definitions-serializedinstalledapp-properties-apprecommendation.md))

### recommendation Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value         | Explanation |
| :------------ | :---------- |
| `"blacklist"` |             |
| `"none"`      |             |
| `"whitelist"` |             |
