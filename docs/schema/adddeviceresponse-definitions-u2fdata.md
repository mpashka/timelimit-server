# U2fData Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/U2fData
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## U2fData Type

`object` ([U2fData](adddeviceresponse-definitions-u2fdata.md))

# U2fData Properties

| Property | Type     | Required | Nullable       | Defined by                                                                                                                                            |
| :------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| [v](#v)  | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-u2fdata-properties-v.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fData/properties/v") |
| [d](#d)  | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-u2fdata-properties-d.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fData/properties/d") |

## v



`v`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-u2fdata-properties-v.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fData/properties/v")

### v Type

`string`

## d



`d`

* is required

* Type: `object[]` ([U2fItem](adddeviceresponse-definitions-u2fitem.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-u2fdata-properties-d.md "https://timelimit.io/AddDeviceResponse#/definitions/U2fData/properties/d")

### d Type

`object[]` ([U2fItem](adddeviceresponse-definitions-u2fitem.md))
