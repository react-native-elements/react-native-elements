## Props

> Also receives all
> [Modal](https://reactnative.dev/docs/modal#props) props

- [`backdropStyle`](#backdropstyle)
- [`children`](#children)
- [`fullScreen`](#fullscreen)
- [`isVisible`](#isvisible)
- [`ModalComponent`](#modalcomponent)
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

### `ModalComponent`

override React Native `Modal` component (usable for web-platform)

|          Type          | Default |
| :--------------------: | :-----: |
| React Native Component |  Modal  |

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
