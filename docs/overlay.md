---
id: overlay
title: Overlay
---

The Overlay is a view that floats above an app’s content. Overlays are an easy
way to inform or request information from the user.

<img src="/react-native-elements/img/overlay.png" width="400" >

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

---

## Props

> Also receives all
> [Modal](https://facebook.github.io/react-native/docs/modal#props) props

- [`backdropStyle`](#backdropStyle)
- [`children`](#children)
- [`fullScreen`](#fullscreen)
- [`isVisible`](#isvisible)
- [`onBackdropPress`](#onbackdroppress)
- [`overlayStyle`](#overlaystyle)

---

## Reference

### `children`

What the modal will render

|     Type      | Default |
| :-----------: | :-----: |
| React Element |  none   |

---

### `backdropStyle`

Style of the backdrop container

|        Type         |    Default     |
| :-----------------: | :------------: |
| View Style (object) | Internal Style |

---

### `fullScreen`

If set to true, the modal will take up the entire screen width and height

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `isVisible`

If true, the overlay is visible

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `overlayStyle`

style of the actual overlay

|        Type         |    Default     |
| :-----------------: | :------------: |
| View Style (object) | Internal Style |

---

### `onBackdropPress`

handler for backdrop press (only works when `fullscreen` is false)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |
