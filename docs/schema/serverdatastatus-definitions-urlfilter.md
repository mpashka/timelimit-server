# UrlFilter Schema

```txt
https://timelimit.io/ServerDataStatus#/definitions/UrlFilter
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                            |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [ServerDataStatus.schema.json\*](ServerDataStatus.schema.json "open original schema") |

## UrlFilter Type

`object` ([UrlFilter](serverdatastatus-definitions-urlfilter.md))

# UrlFilter Properties

| Property            | Type      | Required | Nullable       | Defined by                                                                                                                                                         |
| :------------------ | :-------- | :------- | :------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [enabled](#enabled) | `boolean` | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-urlfilter-properties-enabled.md "https://timelimit.io/ServerDataStatus#/definitions/UrlFilter/properties/enabled") |
| [allow](#allow)     | `array`   | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-urlfilter-properties-allow.md "https://timelimit.io/ServerDataStatus#/definitions/UrlFilter/properties/allow")     |
| [block](#block)     | `array`   | Required | cannot be null | [ServerDataStatus](serverdatastatus-definitions-urlfilter-properties-block.md "https://timelimit.io/ServerDataStatus#/definitions/UrlFilter/properties/block")     |

## enabled



`enabled`

* is required

* Type: `boolean`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-urlfilter-properties-enabled.md "https://timelimit.io/ServerDataStatus#/definitions/UrlFilter/properties/enabled")

### enabled Type

`boolean`

## allow



`allow`

* is required

* Type: `string[]`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-urlfilter-properties-allow.md "https://timelimit.io/ServerDataStatus#/definitions/UrlFilter/properties/allow")

### allow Type

`string[]`

## block



`block`

* is required

* Type: `string[]`

* cannot be null

* defined in: [ServerDataStatus](serverdatastatus-definitions-urlfilter-properties-block.md "https://timelimit.io/ServerDataStatus#/definitions/UrlFilter/properties/block")

### block Type

`string[]`
