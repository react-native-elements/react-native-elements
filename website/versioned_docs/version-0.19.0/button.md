---
id: version-0.19.0-button
title: Button
original_id: button
---

Buttons take a title and an optional [material icon name](https://design.google.com/icons/), as well as the props below.

> You can override Material icons with one of the following: material-community, simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo by providing an icon.type as a prop.

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
  iconRight={{name: 'code'}}
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

#### Button props

> Also receives all [TouchableNativeFeedback](http://facebook.github.io/react-native/docs/touchablenativefeedback.html#props) (Android) or [TouchableOpacity](http://facebook.github.io/react-native/docs/touchableopacity.html#props) (iOS) props

### Button Props
  
   * [activityIndicatorStyle](#activityindicatorstyle)
   * [backgroundColor](#backgroundcolor)
   * [borderRadius](#borderradius)
   * [buttonStyle](#buttonstyle)
   * [component](#component) 
   * [color](#color) 
   * [containerViewStyle](#containerviewstyle) 
   * [disabled](#disabled) 
   * [disabledStyle](#disabledstyle) 
   * [disabledTextStyle](#disabledtextstyle) 
   * [fontSize](#fontsize) 
   * [fontFamily](#fontfamily) 
   * [fontWeight](#fontweight) 
   * [iconComponent](#iconcomponent) 
   * [large](#large) 
   * [leftIcon or icon](#lefticon-or-icon) 
   * [loading](#loading) 
   * [loading](#loading) 
   * [loadingRight](#loadingright)
   * [onLongPress](#onlongpress)
   * [onPress](#onpress) 
   * [outline](#outline) 
   * [raised](#raised) 
   * [rightIcon](#righticon) 
   * [rounded](#rounded) 
   * [title](#title) 
   * [textStyle](#textstyle)
   * [underlayColor](#underlaycolor)

# Reference 

### activityIndicatorStyle
  loading spinner styling (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | Object (style)  | none |
  
### backgroundColor
  background color of button (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | string (color) | #9E9E9E |
  
### borderRadius
  adds border radius to button (optional) (Note: if you set this, don't forget to also set borderRadius to containerViewStyle prop, 
  otherwise unexpected behaviour might occur)
  
  | Type    | Default |
  |:-------:|:-------:|
  | number  |   none  |
  
### buttonStyle
  add additional styling for button component (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | Object (style)  |   none    |    
  
### color
  font color (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | string (color)  | white |
  
### component
  styling for Component container
  
  | Type    | Default |
  |:-------:|:-------:|
  | React Native Component  | TouchableHighlight (iOS), TouchableNativeFeedback (android) |
    
### containerViewStyle
  styling for Component container
  
  | Type    | Default |
  |:-------:|:-------:|
  | View style (object)  |   none |

### disabled
  prop to indicate button is disabled (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | boolean | false |
  
### disabledStyle
  disabled button styling (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | object (style) | none |  
  
### disabledTextStyle
  disabled text style (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | object (style) | none |    

### fontFamily
  specify different font family
  
  | Type    | Default |
  |:-------:|:-------:|
  | string | System font (iOS), Sans Serif (android) |    
  
### fontSize
  font size (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | string |  18 |    
 
### fontWeight
  specify font weight for title (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | string | none |    
  
### iconComponent
  Specify other icon component instead of default. The component will have all values from the icon prop
  
  | Type    | Default |
  |:-------:|:-------:|
  | MaterialIcon | React Native Component |   
    
### large
  text styling (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | boolean | false  |
      
### lefticon or icon
  displays a centered icon (when no text) or to the left (with text). (can be used along with rightIcon as well)
  
  | Type    | Default |
  |:-------:|:-------:|
  | object {name: string, color: string, size: number, type: string (default is material, or choose one of material-community, simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo), style: object(style)} | {color: 'white'} |
  
### onLongPress
  onLongPress method (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | function | none |

### onPress
  onPress method (required)
  
  | Type    | Default |
  |:-------:|:-------:|
  | function | none |  

### outline
  outlines the button (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | boolean | false |  
  
### raised
  flag to add raised button styling (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | boolean | false |  
  
    
### rightIcon
  displays a rightIcon (can be used along with leftIcon as well)
  
  | Type    | Default |
  |:-------:|:-------:|
  | object {name: string, color: string, size: number, type: string (default is material, or choose one of material-community, simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo), style: object(style)} | none |
  
### loading
  prop to display a loading spinner (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | boolean | false |
    
### loadingRight
  display the spinner to the right (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | boolean | false |
  
### rounded
  rounds the button (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | boolean | false |
    
### title
  button title (required)
  
  | Type    | Default |
  |:-------:|:-------:|
  | string  | none |
        
### textStyle
  text styling (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | object (style)  | none |

### transparent
  makes the button transparent (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | boolean  | false |

### underlayColor
  underlay color for button press (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | string(color)  | transparent |
