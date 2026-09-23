# SerializedCreateChildRequestAction Schema

```txt
https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedCreateChildRequestAction
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedAppLogicAction.schema.json\*](SerializedAppLogicAction.schema.json "open original schema") |

## SerializedCreateChildRequestAction Type

`object` ([SerializedCreateChildRequestAction](serializedapplogicaction-definitions-serializedcreatechildrequestaction.md))

# SerializedCreateChildRequestAction Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                           |
| :-------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)               | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedcreatechildrequestaction-properties-type.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedCreateChildRequestAction/properties/type")               |
| [requestId](#requestid)     | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedcreatechildrequestaction-properties-requestid.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedCreateChildRequestAction/properties/requestId")     |
| [packageName](#packagename) | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedcreatechildrequestaction-properties-packagename.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedCreateChildRequestAction/properties/packageName") |
| [categoryId](#categoryid)   | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedcreatechildrequestaction-properties-categoryid.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedCreateChildRequestAction/properties/categoryId")   |
| [word](#word)               | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedcreatechildrequestaction-properties-word.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedCreateChildRequestAction/properties/word")               |

## type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedcreatechildrequestaction-properties-type.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedCreateChildRequestAction/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                    | Explanation |
| :----------------------- | :---------- |
| `"CREATE_CHILD_REQUEST"` |             |

## requestId



`requestId`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedcreatechildrequestaction-properties-requestid.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedCreateChildRequestAction/properties/requestId")

### requestId Type

`string`

## packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedcreatechildrequestaction-properties-packagename.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedCreateChildRequestAction/properties/packageName")

### packageName Type

`string`

## categoryId



`categoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedcreatechildrequestaction-properties-categoryid.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedCreateChildRequestAction/properties/categoryId")

### categoryId Type

`string`

## word



`word`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedcreatechildrequestaction-properties-word.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedCreateChildRequestAction/properties/word")

### word Type

`string`
