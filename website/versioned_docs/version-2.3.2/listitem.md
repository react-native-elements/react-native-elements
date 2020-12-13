---
id: listitem
title: ListItem
---

import useBaseUrl from '@docusaurus/useBaseUrl';

ListItems are used to display rows of information, such as a contact list,
playlist, or menu. They are very customizable and can contain switches,
avatars, badges, icons, and more.

<img alt="Lists" src={useBaseUrl('img/lists.png')} />

## Usage

### Using Map Function - Implemented with avatar

```js
import { ListItem, Avatar } from 'react-native-elements'

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
      <ListItem key={i} bottomDivider>
        <Avatar source={{uri: l.avatar_url}} />
        <ListItem.Content>
          <ListItem.Title>{l.name}</ListItem.Title>
          <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    ))
  }
</View>
```

### Using Map Function - Implemented with link and icon

```js
import { ListItem, Icon } from 'react-native-elements'

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
      <ListItem key={i} bottomDivider>
        <Icon name={item.icon} />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    ))
  }
</View>
```

### Using RN FlatList - Implemented with link and avatar

```js
import { ListItem, Avatar } from 'react-native-elements'

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

keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem bottomDivider>
    <Avatar source={{uri: item.avatar_url}} />
    <ListItem.Content>
      <ListItem.Title>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
)

render () {
  return (
    <FlatList
      keyExtractor={this.keyExtractor}
      data={list}
      renderItem={this.renderItem}
    />
  )
}
```

### Using RN FlatList - Implemented with custom avatar component.

```js
import { ListItem, Avatar } from 'react-native-elements'

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

keyExtractor = (item, index) => index.toString()

renderItem = ({ item }) => (
  <ListItem bottomDivider >
    <Avatar title={item.name[0]} source={item.avatar_url && { uri: item.avatar_url }}/>
    <ListItem.Content>
      <ListItem.Title>{item.name}</ListItem.Title>
      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
    </ListItem.Content>
    <ListItem.Chevron />
  </ListItem>
)

render () {
  return (
    <FlatList
      keyExtractor={this.keyExtractor}
      data={list}
      renderItem={this.renderItem}
    />
  )
}
```

### ListItem implemented with custom View for Subtitle

```js
import { ListItem, Avatar } from 'react-native-elements'

render () {
  return (
    <ListItem>
      <Avatar source={require('../images/avatar1.jpg')} />
      <ListItem.Content>
        <ListItem.Title>Limited supply! Its like digital gold!</ListItem.Title>
        <View style={styles.subtitleView}>
          <Image source={require('../images/rating.png')} style={styles.ratingImage}/>
          <Text style={styles.ratingText}>5 months ago</Text>
        </View>
      </ListItem.Content>
    </ListItem>
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

### Badges

<img alt="Badges" src={useBaseUrl('img/list-badges.png')} />

Example badge usage

```js
<ListItem>
  <Badge
    value={3}
    textStyle={{ color: 'orange' }}
    containerStyle={{ marginTop: -20 }}
  />
</ListItem>
```

### Linear gradient + Scale feedback

<img src="/img/listitem_with_gradient_scale.gif" width="500" />

```js
import { ListItem, Avatar } from 'react-native-elements';
import TouchableScale from 'react-native-touchable-scale'; // https://github.com/kohver/react-native-touchable-scale
import LinearGradient from 'react-native-linear-gradient'; // Only if no expo

<ListItem
  Component={TouchableScale}
  friction={90} //
  tension={100} // These props are passed to the parent component (here TouchableScale)
  activeScale={0.95} //
  linearGradientProps={{
    colors: ['#FF9800', '#F44336'],
    start: { x: 1, y: 0 },
    end: { x: 0.2, y: 0 },
  }}
  ViewComponent={LinearGradient} // Only if no expo
>
  <Avatar rounded source={{ uri: avatar_url }} />
  <ListItem.Content>
    <ListItem.Title style={{ color: 'white', fontWeight: 'bold' }}>
      Chris Jackson
    </ListItem.Title>
    <ListItem.Subtitle style={{ color: 'white' }}>
      Vice Chairman
    </ListItem.Subtitle>
  </ListItem.Content>
  <ListItem.Chevron color="white" />
</ListItem>;
```

---

## Props

> Also receives all
> [TouchableHighlight](https://reactnative.dev/docs/touchablehighlight#props)
> props

- [`Component`](#Component)
- [`containerStyle`](#containerstyle)
- [`onPress`](#onpress)
- [`onLongPress`](#onlongpress)
- [`disabled`](#disabled)
- [`disabledStyle`](#disabledstyle)
- [`topDivider`](#topdivider)
- [`bottomDivider`](#bottomdivider)
- [`ViewComponent`](#viewcomponent)
- [`pad`](#pad)

---

## Child Components

### ListItem.ButtonGroup

> Receives all [ButtonGroup](button_group.md#props) props.

### ListItem.CheckBox

> Receives all [CheckBox](checkbox.md#props) props.

### ListItem.Chevron

> Receives all [Icon](icon.md#props) props.

### ListItem.Content

> Receives all [View](https://reactnative.dev/docs/view#props) props.

### ListItem.Input

> Receives all [Input](input.md#props) props.

### ListItem.Subtitle

> Receives all [Text](text.md#props) props.

### ListItem.Title

> Receives all [Text](text.md#props) props.

---

## Reference

### `Component`

replace element with custom element (optional)

|                                  Type                                   |  Default  |
| :---------------------------------------------------------------------: | :-------: |
| View or TouchableHighlight (default) if onPress method is added as prop | component |

---

### `containerStyle`

additional main container styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

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

### `ViewComponent`

Container for linear gradient (for non-expo user)

|   Type    | Default |
| :-------: | :-----: |
| component |  View   |

---

### `pad`

adds spacing between the leftComponent, the title component & right component

|  Type  | Default |
| :----: | :-----: |
| number |  `16`   |
