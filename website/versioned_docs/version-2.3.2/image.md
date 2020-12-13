---
id: image
title: Image
---

Drop-in replacement for the standard React Native Image component that displays
images with a placeholder and smooth image load transitioning.

<div class="component-preview component-preview--single margin-none">
  <img src="https://user-images.githubusercontent.com/5962998/48658581-f4170a00-ea1a-11e8-866c-df4f42f21947.gif" alt="Image Component" />
</div>

## Usage

```js
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';

// Standard Image
<Image
  source={{ uri: image }}
  style={{ width: 200, height: 200 }}
/>


// Image with custom placeholder content
<Image
  source={{ uri: image }}
  style={{ width: 200, height: 200 }}
  PlaceholderContent={<ActivityIndicator />}
/>
```

---

## Props

> Also receives all
> [React Native Image](https://reactnative.dev/docs/image#props) props
>
> Contains all
> [React Native Image](https://reactnative.dev/docs/image#methods) methods.

- [`onLongPress`](#onlongpress)
- [`onPress`](#onpress)
- [`containerStyle`](#containerstyle)
- [`placeholderStyle`](#placeholderstyle)
- [`transition`](#transition)
- [`ImageComponent`](#imagecomponent)
- [`PlaceholderContent`](#placeholdercontent)

---

## Reference

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

### `containerStyle`

Additional styling for the container (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

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

### `ImageComponent`

Specify a different component as the Image component.

|          Type          | Default |
| :--------------------: | :-----: |
| React Native Component |  Image  |

---

### `PlaceholderContent`

Content to render when image is loading.

|   Type    | Default |
| :-------: | :-----: |
| component |  none   |
