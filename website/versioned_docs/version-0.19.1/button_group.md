---
id: version-0.19.1-button_group
title: ButtonGroup
original_id: button_group
---

> [Snack Demo](https://snack.expo.io/BJZpMm3ob)

![ButtonGroup](/react-native-elements/img/button_group.png)

## Usage

### Using strings

```js
constructor () {
  super()
  this.state = {
    selectedIndex: 2
  }
  this.updateIndex = this.updateIndex.bind(this)
}

updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}

render () {
  const buttons = ['Hello', 'World', 'Buttons']
  const { selectedIndex } = this.state

  return (
    <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: 100}}
    />
  )
}
```

### Using components

```js
constructor () {
  super()
  this.state = {
    selectedIndex: 2
  }
  this.updateIndex = this.updateIndex.bind(this)
}
updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}

const component1 = () => <Text>Hello</Text>
const component2 = () => <Text>World</Text>
const component3 = () => <Text>ButtonGroup</Text>

render () {
  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
  const { selectedIndex } = this.state
  return (
    <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons}
      containerStyle={{height: 100}} />
  )
}
```

> This component inherits [all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements](https://facebook.github.io/react-native/docs/touchablehighlight.html), along with the following:

---

## Props

- [`buttons`](#buttons)
- [`buttonStyle`](#buttonstyle)
- [`component`](#component)
- [`containerStyle`](#containerstyle)
- [`containerBorderRadius`](#containerborderradius)
- [`disableSelected`](#disableselected)
- [`innerBorderStyle`](#innerborderstyle)
- [`onPress`](#onpress)
- [`selectedButtonStyle`](#selectedbuttonstyle)
- [`selectedIndex`](#selectedindex)
- [`selectedTextStyle`](#selectedtextstyle)
- [`textStyle`](#textstyle)
- [`underlayColor`](#underlaycolor)

---

## Reference

### `buttons`

Array of buttons for component (required).

If returning a component, must be an object with { element: componentName }

| Type  | Default |
| :---: | :-----: |
| array |  none   |

### `buttonStyle`

Additional styling for button component (optional)

|      Type      | Default |
| :------------: | :-----: |
| Object (style) |  none   |

### `component`

Choose another button component such as TouchableOpacity (optional)

|          Type          |      Default       |
| :--------------------: | :----------------: |
| React Native Component | TouchableHighlight |

### `containerStyle`

Styling for main button container (optional)

|       Type        |      Default      |
| :---------------: | :---------------: |
| inherited styling | inherited styling |

### `containerBorderRadius`

Set the border radius for the first and last button in the button group

|  Type  | Default |
| :----: | :-----: |
| number |    3    |

### `disableSelected`

Disables the currently selected button if true

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

### `innerBorderStyle`

Update the styling of the interior border of the list of buttons (optional)

|  Type  |        Default        |
| :----: | :-------------------: |
| object | object {width, color} |

### `onPress`

Callback fired when user presses and index.

Method used to update Button Group Index (required)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

### `selectedIndex`

Current selected index of array of buttons (required)

|  Type  | Default |
| :----: | :-----: |
| number |  none   |

### `selectedButtonStyle`

Styling for selected button (optional)

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

### `selectedTextStyle`

Styling for text in the selected state (optional)

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

### `textStyle`

Styling for text (unselected index) (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

### `underlayColor`

Specify underlayColor for TouchableHighlight (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  white  |
