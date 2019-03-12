---
id: input
title: Input
---

Inputs allow users to enter text into a UI. They typically appear in forms and
dialogs.

<img src="/react-native-elements/img/input.png" width="300"/>

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
  placeholder='INPUT WITH SHAKING EFFECT'
  shake={true}
/>

<Input
  placeholder='INPUT WITH ERROR MESSAGE'
  errorStyle={{ color: 'red' }}
  errorMessage='ENTER A VALID ERROR HERE'
/>
```

---

## Props

> This component inherits
> [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html),
> along with the following:

- [`containerStyle`](#containerstyle)
- [`inputContainerStyle`](#inputcontainerstyle)
- [`errorMessage`](#errormessage)
- [`errorStyle`](#errorstyle)
- [`errorProps`](#errorprops)
- [`inputComponent`](#inputcomponent)
- [`inputStyle`](#inputstyle)
- [`label`](#label)
- [`labelStyle`](#labelstyle)
- [`labelProps`](#labelprops)
- [`leftIcon`](#lefticon)
- [`leftIconContainerStyle`](#lefticoncontainerstyle)
- [`rightIcon`](#righticon)
- [`rightIconContainerStyle`](#righticoncontainerstyle)
- [`shake`](#shake)

---

## Reference

### `containerStyle`

styling for view containing the label, the input and the error message

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

---

### `inputContainerStyle`

styling for Input Component Container (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

---

### `errorMessage`

adds error message (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `errorStyle`

add styling to error message (optional)

|  Type  | Default |
| :----: | :-----: |
| object |  none   |

---

### `errorProps`

props to be passed to the React Native `Text` component used to display the
error message (optional)

|                                      Type                                       | Default |
| :-----------------------------------------------------------------------------: | :-----: |
| {[...Text props](https://facebook.github.io/react-native/docs/text.html#props)} |  none   |

---

### `inputComponent`

component that will be rendered in place of the React Native `TextInput`
(optional)

|          Type          |  Default  |
| :--------------------: | :-------: |
| React Native Component | TextInput |

---

### `inputStyle`

style that will be passed to the `style` props of the React Native `TextInput`
(optional)

|  Type  | Default |
| :----: | :-----: |
| object |  none   |

---

### `label`

add a label on top of the input (optional)

|                   Type                   | Default |
| :--------------------------------------: | :-----: |
| string **OR** React element or component |  none   |

---

### `labelStyle`

styling for the label (optional); You can only use this if `label` is a string

|  Type  | Default |
| :----: | :-----: |
| object |  none   |

---

### `labelProps`

props to be passed to the React Native `Text` component used to display the
label or React Component used instead of simple string in `label` prop
(optional)

|                                                     Type                                                      | Default |
| :-----------------------------------------------------------------------------------------------------------: | :-----: |
| {[...Text props](https://facebook.github.io/react-native/docs/text.html#props)} **OR** passed component props |  none   |

---

### `leftIcon`

displays an icon on the left (optional)

|                                             Type                                              | Default |
| :-------------------------------------------------------------------------------------------: | :-----: |
| {[...Icon props](/react-native-elements/docs/icon.html#icon-props)}<br/>**OR**<br/> component |  none   |

---

### `leftIconContainerStyle`

styling for left Icon Component container

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

---

### `rightIcon`

displays an icon on the right (optional)

|                                             Type                                              | Default |
| :-------------------------------------------------------------------------------------------: | :-----: |
| {[...Icon props](/react-native-elements/docs/icon.html#icon-props)}<br/>**OR**<br/> component |  none   |

---

### `rightIconContainerStyle`

styling for right Icon Component container

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

---

### `shake`

add shaking effect to input component (optional)

| Type | Default |
| :--: | :-----: |
| any  |  none   |

---

#### Styles explanation

| Input with a label and an error message                                | Styles explanation                                                  |
| ---------------------------------------------------------------------- | ------------------------------------------------------------------- |
| <img src="/react-native-elements/img/input_without_explanation.png" /> | <img src="/react-native-elements/img/input_with_explanation.png" /> |
