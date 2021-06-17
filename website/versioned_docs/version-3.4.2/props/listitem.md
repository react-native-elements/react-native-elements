## Props

> Also receives all
> [TouchableHighlight](https://reactnative.dev/docs/touchablehighlight#props)
> props

- [`bottomDivider`](#bottomdivider)
- [`Component`](#component)
- [`containerStyle`](#containerstyle)
- [`disabled`](#disabled)
- [`disabledStyle`](#disabledstyle)
- [`onLongPress`](#onlongpress)
- [`onPress`](#onpress)
- [`pad`](#pad)
- [`topDivider`](#topdivider)
- [`ViewComponent`](#viewcomponent)

---

## Child Components

### ListItem.ButtonGroup

> Receives all [ButtonGroup](button_group.md#props) props.

### ListItem.CheckBox

> Receives all [CheckBox](checkbox.md#props) props.

### ListItem.Chevron

> Receives all [Icon](icon.md#props) props.

### ListItem.Content

> Receives all [View](https://reactnative.dev/docs/view#props) props.

### ListItem.Input

> Receives all [Input](input.md#props) props.

### ListItem.Subtitle

> Receives all [Text](text.md#props) props.

### ListItem.Title

> Receives all [Text](text.md#props) props.

### ListItem.Accordion

- [`isExpanded`](#isexpanded)
- [`icon`](#icon)
- [`expandIcon`](#expandicon)
- [`content`](#content)
- [`noIcon`](#noicon)
- [`noRotation`](#norotation)
- [`animation`](#animation)

> Also Receives all [ListItem](#props) props.

### ListItem.Swipeable

> Also recieves all `ListItem` Props

- [`leftContent`](#leftcontent)
- [`rightContent`](#leftcontent)
- [`leftStyle`](#leftstyle)
- [`rightStyle`](#rightstyle)
- [`leftWidth`](#leftwidth)
- [`rightWidth`](#rightwidth)

---

## Reference

### `bottomDivider`

Add divider at the bottom of the list item

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `Component`

replace element with custom element (optional)

|                                  Type                                   |  Default  |
| :---------------------------------------------------------------------: | :-------: |
| View or TouchableHighlight (default) if onPress method is added as prop | component |

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

### `onLongPress`

onLongPress method for link (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

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

Add divider at the top of the list item

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `ViewComponent`

Container for linear gradient (for non-expo user)

|   Type    | Default |
| :-------: | :-----: |
| component |  View   |

---

### `isExpanded`

Accordion Expanded

|  Type   | Default |
| :-----: | :-----: |
| booleon |  false  |

---

### `icon`

Icon for unexpanded Accordion

|   Type   |   Default    |
| :------: | :----------: |
| IocnNode | chevron-down |

---

### `expandIcon`

Icon when Accordion is expanded, if not provided `icon` will be rotated 180deg (optional)

|   Type   | Default |
| :------: | :-----: |
| IconNode |  none   |

---

### `content`

Similar to ListItem's child

|   Type    |        Default         |
| :-------: | :--------------------: |
| ReactNode | Empty ListItem.Content |

---

### `noIcon`

Don't show accordion icon

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `noRotation`

Don't rotate when Accordion is expanded

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `animation`

Boolean to show animation,

|       Type       |            Default             |
| :--------------: | :----------------------------: |
| Object or number | `{type:"timing",duration:350}` |

---

### `leftContent`

Left Content

|   Type    | Default |
| :-------: | :-----: |
| ReactNode |  none   |

---

### `rightContent`

Right Content

|   Type    | Default |
| :-------: | :-----: |
| ReactNode |  none   |

---

### `leftStyle`

Style of left container

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `rightStyle`

Style of right container

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `leftWidth`

Width to swipe left

|  Type  |    Default    |
| :----: | :-----------: |
| number | ScreenWidth/3 |

---

### `rightWidth`

Width to swipe right

|  Type  |    Default    |
| :----: | :-----------: |
| number | ScreenWidth/3 |

---
