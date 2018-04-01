---
id: version-1.0.0-beta2-button
title: Button
original_id: button
---

Buttons can be used to interact with the screen. It takes the following props.

<img src="/react-native-elements/img/buttons.png" width="300" />

```js
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

<Button
  text='BUTTON'
/>

<Button
  icon={
    <Icon
      name='arrow-right'
      size={15}
      color='white'
    />
  }
  text='BUTTON WITH ICON'
/>

<Button
  icon={
    <Icon
      name='arrow-right'
      size={15}
      color='white'
    />
  }
  iconRight
  text='BUTTON WITH RIGHT ICON'
/>

<Button
  text="LOADING BUTTON"
  loading
  loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
  textStyle={{ fontWeight: "700" }}
  buttonStyle={{
    backgroundColor: "rgba(92, 99,216, 1)",
    width: 300,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }}
  containerStyle={{ marginTop: 20 }}
/>
```

### Props

> Also receives all TouchableNativeFeedback (Android) or TouchableOpacity (iOS) props

* [`buttonStyle`](#buttonstyle)
* [`clear`](#clear)
* [`containerStyle`](#containerstyle)
* [`icon`](#icon)
* [`iconContainerStyle`](#iconcontainerstyle)
* [`iconRight`](#iconright)
* [`linearGradientProps`](#lineargradientprops)
* [`loading`](#loading)
* [`loadingProps`](#loadingprops)
* [`loadingStyle`](#loadingstyle)
* [`onPress`](#onpress)
* [`text`](#text)
* [`textProps`](#textprops)
* [`textStyle`](#textstyle)
* [`TouchableComponent`](#touchablecomponent)
* [`ViewComponent`](#viewcomponent)

---

# Reference

### `TouchableComponent`

component for user interaction

|        Type         |                           Default                           |
| :-----------------: | :---------------------------------------------------------: |
| Touchable Component | TouchableOpacity (ios) or TouchableNativeFeedback (android) |

---

### `ViewComponent`

container for linear gradient

|          Type          | Default |
| :--------------------: | :-----: |
| React Native Component |  View   |

---

### `buttonStyle`

add additional styling for button component (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `clear`

makes the button transparent (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  none   |

---

### `containerStyle`

styling for Component container

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

---

### `icon`

displays a centered icon (when no title) or to the left (with title). (can be used along with iconRight as well)

|          Type          | Default |
| :--------------------: | :-----: |
| React Native Component |  none   |

---

### `iconContainerStyle`

styling for Icon Component container

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

---

### `iconRight`

displays Icon to the right of Text. Needs to be used along with icon prop

|  Type   | Default |
| :-----: | :-----: |
| boolean |  none   |

---

### `linearGradientProps`

displays a linear gradient (supports Expo only)

|  Type  | Default |
| :----: | :-----: |
| object |  none   |

---

### `loading`

prop to display a loading spinner (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  none   |

---

### `loadingProps`

add additional props for ActivityIndicator component (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `loadingStyle`

add additional styling for loading component (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

---

### `onPress`

onPress method (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `text`

button title (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `textProps`

add additional props for Text component (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `textStyle`

add additional styling for text component (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| Text style (object) |  none   |
