import Snack from './snack/index.md'

<Snack />

<!-- Documentation of the interaction methods of Input as it is not commented in the component itself. -->

### Interaction methods

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
