# SerializedRenameAdultAction Schema

```txt
https://timelimit.io/SerializedParentAction#/definitions/SerializedRenameAdultAction
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedParentAction.schema.json\*](SerializedParentAction.schema.json "open original schema") |

## SerializedRenameAdultAction Type

`object` ([SerializedRenameAdultAction](serializedparentaction-definitions-serializedrenameadultaction.md))

# SerializedRenameAdultAction Properties

| Property          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                             |
| :---------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)     | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedrenameadultaction-properties-type.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedRenameAdultAction/properties/type")     |
| [userId](#userid) | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedrenameadultaction-properties-userid.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedRenameAdultAction/properties/userId") |
| [name](#name)     | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedrenameadultaction-properties-name.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedRenameAdultAction/properties/name")     |

## type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedrenameadultaction-properties-type.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedRenameAdultAction/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"RENAME_ADULT"` |             |

## userId



`userId`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedrenameadultaction-properties-userid.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedRenameAdultAction/properties/userId")

### userId Type

`string`

## name



`name`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedrenameadultaction-properties-name.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedRenameAdultAction/properties/name")

### name Type

`string`
