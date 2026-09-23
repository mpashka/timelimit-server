# SerializedAnswerChildRequestAction Schema

```txt
https://timelimit.io/SerializedParentAction#/definitions/SerializedAnswerChildRequestAction
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedParentAction.schema.json\*](SerializedParentAction.schema.json "open original schema") |

## SerializedAnswerChildRequestAction Type

`object` ([SerializedAnswerChildRequestAction](serializedparentaction-definitions-serializedanswerchildrequestaction.md))

# SerializedAnswerChildRequestAction Properties

| Property                | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                           |
| :---------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)           | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedanswerchildrequestaction-properties-type.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedAnswerChildRequestAction/properties/type")                     |
| [requestId](#requestid) | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedanswerchildrequestaction-properties-requestid.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedAnswerChildRequestAction/properties/requestId")           |
| [answer](#answer)       | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedanswerchildrequestaction-properties-childrequestanswerkind.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedAnswerChildRequestAction/properties/answer") |
| [until](#until)         | `number` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedanswerchildrequestaction-properties-until.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedAnswerChildRequestAction/properties/until")                   |
| [word](#word)           | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedanswerchildrequestaction-properties-word.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedAnswerChildRequestAction/properties/word")                     |

## type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedanswerchildrequestaction-properties-type.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedAnswerChildRequestAction/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                    | Explanation |
| :----------------------- | :---------- |
| `"ANSWER_CHILD_REQUEST"` |             |

## requestId



`requestId`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedanswerchildrequestaction-properties-requestid.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedAnswerChildRequestAction/properties/requestId")

### requestId Type

`string`

## answer



`answer`

* is required

* Type: `string` ([ChildRequestAnswerKind](serializedparentaction-definitions-serializedanswerchildrequestaction-properties-childrequestanswerkind.md))

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedanswerchildrequestaction-properties-childrequestanswerkind.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedAnswerChildRequestAction/properties/answer")

### answer Type

`string` ([ChildRequestAnswerKind](serializedparentaction-definitions-serializedanswerchildrequestaction-properties-childrequestanswerkind.md))

### answer Constraints

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

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedanswerchildrequestaction-properties-until.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedAnswerChildRequestAction/properties/until")

### until Type

`number`

## word



`word`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedanswerchildrequestaction-properties-word.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedAnswerChildRequestAction/properties/word")

### word Type

`string`
