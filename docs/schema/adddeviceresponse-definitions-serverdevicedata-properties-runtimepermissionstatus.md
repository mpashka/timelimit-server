# RuntimePermissionStatus Schema

```txt
https://timelimit.io/AddDeviceResponse#/definitions/ServerDeviceData/properties/cUsageStats
```



| Abstract            | Extensible | Status         | Identifiable            | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :---------------------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | Unknown identifiability | Forbidden         | Allowed               | none                | [AddDeviceResponse.schema.json\*](AddDeviceResponse.schema.json "open original schema") |

## cUsageStats Type

`string` ([RuntimePermissionStatus](adddeviceresponse-definitions-serverdevicedata-properties-runtimepermissionstatus.md))

## cUsageStats Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value            | Explanation |
| :--------------- | :---------- |
| `"granted"`      |             |
| `"not granted"`  |             |
| `"not required"` |             |
