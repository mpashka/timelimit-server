# ServerInstalledAppsData Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## ServerInstalledAppsData Type

`object` ([ServerInstalledAppsData](adddeviceresponse-definitions-serverinstalledappsdata.md))

# ServerInstalledAppsData Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                              |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [deviceId](#deviceid)     | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/deviceId")     |
| [version](#version)       | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/version")       |
| [apps](#apps)             | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-apps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/apps")             |
| [activities](#activities) | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-activities.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/activities") |

## deviceId



`deviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/deviceId")

### deviceId Type

`string`

## version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/version")

### version Type

`string`

## apps



`apps`

* is required

* Type: `object[]` ([SerializedInstalledApp](adddeviceresponse-definitions-serializedinstalledapp.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-apps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/apps")

### apps Type

`object[]` ([SerializedInstalledApp](adddeviceresponse-definitions-serializedinstalledapp.md))

## activities



`activities`

* is required

* Type: `object[]` ([SerializedAppActivityItem](adddeviceresponse-definitions-serializedappactivityitem.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverinstalledappsdata-properties-activities.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerInstalledAppsData/properties/activities")

### activities Type

`object[]` ([SerializedAppActivityItem](adddeviceresponse-definitions-serializedappactivityitem.md))
