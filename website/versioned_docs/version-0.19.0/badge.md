---
id: version-0.19.0-badge
title: Badge
original_id: badge
---

![Badges](/react-native-elements/img/badges.png)

Example badge usage
```js
<Badge
  value={3}
  textStyle={{ color: 'orange' }}
/>

<Badge containerStyle={{ backgroundColor: 'violet'}}>
  <Text>User 1</Text>
</Badge>

<Badge onPress={() => {console.log('pressed')}} value="5" />

<Badge component={TouchableNative} value={10} />
```

#### Badge props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| value | none | string or number | text value to be displayed by badge, defaults to empty| 
| containerStyle | inherited styling | object (style) | style for the outer badge component |
| wrapperStyle | inherited styling | object (style) | style for the outer most badge component |
| textStyle | inherited styling | object (style) | style for the text in the badge's value property |
| children | none | React Native Component | override the default badge contents, mutually exclusive with 'value' property |
| onPress | none | function | function called when pressed on the badge |
| component | View, if onPress then TouchableOpacity | React Element | custom component to replace the badge outer component |


### Badge Props
  
   * [children](#children) 
   * [component](#component)
   * [containerStyle](#containerstyle)
   * [onPress](#onpress) 
   * [textStyle](#textstyle) 
   * [value](#value) 
   * [wrapperStyle](#wrapperstyle) 


# Reference 

### children
  override the default badge contents, mutually exclusive with 'value' property
  
  | Type    | Default |
  |:-------:|:-------:|
  | React Native Component  |   none    |

### component
  custom component to replace the badge outer component
  
  | Type  | Default |
  |:-----:|:-------:|
  | React Native Component | View, if onPress then TouchableOpacity |

### containerStyle
  style for the outer badge component
  
  | Type    | Default |
  |:-------:|:-------:|
  | inherited styling  |   inherited styling |

### onPress
  function called when pressed on the badge
  
  | Type    | Default |
  |:-------:|:-------:|
  | function | none |
  
### textStyle
  extra styling for icon component (optional)
  
  | Type    | Default |
  |:-------:|:-------:|
  | inherited styling  | none |

### value
  text value to be displayed by badge, defaults to empty
  
  | Type    | Default |
  |:-------:|:-------:|
  | string or number | none |
  
  
### wrapperStyle
  style for the outer most badge component
  
  | Type    | Default |
  |:-------:|:-------:|
  | inherited styling | none |
  



