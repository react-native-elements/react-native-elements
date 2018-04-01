---
id: version-0.19.0-checkbox
title: CheckBox
original_id: checkbox
---

![Checkboxes](/react-native-elements/img/checkbox.png)

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

  * [iconType](#icontype)
  * [component](#component)
  * [checked](#checked)
  * [size](#size)
  * [iconRight](#iconright)
  * [right](#right)
  * [center](#center)
  * [title](#title)
  * [containerStyle](#containerstyle)
  * [textStyle](#textstyle)
  * [onLongPress](#onlongpress)
  * [onLongIconPress](#onlongiconpress)
  * [onPress](#onpress)
  * [onIconPress](#oniconpress)
  * [checkedIcon](#checkedicon)
  * [uncheckedIcon](#uncheckedicon)
  * [checkedColor](#checkedcolor)
  * [uncheckedColor](#uncheckedcolor)
  * [checkedTitle](#checkedtitle)
  * [fontFamily](#fontfamily)


# Reference

### iconType
  icon family, can be one of the following: simple-line-icon, zocial, octicon, material, material-community, ionicon, foundation, evilicon, entypo (required only if specifying an icon that is not from font-awesome) 

 | Type    | Default |
 |:-------:|:-------:|
 |  string   |  fontawesome |


### component
  specify React Native component for main button (optional)                                                                                                                                                            
  
 | Type    | Default |
 |:-------:|:-------:|
 |  React Native Component   |  TouchableOpacity |


### checked
  flag for checking the icon (required)                                                                                                                                                                                

 | Type    | Default |
 |:-------:|:-------:|
 |  boolean  |  false|


### size
  size of the checkbox                                                                                                                                                                                                 

 | Type    | Default |
 |:-------:|:-------:|
 |  number |  24  |


### iconRight
  moves icon to right of text (optional)                                                                                                                                                                               

 | Type    | Default |
 |:-------:|:-------:|
 |  boolean |  false   |


### right
  aligns checkbox to right (optional)                                                                                                                                                                                  

 | Type    | Default |
 |:-------:|:-------:|
 |  boolean |  false|


### center
  aligns checkbox to center (optional)                                                                                                                                                                                 

 | Type    | Default |
 |:-------:|:-------:|
 |  boolean|  false  |


### title
  title of checkbox (required)                                                                                                                                                                                         

 | Type    | Default |
 |:-------:|:-------:|
 |  string  |  none |


### containerStyle
  style of main container (optional)                                                                                                                                                                                   

 | Type    | Default |
 |:-------:|:-------:|
 |  object (style)  |  none |


### textStyle
  style of text (optional)                                                                                                                                                                                             

 | Type    | Default |
 |:-------:|:-------:|
 |  object (style)           |  none   |


### onLongPress
  onLongPress function for checkbox (optional)                                                                                                                                                                         

 | Type    | Default |
 |:-------:|:-------:|
 |  function  |  none |


### onLongIconPress
  onLongPress function for checkbox (optional)                                                                                                                                                                         

 | Type    | Default |
 |:-------:|:-------:|
 |  function |  none |


### onPress
  onPress function for container (optional)                                                                                                                                                                            

 | Type    | Default |
 |:-------:|:-------:|
 |  function                 |  none  |


### onIconPress
  onPress function for checkbox (required)                                                                                                                                                                             

 | Type    | Default |
 |:-------:|:-------:|
 |  function                 |  none  |


### checkedIcon
  default checked icon ([Font Awesome Icon](http://fontawesome.io/icons/)) (optional)                                                                                                                                  

 | Type    | Default |
 |:-------:|:-------:|
 |  string                   |  check-square-o |


### uncheckedIcon
  default checked icon ([Font Awesome Icon](http://fontawesome.io/icons/)) (optional)                                                                                                                                  

 | Type    | Default |
 |:-------:|:-------:|
 |  string                   |  square-o |


### checkedColor
  default checked color (optional)                                                                                                                                                                                     

 | Type    | Default |
 |:-------:|:-------:|
 |  string   |  green |


### uncheckedColor
  default unchecked color (optional)                                                                                                                                                                                   

 | Type    | Default |
 |:-------:|:-------:|
 |  string                   |  #bfbfbf  |


### checkedTitle
  specify a custom checked message (optional)                                                                                                                                                                          

 | Type    | Default |
 |:-------:|:-------:|
 |  string                   |  none |


### fontFamily
  specify different font family                                                                                                                                                                                        

 | Type    | Default |
 |:-------:|:-------:|
 |  string  |  System font bold (iOS), Sans Serif Bold (android) |

