---
id: version-1.0.0-beta3-button
title: Button
original_id: button
---

Buttons can be used to interact with the screen. It takes the following props.

<img src="/react-native-elements/img/buttons.png" width="300" />

```js
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

<Button
  title='BUTTON'
/>

<Button
  icon={
    <Icon
      name='arrow-right'
      size={15}
      color='white'
    />
  }
  title='BUTTON WITH ICON'
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
  title='BUTTON WITH RIGHT ICON'
/>

<Button
  title="LOADING BUTTON"
  loading
  loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
  titleStyle={{ fontWeight: "700" }}
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

---

### Props

> Also receives all [TouchableNativeFeedback](http://facebook.github.io/react-native/docs/touchablenativefeedback.html#props) (Android) or [TouchableOpacity](http://facebook.github.io/react-native/docs/touchableopacity.html#props) (iOS) props

* [`buttonStyle`](#buttonstyle)
* [`clear`](#clear)
* [`containerStyle`](#containerstyle)
* [`disabled`](#disabled)
* [`disabledStyle`](#disabledstyle)
* [`disabledTitleStyle`](#disabledtitlestyle)
* [`icon`](#icon)
* [`iconContainerStyle`](#iconcontainerstyle)
* [`iconRight`](#iconright)
* [`linearGradientProps`](#lineargradientprops)
* [`loading`](#loading)
* [`loadingProps`](#loadingprops)
* [`loadingStyle`](#loadingstyle)
* [`onPress`](#onpress)
* [`title`](#title)
* [`titleProps`](#titleprops)
* [`titleStyle`](#titlestyle)
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

### `disabled`

disables user interaction

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `disabledStyle`

style of the button when disabled

|        Type         |    Default    |
| :-----------------: | :-----------: |
| View style (object) | See button.js |

---

### `disabledTitleStyle`

style of the title when disabled

|        Type         |    Default    |
| :-----------------: | :-----------: |
| Text style (object) | See button.js |

---

### `icon`

displays a centered icon (when no title) or to the left (with text). (can be used along with iconRight as well)

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

displays Icon to the right of title. Needs to be used along with icon prop

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

### `title`

button title (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `titleProps`

add additional props for Text component (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `titleStyle`

add additional styling for title component (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| Text style (object) |  none   |
