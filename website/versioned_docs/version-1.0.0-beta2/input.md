---
id: version-1.0.0-beta2-input
title: Input
original_id: input
---

<img src="/react-native-elements/img/input.png" width="300"/>

```js
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

<Input
  placeholder='BASIC INPUT'
/>

<Input
  placeholder='INPUT WITH ICON'
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
  displayError={true}
  errorStyle={{ color: 'red' }}
  errorMessage='ENTER A VALID ERROR HERE'
/>
```

---

### Props

> This component inherits [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

* [`containerStyle`](#containerstyle)
* [`displayError`](#displayerror)
* [`errorMessage`](#errormessage)
* [`errorStyle`](#errorstyle)
* [`inputStyle`](#inputstyle)
* [`leftIcon`](#lefticon)
* [`leftIconContainerStyle`](#lefticoncontainerstyle)
* [`rightIcon`](#righticon)
* [`rightIconContainerStyle`](#righticoncontainerstyle)
* [`shake`](#shake)

---

# Reference

### `containerStyle`

styling for Input Component Container (optional)

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

---

### `displayError`

displays error (optional)

| Type | Default |
| :--: | :-----: |
| bool |  none   |

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

### `inputStyle`

add styling to input component (optional)

|  Type  | Default |
| :----: | :-----: |
| object |  none   |

---

### `leftIcon`

displays an icon to the left (optional)

|          Type          | Default |
| :--------------------: | :-----: |
| React Native Component |  none   |

---

### `leftIconContainerStyle`

styling for left Icon Component container

|        Type         | Default |
| :-----------------: | :-----: |
| View style (object) |  none   |

---

### `rightIcon`

displays an icon to the right (optional)

|          Type          | Default |
| :--------------------: | :-----: |
| React Native Component |  none   |

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
