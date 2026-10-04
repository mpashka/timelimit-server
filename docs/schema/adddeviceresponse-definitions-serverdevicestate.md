# ServerDeviceState Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## ServerDeviceState Type

`object` ([ServerDeviceState](adddeviceresponse-definitions-serverdevicestate.md))

# ServerDeviceState Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                              |
| :-------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deviceId](#deviceid) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/deviceId") |
| [seen](#seen)         | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-seen.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/seen")         |
| [app](#app)           | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-app.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/app")           |
| [appSince](#appsince) | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-appsince.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/appSince") |

## deviceId



`deviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-deviceid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/deviceId")

### deviceId Type

`string`

## seen



`seen`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-seen.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/seen")

### seen Type

`number`

## app



`app`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-app.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/app")

### app Type

`string`

## appSince



`appSince`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverdevicestate-properties-appsince.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceState/properties/appSince")

### appSince Type

`number`
