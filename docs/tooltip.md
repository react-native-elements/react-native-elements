---
id: tooltip
title: Tooltip
---

Easy to use and customisable tooltip.

<img alt="tooltip example gif" width='290' src='/react-native-elements/img/tooltipExample.gif'>

### Usage.

```js
import { Tooltip, Text } from 'react-native-elements';

...

<Tooltip tooltipText="Info here">
  <Text>Press me</Text>
</Tooltip>

```

### Props

* [`backgroundColor`](#backgroundcolor)
* [`highlightColor`](#highlightColor)
* [`onClose`](#onClose)
* [`pointerColor`](#pointerColor)
* [`toggleOnPress`](#toggleOnPress)
* [`tooltipComponent`](#tooltipComponent)
* [`tooltipContainerDefaultStyle`](#tooltipContainerDefaultStyle)
* [`tooltipContainerStyle`](#tooltipContainerStyle)
* [`tooltipHeight`](#tooltipHeight)
* [`tooltipText`](#tooltipText)
* [`tooltipTextStyle`](#tooltipTextStyle)
* [`tooltipWidth`](#tooltipWidth)
* [`withOverlay`](#withOverlay)
* [`withPointer`](#withPointer)

---

# Reference

### `backgroundColor`

sets backgroundColor of the tooltip and pointer.

|  Type  | Default |
| :----: | :-----: |
| string | #617080 |

---

### `highlightColor`

Color to highlight the item the tooltip is surrounding.

|                                                          Type                                                           | Default |
| :---------------------------------------------------------------------------------------------------------------------: | :-----: |
| string |  transparent   |

---

### `onClose`

function which gets called on closing the tooltip.

|  Type  |                            Default                             |
| :----: | :------------------------------------------------------------: |
| function | () => {} |

---

### `pointerColor`

Color of tooltip pointer, it defaults to the [`backgroundColor`](#backgroundcolor) if none is passed .

|  Type  |                            Default                             |
| :----: | :------------------------------------------------------------: |
| string | [`backgroundColor`](#backgroundcolor) |

---

### `toogleOnPress`

Flag to determine to toggle or not the tooltip on press.

|  Type  |                            Default                             |
| :----: | :------------------------------------------------------------: |
| boolean | true |

---

### `tooltipComponent`

Component to be rendered as the display container.

|  Type  |                            Default                             |
| :----: | :------------------------------------------------------------: |
| React.Element | null |

---

### `tooltipContainerDefaultStyle`

Tooltip container default style, use it if necessary to override it. It's also possible to use [`tooltipContainerStyle`](#tooltipContainerStyle)

|  Type  |                            Default                             |
| :----: | :------------------------------------------------------------: |
| Object | { display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, backgroundColor, borderRadius: 10, padding: 10 } |

---

### `tooltipContainerStyle`

Passes style object to tooltip container

|  Type   | Default  |
| :-----: | :------: |
| Object | {} |

---

### `tooltipHeight`

Tooltip container height. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container.

|  Type   | Default  |
| :-----: | :------: |
| number | 40 |

---

### `tooltipText`

Text to be rendered inside the tooltip container.

|      Type      | Default |
| :------------: | :-----: |
| string |  none   |


### `tooltipTextStyle`

Style applied to tooltip text inside the container.

|      Type      | Default |
| :------------: | :-----: |
| Object |  {}   |


### `tooltipWidth`

Tooltip container width. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container.


|      Type      | Default |
| :------------: | :-----: |
| Object |  {}   |


### `withOverlay`

Flag to determine whether or not dislay overlay shadow when tooltip is open.

|      Type      | Default |
| :------------: | :-----: |
| boolean |  true  |


### `withPointer`

Flag to determine whether or not dislay pointer.

|      Type      | Default |
| :------------: | :-----: |
| boolean |  true  |

