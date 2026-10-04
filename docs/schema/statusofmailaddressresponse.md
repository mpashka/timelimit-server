# StatusOfMailAddressResponse Schema

```txt
https://timelimit.io/StatusOfMailAddressResponse
```

`POST /parent/get-status-by-mail-address`.

| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :-------------------------------------------------------------------------------------------------------- |
| Can be instantiated | Yes        | Unknown status | No           | Forbidden         | Forbidden             | none                | [StatusOfMailAddressResponse.schema.json](StatusOfMailAddressResponse.schema.json "open original schema") |

## StatusOfMailAddressResponse Type

`object` ([StatusOfMailAddressResponse](statusofmailaddressresponse.md))

# StatusOfMailAddressResponse Properties

| Property                            | Type      | Required | Nullable       | Defined by                                                                                                                                                              |
| :---------------------------------- | :-------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [status](#status)                   | `string`  | Required | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-properties-mailaddressstatus.md "https://timelimit.io/StatusOfMailAddressResponse#/properties/status")        |
| [mail](#mail)                       | `string`  | Required | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-properties-mail.md "https://timelimit.io/StatusOfMailAddressResponse#/properties/mail")                       |
| [canCreateFamily](#cancreatefamily) | `boolean` | Required | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-properties-cancreatefamily.md "https://timelimit.io/StatusOfMailAddressResponse#/properties/canCreateFamily") |
| [alwaysPro](#alwayspro)             | `boolean` | Required | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-properties-alwayspro.md "https://timelimit.io/StatusOfMailAddressResponse#/properties/alwaysPro")             |
| [invitation](#invitation)           | Merged    | Optional | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-properties-invitation.md "https://timelimit.io/StatusOfMailAddressResponse#/properties/invitation")           |
| [ownFamily](#ownfamily)             | Merged    | Optional | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-properties-ownfamily.md "https://timelimit.io/StatusOfMailAddressResponse#/properties/ownFamily")             |

## status

Does this mail address already belong to a family?

`status`

* is required

* Type: `string` ([MailAddressStatus](statusofmailaddressresponse-properties-mailaddressstatus.md))

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-properties-mailaddressstatus.md "https://timelimit.io/StatusOfMailAddressResponse#/properties/status")

### status Type

`string` ([MailAddressStatus](statusofmailaddressresponse-properties-mailaddressstatus.md))

### status Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value              | Explanation |
| :----------------- | :---------- |
| `"with family"`    |             |
| `"without family"` |             |

## mail



`mail`

* is required

* Type: `string`

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-properties-mail.md "https://timelimit.io/StatusOfMailAddressResponse#/properties/mail")

### mail Type

`string`

## canCreateFamily



`canCreateFamily`

* is required

* Type: `boolean`

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-properties-cancreatefamily.md "https://timelimit.io/StatusOfMailAddressResponse#/properties/canCreateFamily")

### canCreateFamily Type

`boolean`

## alwaysPro



`alwaysPro`

* is required

* Type: `boolean`

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-properties-alwayspro.md "https://timelimit.io/StatusOfMailAddressResponse#/properties/alwaysPro")

### alwaysPro Type

`boolean`

## invitation

Absent on a server without parent invitations, null when nobody invited this address. @tag:parent-invitation

`invitation`

* is optional

* Type: merged type ([Details](statusofmailaddressresponse-properties-invitation.md))

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-properties-invitation.md "https://timelimit.io/StatusOfMailAddressResponse#/properties/invitation")

### invitation Type

merged type ([Details](statusofmailaddressresponse-properties-invitation.md))

any of

* [ReceivedParentInvitation](statusofmailaddressresponse-definitions-receivedparentinvitation.md "check type definition")

* [Untitled null in StatusOfMailAddressResponse](statusofmailaddressresponse-properties-invitation-anyof-1.md "check type definition")

## ownFamily

The invited address's own family, given only together with an invitation. @tag:adult-role

`ownFamily`

* is optional

* Type: merged type ([Details](statusofmailaddressresponse-properties-ownfamily.md))

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-properties-ownfamily.md "https://timelimit.io/StatusOfMailAddressResponse#/properties/ownFamily")

### ownFamily Type

merged type ([Details](statusofmailaddressresponse-properties-ownfamily.md))

any of

* [OwnFamily](statusofmailaddressresponse-definitions-ownfamily.md "check type definition")

* [Untitled null in StatusOfMailAddressResponse](statusofmailaddressresponse-properties-ownfamily-anyof-1.md "check type definition")

# StatusOfMailAddressResponse Definitions

## Definitions group MailAddressStatus

Reference this group by using

```json
{"$ref":"https://timelimit.io/StatusOfMailAddressResponse#/definitions/MailAddressStatus"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group ReceivedParentInvitation

Reference this group by using

```json
{"$ref":"https://timelimit.io/StatusOfMailAddressResponse#/definitions/ReceivedParentInvitation"}
```

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [inviterName](#invitername) | `string` | Required | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-invitername.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/ReceivedParentInvitation/properties/inviterName") |
| [inviterMail](#invitermail) | `string` | Required | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-invitermail.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/ReceivedParentInvitation/properties/inviterMail") |
| [role](#role)               | `string` | Required | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-adultrole.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/ReceivedParentInvitation/properties/role")          |

### inviterName



`inviterName`

* is required

* Type: `string`

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-invitername.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/ReceivedParentInvitation/properties/inviterName")

#### inviterName Type

`string`

### inviterMail



`inviterMail`

* is required

* Type: `string`

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-invitermail.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/ReceivedParentInvitation/properties/inviterMail")

#### inviterMail Type

`string`

### role



`role`

* is required

* Type: `string` ([AdultRole](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-adultrole.md))

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-adultrole.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/ReceivedParentInvitation/properties/role")

#### role Type

`string` ([AdultRole](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-adultrole.md))

#### role Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"admin"`   |             |
| `"manager"` |             |
| `"member"`  |             |

## Definitions group AdultRole

Reference this group by using

```json
{"$ref":"https://timelimit.io/StatusOfMailAddressResponse#/definitions/AdultRole"}
```

| Property | Type | Required | Nullable | Defined by |
| :------- | :--- | :------- | :------- | :--------- |

## Definitions group OwnFamily

Reference this group by using

```json
{"$ref":"https://timelimit.io/StatusOfMailAddressResponse#/definitions/OwnFamily"}
```

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                            |
| :-------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [children](#children) | `number` | Required | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-ownfamily-properties-children.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/OwnFamily/properties/children") |
| [devices](#devices)   | `number` | Required | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-ownfamily-properties-devices.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/OwnFamily/properties/devices")   |
| [adults](#adults)     | `number` | Required | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-ownfamily-properties-adults.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/OwnFamily/properties/adults")     |

### children



`children`

* is required

* Type: `number`

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-ownfamily-properties-children.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/OwnFamily/properties/children")

#### children Type

`number`

### devices



`devices`

* is required

* Type: `number`

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-ownfamily-properties-devices.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/OwnFamily/properties/devices")

#### devices Type

`number`

### adults



`adults`

* is required

* Type: `number`

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-ownfamily-properties-adults.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/OwnFamily/properties/adults")

#### adults Type

`number`
