---
id: version-1.0.0-beta4-listitem
title: ListItem
original_id: listitem
---

![Lists](/react-native-elements/img/lists.png)

#### Using Map Function. Implemented with avatar.

```js
import { ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  ... // more items
]

<View>
  {
    list.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.subtitle}
      />
    ))
  }
</View>
```

#### Using Map Function. Implemented with link and icon.

```js
import { ListItem } from 'react-native-elements'

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  ... // more items
]

<View>
  {
    list.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        leftIcon={{ name: item.icon }}
      />
    ))
  }
</View>
```

#### Using RN FlatList. Implemented with link and avatar.

```js
import { ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  ... // more items
]

keyExtractor = (item, index) => index

renderItem = ({ item }) => (
  <ListItem
    title={item.name}
    subtitle={item.subtitle}
    leftAvatar={{ source: { uri: item.avatar_url } }}
  />
)


render () {
  return (
    <FlatList
      keyExtractor={this.keyExtractor}
      data={this.state.dataSource}
      renderItem={this.renderItem}
    />
  )
}
```

#### Using RN FlatList. Implemented with custom avatar component.

```js
import { ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  ... // more items
]

keyExtractor = (item, index) => index

renderItem = ({ item }) => (
  <ListItem
    title={item.name}
    subtitle={item.subtitle}
    leftAvatar={{
      source: item.avatar_url && { uri: item.avatar_url },
      title: item.name[0]
    }}
  />
)

render () {
  return (
    <FlatList
      keyExtractor={this.keyExtractor}
      data={this.state.dataSource}
      renderItem={this.renderItem}
    />
  )
}
```

#### ListItem implemented with custom View for Subtitle

```js
import { ListItem } from 'react-native-elements'

render () {
  return (
    <ListItem
      title='Limited supply! Its like digital gold!'
      subtitle={
        <View style={styles.subtitleView}>
          <Image source={require('../images/rating.png')} style={styles.ratingImage}/>
          <Text style={styles.ratingText}>5 months ago</Text>
        </View>
      }
      leftAvatar={{ source: require('../images/avatar1.jpg') }}
    />
  )
}

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})
```

#### Badges

![Badges](/react-native-elements/img/list-badges.jpeg)

Example badge usage

```js
<ListItem
  ...
  badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
/>
```

#### Linear gradient + Scale feedback

<img src="/react-native-elements/img/listitem_with_gradient_scale.gif" width="500" >

```js
import LinearGradient from 'react-native-linear-gradient' // Only if no expo

  <ListItem
    scaleProps={{
      friction: 90,
      tension: 100,
      activeScale: 0.95,
    }}
    linearGradientProps={{
      colors: ['#FF9800', '#F44336'],
      start: [1, 0],
      end: [0.2, 0],
    }}
    ViewComponent={LinearGradient} // Only if no expo
    leftAvatar={{ rounded: true, source: { uri: avatar_url } }}
    title="Chris Jackson"
    titleStyle={{ color: 'white', fontWeight: 'bold' }}
    subtitleStyle={{ color: 'white' }}
    subtitle="Vice Chairman"
    chevronColor="white"
    chevron
  />
```

---

### Props

