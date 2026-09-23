# SerializedSetForegroundAppAction Schema

```txt
https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedSetForegroundAppAction
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedAppLogicAction.schema.json\*](SerializedAppLogicAction.schema.json "open original schema") |

## SerializedSetForegroundAppAction Type

`object` ([SerializedSetForegroundAppAction](serializedapplogicaction-definitions-serializedsetforegroundappaction.md))

# SerializedSetForegroundAppAction Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                       |
| :-------------------------- | :------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)               | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedsetforegroundappaction-properties-type.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedSetForegroundAppAction/properties/type")               |
| [packageName](#packagename) | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedsetforegroundappaction-properties-packagename.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedSetForegroundAppAction/properties/packageName") |

## type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedsetforegroundappaction-properties-type.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedSetForegroundAppAction/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                  | Explanation |
| :--------------------- | :---------- |
| `"SET_FOREGROUND_APP"` |             |

## packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedsetforegroundappaction-properties-packagename.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedSetForegroundAppAction/properties/packageName")

### packageName Type

`string`
