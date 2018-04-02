---
id: version-1.0.0-beta4-icon
title: Icon
original_id: icon
---

![Icon](/react-native-elements/img/icons.png)

Icons take the name of a [material icon](https://design.google.com/icons/) as a prop. Use the [icon directory](https://oblador.github.io/react-native-vector-icons/) to search for icons

> You can override Material icons with one of the following: [material-community](https://materialdesignicons.com/), [font-awesome](http://fontawesome.io/icons/), [octicon](https://octicons.github.com/), [ionicon](http://ionicons.com/), [foundation](http://zurb.com/playground/foundation-icon-fonts-3), [evilicon](http://evil-icons.io/), [simple-line-icon](http://simplelineicons.com/), [zocial](http://weloveiconfonts.com/), or [entypo](http://www.entypo.com/) by providing a type prop.

> Hint: use **reverse** to make your icon look like a button

### Custom Icon Fonts

Register your own custom icons by calling `registerCustomIconType('customid', customFont)`. Create a custom font by following the [ instructions for creating a custom font here](https://github.com/oblador/react-native-vector-icons#custom-fonts). Also, you can use [Fontello](http://fontello.com/) to generate custom icon fonts.

If you are looking to implement custom icon fonts, please look at our example app [here](https://github.com/react-native-training/react-native-elements-app/blob/master/src/views/buttons_home.js) to see how to use them with React Native Elements.

```js
import { Icon } from 'react-native-elements'

<Icon
  name='rowing' />

<Icon
  name='g-translate'
  color='#00aced' />

<Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>

<Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/>

<Icon
  raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
  onPress={() => console.log('hello')} />
```

---

### Props

* [`color`](#color)
* [`containerStyle`](#containerstyle)
* [`component`](#component)
* [`onPress`](#onpress)
* [`iconStyle`](#iconstyle)
* [`name`](#name)
* [`onLongPress`](#onlongpress)
* [`raised`](#raised)
* [`reverse`](#reverse)
* [`reverseColor`](#reversecolor)
* [`size`](#size)
* [`type`](#type)
* [`underlayColor`](#underlaycolor)

---

# Reference

### `name`

name of icon (required)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `type`

type (defaults to material, options are `material-community, zocial, font-awesome, octicon, ionicon, foundation, evilicon, simple-line-icon, feather or entypo`)

|  Type  | Default  |
| :----: | :------: |
| string | material |

---

### `size`

size of icon (optional)

|  Type  | Default |
| :----: | :-----: |
| number |   26    |

---

### `color`

color of icon (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  black  |

---

### `iconStyle`

additional styling to icon (optional)

|      Type      |     Default     |
| :------------: | :-------------: |
| object (style) | inherited style |

---

### `component`

update React Native Component (optional)

|          Type          |                                        Default                                        |
| :--------------------: | :-----------------------------------------------------------------------------------: |
| React Native component | View if no onPress method is defined, TouchableHighlight if onPress method is defined |

---

### `onPress`

onPress method for button (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onLongPress`

onLongPress method for button (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `underlayColor`

underlayColor for press event

|  Type  |  Default   |
| :----: | :--------: |
| string | icon color |

---

### `reverse`

reverses color scheme (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `raised`

adds box shadow to button (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `containerStyle`

add styling to container holding icon (optional)

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `reverseColor`

specify reverse icon color (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  white  |
