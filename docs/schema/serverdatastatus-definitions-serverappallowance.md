# ServerAppAllowance Schema

```txt
https://timelimit.io/ServerDataStatus#/definitions/ServerAppAllowance
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ServerDataStatus.schema.json\*](ServerDataStatus.schema.json "open original schema") |

## ServerAppAllowance Type

`object` ([ServerAppAllowance](serverdatastatus-definitions-serverappallowance.md))

# ServerAppAllowance Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                   |
| :-------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [packageName](#packagename) | `string` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverappallowance-properties-packagename.md "https://timelimit.io/ServerDataStatus#/definitions/ServerAppAllowance/properties/packageName") |
| [until](#until)             | `number` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-serverappallowance-properties-until.md "https://timelimit.io/ServerDataStatus#/definitions/ServerAppAllowance/properties/until")             |

## packageName



`packageName`

* is required

* Type: `string`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverappallowance-properties-packagename.md "https://timelimit.io/ServerDataStatus#/definitions/ServerAppAllowance/properties/packageName")

### packageName Type

`string`

## until



`until`

* is required

* Type: `number`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-serverappallowance-properties-until.md "https://timelimit.io/ServerDataStatus#/definitions/ServerAppAllowance/properties/until")

### until Type

`number`
