# AcceptParentInvitationRequest Schema

```txt
https://timelimit.io/AcceptParentInvitationRequest
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                    |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------------------ |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [AcceptParentInvitationRequest.schema.json](AcceptParentInvitationRequest.schema.json "open original schema") |

## AcceptParentInvitationRequest Type

`object` ([AcceptParentInvitationRequest](acceptparentinvitationrequest.md))

# AcceptParentInvitationRequest Properties

| Property                          | Type     | Required | Nullable       | Defined by                                                                                                                                                                            |
| :-------------------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [mailAuthToken](#mailauthtoken)   | `string` | Required | cannot be null | [AcceptParentInvitationRequest](acceptparentinvitationrequest-properties-mailauthtoken.md "https://timelimit.io/AcceptParentInvitationRequest#/properties/mailAuthToken")             |
| [parentName](#parentname)         | `string` | Required | cannot be null | [AcceptParentInvitationRequest](acceptparentinvitationrequest-properties-parentname.md "https://timelimit.io/AcceptParentInvitationRequest#/properties/parentName")                   |
| [timeZone](#timezone)             | `string` | Required | cannot be null | [AcceptParentInvitationRequest](acceptparentinvitationrequest-properties-timezone.md "https://timelimit.io/AcceptParentInvitationRequest#/properties/timeZone")                       |
| [parentPassword](#parentpassword) | `object` | Optional | cannot be null | [AcceptParentInvitationRequest](acceptparentinvitationrequest-definitions-plaintextparentpassword.md "https://timelimit.io/AcceptParentInvitationRequest#/properties/parentPassword") |

## mailAuthToken



`mailAuthToken`

* is required

* Type: `string`

* cannot be null

* defined in: [AcceptParentInvitationRequest](acceptparentinvitationrequest-properties-mailauthtoken.md "https://timelimit.io/AcceptParentInvitationRequest#/properties/mailAuthToken")

### mailAuthToken Type

`string`

## parentName



`parentName`

* is required

* Type: `string`

* cannot be null

* defined in: [AcceptParentInvitationRequest](acceptparentinvitationrequest-properties-parentname.md "https://timelimit.io/AcceptParentInvitationRequest#/properties/parentName")

### parentName Type

`string`

## timeZone



`timeZone`

* is required

* Type: `string`

* cannot be null

* defined in: [AcceptParentInvitationRequest](acceptparentinvitationrequest-properties-timezone.md "https://timelimit.io/AcceptParentInvitationRequest#/properties/timeZone")

### timeZone Type

`string`

## parentPassword



`parentPassword`

* is optional

* Type: `object` ([PlaintextParentPassword](acceptparentinvitationrequest-definitions-plaintextparentpassword.md))

* cannot be null

* defined in: [AcceptParentInvitationRequest](acceptparentinvitationrequest-definitions-plaintextparentpassword.md "https://timelimit.io/AcceptParentInvitationRequest#/properties/parentPassword")

### parentPassword Type

`object` ([PlaintextParentPassword](acceptparentinvitationrequest-definitions-plaintextparentpassword.md))

# AcceptParentInvitationRequest Definitions

## Definitions group PlaintextParentPassword

Reference this group by using

```json
{"$ref":"https://timelimit.io/AcceptParentInvitationRequest#/definitions/PlaintextParentPassword"}
```

| Property                  | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                  |
| :------------------------ | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [hash](#hash)             | `string` | Required | cannot be null | [AcceptParentInvitationRequest](acceptparentinvitationrequest-definitions-plaintextparentpassword-properties-hash.md "https://timelimit.io/AcceptParentInvitationRequest#/definitions/PlaintextParentPassword/properties/hash")             |
| [secondHash](#secondhash) | `string` | Required | cannot be null | [AcceptParentInvitationRequest](acceptparentinvitationrequest-definitions-plaintextparentpassword-properties-secondhash.md "https://timelimit.io/AcceptParentInvitationRequest#/definitions/PlaintextParentPassword/properties/secondHash") |
| [secondSalt](#secondsalt) | `string` | Required | cannot be null | [AcceptParentInvitationRequest](acceptparentinvitationrequest-definitions-plaintextparentpassword-properties-secondsalt.md "https://timelimit.io/AcceptParentInvitationRequest#/definitions/PlaintextParentPassword/properties/secondSalt") |

### hash



`hash`

* is required

* Type: `string`

* cannot be null

* defined in: [AcceptParentInvitationRequest](acceptparentinvitationrequest-definitions-plaintextparentpassword-properties-hash.md "https://timelimit.io/AcceptParentInvitationRequest#/definitions/PlaintextParentPassword/properties/hash")

#### hash Type

`string`

### secondHash



`secondHash`

* is required

* Type: `string`

* cannot be null

* defined in: [AcceptParentInvitationRequest](acceptparentinvitationrequest-definitions-plaintextparentpassword-properties-secondhash.md "https://timelimit.io/AcceptParentInvitationRequest#/definitions/PlaintextParentPassword/properties/secondHash")

#### secondHash Type

`string`

### secondSalt



`secondSalt`

* is required

* Type: `string`

* cannot be null

* defined in: [AcceptParentInvitationRequest](acceptparentinvitationrequest-definitions-plaintextparentpassword-properties-secondsalt.md "https://timelimit.io/AcceptParentInvitationRequest#/definitions/PlaintextParentPassword/properties/secondSalt")

#### secondSalt Type

`string`
