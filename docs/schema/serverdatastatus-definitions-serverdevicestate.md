# ServerDeviceState Schema

```txt
https://timelimit.io/ServerDataStatus#/definitions/ServerDeviceState
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ServerDataStatus.schema.json\*](ServerDataStatus.schema.json "open original schema") |

## ServerDeviceState Type

`object` ([ServerDeviceState](serverdatastatus-definitions-serverdevicestate.md))

# ServerDeviceState Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                           |
| :-------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deviceId](#deviceid) | `string` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverdevicestate-properties-deviceid.md "https://timelimit.io/ServerDataStatus#/definitions/ServerDeviceState/properties/deviceId") |
| [seen](#seen)         | `number` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverdevicestate-properties-seen.md "https://timelimit.io/ServerDataStatus#/definitions/ServerDeviceState/properties/seen")         |
| [app](#app)           | `string` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverdevicestate-properties-app.md "https://timelimit.io/ServerDataStatus#/definitions/ServerDeviceState/properties/app")           |
| [appSince](#appsince) | `number` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverdevicestate-properties-appsince.md "https://timelimit.io/ServerDataStatus#/definitions/ServerDeviceState/properties/appSince") |

## deviceId



`deviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverdevicestate-properties-deviceid.md "https://timelimit.io/ServerDataStatus#/definitions/ServerDeviceState/properties/deviceId")

### deviceId Type

`string`

## seen



`seen`

* is required

* Type: `number`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverdevicestate-properties-seen.md "https://timelimit.io/ServerDataStatus#/definitions/ServerDeviceState/properties/seen")

### seen Type

`number`

## app



`app`

* is required

* Type: `string`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverdevicestate-properties-app.md "https://timelimit.io/ServerDataStatus#/definitions/ServerDeviceState/properties/app")

### app Type

`string`

## appSince



`appSince`

* is required

* Type: `number`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverdevicestate-properties-appsince.md "https://timelimit.io/ServerDataStatus#/definitions/ServerDeviceState/properties/appSince")

### appSince Type

`number`
