---
id: icon
title: Icon
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Props from './props/icon.md'

Icons are visual indicators usually used to describe action or intent.

<img alt="Icon" src={useBaseUrl('img/icons.png')} />

> Hint: use **reverse** to make your icon look like a button

## Available Icon Sets

The icon sets in React Native Elements are made possible through
[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons).

The current list of available icons sets are:

- [antdesign](http://ant.design/components/icon/)
- [entypo](http://www.entypo.com/)
- [evilicon](http://evil-icons.io/)
- [feather](https://feathericons.com/)
- [font-awesome](https://fontawesome.com/v4.7.0/)
- [font-awesome-5](https://fontawesome.com/)
- [fontisto](https://www.fontisto.com/icons)
- [foundation](http://zurb.com/playground/foundation-icon-fonts-3)
- [ionicon](http://ionicons.com/)
- [material](https://material.io/tools/icons)
- [material-community](https://materialdesignicons.com/)
- [octicon](https://octicons.github.com/)
- [simple-line-icon](https://simplelineicons.github.io/)
- [zocial](http://weloveiconfonts.com/)

## Custom Icon Fonts

Register your own custom icons by calling
`registerCustomIconType('customid', customFont)`. Create a custom font by
following the
[ instructions for creating a custom font here](https://github.com/oblador/react-native-vector-icons#custom-fonts).
Also, you can use [Fontello](http://fontello.com/) to generate custom icon
fonts.

## Usage

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

<Props />

---
