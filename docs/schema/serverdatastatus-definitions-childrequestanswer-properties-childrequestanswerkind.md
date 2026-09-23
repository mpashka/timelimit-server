# ChildRequestAnswerKind Schema

```txt
https://timelimit.io/ServerDataStatus#/definitions/ChildRequestAnswer/properties/kind
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [ServerDataStatus.schema.json\*](ServerDataStatus.schema.json "open original schema") |

## kind Type

`string` ([ChildRequestAnswerKind](serverdatastatus-definitions-childrequestanswer-properties-childrequestanswerkind.md))

## kind Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value        | Explanation |
| :----------- | :---------- |
| `"app"`      |             |
| `"category"` |             |
| `"deny"`     |             |
