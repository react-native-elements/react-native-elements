---
id: version-1.0.0-image
title: Image
original_id: image
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
> [Image](https://facebook.github.io/react-native/docs/image#props) props

- [`containerStyle`](#containerstyle)
- [`placeholderStyle`](#placeholderstyle)
- [`PlaceholderContent`](#placeholdercontent)
- [`ImageComponent`](#imagecomponent)

---

## Reference

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

### `PlaceholderContent`

Content to render when image is loading.

|   Type    | Default |
| :-------: | :-----: |
| component |  none   |

---

### `ImageComponent`

Specify a different component as the Image component.

|          Type          | Default |
| :--------------------: | :-----: |
| React Native Component |  Image  |

---
