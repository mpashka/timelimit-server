# ParentSessionInfo Schema

```txt
https://timelimit.io/ParentSessionInfo
```

Answer of every `POST /session/*` that opens a session. @tag:parent-console

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [ParentSessionInfo.schema.json](ParentSessionInfo.schema.json "open original schema") |

## ParentSessionInfo Type

`object` ([ParentSessionInfo](parentsessioninfo.md))

# ParentSessionInfo Properties

| Property                      | Type     | Required | Nullable       | Defined by                                                                                                                          |
| :---------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------- |
| [sessionToken](#sessiontoken) | `string` | Required | cannot be null | [ParentSessionInfo](parentsessioninfo-properties-sessiontoken.md "https://timelimit.io/ParentSessionInfo#/properties/sessionToken") |
| [sessionId](#sessionid)       | `string` | Required | cannot be null | [ParentSessionInfo](parentsessioninfo-properties-sessionid.md "https://timelimit.io/ParentSessionInfo#/properties/sessionId")       |
| [familyId](#familyid)         | `string` | Required | cannot be null | [ParentSessionInfo](parentsessioninfo-properties-familyid.md "https://timelimit.io/ParentSessionInfo#/properties/familyId")         |
| [userId](#userid)             | `string` | Required | cannot be null | [ParentSessionInfo](parentsessioninfo-properties-userid.md "https://timelimit.io/ParentSessionInfo#/properties/userId")             |

## sessionToken



`sessionToken`

* is required

* Type: `string`

* cannot be null

* defined in: [ParentSessionInfo](parentsessioninfo-properties-sessiontoken.md "https://timelimit.io/ParentSessionInfo#/properties/sessionToken")

### sessionToken Type

`string`

## sessionId



`sessionId`

* is required

* Type: `string`

* cannot be null

* defined in: [ParentSessionInfo](parentsessioninfo-properties-sessionid.md "https://timelimit.io/ParentSessionInfo#/properties/sessionId")

### sessionId Type

`string`

## familyId



`familyId`

* is required

* Type: `string`

* cannot be null

* defined in: [ParentSessionInfo](parentsessioninfo-properties-familyid.md "https://timelimit.io/ParentSessionInfo#/properties/familyId")

### familyId Type

`string`

## userId



`userId`

* is required

* Type: `string`

* cannot be null

* defined in: [ParentSessionInfo](parentsessioninfo-properties-userid.md "https://timelimit.io/ParentSessionInfo#/properties/userId")

### userId Type

`string`

# ParentSessionInfo Definitions
