---
id: tooltip
title: Tooltip
---

Tooltips display informative text when users tap on an element.

<img alt="tooltip example gif" width='290' src='/react-native-elements/img/tooltipExample.gif'>

## Usage

```js
import { Tooltip, Text } from 'react-native-elements';

...

<Tooltip popover={<Text>Info here</Text>}>
  <Text>Press me</Text>
</Tooltip>
```

---

## Props

- [`backgroundColor`](#backgroundcolor)
- [`containerStyle`](#containerStyle)
- [`height`](#height)
- [`highlightColor`](#highlightColor)
- [`onClose`](#onClose)
- [`onOpen`](#onOpen)
- [`pointerColor`](#pointerColor)
- [`popover`](#popover)
- [`toggleOnPress`](#toggleOnPress)
- [`width`](#width)
- [`withOverlay`](#withoverlay)
- [`withPointer`](#withpointer)

---

## Reference

### `backgroundColor`

sets backgroundColor of the tooltip and pointer.

|  Type  | Default |
| :----: | :-----: |
| string | #617080 |

---

### `containerStyle`

Passes style object to tooltip container

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `height`

Tooltip container height. Necessary in order to render the container in the
correct place. Pass height according to the size of the content rendered inside
the container.

|  Type  | Default |
| :----: | :-----: |
| number |   40    |

---

### `highlightColor`

Color to highlight the item the tooltip is surrounding.

|  Type  |   Default   |
| :----: | :---------: |
| string | transparent |

---

### `onClose`

function which gets called on closing the tooltip.

|   Type   | Default  |
| :------: | :------: |
| function | () => {} |

---

### `onOpen`

function which gets called on opening the tooltip.

|   Type   | Default  |
| :------: | :------: |
| function | () => {} |

---

### `pointerColor`

Color of tooltip pointer, it defaults to the
[`backgroundColor`](#backgroundcolor) if none is passed .

|  Type  |                Default                |
| :----: | :-----------------------------------: |
| string | [`backgroundColor`](#backgroundcolor) |

---

### `popover`

Component to be rendered as the display container.

|     Type      | Default |
| :-----------: | :-----: |
| React.Element |  null   |

---

### `toggleOnPress`

Flag to determine to toggle or not the tooltip on press.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |

---

### `width`

Tooltip container width. Necessary in order to render the container in the
correct place. Pass height according to the size of the content rendered inside
the container.

|  Type  | Default |
| :----: | :-----: |
| number |   150   |

### `withOverlay`

Flag to determine whether or not display overlay shadow when tooltip is open.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |

### `withPointer`

Flag to determine whether or not dislay pointer.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |
