---
id: tab

title: Tab

slug: /tab
---

import Usage from './usage/Tab/Tab.md'

Tabs organize content across different screens, data sets, and other interactions.

## Components

- [Tab.Item](#tabitem)
  They are indivual item of the parent Tab.
  They are clickable and allows users to click and change Tab.
  Receives all [Button](https://reactnativeelements.com/docs/button#props) props.

## Usage

<Usage />

---

## Props

### Tab

- [disableIndicator](#disableindicator)
- [indicatorStyle](#indicatorstyle)
- [onChange](#onchange)
- [value](#value)
- [variant](#variant)

### Tab.Item

- [active](#active)
- [variant](#variant)

## Reference

### Tab

#### disableIndicator

Disable the indicator below.

| Type    | Default |
| ------- | ------- |
| boolean | None    |

---

#### indicatorStyle

Additional styling for tab indicator.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

#### onChange

On Index Change Callback.

| Type                    | Default  |
| ----------------------- | -------- |
| (value: number) => void | Function |

---

#### value

Child position index value.

| Type   | Default |
| ------ | ------- |
| number | None    |

---

#### variant

Define the background Variant.

| Type                   | Default |
| ---------------------- | ------- |
| "primary" or "default" | None    |

---

### Tab.Item

#### active

Allows to define if TabItem is active.

| Type    | Default |
| ------- | ------- |
| boolean | None    |

---

#### variant

Define the background Variant.

| Type                   | Default |
| ---------------------- | ------- |
| "primary" or "default" | None    |

---
