# InviteParentRequest Schema

```txt
https://timelimit.io/InviteParentRequest
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [InviteParentRequest.schema.json](InviteParentRequest.schema.json "open original schema") |

## InviteParentRequest Type

`object` ([InviteParentRequest](inviteparentrequest.md))

# InviteParentRequest Properties

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :---------------------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deviceAuthToken](#deviceauthtoken)                   | `string` | Required | cannot be null | [InviteParentRequest](inviteparentrequest-properties-deviceauthtoken.md "https://timelimit.io/InviteParentRequest#/properties/deviceAuthToken")                   |
| [parentUserId](#parentuserid)                         | `string` | Required | cannot be null | [InviteParentRequest](inviteparentrequest-properties-parentuserid.md "https://timelimit.io/InviteParentRequest#/properties/parentUserId")                         |
| [parentPasswordSecondHash](#parentpasswordsecondhash) | `string` | Required | cannot be null | [InviteParentRequest](inviteparentrequest-properties-parentpasswordsecondhash.md "https://timelimit.io/InviteParentRequest#/properties/parentPasswordSecondHash") |
| [mail](#mail)                                         | `string` | Required | cannot be null | [InviteParentRequest](inviteparentrequest-properties-mail.md "https://timelimit.io/InviteParentRequest#/properties/mail")                                         |
| [role](#role)                                         | `string` | Optional | cannot be null | [InviteParentRequest](inviteparentrequest-properties-role.md "https://timelimit.io/InviteParentRequest#/properties/role")                                         |

## deviceAuthToken



`deviceAuthToken`

* is required

* Type: `string`

* cannot be null

* defined in: [InviteParentRequest](inviteparentrequest-properties-deviceauthtoken.md "https://timelimit.io/InviteParentRequest#/properties/deviceAuthToken")

### deviceAuthToken Type

`string`

## parentUserId



`parentUserId`

* is required

* Type: `string`

* cannot be null

* defined in: [InviteParentRequest](inviteparentrequest-properties-parentuserid.md "https://timelimit.io/InviteParentRequest#/properties/parentUserId")

### parentUserId Type

`string`

## parentPasswordSecondHash



`parentPasswordSecondHash`

* is required

* Type: `string`

* cannot be null

* defined in: [InviteParentRequest](inviteparentrequest-properties-parentpasswordsecondhash.md "https://timelimit.io/InviteParentRequest#/properties/parentPasswordSecondHash")

### parentPasswordSecondHash Type

`string`

## mail



`mail`

* is required

* Type: `string`

* cannot be null

* defined in: [InviteParentRequest](inviteparentrequest-properties-mail.md "https://timelimit.io/InviteParentRequest#/properties/mail")

### mail Type

`string`

## role



`role`

* is optional

* Type: `string`

* cannot be null

* defined in: [InviteParentRequest](inviteparentrequest-properties-role.md "https://timelimit.io/InviteParentRequest#/properties/role")

### role Type

`string`

### role Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"admin"`   |             |
| `"manager"` |             |
| `"member"`  |             |

# InviteParentRequest Definitions
