# ServerChildRequest Schema

```txt
https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ServerDataStatus.schema.json\*](ServerDataStatus.schema.json "open original schema") |

## ServerChildRequest Type

`object` ([ServerChildRequest](serverdatastatus-definitions-serverchildrequest.md))

# ServerChildRequest Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                   |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [id](#id)                   | `string` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverchildrequest-properties-id.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/id")                   |
| [packageName](#packagename) | `string` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverchildrequest-properties-packagename.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/packageName") |
| [categoryId](#categoryid)   | `string` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverchildrequest-properties-categoryid.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/categoryId")   |
| [deviceId](#deviceid)       | `string` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverchildrequest-properties-deviceid.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/deviceId")       |
| [word](#word)               | `string` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverchildrequest-properties-word.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/word")               |
| [createdAt](#createdat)     | `number` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverchildrequest-properties-createdat.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/createdAt")     |
| [expiresAt](#expiresat)     | `number` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverchildrequest-properties-expiresat.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/expiresAt")     |
| [answer](#answer)           | `object` | Optional | cannot be null | [ServerDataStatus](serverdatastatus-definitions-childrequestanswer.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/answer")                             |

## id



`id`

* is required

* Type: `string`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverchildrequest-properties-id.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/id")

### id Type

`string`

## packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverchildrequest-properties-packagename.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/packageName")

### packageName Type

`string`

## categoryId



`categoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverchildrequest-properties-categoryid.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/categoryId")

### categoryId Type

`string`

## deviceId



`deviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverchildrequest-properties-deviceid.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/deviceId")

### deviceId Type

`string`

## word



`word`

* is required

* Type: `string`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverchildrequest-properties-word.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/word")

### word Type

`string`

## createdAt



`createdAt`

* is required

* Type: `number`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverchildrequest-properties-createdat.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/createdAt")

### createdAt Type

`number`

## expiresAt



`expiresAt`

* is required

* Type: `number`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverchildrequest-properties-expiresat.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/expiresAt")

### expiresAt Type

`number`

## answer



`answer`

* is optional

* Type: `object` ([ChildRequestAnswer](serverdatastatus-definitions-childrequestanswer.md))

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-childrequestanswer.md "https://timelimit.io/ServerDataStatus#/definitions/ServerChildRequest/properties/answer")

### answer Type

`object` ([ChildRequestAnswer](serverdatastatus-definitions-childrequestanswer.md))
