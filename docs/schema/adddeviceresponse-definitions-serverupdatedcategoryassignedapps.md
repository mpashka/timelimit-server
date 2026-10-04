# ServerUpdatedCategoryAssignedApps Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryAssignedApps
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## ServerUpdatedCategoryAssignedApps Type

`object` ([ServerUpdatedCategoryAssignedApps](adddeviceresponse-definitions-serverupdatedcategoryassignedapps.md))

# ServerUpdatedCategoryAssignedApps Properties

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                  |
| :------------------------ | :------- | :------- | :------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [categoryId](#categoryid) | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryassignedapps-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryAssignedApps/properties/categoryId") |
| [apps](#apps)             | `array`  | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryassignedapps-properties-apps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryAssignedApps/properties/apps")             |
| [version](#version)       | `string` | Required | cannot be null | [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryassignedapps-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryAssignedApps/properties/version")       |

## categoryId



`categoryId`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryassignedapps-properties-categoryid.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryAssignedApps/properties/categoryId")

### categoryId Type

`string`

## apps



`apps`

* is required

* Type: `string[]`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryassignedapps-properties-apps.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryAssignedApps/properties/apps")

### apps Type

`string[]`

## version



`version`

* is required

* Type: `string`

* cannot be null

* defined in: [AddDeviceResponse](adddeviceresponse-definitions-serverupdatedcategoryassignedapps-properties-version.md "https://timelimit.io/AddDeviceResponse#/definitions/ServerUpdatedCategoryAssignedApps/properties/version")

### version Type

`string`
