# ChildRequestAnswer Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## ChildRequestAnswer Type

`object` ([ChildRequestAnswer](adddeviceresponse-definitions-childrequestanswer.md))

# ChildRequestAnswer Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                          |
| :---------------------------- | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [kind](#kind)                 | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-childrequestanswerkind.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/kind") |
| [until](#until)               | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-until.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/until")                 |
| [word](#word)                 | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-word.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/word")                   |
| [parentUserId](#parentuserid) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-parentuserid.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/parentUserId")   |
| [at](#at)                     | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-at.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/at")                       |
| [repeatAfter](#repeatafter)   | `number` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-repeatafter.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/repeatAfter")     |

## kind



`kind`

* is required

* Type: `string` ([ChildRequestAnswerKind](adddeviceresponse-definitions-childrequestanswer-properties-childrequestanswerkind.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-childrequestanswerkind.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/kind")

### kind Type

`string` ([ChildRequestAnswerKind](adddeviceresponse-definitions-childrequestanswer-properties-childrequestanswerkind.md))

### kind Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"app"`      |             |
| `"category"` |             |
| `"deny"`     |             |

## until



`until`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-until.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/until")

### until Type

`number`

## word



`word`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-word.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/word")

### word Type

`string`

## parentUserId



`parentUserId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-parentuserid.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/parentUserId")

### parentUserId Type

`string`

## at



`at`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-at.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/at")

### at Type

`number`

## repeatAfter



`repeatAfter`

* is required

* Type: `number`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-childrequestanswer-properties-repeatafter.md "https://timelimit.io/AddDeviceResponse#/definitions/ChildRequestAnswer/properties/repeatAfter")

### repeatAfter Type

`number`
