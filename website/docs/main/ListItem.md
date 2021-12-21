---
id: listitem

title: ListItem

slug: /listitem
---

import Usage from './usage/ListItem/ListItem.md'

ListItems are used to display rows of information, such as a contact list, playlist, or menu.

They are very customizable and can contain switches, avatars, badges, icons, and more.

## Components

- [ListItem.Accordion](#listitemaccordion)
  This allows making a accordion list which can show/hide content.
- [ListItem.ButtonGroup](#listitembuttongroup)
  This allows adding ButtonGroup to the ListItem.
  This, Receives all [ButtonGroup](buttongroup#props) props.
- [ListItem.CheckBox](#listitemcheckbox)
  This allows adding CheckBox to the ListItem.
  This, Receives all [CheckBox](checkbox#props) props.
- [ListItem.Chevron](#listitemchevron)
  This allows adding a Chevron Icon(arrow) to the ListItem.
  This, Receives all [Icon](icon#props) props.
- [ListItem.Content](#listitemcontent)
  This allows adding content to the ListItem.
  This, Receives all [View](https://reactnative.dev/docs/view#props) props.
- [ListItem.Input](#listiteminput)
  This allows adding an Text Input within the ListItem.
  This, Receives all [Input](Input.md#props) props.
- [ListItem.Subtitle](#listitemsubtitle)
  This allows adding SubTitle to the ListItem.
  This, Receives all [Text](text#props) props.
- [ListItem.Swipeable](#listitemswipeable)
  We offer a special kind of ListItem which is swipeable from both ends and allows users select an event.
- [ListItem.Title](#listitemtitle)
  This allows adding Title to the ListItem.
  This, Receives all [Text](text#props) props.

## Usage

<Usage />

---

## Props

### ListItem

- [Component](#component)
- [ViewComponent](#viewcomponent)
- [bottomDivider](#bottomdivider)
- [children](#children)
- [containerStyle](#containerstyle)
- [disabledStyle](#disabledstyle)
- [linearGradientProps](#lineargradientprops)
- [pad](#pad)
- [topDivider](#topdivider)

### ListItem.Accordion

- [animation](#animation)
- [content](#content)
- [expandIcon](#expandicon)
- [icon](#icon)
- [isExpanded](#isexpanded)
- [noIcon](#noicon)
- [noRotation](#norotation)

### ListItem.ButtonGroup

None

### ListItem.CheckBox

None

### ListItem.Chevron

None

### ListItem.Content

- [right](#right)

### ListItem.Input

None

### ListItem.Subtitle

- [right](#right)

### ListItem.Swipeable

- [leftContent](#leftcontent)
- [leftStyle](#leftstyle)
- [leftWidth](#leftwidth)
- [onLeftSwipe](#onleftswipe)
- [onRightSwipe](#onrightswipe)
- [rightContent](#rightcontent)
- [rightStyle](#rightstyle)
- [rightWidth](#rightwidth)

### ListItem.Title

- [right](#right)

## Reference

### ListItem

#### Component

Replace element with custom element.

| Type            | Default |
| --------------- | ------- |
| React Component | None    |

---

#### ViewComponent

Container for linear gradient.

| Type            | Default |
| --------------- | ------- |
| React Component | None    |

---

#### bottomDivider

Add divider at the bottom of the list item.

| Type    | Default |
| ------- | ------- |
| boolean | None    |

---

#### children

Either children or a render prop that receives a boolean reflecting whether

the component is currently pressed.

Add enclosed children.

| Type | Default |
| ---- | ------- |
| any  | None    |

---

#### containerStyle

Additional main container styling.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

#### disabledStyle

Specific styling to be used when list item is disabled.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

#### linearGradientProps

Props for linear gradient component.

| Type | Default |
| ---- | ------- |
| any  | None    |

---

#### pad

Adds spacing between the leftComponent, the title component & right component.

| Type   | Default |
| ------ | ------- |
| number | None    |

---

#### topDivider

Add divider at the top of the list item.

| Type    | Default |
| ------- | ------- |
| boolean | None    |

---

### ListItem.Accordion

#### animation

Decide whether to show animation.

| Type              | Default |
| ----------------- | ------- |
| Boolean or Object | {       |

      duration: 350,
      type: 'timing',
    } |

---

#### content

Similar to ListItem's child.

| Type | Default |
| ---- | ------- |
| any  | None    |

---

#### expandIcon

Icon when Accordion is expanded, if not provided `icon` will be rotated 180deg.

| Type | Default |
| ---- | ------- |
| any  | None    |

---

#### icon

Icon for unexpanded Accordion.

| Type | Default |
| ---- | ------- |
| any  | None    |

---

#### isExpanded

Decide if Accordion is Expanded.

| Type    | Default |
| ------- | ------- |
| boolean | None    |

---

#### noIcon

Don't show accordion icon.

| Type    | Default |
| ------- | ------- |
| boolean | None    |

---

#### noRotation

Don't rotate when Accordion is expanded.

| Type    | Default |
| ------- | ------- |
| boolean | None    |

---

### ListItem.ButtonGroup

None

### ListItem.CheckBox

None

### ListItem.Chevron

None

### ListItem.Content

#### right

| Type    | Default |
| ------- | ------- |
| boolean | None    |

---

### ListItem.Input

None

### ListItem.Subtitle

#### right

| Type    | Default |
| ------- | ------- |
| boolean | None    |

---

### ListItem.Swipeable

#### leftContent

Left Content.

| Type | Default |
| ---- | ------- |
| any  | None    |

---

#### leftStyle

Style of left container.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

#### leftWidth

Width to swipe left.

| Type   | Default         |
| ------ | --------------- |
| number | ScreenWidth / 3 |

---

#### onLeftSwipe

Function to call when user swipes left.

| Type     | Default |
| -------- | ------- |
| Function | None    |

---

#### onRightSwipe

Function to call when user swipes right.

| Type     | Default |
| -------- | ------- |
| Function | None    |

---

#### rightContent

Right Content.

| Type | Default |
| ---- | ------- |
| any  | None    |

---

#### rightStyle

Style of right container.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

#### rightWidth

Width to swipe right.

| Type   | Default         |
| ------ | --------------- |
| number | ScreenWidth / 3 |

---

### ListItem.Title

#### right

Add right title.

| Type    | Default |
| ------- | ------- |
| boolean | None    |

---
