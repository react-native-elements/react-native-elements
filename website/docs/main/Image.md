---
id: image
title: Image
slug: /image
---

import Usage from './usage/Image/Image.md'

Drop-in replacement for the standard React Native Image component that displays
images with a placeholder and smooth image load transitioning.

<div class="component-preview component-preview--single margin-none">
  <img src="https://user-images.githubusercontent.com/5962998/48658581-f4170a00-ea1a-11e8-866c-df4f42f21947.gif" alt="Image Component" />
</div>

## Usage

<Usage />

---

## Props

> Also receives all
> [React Native Image](https://reactnative.dev/docs/image#props) props
>
> Contains all
> [React Native Image](https://reactnative.dev/docs/image#methods) methods.

- [`containerStyle`](#containerstyle)
- [`childrenContainerStyle`](#childrencontainerstyle)
- [`ImageComponent`](#imagecomponent)
- [`onLongPress`](#onlongpress)
- [`onPress`](#onpress)
- [`PlaceholderContent`](#placeholdercontent)
- [`placeholderStyle`](#placeholderstyle)
- [`transition`](#transition)

---

## Reference

### `containerStyle`

Additional styling for the container (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

---

### `childrenContainerStyle`

Additional styling for the children container (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

---

### `ImageComponent`

Specify a different component as the Image component.

|          Type          | Default |
| :--------------------: | :-----: |
| React Native Component |  Image  |

---

### `onLongPress`

Callback function when long pressing component

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onPress`

Callback function when pressing component

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `PlaceholderContent`

Content to render when image is loading.

|   Type    | Default |
| :-------: | :-----: |
| component |  none   |

---

### `placeholderStyle`

Additional styling for the placeholder container (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

---

### `transition`

Perform fade transition on image load

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |

---

### `transitionDuration`

Perform fade transition on image load

|  Type  | Default |
| :----: | :-----: |
| number |   360   |
