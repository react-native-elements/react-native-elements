## Props

> Also receives all
> [TouchableNativeFeedback](http://reactnative.dev/docs/touchablenativefeedback.html#props)
> (Android) or
> [TouchableOpacity](http://reactnative.dev/docs/touchableopacity.html#props)
> (iOS) props

- [`buttonStyle`](#buttonstyle)
- [`containerStyle`](#containerstyle)
- [`disabled`](#disabled)
- [`disabledStyle`](#disabledstyle)
- [`disabledTitleStyle`](#disabledtitlestyle)
- [`icon`](#icon)
- [`iconContainerStyle`](#iconcontainerstyle)
- [`iconRight`](#iconright)
- [`iconPosition`](#iconposition)
- [`linearGradientProps`](#lineargradientprops)
- [`loading`](#loading)
- [`loadingProps`](#loadingprops)
- [`loadingStyle`](#loadingstyle)
- [`onPress`](#onpress)
- [`raised`](#raised)
- [`title`](#title)
- [`titleProps`](#titleprops)
- [`titleStyle`](#titlestyle)
- [`TouchableComponent`](#touchablecomponent)
- [`type`](#type)
- [`ViewComponent`](#viewcomponent)

---

## Reference

### `buttonStyle`

add additional styling for button component (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

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

|        Type         |    Default     |
| :-----------------: | :------------: |
| View style (object) | Internal Style |

---

### `disabledTitleStyle`

style of the title when disabled

|        Type         |    Default     |
| :-----------------: | :------------: |
| Text style (object) | Internal Style |

---

### `icon`

displays a centered icon (when no title) or to the left (with text). (can be
used along with iconRight as well). Can be an object or a custom component.

|                            Type                            | Default |
| :--------------------------------------------------------: | :-----: |
| {[...Icon props](icon.md#props)}<br/>**OR**<br/> component |  none   |

---

### `iconContainerStyle`

styling for Icon Component container

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

---

### `iconRight`

displays Icon to the right of title. Needs to be used along with `icon` prop

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `iconPosition`

displays Icon to the position mentioned. Needs to be used along with `icon` prop

|  Type  | Default |
| :----: | :-----: |
| string |  left   |

---

### `linearGradientProps`

displays a linear gradient. See [usage](#lineargradient-usage).

|                                                      Type                                                      | Default |
| :------------------------------------------------------------------------------------------------------------: | :-----: |
| {[...Gradient props](https://github.com/react-native-community/react-native-linear-gradient#additional-props)} |  none   |

---

### `loading`

prop to display a loading spinner (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `loadingProps`

add additional props for ActivityIndicator component (optional)

|                                         Type                                         |     Default     |
| :----------------------------------------------------------------------------------: | :-------------: |
| {[...ActivityIndicator props](https://reactnative.dev/docs/activityindicator#props)} | Internal object |

---

### `loadingStyle`

add additional styling for loading component (optional)

|        Type         |    Default     |
| :-----------------: | :------------: |
| View style (object) | Internal Style |

---

### `onPress`

onPress method (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `raised`

Add raised button styling (optional). Has no effect if `type="clear"`.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `title`

button title (optional)

|               Type                | Default |
| :-------------------------------: | :-----: |
| string <br/>**OR**<br/> component |  none   |

---

### `titleProps`

add additional props for Text component (optional)

|                            Type                            | Default |
| :--------------------------------------------------------: | :-----: |
| {[...Text props](https://reactnative.dev/docs/text#props)} |  none   |

---

### `titleStyle`

add additional styling for title component (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| Text style (object) |  none   |

---

### `TouchableComponent`

component for user interaction

|        Type         |                                                                       Default                                                                        |
| :-----------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------: |
| Touchable Component | TouchableOpacity (ios) or TouchableNativeFeedback (android) or TouchableOpacity (android, if [`linearGradientProps`](###linearGradientProps) exists) |

---

### `type`

Type of button (optional)

|            Type             | Default |
| :-------------------------: | :-----: |
| `solid`, `clear`, `outline` |  solid  |

---

### `ViewComponent`

component for container

|          Type          | Default |
| :--------------------: | :-----: |
| React Native Component |  View   |
