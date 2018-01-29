![Checkboxes](http://i.imgur.com/8BKC77S.png)

```js

import { CheckBox } from 'react-native-elements'

<CheckBox
  title='Click Here'
  checked={this.state.checked}
/>

<CheckBox
  center
  title='Click Here'
  checked={this.state.checked}
/>

<CheckBox
  center
  title='Click Here'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={this.state.checked}
/>

<CheckBox
  center
  title='Click Here to Remove This Item'
  iconRight
  iconType='material'
  checkedIcon='clear'
  uncheckedIcon='add'
  checkedColor='red'
  checked={this.state.checked}
/>

```

#### Checkbox props

> This component uses FontAwesome icons out of the box. You can also specify one of the following types of icons by specifying an iconType prop: Simple Line Icon, Zocial, Octicons, MaterialIcons, MaterialCommunityIcons, Ionicons, Foundation, EvilIcons, or Entypo

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| iconType | fontawesome | string | icon family, can be one of the following: simple-line-icon, zocial, octicon, material, material-community, ionicon, foundation, evilicon, entypo (required only if specifying an icon that is not from font-awesome) |
| component | TouchableOpacity | React Native Component | specify React Native component for main button (optional) |
| checked | false | boolean | flag for checking the icon (required) |
| iconRight | false | boolean | moves icon to right of text (optional) |
| right | false | boolean | aligns checkbox to right (optional) |
| center | false | boolean | aligns checkbox to center (optional) |
| title | none | string | title of checkbox (required) |
| containerStyle | none | object (style) | style of main container (optional) |
| textStyle | none | object (style) | style of text (optional) |
| onLongPress | none | function | onLongPress function for  checkbox (optional) |
| onLongIconPress | none | function | onLongPress function for  checkbox (optional) |
| onPress | none | function | onPress function for container (optional) |
| onIconPress | none | function | onPress function for checkbox (required) |
| checkedIcon | check-square-o | string | default checked icon ([Font Awesome Icon](http://fontawesome.io/icons/)) (optional) |
| uncheckedIcon | square-o | string | default checked icon ([Font Awesome Icon](http://fontawesome.io/icons/)) (optional) |
| checkedColor | green | string | default checked color (optional) |
| uncheckedColor | #bfbfbf | string | default unchecked color (optional) |
| checkedTitle | none | string | specify a custom checked message (optional) |
| fontFamily | System font bold (iOS), Sans Serif Bold (android) | string | specify different font family |
