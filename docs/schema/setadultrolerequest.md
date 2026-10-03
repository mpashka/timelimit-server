# SetAdultRoleRequest Schema

```txt
https://timelimit.io/SetAdultRoleRequest
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [SetAdultRoleRequest.schema.json](SetAdultRoleRequest.schema.json "open original schema") |

## SetAdultRoleRequest Type

`object` ([SetAdultRoleRequest](setadultrolerequest.md))

# SetAdultRoleRequest Properties

| Property                                              | Type     | Required | Nullable       | Defined by                                                                                                                                                        |
| :---------------------------------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [deviceAuthToken](#deviceauthtoken)                   | `string` | Required | cannot be null | [SetAdultRoleRequest](setadultrolerequest-properties-deviceauthtoken.md "https://timelimit.io/SetAdultRoleRequest#/properties/deviceAuthToken")                   |
| [parentUserId](#parentuserid)                         | `string` | Required | cannot be null | [SetAdultRoleRequest](setadultrolerequest-properties-parentuserid.md "https://timelimit.io/SetAdultRoleRequest#/properties/parentUserId")                         |
| [parentPasswordSecondHash](#parentpasswordsecondhash) | `string` | Required | cannot be null | [SetAdultRoleRequest](setadultrolerequest-properties-parentpasswordsecondhash.md "https://timelimit.io/SetAdultRoleRequest#/properties/parentPasswordSecondHash") |
| [userId](#userid)                                     | `string` | Required | cannot be null | [SetAdultRoleRequest](setadultrolerequest-properties-userid.md "https://timelimit.io/SetAdultRoleRequest#/properties/userId")                                     |
| [role](#role)                                         | `string` | Required | cannot be null | [SetAdultRoleRequest](setadultrolerequest-properties-adultrole.md "https://timelimit.io/SetAdultRoleRequest#/properties/role")                                    |

## deviceAuthToken



`deviceAuthToken`

* is required

* Type: `string`

* cannot be null

* defined in: [SetAdultRoleRequest](setadultrolerequest-properties-deviceauthtoken.md "https://timelimit.io/SetAdultRoleRequest#/properties/deviceAuthToken")

### deviceAuthToken Type

`string`

## parentUserId



`parentUserId`

* is required

* Type: `string`

* cannot be null

* defined in: [SetAdultRoleRequest](setadultrolerequest-properties-parentuserid.md "https://timelimit.io/SetAdultRoleRequest#/properties/parentUserId")

### parentUserId Type

`string`

## parentPasswordSecondHash



`parentPasswordSecondHash`

* is required

* Type: `string`

* cannot be null

* defined in: [SetAdultRoleRequest](setadultrolerequest-properties-parentpasswordsecondhash.md "https://timelimit.io/SetAdultRoleRequest#/properties/parentPasswordSecondHash")

### parentPasswordSecondHash Type

`string`

## userId



`userId`

* is required

* Type: `string`

* cannot be null

* defined in: [SetAdultRoleRequest](setadultrolerequest-properties-userid.md "https://timelimit.io/SetAdultRoleRequest#/properties/userId")

### userId Type

`string`

## role



`role`

* is required

* Type: `string` ([AdultRole](setadultrolerequest-properties-adultrole.md))

* cannot be null

* defined in: [SetAdultRoleRequest](setadultrolerequest-properties-adultrole.md "https://timelimit.io/SetAdultRoleRequest#/properties/role")

### role Type

`string` ([AdultRole](setadultrolerequest-properties-adultrole.md))

### role Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"admin"`   |             |
| `"manager"` |             |
| `"member"`  |             |

# SetAdultRoleRequest Definitions

## Definitions group AdultRole

Reference this group by using

```json
{"$ref":"https://timelimit.io/SetAdultRoleRequest#/definitions/AdultRole"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |
