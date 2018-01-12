### [Snack Demo](https://snack.expo.io/BJZpMm3ob)

![ButtonGroup](http://i.imgur.com/uBJbULr.png)

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

#### ButtonGroup props

> This component inherits [all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements](https://facebook.github.io/react-native/docs/touchablehighlight.html), along with the following:

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| selectedIndex | none | number | current selected index of array of buttons (required) |
| onPress | none | function | method to update Button Group Index (required) |
| buttons | none | array | array of buttons for component (required), if returning a component, must be an object with { element: componentName } |
| component | TouchableHighlight | React Native Component | Choose other button component such as TouchableOpacity (optional) |
| containerStyle | inherited styling | object (style) | specify styling for main button container (optional) |
| buttonStyle | inherited styling | object (style) | specify styling for button (optional) |
| selectedButtonStyle | inherited styling | object (style) | specify styling for selected button (optional) |
| containerBorderRadius | 3 | number | Set's the border radius for the first and last button in the button group |
| textStyle | inherited styling | object (style) | specify specific styling for text (optional) |
| selectedTextStyle | inherited styling | object (style) | specify specific styling for text in the selected state (optional)|
| innerBorderStyle | inherited styling | object { width, color } | update the styling of the interior border of the list of buttons (optional) |
| underlayColor | white | string | specify underlayColor for TouchableHighlight (optional) |
| disableSelected | false | boolean | disables the currently selected button if true |
