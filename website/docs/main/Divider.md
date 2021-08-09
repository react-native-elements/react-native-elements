---
id: divider

title: Divider

slug: /divider
---

import Usage from './usage/Divider/Divider.md'

Dividers are visual separators of content.

Use Divider when you want to make a distinction between sections of content.

Our divider offers adding inset, color, orientation and subHeader to the component using props.

Also receives all [View](https://reactnative.dev/docs/view#props) props.

## Usage

<Usage />

---

## Props

### Divider

- [color](#color)
- [inset](#inset)
- [insetType](#insettype)
- [orientation](#orientation)
- [style](#style)
- [subHeader](#subheader)
- [subHeaderStyle](#subheaderstyle)
- [width](#width)

## Reference

### Divider

#### color

The color of the component.

| Type   | Default |
| ------ | ------- |
| string | None    |

---

#### inset

Applies inset to the divider.

| Type    | Default |
| ------- | ------- |
| boolean | false   |

---

#### insetType

Applies inset to a specific direction to the divider.

| Type                          | Default |
| ----------------------------- | ------- |
| "middle" or "left" or "right" | left    |

---

#### orientation

Apply orientation to the divider.

| Type                       | Default    |
| -------------------------- | ---------- |
| "vertical" or "horizontal" | horizontal |

---

#### style

Applies style to the divider.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

#### subHeader

Adds subHeader text to the divider.

| Type   | Default |
| ------ | ------- |
| string | None    |

---

#### subHeaderStyle

Adds style to the subHeader text of the divider

| Type               | Default |
| ------------------ | ------- |
| Text Style(Object) | None    |

---

#### width

Apply width to the divider.

| Type   | Default |
| ------ | ------- |
| number | None    |

---
