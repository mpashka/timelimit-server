# ReceivedParentInvitation Schema

```txt
https://timelimit.io/StatusOfMailAddressResponse#/definitions/ReceivedParentInvitation
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                                  |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :---------------------------------------------------------------------------------------------------------- |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [StatusOfMailAddressResponse.schema.json\*](StatusOfMailAddressResponse.schema.json "open original schema") |

## ReceivedParentInvitation Type

`object` ([ReceivedParentInvitation](statusofmailaddressresponse-definitions-receivedparentinvitation.md))

# ReceivedParentInvitation Properties

| Property                    | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                |
| :-------------------------- | :------- | :------- | :------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [inviterName](#invitername) | `string` | Required | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-invitername.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/ReceivedParentInvitation/properties/inviterName") |
| [inviterMail](#invitermail) | `string` | Required | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-invitermail.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/ReceivedParentInvitation/properties/inviterMail") |
| [role](#role)               | `string` | Required | cannot be null | [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-adultrole.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/ReceivedParentInvitation/properties/role")          |

## inviterName



`inviterName`

* is required

* Type: `string`

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-invitername.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/ReceivedParentInvitation/properties/inviterName")

### inviterName Type

`string`

## inviterMail



`inviterMail`

* is required

* Type: `string`

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-invitermail.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/ReceivedParentInvitation/properties/inviterMail")

### inviterMail Type

`string`

## role



`role`

* is required

* Type: `string` ([AdultRole](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-adultrole.md))

* cannot be null

* defined in: [StatusOfMailAddressResponse](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-adultrole.md "https://timelimit.io/StatusOfMailAddressResponse#/definitions/ReceivedParentInvitation/properties/role")

### role Type

`string` ([AdultRole](statusofmailaddressresponse-definitions-receivedparentinvitation-properties-adultrole.md))

### role Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value       | Explanation |
| :---------- | :---------- |
| `"admin"`   |             |
| `"manager"` |             |
| `"member"`  |             |
