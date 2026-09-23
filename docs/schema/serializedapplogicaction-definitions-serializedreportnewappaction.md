# SerializedReportNewAppAction Schema

```txt
https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportNewAppAction
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedAppLogicAction.schema.json\*](SerializedAppLogicAction.schema.json "open original schema") |

## SerializedReportNewAppAction Type

`object` ([SerializedReportNewAppAction](serializedapplogicaction-definitions-serializedreportnewappaction.md))

# SerializedReportNewAppAction Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                               |
| :-------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)               | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedreportnewappaction-properties-type.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportNewAppAction/properties/type")               |
| [packageName](#packagename) | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedreportnewappaction-properties-packagename.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportNewAppAction/properties/packageName") |
| [title](#title)             | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedreportnewappaction-properties-title.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportNewAppAction/properties/title")             |
| [section](#section)         | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedreportnewappaction-properties-section.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportNewAppAction/properties/section")         |
| [installedAt](#installedat) | `number` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedreportnewappaction-properties-installedat.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportNewAppAction/properties/installedAt") |

## type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedreportnewappaction-properties-type.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportNewAppAction/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"REPORT_NEW_APP"` |             |

## packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedreportnewappaction-properties-packagename.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportNewAppAction/properties/packageName")

### packageName Type

`string`

## title



`title`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedreportnewappaction-properties-title.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportNewAppAction/properties/title")

### title Type

`string`

## section



`section`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedreportnewappaction-properties-section.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportNewAppAction/properties/section")

### section Type

`string`

## installedAt



`installedAt`

* is required

* Type: `number`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedreportnewappaction-properties-installedat.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedReportNewAppAction/properties/installedAt")

### installedAt Type

`number`
