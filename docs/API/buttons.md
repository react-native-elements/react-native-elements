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
| containerViewStyle | none | View style (object) | styling for Component container |
| Component | TouchableHighlight (iOS), TouchableNativeFeedback (android) | React Native Component | Specify other component such as TouchableOpacity or other (optional) |
| buttonStyle | none | object (style) | add additional styling for button component (optional) |
| title | none | string | button title (required) |
| large | false | boolean | makes button large |
| fontFamily | System font (iOS), Sans Serif (android) | string | specify different font family |
| fontWeight | none | string | specify font weight for title (optional) |
| leftIcon or icon | {color: 'white'} | object {name: string, color: string, size: number, type: string (default is material, or choose one of material-community, simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo), style: object(style)} | displays a centered icon (when no text) or to the left (with text). (can be used along with rightIcon as well) |
| iconRight or rightIcon | none | object {name: string, color: string, size: number, type: string (default is material, or choose one of material-community, simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo), style: object(style)} | displays a rightIcon (can be used along with leftIcon as well) |
| iconComponent | MaterialIcon | React Native Component | Specify other icon component instead of default. The component will have all values from the icon prop |
| onPress | none | function | onPress method (required) |
| onLongPress | none | function | onLongPress method (optional) |
| backgroundColor | #397af8 | string (color) | background color of button (optional) |
| borderRadius | none | number | adds border radius to button (optional) (Note: if you set this, don't forget to also set borderRadius to containerViewStyle prop, otherwise unexpected behaviour might occur) |
| color | white | string(color) | font color (optional) |
| textStyle | none | object (style) | text styling (optional)  |
| fontSize | 18 | number | font size (optional)  |
| underlayColor | transparent | string(color) | underlay color for button press (optional)  |
| raised | false | boolean | flag to add raised button styling (optional)  |
| disabled | false | boolean | prop to indicate button is disabled (optional) |
| disabledStyle | none | object (style) | disabled button styling (optional) |
| loading | false | boolean | prop to display a loading spinner (optional) |
| activityIndicatorStyle | none | object (style) | loading spinner styling (optional) |
| loadingRight | false | boolean | display the spinner to the right (optional) |
