---
id: overlay
title: Overlay
---

import Props from './props/overlay.md'

The Overlay is a view that floats above an app’s content. Overlays are an easy
way to inform or request information from the user.

<img src="/img/overlay.png" width="400" />

## Usage

```jsx
import React, { useState } from 'react';
import { Button, Overlay } from 'react-native-elements';

const OverlayExample = () => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View>
      <Button title="Open Overlay" onPress={toggleOverlay} />

      <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
        <Text>Hello from Overlay!</Text>
      </Overlay>
    </View>
  );
};
```

> Web-platform specific note:
>
> You **must** pass a valid React Native [`Modal`](https://reactnative.dev/docs/modal) component implementation
> into [`ModalComponent`](#modalcomponent) prop because `Modal` component is not implemented yet in `react-native-web`

```jsx
...
import Modal from 'modal-react-native-web';

...

<Overlay ModalComponent={Modal} ... />
...
```

---

<Props />

---

## Also See

[Dialog](https://reactnative.dev/docs/dialog)
