---
id: tooltip

title: Tooltip

slug: /tooltip
---

import Usage from './usage/Tooltip/Tooltip.md'

Tooltips display informative text when users tap on an element.

## Usage

<Usage />

---

## Props

### Tooltip

- [ModalComponent](#modalcomponent)
- [backgroundColor](#backgroundcolor)
- [closeOnlyOnBackdropPress](#closeonlyonbackdroppress)
- [containerStyle](#containerstyle)
- [height](#height)
- [highlightColor](#highlightcolor)
- [onClose](#onclose)
- [onOpen](#onopen)
- [overlayColor](#overlaycolor)
- [pointerColor](#pointercolor)
- [pointerStyle](#pointerstyle)
- [popover](#popover)
- [skipAndroidStatusBar](#skipandroidstatusbar)
- [toggleAction](#toggleaction)
- [toggleOnPress](#toggleonpress)
- [visible](#visible)
- [width](#width)
- [withOverlay](#withoverlay)
- [withPointer](#withpointer)

## Reference

### Tooltip

#### ModalComponent

Override React Native `Modal` component (usable for web-platform).

| Type | Default |
| ---- | ------- |
| any  | None    |

---

#### backgroundColor

Sets backgroundColor of the tooltip and pointer.

| Type       | Default |
| ---------- | ------- |
| ColorValue | #617080 |

---

#### closeOnlyOnBackdropPress

Flag to determine whether to disable auto hiding of tooltip when touching/scrolling anywhere inside the active tooltip popover container. When `true`, Tooltip closes only when overlay backdrop is pressed (or) highlighted tooltip button is pressed.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

---

#### containerStyle

Passes style object to tooltip container

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | {}      |

---

#### height

Tooltip container height. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container.

| Type   | Default |
| ------ | ------- |
| number | 40      |

---

#### highlightColor

Color to highlight the item the tooltip is surrounding.

| Type       | Default     |
| ---------- | ----------- |
| ColorValue | transparent |

---

#### onClose

Function which gets called on closing the tooltip.

| Type     | Default  |
| -------- | -------- |
| Function | Function |

---

#### onOpen

Function which gets called on opening the tooltip.

| Type     | Default  |
| -------- | -------- |
| Function | Function |

---

#### overlayColor

Color of overlay shadow when tooltip is open.

| Type       | Default   |
| ---------- | --------- |
| ColorValue | #fafafa14 |

---

#### pointerColor

Color of tooltip pointer, it defaults to the [`backgroundColor`](#backgroundcolor) if none is passed.

| Type       | Default |
| ---------- | ------- |
| ColorValue | #617080 |

---

#### pointerStyle

Style to be applied on the pointer.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

#### popover

Component to be rendered as the display container.

| Type | Default |
| ---- | ------- |
| any  | None    |

---

#### skipAndroidStatusBar

Force skip StatusBar height when calculating element position. Pass `true` if Tooltip used inside react-native Modal component.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

---

#### toggleAction

Define type of action that should trigger tooltip. Available options _onPress_, _onLongPress_

| Type   | Default |
| ------ | ------- |
| string | onPress |

---

#### toggleOnPress

Flag to determine to toggle or not the tooltip on press.

| Type    | Default |
| ------- | ------- |
| boolean | true    |

---

#### visible

To show the tooltip.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

---

#### width

Tooltip container width. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container.

| Type   | Default |
| ------ | ------- |
| number | 150     |

---

#### withOverlay

Flag to determine whether or not display overlay shadow when tooltip is open.

| Type    | Default |
| ------- | ------- |
| boolean | true    |

---

#### withPointer

Flag to determine whether or not to display the pointer.

| Type    | Default |
| ------- | ------- |
| boolean | true    |

---
