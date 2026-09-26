# SerializedAppIconItem Schema

```txt
https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedAppIconItem
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedAppLogicAction.schema.json\*](SerializedAppLogicAction.schema.json "open original schema") |

## SerializedAppIconItem Type

`object` ([SerializedAppIconItem](serializedapplogicaction-definitions-serializedappiconitem.md))

# SerializedAppIconItem Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                 |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [packageName](#packagename) | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedappiconitem-properties-packagename.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedAppIconItem/properties/packageName") |
| [title](#title)             | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedappiconitem-properties-title.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedAppIconItem/properties/title")             |
| [icon](#icon)               | `string` | Required | cannot be null | [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedappiconitem-properties-icon.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedAppIconItem/properties/icon")               |

## packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedappiconitem-properties-packagename.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedAppIconItem/properties/packageName")

### packageName Type

`string`

## title



`title`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedappiconitem-properties-title.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedAppIconItem/properties/title")

### title Type

`string`

## icon

base64 of a 96x96 PNG

`icon`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedAppLogicAction](serializedapplogicaction-definitions-serializedappiconitem-properties-icon.md "https://timelimit.io/SerializedAppLogicAction#/definitions/SerializedAppIconItem/properties/icon")

### icon Type

`string`
