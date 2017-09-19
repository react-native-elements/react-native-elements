![Icons](http://i.imgur.com/2A28abz.png)

Icons take the name of a [material icon](https://design.google.com/icons/) as a prop. Use the [icon directory](https://oblador.github.io/react-native-vector-icons/) to search for icons

> You can override Material icons with one of the following: [material-community](https://materialdesignicons.com/), [font-awesome](http://fontawesome.io/icons/), [octicon](https://octicons.github.com/), [ionicon](http://ionicons.com/), [foundation](http://zurb.com/playground/foundation-icon-fonts-3), [evilicon](http://evil-icons.io/), [simple-line-icon](http://simplelineicons.com/), [zocial](http://weloveiconfonts.com/), or [entypo](http://www.entypo.com/) by providing a type prop.

> Hint: use **reverse** to make your icon look like a button

### Custom Icon Fonts

Register your own custom icons by calling `registerCustomIconType('customid', customFont)`. Create a custom font by following the [ instructions for creating a custom font here](https://github.com/oblador/react-native-vector-icons#custom-fonts). Also you can use [Fontello](http://fontello.com/) to generate custom icon fonts.

If you are looking to implement custom icon fonts, please look at our example app [here](https://github.com/react-native-training/react-native-elements/blob/next/example/src/views/buttons_home.js#L37) to see how to use them with React Native Elements.

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

#### Icon props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| name | none | string | name of icon (required) |
| type | material | string | type (defaults to material, options are `material-community, zocial, font-awesome, octicon, ionicon, foundation, evilicon, simple-line-icon, or entypo`) |
| size | 26 | number | size of icon (optional) |
| color | black | string | color of icon (optional) |
| iconStyle | inherited style | object (style) | additional styling to icon (optional) |
| component | View if no onPress method is defined, TouchableHighlight if onPress method is defined | React Native component | update React Native Component (optional) |
| onPress | none | function | onPress method for button (optional) |
| onLongPress | none | function | onLongPress method for button (optional) |
| underlayColor | icon color | string | underlayColor for press event |
| reverse | false | boolean | reverses color scheme (optional) |
| raised | false | boolean | adds box shadow to button (optional) |
| containerStyle | inherited styling | object (style) | add styling to container holding icon (optional) |
| reverseColor | white | string | specify reverse icon color (optional) |
