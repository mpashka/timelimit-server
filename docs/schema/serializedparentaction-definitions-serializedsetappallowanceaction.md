# SerializedSetAppAllowanceAction Schema

```txt
https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppAllowanceAction
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedParentAction.schema.json\*](SerializedParentAction.schema.json "open original schema") |

## SerializedSetAppAllowanceAction Type

`object` ([SerializedSetAppAllowanceAction](serializedparentaction-definitions-serializedsetappallowanceaction.md))

# SerializedSetAppAllowanceAction Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                               |
| :-------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)               | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedsetappallowanceaction-properties-type.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppAllowanceAction/properties/type")               |
| [userId](#userid)           | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedsetappallowanceaction-properties-userid.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppAllowanceAction/properties/userId")           |
| [packageName](#packagename) | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedsetappallowanceaction-properties-packagename.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppAllowanceAction/properties/packageName") |
| [until](#until)             | `number` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedsetappallowanceaction-properties-until.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppAllowanceAction/properties/until")             |

## type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedsetappallowanceaction-properties-type.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppAllowanceAction/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                 | Explanation |
| :-------------------- | :---------- |
| `"SET_APP_ALLOWANCE"` |             |

## userId



`userId`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedsetappallowanceaction-properties-userid.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppAllowanceAction/properties/userId")

### userId Type

`string`

## packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedsetappallowanceaction-properties-packagename.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppAllowanceAction/properties/packageName")

### packageName Type

`string`

## until



`until`

* is required

* Type: `number`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedsetappallowanceaction-properties-until.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppAllowanceAction/properties/until")

### until Type

`number`
