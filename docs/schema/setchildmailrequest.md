# SetChildMailRequest Schema

```txt
https://timelimit.io/SetChildMailRequest
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [SetChildMailRequest.schema.json](SetChildMailRequest.schema.json "open original schema") |

## SetChildMailRequest Type

`object` ([SetChildMailRequest](setchildmailrequest.md))

# SetChildMailRequest Properties

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :---------------------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deviceAuthToken](#deviceauthtoken)                   | `string` | Required | cannot be null | [SetChildMailRequest](setchildmailrequest-properties-deviceauthtoken.md "https://timelimit.io/SetChildMailRequest#/properties/deviceAuthToken")                   |
| [parentUserId](#parentuserid)                         | `string` | Required | cannot be null | [SetChildMailRequest](setchildmailrequest-properties-parentuserid.md "https://timelimit.io/SetChildMailRequest#/properties/parentUserId")                         |
| [parentPasswordSecondHash](#parentpasswordsecondhash) | `string` | Required | cannot be null | [SetChildMailRequest](setchildmailrequest-properties-parentpasswordsecondhash.md "https://timelimit.io/SetChildMailRequest#/properties/parentPasswordSecondHash") |
| [childUserId](#childuserid)                           | `string` | Required | cannot be null | [SetChildMailRequest](setchildmailrequest-properties-childuserid.md "https://timelimit.io/SetChildMailRequest#/properties/childUserId")                           |
| [mail](#mail)                                         | `string` | Required | can be null    | [SetChildMailRequest](setchildmailrequest-properties-mail.md "https://timelimit.io/SetChildMailRequest#/properties/mail")                                         |

## deviceAuthToken



`deviceAuthToken`

* is required

* Type: `string`

* cannot be null

* defined in: [SetChildMailRequest](setchildmailrequest-properties-deviceauthtoken.md "https://timelimit.io/SetChildMailRequest#/properties/deviceAuthToken")

### deviceAuthToken Type

`string`

## parentUserId



`parentUserId`

* is required

* Type: `string`

* cannot be null

* defined in: [SetChildMailRequest](setchildmailrequest-properties-parentuserid.md "https://timelimit.io/SetChildMailRequest#/properties/parentUserId")

### parentUserId Type

`string`

## parentPasswordSecondHash



`parentPasswordSecondHash`

* is required

* Type: `string`

* cannot be null

* defined in: [SetChildMailRequest](setchildmailrequest-properties-parentpasswordsecondhash.md "https://timelimit.io/SetChildMailRequest#/properties/parentPasswordSecondHash")

### parentPasswordSecondHash Type

`string`

## childUserId



`childUserId`

* is required

* Type: `string`

* cannot be null

* defined in: [SetChildMailRequest](setchildmailrequest-properties-childuserid.md "https://timelimit.io/SetChildMailRequest#/properties/childUserId")

### childUserId Type

`string`

## mail



`mail`

* is required

* Type: `string`

* can be null

* defined in: [SetChildMailRequest](setchildmailrequest-properties-mail.md "https://timelimit.io/SetChildMailRequest#/properties/mail")

### mail Type

`string`

# SetChildMailRequest Definitions
