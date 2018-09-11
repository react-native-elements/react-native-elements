---
id: version-0.19.0-button
title: Button
original_id: button
---

Buttons take a title and an optional
[material icon name](https://design.google.com/icons/), as well as the props
below.

> You can override Material icons with one of the following: material-community,
> simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation,
> evilicon, or entypo by providing an icon.type as a prop.

![Buttons](/react-native-elements/img/buttons_0.19.png)

```js
import { Button } from 'react-native-elements'

<Button
  title='BUTTON' />

<Button
  raised
  icon={{name: 'cached'}}
  title='BUTTON WITH ICON' />

<Button
  large
  rightIcon={{name: 'code'}}
  title='LARGE WITH RIGHT ICON' />

<Button
  large
  icon={{name: 'envira', type: 'font-awesome'}}
  title='LARGE WITH ICON TYPE' />

<Button
  large
  icon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
  title='OCTICON' />
```

> Also receives all
> [TouchableNativeFeedback](http://facebook.github.io/react-native/docs/touchablenativefeedback.html#props)
> (Android) or
> [TouchableOpacity](http://facebook.github.io/react-native/docs/touchableopacity.html#props)
> (iOS) props

### Props

* [`activityIndicatorStyle`](#activityindicatorstyle)
* [`backgroundColor`](#backgroundcolor)
* [`borderRadius`](#borderradius)
* [`buttonStyle`](#buttonstyle)
* [`Component`](#component)
* [`color`](#color)
* [`containerViewStyle`](#containerviewstyle)
* [`disabled`](#disabled)
* [`disabledStyle`](#disabledstyle)
* [`disabledTextStyle`](#disabledtextstyle)
* [`fontSize`](#fontsize)
* [`fontFamily`](#fontfamily)
* [`fontWeight`](#fontweight)
* [`iconComponent`](#iconcomponent)
* [`large`](#large)
* [`leftIcon` or `icon`](#lefticon-or-icon)
* [`loading`](#loading)
* [`loadingRight`](#loadingright)
* [`onLongPress`](#onlongpress)
* [`onPress`](#onpress)
* [`outline`](#outline)
* [`raised`](#raised)
* [`rightIcon`](#righticon)
* [`rounded`](#rounded)
* [`title`](#title)
* [`textStyle`](#textstyle)
* [`underlayColor`](#underlaycolor)

---

# Reference

### `activityIndicatorStyle`

Loading spinner styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `backgroundColor`

Background color of button (optional)

|      Type      | Default |
| :------------: | :-----: |
| string (color) | #9E9E9E |

---

### `borderRadius`

Adds border radius to button (optional) (Note: if you set this, don't forget to
also set borderRadius to containerViewStyle prop, otherwise unexpected behaviour
might occur)

|  Type  | Default |
| :----: | :-----: |
| number |  none   |

---

### `buttonStyle`

Additional styling for button component (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `color`

Font color (optional)

|      Type      | Default |
| :------------: | :-----: |
| string (color) |  white  |

---

### `Component`

Specify other touchable such as TouchableOpacity/TouchableNativeFeedback

|          Type          |                           Default                           |
| :--------------------: | :---------------------------------------------------------: |
| React Native Component | TouchableHighlight (iOS), TouchableNativeFeedback (android) |

---

### `containerViewStyle`

Styling for Component container

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

### `disabled`

Prop to indicate button is disabled (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

### `disabledStyle`

Disabled button styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

### `disabledTextStyle`

Styles for the text when disabled (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

### `fontFamily`

Specify different font family (optional)

|  Type  |                 Default                 |
| :----: | :-------------------------------------: |
| string | System font (iOS), Sans Serif (android) |

### `fontSize`

Font size (optional)

|  Type  | Default |
| :----: | :-----: |
| number |   18    |

### `fontWeight`

Font weight for title (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

### `iconComponent`

Specify other icon component instead of default. The component will have all
values from the icon prop

|     Type     |        Default         |
| :----------: | :--------------------: |
| MaterialIcon | React Native Component |

### `large`

Text styling (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

### `leftIcon` or `icon`

Displays a centered icon (when no text) or to the left (with text). (can be used
along with rightIcon as well)

|                                                                                                                     Type                                                                                                                     |     Default      |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :--------------: |
| object {name: string, color: string, size: number, type: string (default is material, or choose one of material-community, simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo), style: object(style)} | {color: 'white'} |

### `onLongPress`

Callback fired when the user long presses (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

### `onPress`

Callback fired when the user presses (required)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

### `outline`

Outlines the button (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

### `raised`

Add raised button styling (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

### `rightIcon`

Displays a rightIcon (can be used along with leftIcon as well)

|                                                                                                                     Type                                                                                                                     | Default |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| object {name: string, color: string, size: number, type: string (default is material, or choose one of material-community, simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo), style: object(style)} |  none   |

### `loading`

Display a loading spinner (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

### `loadingRight`

Display the spinner to the right (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

### `rounded`

Rounds the button (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

### `title`

Button title (required)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

### `textStyle`

Text styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

### `transparent`

Makes the button transparent (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

### `underlayColor`

Underlay color for button press (optional)

|     Type      |   Default   |
| :-----------: | :---------: |
| string(color) | transparent |
