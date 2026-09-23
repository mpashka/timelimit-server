# ChildRequestAnswerKind Schema

```txt
https://timelimit.io/SerializedParentAction#/definitions/SerializedAnswerChildRequestAction/properties/answer
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [SerializedParentAction.schema.json\*](SerializedParentAction.schema.json "open original schema") |

## answer Type

`string` ([ChildRequestAnswerKind](serializedparentaction-definitions-serializedanswerchildrequestaction-properties-childrequestanswerkind.md))

## answer Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"app"`      |             |
| `"category"` |             |
| `"deny"`     |             |
