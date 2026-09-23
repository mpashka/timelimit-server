# SerializedGrantByParentCodeAction Schema

```txt
https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedAppLogicAction.schema.json\*](SerializedAppLogicAction.schema.json "open original schema") |

## SerializedGrantByParentCodeAction Type

`object` ([SerializedGrantByParentCodeAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction.md))

# SerializedGrantByParentCodeAction Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                         |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)               | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction-properties-type.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction/properties/type")               |
| [code](#code)               | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction-properties-code.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction/properties/code")               |
| [step](#step)               | `number` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction-properties-step.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction/properties/step")               |
| [grant](#grant)             | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction-properties-grant.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction/properties/grant")             |
| [packageName](#packagename) | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction-properties-packagename.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction/properties/packageName") |
| [categoryId](#categoryid)   | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction-properties-categoryid.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction/properties/categoryId")   |
| [until](#until)             | `number` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction-properties-until.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction/properties/until")             |

## type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction-properties-type.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                    | Explanation |
| :----------------------- | :---------- |
| `"GRANT_BY_PARENT_CODE"` |             |

## code



`code`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction-properties-code.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction/properties/code")

### code Type

`string`

## step



`step`

* is required

* Type: `number`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction-properties-step.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction/properties/step")

### step Type

`number`

## grant



`grant`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction-properties-grant.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction/properties/grant")

### grant Type

`string`

### grant Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"app"`      |             |
| `"category"` |             |

## packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction-properties-packagename.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction/properties/packageName")

### packageName Type

`string`

## categoryId



`categoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction-properties-categoryid.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction/properties/categoryId")

### categoryId Type

`string`

## until



`until`

* is required

* Type: `number`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedgrantbyparentcodeaction-properties-until.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedGrantByParentCodeAction/properties/until")

### until Type

`number`
