---

id: listitem
title: ListItem
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
        avatar={{ source: { uri: l.avatar_url } }}
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
    avatar={{ source: { uri: item.avatar_url } }}
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
    avatar={{
      source: item.avatar_url && { uri: item.avatar_url }
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
      avatar={{ source: require('../images/avatar1.jpg') }}
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
* [`checkbox`](#checkbox)
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

|                             Type                              |  Default  |
| :-----------------------------------------------------------: | :-------: |
| View or TouchableHighlight if onPress method is added as prop | component |

---

### `containerStyle`

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `contentContainerStyle`

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `rightContentContainerStyle`

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `chevron`

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `chevronColor`

|  Type  | Default |
| :----: | :-----: |
| string | #d1d1d6 |

---

### `checkmark`

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `checkmarkColor`

|  Type  | Default |
| :----: | :-----: |
| string | #2089dc |

---

### `onPress`

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onLongPress`

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `title`

|            Type             | Default |
| :-------------------------: | :-----: |
| string **OR** React element |  none   |

---

### `titleStyle`

|    Type    | Default |
| :--------: | :-----: |
| Text style |  none   |

---

### `titleProps`

|                                      Type                                       | Default |
| :-----------------------------------------------------------------------------: | :-----: |
| {[...Text props](https://facebook.github.io/react-native/docs/text.html#props)} |  none   |

---

### `subtitle`

|            Type             | Default |
| :-------------------------: | :-----: |
| string **OR** React element |  none   |

---

### `subtitleStyle`

|    Type    | Default |
| :--------: | :-----: |
| Text style |  none   |

---

### `subtitleProps`

|                                      Type                                       | Default |
| :-----------------------------------------------------------------------------: | :-----: |
| {[...Text props](https://facebook.github.io/react-native/docs/text.html#props)} |  none   |

---

### `rightTitle`

|            Type             | Default |
| :-------------------------: | :-----: |
| string **OR** React element |  none   |

---

### `rightTitleStyle`

|    Type    | Default |
| :--------: | :-----: |
| Text style |  none   |

---

### `rightTitleProps`

|                                      Type                                       | Default |
| :-----------------------------------------------------------------------------: | :-----: |
| {[...Text props](https://facebook.github.io/react-native/docs/text.html#props)} |  none   |

---

### `rightSubtitle`

|            Type             | Default |
| :-------------------------: | :-----: |
| string **OR** React element |  none   |

---

### `rightSubtitleStyle`

|    Type    | Default |
| :--------: | :-----: |
| Text style |  none   |

---

### `rightSubtitleProps`

|                                      Type                                       | Default |
| :-----------------------------------------------------------------------------: | :-----: |
| {[...Text props](https://facebook.github.io/react-native/docs/text.html#props)} |  none   |

---

### `leftIcon`

|                                             Type                                              | Default |
| :-------------------------------------------------------------------------------------------: | :-----: |
| {[...Icon props](/react-native-elements/docs/icon.html#icon-props)}<br/>**OR**<br/> component |  none   |

---

### `rightIcon`

|                                             Type                                              | Default |
| :-------------------------------------------------------------------------------------------: | :-----: |
| {[...Icon props](/react-native-elements/docs/icon.html#icon-props)}<br/>**OR**<br/> component |  none   |

---

### `leftAvatar`

|                                                Type                                                 | Default |
| :-------------------------------------------------------------------------------------------------: | :-----: |
| {[...Avatar props](/react-native-elements/docs/avatar.html#avatar-props)}<br/>**OR**<br/> component |  none   |

---

### `rightAvatar`

|                                                          Type                                                          | Default |
| :--------------------------------------------------------------------------------------------------------------------: | :-----: |
| View style (object){[...Avatar props](/react-native-elements/docs/avatar.html#avatar-props)}<br/>**OR**<br/> component |  none   |

---

### `leftElement`

|     Type      | Default |
| :-----------: | :-----: |
| React element |  none   |

---

### `rightElement`

|     Type      | Default |
| :-----------: | :-----: |
| React element |  none   |

---

### `switch`

|                                        Type                                         | Default |
| :---------------------------------------------------------------------------------: | :-----: |
| {[...Switch props](https://facebook.github.io/react-native/docs/switch.html#props)} |  none   |

---

### `input`

|                                  Type                                  | Default |
| :--------------------------------------------------------------------: | :-----: |
| {[...Input props](/react-native-elements/docs/input.html#input-props)} |  none   |

---

### `buttonGroup`

|                                           Type                                            | Default |
| :---------------------------------------------------------------------------------------: | :-----: |
| {[...ButtonGroup props](/react-native-elements/docs/button_group.html#buttongroup-props)} |  none   |

---

### `checkbox`

|                                      Type                                       | Default |
| :-----------------------------------------------------------------------------: | :-----: |
| {[...CheckBox props](/react-native-elements/docs/checkbox.html#checkbox-props)} |  none   |

---

### `badge`

|                                  Type                                  | Default |
| :--------------------------------------------------------------------: | :-----: |
| {[...Badge props](/react-native-elements/docs/badge.html#badge-props)} |  none   |

---

### `disabled`

|  Type   | Default |
| :-----: | :-----: |
| boolean |  none   |

---

### `disabledStyle`

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `topDivider`

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `bottomDivider`

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `scaleProps`

|                                    Type                                    | Default |
| :------------------------------------------------------------------------: | :-----: |
| {[...Scale props](https://github.com/kohver/react-native-touchable-scale)} |  none   |

---

### `ViewComponent`

|   Type    | Default |
| :-------: | :-----: |
| component |  View   |
