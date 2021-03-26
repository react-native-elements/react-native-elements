## Props

- [`brand`](#brand)
- [`color`](#color)
- [`Component`](#component)
- [`containerStyle`](#containerstyle)
- [`disabled`](#disabled)
- [`disabledStyle`](#disabledstyle)
- [`iconProps`](#iconprops)
- [`iconStyle`](#iconstyle)
- [`name`](#name)
- [`onLongPress`](#onlongpress)
- [`onPress`](#onpress)
- [`raised`](#raised)
- [`reverse`](#reverse)
- [`reverseColor`](#reversecolor)
- [`size`](#size)
- [`solid`](#solid)
- [`type`](#type)
- [`underlayColor`](#underlaycolor)

---

## Reference

### `brand`

Uses the brands font (FontAwesome5 only)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `color`

color of icon (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  black  |

---

### `Component`

update React Native Component (optional)

|          Type          |                                        Default                                        |
| :--------------------: | :-----------------------------------------------------------------------------------: |
| React Native component | View if no onPress method is defined, TouchableHighlight if onPress method is defined |

---

### `containerStyle`

add styling to container holding icon (optional)

|        Type         |      Default      |
| :-----------------: | :---------------: |
| View style (object) | inherited styling |

---

### `disabled`

Disables onPress events (optional). Only works when `onPress` has a handler.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `disabledStyle`

Style for the button when disabled (optional). Only works when `onPress` has a
handler.

|        Type         |              Default               |
| :-----------------: | :--------------------------------: |
| View style (object) | `{{ backgroundColor: '#D1D5D8' }}` |

---

### `iconProps`

provide all props from react-native Icon component

|                                          Type                                          | Default |
| :------------------------------------------------------------------------------------: | :-----: |
| {[...Icon props](https://github.com/oblador/react-native-vector-icons#icon-component)} |  none   |

---

### `iconStyle`

additional styling to icon (optional)

|        Type         |     Default     |
| :-----------------: | :-------------: |
| View style (object) | inherited style |

---

### `name`

name of icon (required)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `onLongPress`

onLongPress method for button (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onPress`

onPress method for button (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `raised`

adds box shadow to button (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `reverse`

reverses color scheme (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `reverseColor`

specify reverse icon color (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  white  |

---

### `size`

size of icon (optional)

|  Type  | Default |
| :----: | :-----: |
| number |   26    |

---

### `solid`

Uses the solid font (FontAwesome5 only)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `type`

type of icon set. [Supported sets here](#available-icon-sets).

|  Type  | Default  |
| :----: | :------: |
| string | material |

---

### `underlayColor`

underlayColor for press event

|  Type  |  Default   |
| :----: | :--------: |
| string | icon color |
