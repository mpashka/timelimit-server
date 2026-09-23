# SerializedSetAppUsageAction Schema

```txt
https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedSetAppUsageAction
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedAppLogicAction.schema.json\*](SerializedAppLogicAction.schema.json "open original schema") |

## SerializedSetAppUsageAction Type

`object` ([SerializedSetAppUsageAction](serializedapplogicaction-definitions-serializedsetappusageaction.md))

# SerializedSetAppUsageAction Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                 |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedsetappusageaction-properties-type.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedSetAppUsageAction/properties/type")   |
| [day](#day)     | `number` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedsetappusageaction-properties-day.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedSetAppUsageAction/properties/day")     |
| [items](#items) | `array`  | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedsetappusageaction-properties-items.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedSetAppUsageAction/properties/items") |

## type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedsetappusageaction-properties-type.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedSetAppUsageAction/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value             | Explanation |
| :---------------- | :---------- |
| `"SET_APP_USAGE"` |             |

## day



`day`

* is required

* Type: `number`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedsetappusageaction-properties-day.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedSetAppUsageAction/properties/day")

### day Type

`number`

## items



`items`

* is required

* Type: `object[]` ([SerializedAppUsageItem](serializedapplogicaction-definitions-serializedappusageitem.md))

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedsetappusageaction-properties-items.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedSetAppUsageAction/properties/items")

### items Type

`object[]` ([SerializedAppUsageItem](serializedapplogicaction-definitions-serializedappusageitem.md))
