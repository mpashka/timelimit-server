# ServerUpdatedCategoryTasks Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTasks
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## ServerUpdatedCategoryTasks Type

`object` ([ServerUpdatedCategoryTasks](adddeviceresponse-definitions-serverupdatedcategorytasks.md))

# ServerUpdatedCategoryTasks Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                    |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [categoryId](#categoryid) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytasks-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTasks/properties/categoryId") |
| [version](#version)       | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytasks-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTasks/properties/version")       |
| [tasks](#tasks)           | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytasks-properties-tasks.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTasks/properties/tasks")           |

## categoryId



`categoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytasks-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTasks/properties/categoryId")

### categoryId Type

`string`

## version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytasks-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTasks/properties/version")

### version Type

`string`

## tasks



`tasks`

* is required

* Type: `object[]` ([ServerUpdatedCategoryTask](adddeviceresponse-definitions-serverupdatedcategorytask.md))

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategorytasks-properties-tasks.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryTasks/properties/tasks")

### tasks Type

`object[]` ([ServerUpdatedCategoryTask](adddeviceresponse-definitions-serverupdatedcategorytask.md))
