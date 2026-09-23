# SerializedSetAppRuleAction Schema

```txt
https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppRuleAction
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedParentAction.schema.json\*](SerializedParentAction.schema.json "open original schema") |

## SerializedSetAppRuleAction Type

`object` ([SerializedSetAppRuleAction](serializedparentaction-definitions-serializedsetappruleaction.md))

# SerializedSetAppRuleAction Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                       |
| :---------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)                 | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedsetappruleaction-properties-type.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppRuleAction/properties/type")                 |
| [userId](#userid)             | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedsetappruleaction-properties-userid.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppRuleAction/properties/userId")             |
| [packageName](#packagename)   | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedsetappruleaction-properties-packagename.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppRuleAction/properties/packageName")   |
| [days](#days)                 | `number` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedsetappruleaction-properties-days.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppRuleAction/properties/days")                 |
| [limitMinutes](#limitminutes) | `number` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedsetappruleaction-properties-limitminutes.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppRuleAction/properties/limitMinutes") |

## type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedsetappruleaction-properties-type.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppRuleAction/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"SET_APP_RULE"` |             |

## userId



`userId`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedsetappruleaction-properties-userid.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppRuleAction/properties/userId")

### userId Type

`string`

## packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedsetappruleaction-properties-packagename.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppRuleAction/properties/packageName")

### packageName Type

`string`

## days



`days`

* is required

* Type: `number`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedsetappruleaction-properties-days.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppRuleAction/properties/days")

### days Type

`number`

## limitMinutes



`limitMinutes`

* is required

* Type: `number`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedsetappruleaction-properties-limitminutes.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedSetAppRuleAction/properties/limitMinutes")

### limitMinutes Type

`number`
