# SerializedUpdateDeviceExperimentalFlagsAction Schema

```txt
https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateDeviceExperimentalFlagsAction
```



| Abstract            | Extensible | Status         | Identifiable | Custom Properties | Additional Properties | Access Restrictions | Defined In                                                                                        |
| :------------------ | :--------- | :------------- | :----------- | :---------------- | :-------------------- | :------------------ | :------------------------------------------------------------------------------------------------ |
| Can be instantiated | No         | Unknown status | No           | Forbidden         | Forbidden             | none                | [SerializedParentAction.schema.json\*](SerializedParentAction.schema.json "open original schema") |

## SerializedUpdateDeviceExperimentalFlagsAction Type

`object` ([SerializedUpdateDeviceExperimentalFlagsAction](serializedparentaction-definitions-serializedupdatedeviceexperimentalflagsaction.md))

# SerializedUpdateDeviceExperimentalFlagsAction Properties

| Property              | Type     | Required | Nullable       | Defined by                                                                                                                                                                                                                                                     |
| :-------------------- | :------- | :------- | :------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [type](#type)         | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedupdatedeviceexperimentalflagsaction-properties-type.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateDeviceExperimentalFlagsAction/properties/type")         |
| [deviceId](#deviceid) | `string` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedupdatedeviceexperimentalflagsaction-properties-deviceid.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateDeviceExperimentalFlagsAction/properties/deviceId") |
| [mask](#mask)         | `number` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedupdatedeviceexperimentalflagsaction-properties-mask.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateDeviceExperimentalFlagsAction/properties/mask")         |
| [value](#value)       | `number` | Required | cannot be null | [SerializedParentAction](serializedparentaction-definitions-serializedupdatedeviceexperimentalflagsaction-properties-value.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateDeviceExperimentalFlagsAction/properties/value")       |

## type



`type`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedupdatedeviceexperimentalflagsaction-properties-type.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateDeviceExperimentalFlagsAction/properties/type")

### type Type

`string`

### type Constraints

**enum**: the value of this property must be equal to one of the following values:

| Value                                | Explanation |
| :----------------------------------- | :---------- |
| `"UPDATE_DEVICE_EXPERIMENTAL_FLAGS"` |             |

## deviceId



`deviceId`

* is required

* Type: `string`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedupdatedeviceexperimentalflagsaction-properties-deviceid.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateDeviceExperimentalFlagsAction/properties/deviceId")

### deviceId Type

`string`

## mask



`mask`

* is required

* Type: `number`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedupdatedeviceexperimentalflagsaction-properties-mask.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateDeviceExperimentalFlagsAction/properties/mask")

### mask Type

`number`

## value



`value`

* is required

* Type: `number`

* cannot be null

* defined in: [SerializedParentAction](serializedparentaction-definitions-serializedupdatedeviceexperimentalflagsaction-properties-value.md "https://timelimit.io/SerializedParentAction#/definitions/SerializedUpdateDeviceExperimentalFlagsAction/properties/value")

### value Type

`number`
