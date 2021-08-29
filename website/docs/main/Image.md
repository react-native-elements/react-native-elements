---
id: image

title: Image

slug: /image
---

import Usage from './usage/Image/Image.md'

Drop-in replacement for the standard React Native Image component that displays

images with a placeholder and smooth image load transitioning.

## Usage

<Usage />

---

## Props

### Image

- [Component](#component)
- [ImageComponent](#imagecomponent)
- [PlaceholderContent](#placeholdercontent)
- [childrenContainerStyle](#childrencontainerstyle)
- [containerStyle](#containerstyle)
- [onLongPress](#onlongpress)
- [onPress](#onpress)
- [placeholderStyle](#placeholderstyle)
- [transition](#transition)
- [transitionDuration](#transitionduration)

## Reference

### Image

#### Component

Define the component passed to image.

| Type            | Default           |
| --------------- | ----------------- |
| React Component | Pressable or View |

---

#### ImageComponent

Specify a different component as the Image component.

| Type | Default |
| ---- | ------- |
| any  | None    |

---

#### PlaceholderContent

Content to load when Image is rendering.

| Type | Default |
| ---- | ------- |
| any  | None    |

---

#### childrenContainerStyle

Additional styling for the children container.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | null    |

---

#### containerStyle

Additional styling for the container.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

#### onLongPress

Called when a long-tap gesture is detected.

Callback function when long pressing component.

| Type                                                      | Default |
| --------------------------------------------------------- | ------- |
| ((event: GestureResponderEvent) => void) and (() => void) | None    |

---

#### onPress

Called when a single tap gesture is detected.

Callback function when pressing component.

| Type                                                      | Default |
| --------------------------------------------------------- | ------- |
| ((event: GestureResponderEvent) => void) and (() => void) | None    |

---

#### placeholderStyle

Additional styling for the placeholder container.

| Type               | Default |
| ------------------ | ------- |
| View style(Object) | None    |

---

#### transition

Perform fade transition on image load.

| Type    | Default |
| ------- | ------- |
| boolean | None    |

---

#### transitionDuration

Perform fade transition on image load.

| Type   | Default |
| ------ | ------- |
| number | 360     |

---
