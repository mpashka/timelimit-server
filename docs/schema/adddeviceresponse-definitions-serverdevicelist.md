# ServerDeviceList Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceList
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## ServerDeviceList Type

`object` ([ServerDeviceList](adddeviceresponse-definitions-serverdevicelist.md))

# ServerDeviceList Properties

| Property            | Type     | Required | Nullable       | Defined by                                                                                                                                                                          |
| :------------------ | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [version](#version) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicelist-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceList/properties/version") |
| [data](#data)       | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicelist-properties-data.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceList/properties/data")       |

## version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicelist-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceList/properties/version")

### version Type

`string`

## data



`data`

* is required

* Type: `object[]` ([ServerDeviceData](adddeviceresponse-definitions-serverdevicedata.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicelist-properties-data.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceList/properties/data")

### data Type

`object[]` ([ServerDeviceData](adddeviceresponse-definitions-serverdevicedata.md))
