# ServerUserList Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ServerUserList
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## ServerUserList Type

`object` ([ServerUserList](adddeviceresponse-definitions-serveruserlist.md))

# ServerUserList Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                        |
| :------------------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [version](#version)                   | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserList/properties/version")                   |
| [data](#data)                         | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist-properties-data.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserList/properties/data")                         |
| [parentCodeSecret](#parentcodesecret) | `string` | Optional | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist-properties-parentcodesecret.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserList/properties/parentCodeSecret") |

## version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserList/properties/version")

### version Type

`string`

## data



`data`

* is required

* Type: `object[]` ([ServerUserEntry](adddeviceresponse-definitions-serveruserentry.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist-properties-data.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserList/properties/data")

### data Type

`object[]` ([ServerUserEntry](adddeviceresponse-definitions-serveruserentry.md))

## parentCodeSecret



`parentCodeSecret`

* is optional

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serveruserlist-properties-parentcodesecret.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUserList/properties/parentCodeSecret")

### parentCodeSecret Type

`string`
