---
id: badge

title: Badge

slug: /badge
---

import Usage from './usage/Badge/Badge.md'

Badges are small components typically used to communicate a numerical value or indicate the status of an item to the user.

## Usage

<Usage />

---

## Props

### Badge

- [Component](#component)
- [badgeStyle](#badgestyle)
- [containerStyle](#containerstyle)
- [status](#status)
- [textProps](#textprops)
- [textStyle](#textstyle)
- [value](#value)

## Reference

### Badge

#### Component

Custom component to replace the badge outer component.

| Type            | Default           |
| --------------- | ----------------- |
| React Component | Pressable or View |

---

#### badgeStyle

Additional styling for badge (background) view component.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

#### containerStyle

Style for the container.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

#### status

Determines color of the indicator.

| Type                                           | Default |
| ---------------------------------------------- | ------- |
| "primary" or "success" or "warning" or "error" | primary |

---

#### textProps

Extra props for text component.

| Type      | Default |
| --------- | ------- |
| TextProps | None    |

---

#### textStyle

Extra styling for icon component.

| Type               | Default |
| ------------------ | ------- |
| Text Style(Object) | None    |

---

#### value

Text value to be displayed by badge, defaults to empty.

| Type | Default |
| ---- | ------- |
| any  | None    |

---
