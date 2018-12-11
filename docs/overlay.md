---
id: overlay
title: Overlay
---

The Overlay is a view that floats above an app’s content. Overlays are an easy
way to inform or request information from the user.

<img src="/react-native-elements/img/overlay.png" width="400" >

## Usage

```js
<Overlay isVisible={this.state.isVisible}>
  <Text>Hello from Overlay!</Text>
</Overlay>;

{
  this.state.visible && (
    <Overlay isVisible>
      <Text>Hello from Overlay!</Text>
    </Overlay>
  );
}

<Overlay
  isVisible={this.state.isVisible}
  windowBackgroundColor="rgba(255, 255, 255, .5)"
  overlayBackgroundColor="red"
  width="auto"
  height="auto"
>
  <Text>Hello from Overlay!</Text>
</Overlay>;

<Overlay
  isVisible={this.state.isVisible}
  onBackdropPress={() => this.setState({ isVisible: false })}
>
  <Text>Hello from Overlay!</Text>
</Overlay>;
```

---

## Props

> Also receives all
> [Modal](https://facebook.github.io/react-native/docs/modal#props-1) props

- [`borderRadius`](#borderradius)
- [`children`](#children)
- [`containerStyle`](#containerstyle)
- [`fullScreen`](#fullscreen)
- [`height`](#height)
- [`isVisible`](#isvisible)
- [`overlayBackgroundColor`](#overlaybackgroundcolor)
- [`onBackdropPress`](#onbackdroppress)
- [`overlayStyle`](#overlaystyle)
- [`width`](#width)
- [`windowBackgroundColor`](#windowbackgroundcolor)

---

## Reference

### `borderRadius`

Border radius for the overlay

|  Type  | Default |
| :----: | :-----: |
| number |    3    |

---

### `children`

What the modal will render

|     Type      | Default |
| :-----------: | :-----: |
| React Element |  none   |

---

### `containerStyle`

Style of the overlay container

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

### `height`

Height of the overlay

|       Type       |       Default       |
| :--------------: | :-----------------: |
| string or number | window height - 180 |

---

### `isVisible`

If true, the overlay is visible

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `overlayBackgroundColor`

Background color of the actual overlay

|  Type  | Default |
| :----: | :-----: |
| string |  white  |

---

### `overlayStyle`

style of the actual overlay

|        Type         |    Default     |
| :-----------------: | :------------: |
| View Style (object) | Internal Style |

---

### `onBackdropPress`

callback for overlay background press

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `width`

Width of the overlay

|       Type       |      Default      |
| :--------------: | :---------------: |
| string or number | window width - 80 |

---

### `windowBackgroundColor`

Background color for the overlay background

|  Type  |      Default      |
| :----: | :---------------: |
| string | rgba(0, 0, 0, .5) |
