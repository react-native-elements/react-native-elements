## Props

> Also receives all
> [TouchableOpacity](https://reactnative.dev/docs/TouchableOpacity#props)
> [ScrollView](https://reactnative.dev/docs/ScrollView#props)
> props

- [`bottomDivider`](#bottomdivider)
- [`containerStyle`](#containerstyle)
- [`disabled`](#disabled)
- [`disabledStyle`](#disabledstyle)
- [`onPress`](#onpress)
- [`pad`](#pad)
- [`initalNumberOfelement`](#initalnumberofelement)
- [`animationDuration`](#animationduration)

---

## Child Components

### Dropdown.Head

> Receives all [View](https://reactnative.dev/docs/view#props) props.

### Dropdown.Item

> Receives all [View](https://reactnative.dev/docs/view#props) props.

### Dropdown.Content

> Receives all [View](https://reactnative.dev/docs/view#props) props.

### Dropdown.Title

> Receives all [Text](text.md#props) props.

### Dropdown.Subtitle

> Receives all [Text](text.md#props) props.


### Dropdown.Chevron

> Receives all [Icon](icon.md#props) props and
- [`openedName`](#openedname)
- [`collapsedName`](#collapsedname)
- [`openType`](#opentype)
- [`collapseType`](#collapsetype)


---

## Reference


### `initalNumberOfelement`

Number of elements to show when dropdown is shown and rest will be scrollable (Required).

|  Type    | Default|
| :------: | :----: |
|  number  |  none  |

---

### `animationDuration`

Animation duration in milliseconds of dropdown(Optional).

|  Type    | Default|
| :------: | :----: |
|  number  |   200  |

---

### `bottomDivider`

Add divider at the bottom

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `containerStyle`

additional main container styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `disabled`

If true the user won't be able to perform any action on the list item.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  none   |

---

### `disabledStyle`

Specific styling to be used when list item is disabled.

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `onPress`

onPress method for link (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `pad`

adds spacing between the leftComponent, the title component & right component

|  Type  | Default |
| :----: | :-----: |
| number |  `16`   |

---

### `topDivider`

Add divider at the top

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `openedName`

Icon name when dropdown is opened

|  Type    | Default|
| :------: | :----: |
|  string  |  none  |

---

### `collapsedName`

Icon name when dropdown is collapsed

|  Type    | Default|
| :------: | :----: |
|  string  |  none  |

---

### `openType`

Icon type when dropdown is open works when openName is defined

|  Type    | Default|
| :------: | :----: |
|  string  |  none  |

---

### `collapseType`

Icon type when dropdown is collapsed works when collapseName is defined

|  Type    | Default|
| :------: | :----: |
|  string  |  none  |
