# SerializedForgetNewAppAction Schema

```txt
https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedForgetNewAppAction
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedAppLogicAction.schema.json\*](SerializedAppLogicAction.schema.json "open original schema") |

## SerializedForgetNewAppAction Type

`object` ([SerializedForgetNewAppAction](serializedapplogicaction-definitions-serializedforgetnewappaction.md))

# SerializedForgetNewAppAction Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                               |
| :-------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)               | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedforgetnewappaction-properties-type.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedForgetNewAppAction/properties/type")               |
| [packageName](#packagename) | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedforgetnewappaction-properties-packagename.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedForgetNewAppAction/properties/packageName") |

## type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedforgetnewappaction-properties-type.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedForgetNewAppAction/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"FORGET_NEW_APP"` |             |

## packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedforgetnewappaction-properties-packagename.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedForgetNewAppAction/properties/packageName")

### packageName Type

`string`
