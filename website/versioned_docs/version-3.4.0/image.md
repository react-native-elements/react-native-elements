---
id: image
title: Image
---

import Props from './props/image.md'

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

<Props />

---
