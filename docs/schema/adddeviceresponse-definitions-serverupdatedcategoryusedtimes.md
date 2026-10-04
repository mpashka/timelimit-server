# ServerUpdatedCategoryUsedTimes Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## ServerUpdatedCategoryUsedTimes Type

`object` ([ServerUpdatedCategoryUsedTimes](adddeviceresponse-definitions-serverupdatedcategoryusedtimes.md))

# ServerUpdatedCategoryUsedTimes Properties

| Property                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                        |
| :------------------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [categoryId](#categoryid)             | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/categoryId")             |
| [times](#times)                       | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-times.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/times")                       |
| [sessionDurations](#sessiondurations) | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-sessiondurations.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/sessionDurations") |
| [version](#version)                   | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/version")                   |

## categoryId



`categoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/categoryId")

### categoryId Type

`string`

## times



`times`

* is required

* Type: `object[]` ([ServerUsedTimeItem](adddeviceresponse-definitions-serverusedtimeitem.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-times.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/times")

### times Type

`object[]` ([ServerUsedTimeItem](adddeviceresponse-definitions-serverusedtimeitem.md))

## sessionDurations



`sessionDurations`

* is required

* Type: `object[]` ([ServerSessionDurationItem](adddeviceresponse-definitions-serversessiondurationitem.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-sessiondurations.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/sessionDurations")

### sessionDurations Type

`object[]` ([ServerSessionDurationItem](adddeviceresponse-definitions-serversessiondurationitem.md))

## version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryusedtimes-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryUsedTimes/properties/version")

### version Type

`string`
