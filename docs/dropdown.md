---
id: dropdown
title: DropDown
---

## Example DropDown usage

```js
import { View } from 'react-native'
import { DropDown, ListItem } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient' // only if no expo

const data = [
  'Mexico City 💀', // Title only
  { title: 'Los Angeles 😎' }, // Same thing as above
  {
    title: 'Paris 😳',
    titleStyle: { color: 'yellow' },
    leftAvatar: { source: require('./Paris.png') },
  }, // Custom ListItem props (here titleStyle & leftAvatar)
  { key: 3, title: 'New Delhi 😚' }, // Custom key (title is the key by default)
]

// Other way to customize ListItem props
const getListItemProps = (item, index) => ({
  titleStyle: { color: 'red' },
  // ... you can customize all ListItem props
})

// Custom FlatList props
const ItemSeparatorComponent = () => <View style={{ height: 16 }} />

<DropDown
  data={data}
  getListItemProps={this.getListItemProps}
  visible
  GradientComponent={LinearGradient} // only if no expo
  backgroundColor="#EEEEEE" // only HEX color for now
  ItemSeparatorComponent={this.ItemSeparatorComponent} // Custom FlatList props
  // ...flatlist props
/>
```

## Full DropDown usage

```js
import React from 'react'
import { View } from 'react-native'
import { DropDown, ListItem, Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient' // only if no expo

export default class CityDropDown extends React.PureComponent {
  state = {
    visible = false,
    data = ['Los Angeles 😎', 'Paris 😳', 'New Delhi 😚'],
  }

  showDropDown = () => this.setState({ visible: true })
  hideDropDown = () => this.setState({ visible: false })
  onPressItem = item => console.log(item.title)

  render() {
    const { visible, data } = this.state
    return (
      <View>
        <Button title="SHOW DROPDOWN" onPress={this.showDropDown} />
        <DropDown
          onClose={this.hideDropDown}
          visible={visible}
          GradientComponent={LinearGradient} // only if no expo
          backgroundColor="#EEEEEE"
          data={data}
          onPressItem={this.onPressItem}
        />
      </View>
    )
  }
}
```

### Props

* [`renderGradientComponent`](#renderGradientComponent)
* [`renderListComponent`](#renderListComponent)
* [`containerStyle`](#containerstyle)
* [`contentContainerStyle`](#contentcontainerstyle)
* [`backgroundColor`](#backgroundcolor)
* [`closeIcon`](#closeicon)
* [`visible`](#visible)
* [`modalProps`](#modalprops)
* [`onClose`](#onclose)
* [`getListItemProps`](#getlistitemprops)

---

# Reference

### `renderGradientComponent`

Render a custom gradient component (already set if on expo)

|   Type   |       Default       |
| :------: | :-----------------: |
| function | Expo.LinearGradient |

### `renderListComponent`

Render a custom list component

|   Type   | Default  |
| :------: | :------: |
| function | FlatList |

### `containerStyle`

additional main container styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

### `contentContainerStyle`

additional list content styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

### `backgroundColor`

background color of the dropdown (`ONLY HEX COLOR`)

|      Type      | Default |
| :------------: | :-----: |
| string (color) | #FFFFFF |

### `closeIcon`

custom close icon

|                                             Type                                              | Default |
| :-------------------------------------------------------------------------------------------: | :-----: |
| {[...Icon props](/react-native-elements/docs/icon.html#icon-props)}<br/>**OR**<br/> component |  none   |

### `visible`

determines whether your dropdown is visible.

| Type | Default |
| :--: | :-----: |
| bool |  none   |

### `modalProps`

provide all props from react-native
[Modal](https://facebook.github.io/react-native/docs/modal) component

|                                     Type                                     | Default |
| :--------------------------------------------------------------------------: | :-----: |
| {[...Modal props](https://facebook.github.io/react-native/docs/modal#props)} |  none   |

### `onClose`

callback called when close button is pressed or user tapped the hardware back
button on Android

| Type | Default |
| :--: | :-----: |
| func |  none   |

### `getListItemProps`

help customize listitem elements

|                      Type                      | Default |
| :--------------------------------------------: | :-----: |
| func ((item: object, index: number) => Object) |  none   |
