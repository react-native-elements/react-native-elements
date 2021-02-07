---
id: input
title: Input
---

import Props from './props/input.md'

Inputs allow users to enter text into a UI. They typically appear in forms and
dialogs.

<div className="component-preview component-preview--grid">
  <figure>
    <img src="/img/input/input--placeholder.png" alt="Input with placeholder" />
    <figcaption>Placeholder</figcaption>
  </figure>
  <figure>
  <img src="/img/input/input--label.png" alt="Input with Label and icons" />
    <figcaption>Label with Icons</figcaption>
  </figure>
</div>

## Usage

```js
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

<Input
  placeholder='BASIC INPUT'
/>

<Input
  placeholder='INPUT WITH ICON'
  leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
/>

<Input
  placeholder='INPUT WITH CUSTOM ICON'
  leftIcon={
    <Icon
      name='user'
      size={24}
      color='black'
    />
  }
/>


 <Input
   placeholder="Comment"
   leftIcon={{ type: 'font-awesome', name: 'comment' }}
   style={styles}
   onChangeText={value => this.setState({ comment: value })}
  />


<Input
  placeholder='INPUT WITH ERROR MESSAGE'
  errorStyle={{ color: 'red' }}
  errorMessage='ENTER A VALID ERROR HERE'
/>

<Input placeholder="Password" secureTextEntry={true} />
```

---

<Props />

---

## Interaction methods

| method         | description                                       |
| -------------- | ------------------------------------------------- |
| focus          | Focuses the Input                                 |
| blur           | Removes focus from the Input                      |
| clear          | Clears the text in the Input                      |
| isFocused      | Returns `true` or `false` if the Input is focused |
| setNativeProps | Sets props directly on the react native component |
| shake          | Shakes the input for error feedback               |

### Calling methods on Input

Store a reference to the Input in your component by using the ref prop
provided by React
([see docs](https://reactjs.org/docs/refs-and-the-dom.html)):

```js
const input = React.createRef();

<Input
  ref={input}
  ...
/>
```

You can then use the Input methods like this:

```js
input.current.focus();
input.current.blur();
input.current.clear();
input.current.isFocused();
input.current.setNativeProps({ value: 'hello' });
input.current.shake();
```
