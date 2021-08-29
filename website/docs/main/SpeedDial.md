---
id: speeddial

title: SpeedDial

slug: /speeddial
---

import Usage from './usage/SpeedDial/SpeedDial.md'

When pressed, a floating action button can display three to six related actions in the form of a speed dial.

If more than six actions are needed, something other than a FAB should be used to present them.

Upon press, the FAB remains visible and emits a stack of related actions.

If the FAB is tapped in this state, it should either initiate its default action or close the speed dial actions.

## Components

- [SpeedDial.Action](#speeddialaction)
  Adds Action to the SpeedDial.
  This, Receieve all [Fab](fab#props) props.

## Usage

<Usage />

---

## Props

### SpeedDial

- [backdropPressableProps](#backdroppressableprops)
- [children](#children)
- [isOpen](#isopen)
- [onClose](#onclose)
- [onOpen](#onopen)
- [openIcon](#openicon)
- [overlayColor](#overlaycolor)
- [transitionDuration](#transitionduration)

### SpeedDial.Action

None

## Reference

### SpeedDial

#### backdropPressableProps

Props for Backdrop Pressable

| Type           | Default |
| -------------- | ------- |
| PressableProps | None    |

---

#### children

SpeedDial Action as children.

| Type                | Default |
| ------------------- | ------- |
| any[] and ReactNode | None    |

---

#### isOpen

Opens the action stack.

| Type    | Default |
| ------- | ------- |
| boolean | None    |

---

#### onClose

Callback fired when the component requests to be closed.

| Type     | Default  |
| -------- | -------- |
| Function | Function |

---

#### onOpen

Callback fired when the component requests to be open.

| Type     | Default  |
| -------- | -------- |
| Function | Function |

---

#### openIcon

Icon shown on FAB when action stack is open.

| Type | Default |
| ---- | ------- |
| any  | None    |

---

#### overlayColor

Add overlay color to the speed dial.

| Type   | Default |
| ------ | ------- |
| string | None    |

---

#### transitionDuration

The duration for the transition, in milliseconds.

| Type   | Default |
| ------ | ------- |
| number | 150     |

---

### SpeedDial.Action

None
