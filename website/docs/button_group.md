---
id: button_group
title: ButtonGroup
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Props from './props/button_group.md'

ButtonGroup is a linear set of segments, each of which function as a button that
can display a different view. Use a ButtonGroup to offer choices that are
closely related but mutually exclusive.

<img alt="ButtonGroup" src={useBaseUrl('img/button_group.png')} />

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

---

<Props />

---
