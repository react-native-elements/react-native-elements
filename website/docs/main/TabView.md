---
id: tabview

title: TabView

slug: /tabview
---

import Usage from './usage/TabView/TabView.md'

Tabs organize content across different screens, data sets, and other interactions.

TabView enables swipeable tabs.

## Components

- [TabView.Item](#tabviewitem)
  They are individual item of the parent Tab.

## Usage

<Usage />

---

## Props

### TabView

- [animationConfig](#animationconfig)
- [animationType](#animationtype)
- [onChange](#onchange)
- [value](#value)

### TabView.Item

None

## Reference

### TabView

#### animationConfig

Define the animation configurations.

| Type                                                             | Default |
| ---------------------------------------------------------------- | ------- |
| Omit<SpringAnimationConfig and TimingAnimationConfig, "toValue"> | {}      |

---

#### animationType

Choose the animation type among `spring` and `timing`. This is visible when there is tab change.

| Type                 | Default |
| -------------------- | ------- |
| "timing" or "spring" | spring  |

---

#### onChange

On Index Change Callback.

| Type                   | Default |
| ---------------------- | ------- |
| (value: number) => any | None    |

---

#### value

Child position index value.

| Type   | Default |
| ------ | ------- |
| number | 0       |

---

### TabView.Item

None
