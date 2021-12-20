## Props

- [`badgeStyle`](#badgestyle)
- [`Component`](#component)
- [`containerStyle`](#containerstyle)
- [`onPress`](#onpress)
- [`status`](#status)
- [`textProps`](#textprops)
- [`textStyle`](#textstyle)
- [`value`](#value)

---

## Reference

### `badgeStyle`

Additional styling for badge (background) view component (optional)

|        Type         |    Default     |
| :-----------------: | :------------: |
| View style (object) | Internal Style |

---

### `Component`

Custom component to replace the badge outer component

|          Type          |                  Default                   |
| :--------------------: | :----------------------------------------: |
| React Native Component | View, if `onPress` then `TouchableOpacity` |

---

### `containerStyle`

Style for the container (optional)

|        Type         |    Default     |
| :-----------------: | :------------: |
| View style (object) | Internal Style |

---

### `onPress`

Function called when pressed on the badge

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `status`

Determines color of the indicator

|                   Type                   | Default |
| :--------------------------------------: | :-----: |
| `primary`, `success`, `warning`, `error` | primary |

---

### `textProps`

Extra props for text component (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| Text props (object) |  none   |

---

### `textStyle`

Extra styling for icon component (optional)

|        Type         |    Default     |
| :-----------------: | :------------: |
| Text style (object) | Internal Style |

---

### `value`

Text value to be displayed by badge, defaults to empty

|                    Type                    | Default |
| :----------------------------------------: | :-----: |
| String OR Number OR React Native Component |  none   |

---

## Props for withBadge

- [`options`](#options)
- [`value`](#value)

---

## Reference for withBadge

### `options`

> Also receives all
> [Badge](badge.md#props) props.

Object with the following (optional) keys:

#### `bottom`

|       Type        |  Default  |
| :---------------: | :-------: |
| number (optional) | undefined |

#### `left`

|       Type        |  Default  |
| :---------------: | :-------: |
| number (optional) | undefined |

#### `right`

|       Type        |                   Default                    |
| :---------------: | :------------------------------------------: |
| number (optional) | -16 (-3 with MiniBadge aka. without `value`) |

#### `top`

|       Type        |        Default        |
| :---------------: | :-------------------: |
| number (optional) | -1 (3 with MiniBadge) |

#### `hidden`

|        Type        | Default |
| :----------------: | :-----: |
| boolean (optional) |  false  |

#### `containerStyle`

|        Type         |    Default     |
| :-----------------: | :------------: |
| View style (object) | Internal Style |

---

### `value`

Text value to be displayed by badge, defaults to empty

|                                          Type                                           | Default |
| :-------------------------------------------------------------------------------------: | :-----: |
| String OR Number OR React Native Component OR Function, which returns one of the former |  none   |
