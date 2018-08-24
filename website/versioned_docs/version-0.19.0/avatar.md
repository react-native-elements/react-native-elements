---
id: version-0.19.0-avatar
title: Avatar
original_id: avatar
---

<img src="/react-native-elements/img/avatar_all.png" width="500" >

<img src="/react-native-elements/img/avatar_with_images.png" width="500" >

```js
<Avatar
  small
  rounded
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  medium
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  large
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  xlarge
  rounded
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
```

#### Avatar with initials

<img src="/react-native-elements/img/avatar_with_initials.png" width="500" >

```js
<Avatar
  small
  rounded
  title="MT"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  medium
  title="BP"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  large
  title="LW"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  xlarge
  rounded
  title="CR"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
```

#### Avatar with icons

<img src="/react-native-elements/img/avatar_with_icons.png" width="500" >

```js
<Avatar
  small
  rounded
  icon={{name: 'user', type: 'font-awesome'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
/>
<Avatar
  medium
  overlayContainerStyle={{backgroundColor: 'blue'}}
  icon={{name: 'meetup', color: 'red', type: 'font-awesome'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 3, marginTop: 100}}
/>
<Avatar
  large
  icon={{name: 'rocket', color: 'orange', type: 'font-awesome'}}
  overlayContainerStyle={{backgroundColor: 'white'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 4, marginTop: 75}}
/>
<Avatar
  xlarge
  rounded
  icon={{name: 'home', type: 'font-awesome'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 5, marginRight: 60}}
/>
```

### Props

* [`activeOpacity`](#activeopacity)
* [`avatarStyle`](#avatarstyle)
* [`component`](#component)
* [`containerStyle`](#containerstyle)
* [`height`](#height)
* [`icon`](#icon)
* [`iconStyle`](#iconstyle)
* [`imageProps`](#imageprops)
* [`large`](#large)
* [`onLongPress`](#onlongpress)
* [`onPress`](#onpress)
* [`overlayContainerStyle`](#overlaycontainerstyle)
* [`medium`](#medium)
* [`rounded`](#rounded)
* [`source`](#source)
* [`small`](#small)
* [`title`](#title)
* [`titleStyle`](#titlestyle)
* [`width`](#width)
* [`xlarge`](#xlarge)

---

# Reference

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

### `component`

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

### `height`

Height of the Avatar

|  Type  | Default |
| :----: | :-----: |
| number |   34    |

---

### `icon`

|                                                                                                                  Type                                                                                                                  | Default |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| object {name: string, color: string, size: number, type: string (default is material-community, or choose one of simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo), iconStyle: object(style)} |  none   |

---

### `iconStyle`

Extra styling for icon component (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `imageProps`

Optional properties to pass to the avatar e.g "resizeMode"

|           Type           | Default |
| :----------------------: | :-----: |
| object (imageProperties) |  none   |

---

### `large`

Large sized avatar

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

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

### `medium`

Medium sized avatar

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `rounded`

Makes the avatar circular

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `small`

Small sized avatar

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `source`

Image source

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `title`

Renders title in the avatar

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `titleStyle`

Style for the title

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `width`

Width of the avatar

|  Type  | Default |
| :----: | :-----: |
| number |   34    |

### `xlarge`

Extra large sized avatar

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---
