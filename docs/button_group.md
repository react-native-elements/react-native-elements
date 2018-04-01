---
id: button_group
title: ButtonGroup
---

### [Snack Demo](https://snack.expo.io/BJZpMm3ob)

![ButtonGroup](/react-native-elements/img/button_group.png)

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

### Props

> This component inherits [all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements](https://facebook.github.io/react-native/docs/touchablehighlight.html), along with the following:

* [`buttonStyle`](#buttonstyle)
* [`buttons`](#buttons)
* [`component`](#component)
* [`containerBorderRadius`](#containerborderradius)
* [`containerStyle`](#containerstyle)
* [`disableSelected`](#disableselected)
* [`innerBorderStyle`](#innerborderstyle)
* [`onPress`](#onpress)
* [`selectMultiple`](#selectmultiple)
* [`selectedButtonStyle`](#selectedbuttonstyle)
* [`selectedIndex`](#selectedindex)
* [`selectedIndexes`](#selectedindexes)
* [`selectedTextStyle`](#selectedtextstyle)
* [`textStyle`](#textstyle)
* [`underlayColor`](#underlaycolor)

---

# Reference

---

### `buttonStyle`

specify styling for button (optional)

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `buttons`

array of buttons for component (required), if returning a component, must be an object with { element: componentName }

| Type  | Default |
| :---: | :-----: |
| array |  none   |

---

### `component`

Choose other button component such as TouchableOpacity (optional)

|          Type          |      Default       |
| :--------------------: | :----------------: |
| React Native Component | TouchableHighlight |

---

### `containerBorderRadius`

Set's the border radius for the first and last button in the button group

|  Type  | Default |
| :----: | :-----: |
| number |    3    |

---

### `containerStyle`

specify styling for main button container (optional)

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `disableSelected`

disables the currently selected button if true

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `innerBorderStyle`

update the styling of the interior border of the list of buttons (optional)

|          Type           |      Default      |
| :---------------------: | :---------------: |
| object { width, color } | inherited styling |

---

### `onPress`

method to update Button Group Index (required)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `selectMultiple`

allows the user to select multiple buttons

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `selectedButtonStyle`

specify styling for selected button (optional)

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `selectedIndex`

current selected index of array of buttons (required)

|  Type  | Default |
| :----: | :-----: |
| number |  none   |

---

### `selectedIndexes`

current selected indexes from the array of buttons

|      Type      | Default |
| :------------: | :-----: |
| array (number) |   []    |

---

### `selectedTextStyle`

specify specific styling for text in the selected state (optional)

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `textStyle`

specify specific styling for text (optional)

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `underlayColor`

specify underlayColor for TouchableHighlight (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  white  |
