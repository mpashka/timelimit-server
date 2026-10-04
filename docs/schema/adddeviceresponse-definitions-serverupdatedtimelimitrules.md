# ServerUpdatedTimeLimitRules Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedTimeLimitRules
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## ServerUpdatedTimeLimitRules Type

`object` ([ServerUpdatedTimeLimitRules](adddeviceresponse-definitions-serverupdatedtimelimitrules.md))

# ServerUpdatedTimeLimitRules Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                      |
| :------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [categoryId](#categoryid) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedtimelimitrules-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedTimeLimitRules/properties/categoryId") |
| [version](#version)       | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedtimelimitrules-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedTimeLimitRules/properties/version")       |
| [rules](#rules)           | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedtimelimitrules-properties-rules.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedTimeLimitRules/properties/rules")           |

## categoryId



`categoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedtimelimitrules-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedTimeLimitRules/properties/categoryId")

### categoryId Type

`string`

## version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedtimelimitrules-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedTimeLimitRules/properties/version")

### version Type

`string`

## rules



`rules`

* is required

* Type: `object[]` ([ServerTimeLimitRule](adddeviceresponse-definitions-servertimelimitrule.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedtimelimitrules-properties-rules.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedTimeLimitRules/properties/rules")

### rules Type

`object[]` ([ServerTimeLimitRule](adddeviceresponse-definitions-servertimelimitrule.md))
