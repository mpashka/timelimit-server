# GetAppUsageRequest Schema

```txt
https://timelimit.io/GetAppUsageRequest
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [GetAppUsageRequest.schema.json](GetAppUsageRequest.schema.json "open original schema") |

## GetAppUsageRequest Type

`object` ([GetAppUsageRequest](getappusagerequest.md))

# GetAppUsageRequest Properties

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                     |
| :---------------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deviceAuthToken](#deviceauthtoken)                   | `string` | Required | cannot be null | [GetAppUsageRequest](getappusagerequest-properties-deviceauthtoken.md "https://timelimit.io/GetAppUsageRequest#/properties/deviceAuthToken")                   |
| [parentUserId](#parentuserid)                         | `string` | Required | cannot be null | [GetAppUsageRequest](getappusagerequest-properties-parentuserid.md "https://timelimit.io/GetAppUsageRequest#/properties/parentUserId")                         |
| [parentPasswordSecondHash](#parentpasswordsecondhash) | `string` | Required | cannot be null | [GetAppUsageRequest](getappusagerequest-properties-parentpasswordsecondhash.md "https://timelimit.io/GetAppUsageRequest#/properties/parentPasswordSecondHash") |
| [userId](#userid)                                     | `string` | Required | cannot be null | [GetAppUsageRequest](getappusagerequest-properties-userid.md "https://timelimit.io/GetAppUsageRequest#/properties/userId")                                     |
| [fromDay](#fromday)                                   | `number` | Required | cannot be null | [GetAppUsageRequest](getappusagerequest-properties-fromday.md "https://timelimit.io/GetAppUsageRequest#/properties/fromDay")                                   |
| [toDay](#today)                                       | `number` | Required | cannot be null | [GetAppUsageRequest](getappusagerequest-properties-today.md "https://timelimit.io/GetAppUsageRequest#/properties/toDay")                                       |

## deviceAuthToken



`deviceAuthToken`

* is required

* Type: `string`

* cannot be null

* defined in: [GetAppUsageRequest](getappusagerequest-properties-deviceauthtoken.md "https://timelimit.io/GetAppUsageRequest#/properties/deviceAuthToken")

### deviceAuthToken Type

`string`

## parentUserId



`parentUserId`

* is required

* Type: `string`

* cannot be null

* defined in: [GetAppUsageRequest](getappusagerequest-properties-parentuserid.md "https://timelimit.io/GetAppUsageRequest#/properties/parentUserId")

### parentUserId Type

`string`

## parentPasswordSecondHash



`parentPasswordSecondHash`

* is required

* Type: `string`

* cannot be null

* defined in: [GetAppUsageRequest](getappusagerequest-properties-parentpasswordsecondhash.md "https://timelimit.io/GetAppUsageRequest#/properties/parentPasswordSecondHash")

### parentPasswordSecondHash Type

`string`

## userId



`userId`

* is required

* Type: `string`

* cannot be null

* defined in: [GetAppUsageRequest](getappusagerequest-properties-userid.md "https://timelimit.io/GetAppUsageRequest#/properties/userId")

### userId Type

`string`

## fromDay



`fromDay`

* is required

* Type: `number`

* cannot be null

* defined in: [GetAppUsageRequest](getappusagerequest-properties-fromday.md "https://timelimit.io/GetAppUsageRequest#/properties/fromDay")

### fromDay Type

`number`

## toDay



`toDay`

* is required

* Type: `number`

* cannot be null

* defined in: [GetAppUsageRequest](getappusagerequest-properties-today.md "https://timelimit.io/GetAppUsageRequest#/properties/toDay")

### toDay Type

`number`

# GetAppUsageRequest Definitions
