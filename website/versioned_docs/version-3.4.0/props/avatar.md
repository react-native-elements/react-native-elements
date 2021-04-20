## Props

- [`activeOpacity`](#activeopacity)
- [`avatarStyle`](#avatarstyle)
- [`Component`](#component)
- [`containerStyle`](#containerstyle)
- [`icon`](#icon)
- [`iconStyle`](#iconstyle)
- [`ImageComponent`](#imagecomponent)
- [`imageProps`](#imageprops)
- [`onLongPress`](#onlongpress)
- [`onPress`](#onpress)
- [`overlayContainerStyle`](#overlaycontainerstyle)
- [`placeholderStyle`](#placeholderstyle)
- [`renderPlaceholderContent`](#renderplaceholdercontent)
- [`rounded`](#rounded)
- [`size`](#size)
- [`source`](#source)
- [`title`](#title)
- [`titleStyle`](#titlestyle)

---

## Child Components

### Accessory

> Receives either all [Icon](icon.md#props) or [Image](image.md#props) props.

---

## Reference

### `activeOpacity`

Opacity when pressed

|  Type  | Default |
| :----: | :-----: |
| number |   0.2   |

---

### `avatarStyle`

Style for avatar image

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `Component`

Component for enclosing element (eg: TouchableHighlight, View, etc)

|   Type   |      Default       |
| :------: | :----------------: |
| function | TouchableHighlight |

---

### `containerStyle`

Styling for outer container

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `icon`

Displays an icon as the main content of the Avatar. **Cannot be used alongside
title**. When used with the `source` prop it will be used as the placeholder.

|                                                                                        Type                                                                                         | Default |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| object {name: string, color: string, size: number, type: string (default is material, or choose from [supported icon sets](icon.md#available-icon-sets)), iconStyle: object(style)} |  none   |

---

### `iconStyle`

Extra styling for icon component (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `ImageComponent`

Custom ImageComponent for Avatar

|            Type            | Default |
| :------------------------: | :-----: |
| React component or element |  Image  |

### `imageProps`

Optional properties to pass to the avatar e.g "resizeMode"

|                Type                | Default |
| :--------------------------------: | :-----: |
| {[...Image props](image.md#props)} |  none   |

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

### `overlayContainerStyle`

Style for the view outside image or icon

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `placeholderStyle`

Adds style to the placeholder wrapper

|      Type      |             Default              |
| :------------: | :------------------------------: |
| object (style) | `{ backgroundColor: '#BDBDBD' }` |

---

### `renderPlaceholderContent`

Custom placeholder element (by default, it's the title)

|            Type            | Default |
| :------------------------: | :-----: |
| React component or element |  none   |

---

### `rounded`

Makes the avatar circular

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `size`

Size of the avatar

|                          Type                          | Default |
| :----------------------------------------------------: | :-----: |
| string(`small`, `medium`, `large`, `xlarge`) or number | `small` |

---

### `source`

Image source

|                        Type                        | Default |
| :------------------------------------------------: | :-----: |
| [ImageSource](https://reactnative.dev/docs/images) |  none   |

---

### `title`

Renders title in the placeholder

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `titleStyle`

Style for the title

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |
