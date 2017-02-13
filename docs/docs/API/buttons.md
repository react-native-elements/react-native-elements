# Buttons
Buttons take a title and an optional [material icon name](https://design.google.com/icons/), as well as the props below.

> You can override Material icons with one of the following: material-community, simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo by providing an icon.type as a prop.

![Buttons](http://i.imgur.com/CVf1xbr.png)

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
  iconRight
  icon={{name: 'code'}}
  title='LARGE WITH RIGHT ICON' />

<Button
  large
  icon={{name: 'envira', type: 'font-awesome'}}
  title='LARGE WITH RIGHT ICON' />

<Button
  large
  icon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
  title='OCTICON' />

```

#### Button props

> Also recevies all TouchableWithoutFeedback props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| Component | TouchableHighlight (iOS), TouchableNativeFeedback (android) | React Native Component | Specify other component such as TouchableOpacity or other (optional) |
| buttonStyle | none | object (style) | add additional styling for button component (optional) |
| title | none | string | button title (required) |
| large | false | boolean | makes button large |
| fontFamily | System font (iOS), Roboto (android) | string | specify different font family |
| fontWeight | none | string | specify font weight for title (optional) |
| iconRight | false | boolean | moves icon to right of title |
| onPress | none | function | onPress method (required) |
| onLongPress | none | function | onLongPress method (optional) |
| icon | {color: 'white'} | object {name: string, color: string, size: number, type: string (default is material, or choose one of material-community, simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo), style: object(style)} | icon configuration (optional) |
| backgroundColor | #397af8 | string (color) | background color of button (optional) |
| borderRadius | none | number | adds border radius to card (optional) |
| color | white | string(color) | font color (optional) |
| textStyle | none | object (style) | text styling (optional)  |
| fontSize | 18 | number | font size (optional)  |
| underlayColor | transparent | string(color) | underlay color for button press (optional)  |
| raised | false | boolean | flag to add raised button styling (optional)  |
| disabled | false | boolean | prop to indicate button is disabled (optional) |
| disabledStyle | none | object (style) | disabled button styling (optional) |

## Social Icons & Buttons

![Social Icons](http://i.imgur.com/HYZ5sbP.png)

```js
import { SocialIcon } from 'react-native-elements'

// Icon
<SocialIcon
  type='twitter'
/>

<SocialIcon
  raised={false}
  type='gitlab'
/>

<SocialIcon
  light
  type='medium'
/>

<SocialIcon
  light
  raised={false}
  type='medium'
/>


// Button
<SocialIcon
  title='Sign In With Facebook'
  button
  type='facebook'
/>

<SocialIcon
  title='Some Twitter Message'
  button
  type='twitter'
/>

<SocialIcon
  button
  type='medium'
/>


<SocialIcon
  button
  light
  type='instagram'
/>

```

#### SocialIcon props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| title | none | string | title if made into a button (optional) |
| type | none | social media type (facebook, twitter, google-plus-official, pinterest, linkedin, youtube, vimeo, tumblr, instagram, quora, foursquare, wordpress, stumbleupon, github, github-alt, twitch, medium, soundcloud, gitlab, angellist, codepen) | social media type (required) |
| raised | true | boolean | raised adds a drop shadow, set to false to remove |
| button | false | boolean | creates button (optional) |
| onPress | none | function | onPress method (optional) |
| onLongPress | none | function | onLongPress method (optional) |
| light | false | boolean | reverses icon color scheme, setting background to white and icon to primary color |
| iconStyle | none | object (style) | extra styling for icon component (optional) |
| style | none | object (style) | button styling (optional) |
| iconColor | white | string | icon color (optional) |
| iconSize | 24 | number | icon size (optional) |
| component | TouchableHighlight | React Native Component | type of button (optional)  |
| fontFamily | System font bold (iOS), Roboto-Black (android) | string | specify different font family (optional) |
| fontWeight | bold (ios), black(android) | string | specify font weight of title if set as a button with a title |
| fontStyle | none | object (style) | specify text styling (optional) |
| disabled | false | boolean | disable button (optional) |
| loading | false | boolean | shows loading indicator (optional) |


## Icons & Icon Buttons

![Icons](http://i.imgur.com/2A28abz.png)

Icons take the name of a [material icon](https://design.google.com/icons/) as a prop.

> You can override Material icons with one of the following: [material-community](https://materialdesignicons.com/), [font-awesome](http://fontawesome.io/icons/), [octicon](https://octicons.github.com/), [ionicon](http://ionicons.com/), [foundation](http://zurb.com/playground/foundation-icon-fonts-3), [evilicon](http://evil-icons.io/), [simple-line-icon](http://simplelineicons.com/), [zocial](http://weloveiconfonts.com/), or [entypo](http://www.entypo.com/) by providing a type prop.

> Hint: use **reverse** to make your icon look like a button

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

