# ServerAppRule Schema

```txt
https://timelimit.io/ServerDataStatus#/definitions/ServerAppRule
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ServerDataStatus.schema.json\*](ServerDataStatus.schema.json "open original schema") |

## ServerAppRule Type

`object` ([ServerAppRule](serverdatastatus-definitions-serverapprule.md))

# ServerAppRule Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                           |
| :---------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [packageName](#packagename)   | `string` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverapprule-properties-packagename.md "https://timelimit.io/ServerDataStatus#/definitions/ServerAppRule/properties/packageName")   |
| [days](#days)                 | `number` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverapprule-properties-days.md "https://timelimit.io/ServerDataStatus#/definitions/ServerAppRule/properties/days")                 |
| [limitMinutes](#limitminutes) | `number` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverapprule-properties-limitminutes.md "https://timelimit.io/ServerDataStatus#/definitions/ServerAppRule/properties/limitMinutes") |
| [usedDay](#usedday)           | `number` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverapprule-properties-usedday.md "https://timelimit.io/ServerDataStatus#/definitions/ServerAppRule/properties/usedDay")           |
| [usedMs](#usedms)             | `number` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverapprule-properties-usedms.md "https://timelimit.io/ServerDataStatus#/definitions/ServerAppRule/properties/usedMs")             |

## packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverapprule-properties-packagename.md "https://timelimit.io/ServerDataStatus#/definitions/ServerAppRule/properties/packageName")

### packageName Type

`string`

## days



`days`

* is required

* Type: `number`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverapprule-properties-days.md "https://timelimit.io/ServerDataStatus#/definitions/ServerAppRule/properties/days")

### days Type

`number`

## limitMinutes



`limitMinutes`

* is required

* Type: `number`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverapprule-properties-limitminutes.md "https://timelimit.io/ServerDataStatus#/definitions/ServerAppRule/properties/limitMinutes")

### limitMinutes Type

`number`

## usedDay



`usedDay`

* is required

* Type: `number`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverapprule-properties-usedday.md "https://timelimit.io/ServerDataStatus#/definitions/ServerAppRule/properties/usedDay")

### usedDay Type

`number`

## usedMs



`usedMs`

* is required

* Type: `number`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverapprule-properties-usedms.md "https://timelimit.io/ServerDataStatus#/definitions/ServerAppRule/properties/usedMs")

### usedMs Type

`number`
