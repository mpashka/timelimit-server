# SerializedUpdateUserUrlFilterAction Schema

```txt
https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateUserUrlFilterAction
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedParentAction.schema.json\*](SerializedParentAction.schema.json "open original schema") |

## SerializedUpdateUserUrlFilterAction Type

`object` ([SerializedUpdateUserUrlFilterAction](serializedparentaction-definitions-serializedupdateuserurlfilteraction.md))

# SerializedUpdateUserUrlFilterAction Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                                                                                               |
| :------------------ | :-------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)       | `string`  | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedupdateuserurlfilteraction-properties-type.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateUserUrlFilterAction/properties/type")       |
| [userId](#userid)   | `string`  | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedupdateuserurlfilteraction-properties-userid.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateUserUrlFilterAction/properties/userId")   |
| [enabled](#enabled) | `boolean` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedupdateuserurlfilteraction-properties-enabled.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateUserUrlFilterAction/properties/enabled") |
| [allow](#allow)     | `array`   | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedupdateuserurlfilteraction-properties-allow.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateUserUrlFilterAction/properties/allow")     |
| [block](#block)     | `array`   | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedupdateuserurlfilteraction-properties-block.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateUserUrlFilterAction/properties/block")     |

## type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedupdateuserurlfilteraction-properties-type.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateUserUrlFilterAction/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                      | Explanation |
| :------------------------- | :---------- |
| `"UPDATE_USER_URL_FILTER"` |             |

## userId



`userId`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedupdateuserurlfilteraction-properties-userid.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateUserUrlFilterAction/properties/userId")

### userId Type

`string`

## enabled



`enabled`

* is required

* Type: `boolean`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedupdateuserurlfilteraction-properties-enabled.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateUserUrlFilterAction/properties/enabled")

### enabled Type

`boolean`

## allow



`allow`

* is required

* Type: `string[]`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedupdateuserurlfilteraction-properties-allow.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateUserUrlFilterAction/properties/allow")

### allow Type

`string[]`

## block



`block`

* is required

* Type: `string[]`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedupdateuserurlfilteraction-properties-block.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateUserUrlFilterAction/properties/block")

### block Type

`string[]`