* [`component`](#component)
* [`containerStyle`](#containerstyle)
* [`contentContainerStyle`](#contentcontainerstyle)
* [`rightContentContainerStyle`](#rightcontentcontainerstyle)
* [`chevron`](#chevron)
* [`chevronColor`](#chevroncolor)
* [`checkmark`](#checkmark)
* [`checkmarkColor`](#checkmarkcolor)
* [`onPress`](#onpress)
* [`onLongPress`](#onlongpress)
* [`title`](#title)
* [`titleStyle`](#titlestyle)
* [`titleProps`](#titleprops)
* [`subtitle`](#subtitle)
* [`subtitleStyle`](#subtitlestyle)
* [`subtitleProps`](#subtitleprops)
* [`rightTitle`](#righttitle)
* [`rightTitleStyle`](#righttitlestyle)
* [`rightTitleProps`](#righttitleprops)
* [`rightSubtitle`](#rightsubtitle)
* [`rightSubtitleStyle`](#rightsubtitlestyle)
* [`rightSubtitleProps`](#rightsubtitleprops)
* [`leftIcon`](#lefticon)
* [`rightIcon`](#righticon)
* [`leftAvatar`](#leftavatar)
* [`rightAvatar`](#rightavatar)
* [`leftElement`](#leftelement)
* [`rightElement`](#rightelement)
* [`switch`](#switch)
* [`input`](#input)
* [`buttonGroup`](#buttongroup)
* [`checkBox`](#checkbox)
* [`badge`](#badge)
* [`disabled`](#disabled)
* [`disabledStyle`](#disabledstyle)
* [`topDivider`](#topdivider)
* [`bottomDivider`](#bottomdivider)
* [`scaleProps`](#scaleprops)
* [`ViewComponent`](#viewcomponent)

---

# Reference

### `component`

replace element with custom element (optional)

|                             Type                              |  Default  |
| :-----------------------------------------------------------: | :-------: |
| View or TouchableOpacity if onPress method is added as prop | component |

---

### `containerStyle`

additional main container styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `contentContainerStyle`

additional wrapper styling (title and subtitle container)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `rightContentContainerStyle`

additional wrapper styling (right title and subtitle container)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `chevron`

set it to true if you want a chevron (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `chevronColor`

set chevron color

|  Type  | Default |
| :----: | :-----: |
| string | #d1d1d6 |

---

### `checkmark`

set it to true if you want a checkmark (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `checkmarkColor`

set checkmark color

|  Type  | Default |
| :----: | :-----: |
| string | #2089dc |

---

### `onPress`

onPress method for link (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onLongPress`

onLongPress method for link (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `title`

Main title of list item

|            Type             | Default |
| :-------------------------: | :-----: |
| string **OR** React element |  none   |

---

### `titleStyle`

Add additional styling

|    Type    | Default |
| :--------: | :-----: |
| Text style |  none   |

---

### `titleProps`

provide all props from react-native Text component

|                                      Type                                       | Default |
| :-----------------------------------------------------------------------------: | :-----: |
| {[...Text props](https://facebook.github.io/react-native/docs/text.html#props)} |  none   |

---

### `subtitle`

subtitle text or custom view (optional)

|            Type             | Default |
| :-------------------------: | :-----: |
| string **OR** React element |  none   |

---

### `subtitleStyle`

Add additional styling

|    Type    | Default |
| :--------: | :-----: |
| Text style |  none   |

---

### `subtitleProps`

provide all props from react-native Text component

|                                      Type                                       | Default |
| :-----------------------------------------------------------------------------: | :-----: |
| {[...Text props](https://facebook.github.io/react-native/docs/text.html#props)} |  none   |

---

### `rightTitle`

Show up a title on the right side of the list item

|            Type             | Default |
| :-------------------------: | :-----: |
| string **OR** React element |  none   |

---

### `rightTitleStyle`

add additional styling

|    Type    | Default |
| :--------: | :-----: |
| Text style |  none   |

---

### `rightTitleProps`

provide all props from react-native Text component

|                                      Type                                       | Default |
| :-----------------------------------------------------------------------------: | :-----: |
| {[...Text props](https://facebook.github.io/react-native/docs/text.html#props)} |  none   |

---

### `rightSubtitle`

Show up a subtitle on the right side of the list item

|            Type             | Default |
| :-------------------------: | :-----: |
| string **OR** React element |  none   |

---

### `rightSubtitleStyle`

Add additional styling

|    Type    | Default |
| :--------: | :-----: |
| Text style |  none   |

---

### `rightSubtitleProps`

provide all props from react-native Text component

|                                      Type                                       | Default |
| :-----------------------------------------------------------------------------: | :-----: |
| {[...Text props](https://facebook.github.io/react-native/docs/text.html#props)} |  none   |

---

### `leftIcon`

displays an icon on the left (optional)

|                                             Type                                              | Default |
| :-------------------------------------------------------------------------------------------: | :-----: |
| {[...Icon props](/react-native-elements/docs/icon.html#icon-props)}<br/>**OR**<br/> component |  none   |

---

### `rightIcon`

displays an icon on the right (optional)

|                                             Type                                              | Default |
| :-------------------------------------------------------------------------------------------: | :-----: |
| {[...Icon props](/react-native-elements/docs/icon.html#icon-props)}<br/>**OR**<br/> component |  none   |

---

### `leftAvatar`

displays an Avatar on the left (optional)

|                                                Type                                                 | Default |
| :-------------------------------------------------------------------------------------------------: | :-----: |
| {[...Avatar props](/react-native-elements/docs/avatar.html#avatar-props)}<br/>**OR**<br/> component |  none   |

---

### `rightAvatar`

displays an Avatar on the right (optional)

|                                                          Type                                                          | Default |
| :--------------------------------------------------------------------------------------------------------------------: | :-----: |
| View style (object){[...Avatar props](/react-native-elements/docs/avatar.html#avatar-props)}<br/>**OR**<br/> component |  none   |

---

### `leftElement`

Add any element on the left side of the list item

|     Type      | Default |
| :-----------: | :-----: |
| React element |  none   |

---

### `rightElement`

Add any element on the right side of the list item

|     Type      | Default |
| :-----------: | :-----: |
| React element |  none   |

---

### `switch`

add a switch to the right side. (object with the props of the react-native `Switch` component)

|                                        Type                                         | Default |
| :---------------------------------------------------------------------------------: | :-----: |
| {[...Switch props](https://facebook.github.io/react-native/docs/switch.html#props)} |  none   |

---

### `input`

add an Input on the right side (object with the props of the React Native Elements `Input` component)

|                                  Type                                  | Default |
| :--------------------------------------------------------------------: | :-----: |
| {[...Input props](/react-native-elements/docs/input.html#input-props)} |  none   |

---

### `buttonGroup`

add a button group on the right side (object with the props of the React Native Elements `ButtonGroup` component)

|                                           Type                                            | Default |
| :---------------------------------------------------------------------------------------: | :-----: |
| {[...ButtonGroup props](/react-native-elements/docs/button_group.html#buttongroup-props)} |  none   |

---

### `checkBox`

add a checkbox on the right side (object with the props of the React Native Elements `CheckBox` component)

|                                      Type                                       | Default |
| :-----------------------------------------------------------------------------: | :-----: |
| {[...CheckBox props](/react-native-elements/docs/checkbox.html#checkbox-props)} |  none   |

---

### `badge`

add a badge on the right side (object with the props of the React Native Elements `Badge` component)

|                                  Type                                  | Default |
| :--------------------------------------------------------------------: | :-----: |
| {[...Badge props](/react-native-elements/docs/badge.html#badge-props)} |  none   |

---

### `disabled`

If true the user won't be able to perform any action on the list item.

|  Type   | Default |
| :-----: | :-----: |
| boolean |  none   |

---

### `disabledStyle`

Specific styling to be used when list item is disabled.

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `topDivider`

Add divider at the top of the list item

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `bottomDivider`

Add divider at the bottom of the list item

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `scaleProps`

Provide all props for scale feedback

|                                    Type                                    | Default |
| :------------------------------------------------------------------------: | :-----: |
| {[...Scale props](https://github.com/kohver/react-native-touchable-scale)} |  none   |

---

### `ViewComponent`

Container for linear gradient (for non-expo user)

|   Type    | Default |
| :-------: | :-----: |
| component |  View   |
