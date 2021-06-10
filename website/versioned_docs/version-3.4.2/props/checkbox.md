## Props

- [`center`](#center)
- [`checked`](#checked)
- [`checkedColor`](#checkedcolor)
- [`checkedIcon`](#checkedicon)
- [`checkedTitle`](#checkedtitle)
- [`Component`](#component)
- [`containerStyle`](#containerstyle)
- [`fontFamily`](#fontfamily)
- [`iconRight`](#iconright)
- [`iconType`](#icontype)
- [`onIconPress`](#oniconpress)
- [`onLongIconPress`](#onlongiconpress)
- [`onLongPress`](#onlongpress)
- [`onPress`](#onpress)
- [`right`](#right)
- [`size`](#size)
- [`textStyle`](#textstyle)
- [`title`](#title)
- [`titleProps`](#titleprops)
- [`uncheckedColor`](#uncheckedcolor)
- [`uncheckedIcon`](#uncheckedicon)

---

## Reference

### `center`

Aligns checkbox to center (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `checked`

Flag for checking the icon (required)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `checkedColor`

Default checked color (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  green  |

---

### `checkedIcon`

Default checked icon ([Font Awesome Icon](http://fontawesome.io/icons/))
(optional)

|               Type               |    Default     |
| :------------------------------: | :------------: |
| string OR React Native Component | check-square-o |

---

### `checkedTitle`

Specify a custom checked message (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `Component`

Specify React Native component for main button (optional)

|          Type          |     Default      |
| :--------------------: | :--------------: |
| React Native Component | TouchableOpacity |

---

### `containerStyle`

Style of main container (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `fontFamily`

Specify different font family

|  Type  |                      Default                      |
| :----: | :-----------------------------------------------: |
| string | System font bold (iOS), Sans Serif Bold (android) |

---

### `iconRight`

Moves icon to right of text (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `iconType`

type of icon set. [Supported sets here](icon.md#available-icon-sets).

|  Type  |   Default    |
| :----: | :----------: |
| string | font-awesome |

---

### `onIconPress`

onPress function for checkbox (required)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onLongIconPress`

onLongPress function for checkbox (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onLongPress`

onLongPress function for checkbox (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onPress`

onPress function for container (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `right`

Aligns checkbox to right (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `size`

Size of the checkbox

|  Type  | Default |
| :----: | :-----: |
| number |   24    |

---

### `textStyle`

Style of text (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `title`

Title of checkbox

|               Type               | Default |
| :------------------------------: | :-----: |
| string OR React Native Component |  none   |

---

### `titleProps`

Additional props for the title Text component (optional)

|                             Type                             | Default |
| :----------------------------------------------------------: | :-----: |
| {[...Text props](https://reactnative.dev/docs/text#props-1)} |  none   |

---

### `uncheckedColor`

Default unchecked color (optional)

|  Type  | Default |
| :----: | :-----: |
| string | #bfbfbf |

---

### `uncheckedIcon`

Default checked icon ([Font Awesome Icon](http://fontawesome.io/icons/))
(optional)

|               Type               | Default  |
| :------------------------------: | :------: |
| string OR React Native Component | square-o |
