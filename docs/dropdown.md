---
id: dropdown
title: DropDown
---

Example DropDown usage

```js
import { View } from 'react-native'
import { DropDown, ListItem } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient' // only if no expo

const data = [
  { id: 1, title: 'Los Angeles 😎' },
  { id: 2, title: 'Paris 😳' },
  { id: 3, title: 'New Delhi 😚' },
]

<DropDown
  visible
  GradientComponent={LinearGradient} // only if no expo
  backgroundColor="#EEEEEE"
  keyExtractor={({ id }) => id.toString()}
  data={data}
  renderItem={({ item: { title } }) => <ListItem title={title} />}
  ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
/>
```

Full DropDown usage

```js
import React from 'react'
import { View } from 'react-native'
import { DropDown, ListItem, Button } from 'react-native-elements'
import LinearGradient from 'react-native-linear-gradient' // only if no expo

export default class CityDropDown extends React.PureComponent {
  state = {
    visible = false,
    data = [
      { id: 1, title: 'Los Angeles 😎' },
      { id: 2, title: 'Paris 😳' },
      { id: 3, title: 'New Delhi 😚' },
    ]
  }

  showDropDown = () => this.setState({ visible: true })
  hideDropDown = () => this.setState({ visible: false })

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
          keyExtractor={({ id }) => id.toString()}
          data={data}
          renderItem={({ item: { id, title } }) => <ListItem title={title} />}
          ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        />
      </View>
    )
  }
}
```

### Props

* [`GradientComponent`](#GradientComponent)
* [`ListComponent`](#ListComponent)
* [`containerStyle`](#containerstyle)
* [`contentContainerStyle`](#contentcontainerstyle)
* [`backgroundColor`](#backgroundcolor)
* [`closeIcon`](#closeicon)
* [`visible`](#visible)
* [`modalProps`](#modalprops)
* [`animationType`](#animationtype)
* [`onClose`](#onclose)

---

# Reference

### `style`

Style of the divider

|     Type     |                Default                |
| :----------: | :-----------------------------------: |
| style object | {height: 1, backgroundColor: #e1e8ee} |
