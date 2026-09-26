# SerializedReportAppIconsAction Schema

```txt
https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportAppIconsAction
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedAppLogicAction.schema.json\*](SerializedAppLogicAction.schema.json "open original schema") |

## SerializedReportAppIconsAction Type

`object` ([SerializedReportAppIconsAction](serializedapplogicaction-definitions-serializedreportappiconsaction.md))

# SerializedReportAppIconsAction Properties

| Property        | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                       |
| :-------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)   | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedreportappiconsaction-properties-type.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportAppIconsAction/properties/type")   |
| [items](#items) | `array`  | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedreportappiconsaction-properties-items.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportAppIconsAction/properties/items") |

## type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedreportappiconsaction-properties-type.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportAppIconsAction/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                | Explanation |
| :------------------- | :---------- |
| `"REPORT_APP_ICONS"` |             |

## items



`items`

* is required

* Type: `object[]` ([SerializedAppIconItem](serializedapplogicaction-definitions-serializedappiconitem.md))

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedreportappiconsaction-properties-items.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportAppIconsAction/properties/items")

### items Type

`object[]` ([SerializedAppIconItem](serializedapplogicaction-definitions-serializedappiconitem.md))
