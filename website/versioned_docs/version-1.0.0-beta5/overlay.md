---
id: version-1.0.0-beta5-overlay
title: Overlay
original_id: overlay
---

<img src="/react-native-elements/img/overlay.png" width="400" >

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
  onBackdropPress={() => this.setState({isVisible: false})}
>
  <Text>Hello from Overlay!</Text>
</Overlay>;
```

---

### Props

* [`borderRadius`](#borderradius)
* [`children`](#children)
* [`containerStyle`](#containerstyle)
* [`fullScreen`](#fullscreen)
* [`height`](#height)
* [`isVisible`](#isvisible)
* [`overlayBackgroundColor`](#overlaybackgroundcolor)
* [`onBackdropPress`](#onbackdroppress)
* [`overlayStyle`](#overlaystyle)
* [`width`](#width)
* [`windowBackgroundColor`](#windowbackgroundcolor)

---

# Reference

### `borderRadius`

Border radius for the overlay

|  Type  | Default |
| :----: | :-----: |
| number |    3    |

---

### `children`

What the modal will render

| Type | Default |
| :--: | :-----: |
| any  |  none   |

---

### `containerStyle`

Style of the overlay container

|      Type      |    Default     |
| :------------: | :------------: |
| object (style) | various styles |

---

### `fullScreen`

If set to true, the modal will take up the entire screen width and height

|  Type   | Default |
| :-----: | :-----: |
| boolean |  none   |

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
| boolean |  none   |

---

### `overlayBackgroundColor`

Background color of the actual overlay

|  Type  | Default |
| :----: | :-----: |
| string |  white  |

---

### `overlayStyle`

style of the actual overlay

|      Type      |    Default     |
| :------------: | :------------: |
| object (style) | various styles |

---

### `onBackdropPress`

callback for overlay background press

|      Type      |    Default     |
| :------------: | :------------: |
| function       | none |

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
