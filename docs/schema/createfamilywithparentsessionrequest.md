# CreateFamilyWithParentSessionRequest Schema

```txt
https://timelimit.io/CreateFamilyWithParentSessionRequest
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [CreateFamilyWithParentSessionRequest.schema.json](CreateFamilyWithParentSessionRequest.schema.json "open original schema") |

## CreateFamilyWithParentSessionRequest Type

`object` ([CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest.md))

# CreateFamilyWithParentSessionRequest Properties

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                 |
| :-------------------------------- | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [mailAuthToken](#mailauthtoken)   | `string` | Required | cannot be null | [CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest-properties-mailauthtoken.md "https://timelimit.io/CreateFamilyWithParentSessionRequest#/properties/mailAuthToken")             |
| [parentPassword](#parentpassword) | `object` | Required | cannot be null | [CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest-definitions-plaintextparentpassword.md "https://timelimit.io/CreateFamilyWithParentSessionRequest#/properties/parentPassword") |
| [timeZone](#timezone)             | `string` | Required | cannot be null | [CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest-properties-timezone.md "https://timelimit.io/CreateFamilyWithParentSessionRequest#/properties/timeZone")                       |
| [parentName](#parentname)         | `string` | Required | cannot be null | [CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest-properties-parentname.md "https://timelimit.io/CreateFamilyWithParentSessionRequest#/properties/parentName")                   |

## mailAuthToken



`mailAuthToken`

* is required

* Type: `string`

* cannot be null

* defined in: [CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest-properties-mailauthtoken.md "https://timelimit.io/CreateFamilyWithParentSessionRequest#/properties/mailAuthToken")

### mailAuthToken Type

`string`

## parentPassword



`parentPassword`

* is required

* Type: `object` ([PlaintextParentPassword](createfamilywithparentsessionrequest-definitions-plaintextparentpassword.md))

* cannot be null

* defined in: [CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest-definitions-plaintextparentpassword.md "https://timelimit.io/CreateFamilyWithParentSessionRequest#/properties/parentPassword")

### parentPassword Type

`object` ([PlaintextParentPassword](createfamilywithparentsessionrequest-definitions-plaintextparentpassword.md))

## timeZone



`timeZone`

* is required

* Type: `string`

* cannot be null

* defined in: [CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest-properties-timezone.md "https://timelimit.io/CreateFamilyWithParentSessionRequest#/properties/timeZone")

### timeZone Type

`string`

## parentName



`parentName`

* is required

* Type: `string`

* cannot be null

* defined in: [CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest-properties-parentname.md "https://timelimit.io/CreateFamilyWithParentSessionRequest#/properties/parentName")

### parentName Type

`string`

# CreateFamilyWithParentSessionRequest Definitions

## Definitions group PlaintextParentPassword

Reference this group by using

```json
{"$ref":"https://timelimit.io/CreateFamilyWithParentSessionRequest#/definitions/PlaintextParentPassword"}
```

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                       |
| :------------------------ | :------- | :------- | :------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [hash](#hash)             | `string` | Required | cannot be null | [CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest-definitions-plaintextparentpassword-properties-hash.md "https://timelimit.io/CreateFamilyWithParentSessionRequest#/definitions/PlaintextParentPassword/properties/hash")             |
| [secondHash](#secondhash) | `string` | Required | cannot be null | [CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest-definitions-plaintextparentpassword-properties-secondhash.md "https://timelimit.io/CreateFamilyWithParentSessionRequest#/definitions/PlaintextParentPassword/properties/secondHash") |
| [secondSalt](#secondsalt) | `string` | Required | cannot be null | [CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest-definitions-plaintextparentpassword-properties-secondsalt.md "https://timelimit.io/CreateFamilyWithParentSessionRequest#/definitions/PlaintextParentPassword/properties/secondSalt") |

### hash



`hash`

* is required

* Type: `string`

* cannot be null

* defined in: [CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest-definitions-plaintextparentpassword-properties-hash.md "https://timelimit.io/CreateFamilyWithParentSessionRequest#/definitions/PlaintextParentPassword/properties/hash")

#### hash Type

`string`

### secondHash



`secondHash`

* is required

* Type: `string`

* cannot be null

* defined in: [CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest-definitions-plaintextparentpassword-properties-secondhash.md "https://timelimit.io/CreateFamilyWithParentSessionRequest#/definitions/PlaintextParentPassword/properties/secondHash")

#### secondHash Type

`string`

### secondSalt



`secondSalt`

* is required

* Type: `string`

* cannot be null

* defined in: [CreateFamilyWithParentSessionRequest](createfamilywithparentsessionrequest-definitions-plaintextparentpassword-properties-secondsalt.md "https://timelimit.io/CreateFamilyWithParentSessionRequest#/definitions/PlaintextParentPassword/properties/secondSalt")

#### secondSalt Type

`string`
