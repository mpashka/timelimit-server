# GetAppIconsRequest Schema

```txt
https://timelimit.io/GetAppIconsRequest
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                              |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [GetAppIconsRequest.schema.json](GetAppIconsRequest.schema.json "open original schema") |

## GetAppIconsRequest Type

`object` ([GetAppIconsRequest](getappiconsrequest.md))

# GetAppIconsRequest Properties

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                     |
| :---------------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deviceAuthToken](#deviceauthtoken)                   | `string` | Required | cannot be null | [GetAppIconsRequest](getappiconsrequest-properties-deviceauthtoken.md "https://timelimit.io/GetAppIconsRequest#/properties/deviceAuthToken")                   |
| [parentUserId](#parentuserid)                         | `string` | Required | cannot be null | [GetAppIconsRequest](getappiconsrequest-properties-parentuserid.md "https://timelimit.io/GetAppIconsRequest#/properties/parentUserId")                         |
| [parentPasswordSecondHash](#parentpasswordsecondhash) | `string` | Required | cannot be null | [GetAppIconsRequest](getappiconsrequest-properties-parentpasswordsecondhash.md "https://timelimit.io/GetAppIconsRequest#/properties/parentPasswordSecondHash") |
| [packageNames](#packagenames)                         | `array`  | Required | cannot be null | [GetAppIconsRequest](getappiconsrequest-properties-packagenames.md "https://timelimit.io/GetAppIconsRequest#/properties/packageNames")                         |

## deviceAuthToken



`deviceAuthToken`

* is required

* Type: `string`

* cannot be null

* defined in: [GetAppIconsRequest](getappiconsrequest-properties-deviceauthtoken.md "https://timelimit.io/GetAppIconsRequest#/properties/deviceAuthToken")

### deviceAuthToken Type

`string`

## parentUserId



`parentUserId`

* is required

* Type: `string`

* cannot be null

* defined in: [GetAppIconsRequest](getappiconsrequest-properties-parentuserid.md "https://timelimit.io/GetAppIconsRequest#/properties/parentUserId")

### parentUserId Type

`string`

## parentPasswordSecondHash



`parentPasswordSecondHash`

* is required

* Type: `string`

* cannot be null

* defined in: [GetAppIconsRequest](getappiconsrequest-properties-parentpasswordsecondhash.md "https://timelimit.io/GetAppIconsRequest#/properties/parentPasswordSecondHash")

### parentPasswordSecondHash Type

`string`

## packageNames



`packageNames`

* is required

* Type: `string[]`

* cannot be null

* defined in: [GetAppIconsRequest](getappiconsrequest-properties-packagenames.md "https://timelimit.io/GetAppIconsRequest#/properties/packageNames")

### packageNames Type

`string[]`

# GetAppIconsRequest Definitions
