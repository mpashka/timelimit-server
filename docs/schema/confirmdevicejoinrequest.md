# ConfirmDeviceJoinRequest Schema

```txt
https://timelimit.io/ConfirmDeviceJoinRequest
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                          |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [ConfirmDeviceJoinRequest.schema.json](ConfirmDeviceJoinRequest.schema.json "open original schema") |

## ConfirmDeviceJoinRequest Type

`object` ([ConfirmDeviceJoinRequest](confirmdevicejoinrequest.md))

# ConfirmDeviceJoinRequest Properties

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                                       |
| :---------------------------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deviceAuthToken](#deviceauthtoken)                   | `string` | Required | cannot be null | [ConfirmDeviceJoinRequest](confirmdevicejoinrequest-properties-deviceauthtoken.md "https://timelimit.io/ConfirmDeviceJoinRequest#/properties/deviceAuthToken")                   |
| [parentUserId](#parentuserid)                         | `string` | Required | cannot be null | [ConfirmDeviceJoinRequest](confirmdevicejoinrequest-properties-parentuserid.md "https://timelimit.io/ConfirmDeviceJoinRequest#/properties/parentUserId")                         |
| [parentPasswordSecondHash](#parentpasswordsecondhash) | `string` | Required | cannot be null | [ConfirmDeviceJoinRequest](confirmdevicejoinrequest-properties-parentpasswordsecondhash.md "https://timelimit.io/ConfirmDeviceJoinRequest#/properties/parentPasswordSecondHash") |
| [code](#code)                                         | `string` | Required | cannot be null | [ConfirmDeviceJoinRequest](confirmdevicejoinrequest-properties-code.md "https://timelimit.io/ConfirmDeviceJoinRequest#/properties/code")                                         |

## deviceAuthToken



`deviceAuthToken`

* is required

* Type: `string`

* cannot be null

* defined in: [ConfirmDeviceJoinRequest](confirmdevicejoinrequest-properties-deviceauthtoken.md "https://timelimit.io/ConfirmDeviceJoinRequest#/properties/deviceAuthToken")

### deviceAuthToken Type

`string`

## parentUserId



`parentUserId`

* is required

* Type: `string`

* cannot be null

* defined in: [ConfirmDeviceJoinRequest](confirmdevicejoinrequest-properties-parentuserid.md "https://timelimit.io/ConfirmDeviceJoinRequest#/properties/parentUserId")

### parentUserId Type

`string`

## parentPasswordSecondHash



`parentPasswordSecondHash`

* is required

* Type: `string`

* cannot be null

* defined in: [ConfirmDeviceJoinRequest](confirmdevicejoinrequest-properties-parentpasswordsecondhash.md "https://timelimit.io/ConfirmDeviceJoinRequest#/properties/parentPasswordSecondHash")

### parentPasswordSecondHash Type

`string`

## code



`code`

* is required

* Type: `string`

* cannot be null

* defined in: [ConfirmDeviceJoinRequest](confirmdevicejoinrequest-properties-code.md "https://timelimit.io/ConfirmDeviceJoinRequest#/properties/code")

### code Type

`string`

# ConfirmDeviceJoinRequest Definitions
