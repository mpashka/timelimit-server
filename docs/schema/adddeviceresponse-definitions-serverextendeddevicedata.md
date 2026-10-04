# ServerExtendedDeviceData Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ServerExtendedDeviceData
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## ServerExtendedDeviceData Type

`object` ([ServerExtendedDeviceData](adddeviceresponse-definitions-serverextendeddevicedata.md))

# ServerExtendedDeviceData Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                            |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deviceId](#deviceid) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverextendeddevicedata-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerExtendedDeviceData/properties/deviceId") |
| [appsBase](#appsbase) | `object` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servercryptcontainer.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerExtendedDeviceData/properties/appsBase")                         |
| [appsDiff](#appsdiff) | `object` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-servercryptcontainer.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerExtendedDeviceData/properties/appsDiff")                         |

## deviceId



`deviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverextendeddevicedata-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerExtendedDeviceData/properties/deviceId")

### deviceId Type

`string`

## appsBase



`appsBase`

* is optional

* Type: `object` ([ServerCryptContainer](adddeviceresponse-definitions-servercryptcontainer.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servercryptcontainer.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerExtendedDeviceData/properties/appsBase")

### appsBase Type

`object` ([ServerCryptContainer](adddeviceresponse-definitions-servercryptcontainer.md))

## appsDiff



`appsDiff`

* is optional

* Type: `object` ([ServerCryptContainer](adddeviceresponse-definitions-servercryptcontainer.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-servercryptcontainer.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerExtendedDeviceData/properties/appsDiff")

### appsDiff Type

`object` ([ServerCryptContainer](adddeviceresponse-definitions-servercryptcontainer.md))
