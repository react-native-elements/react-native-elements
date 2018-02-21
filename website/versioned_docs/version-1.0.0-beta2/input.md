---
id: version-1.0.0-beta2-input
title: Input
original_id: input
---

<img src="https://i.imgur.com/Zm7MTQD.png" width="300"/>

```js
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';

<Input
  placeholder='BASIC INPUT'
/>

<Input
  placeholder='INPUT WITH ICON'
  icon={
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

#### Input props

##### This component inherits [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

| prop                    | default | type                   | description                                      |
| ----------------------- | ------- | ---------------------- | ------------------------------------------------ |
| containerStyle          | none    | View style (object)    | styling for Input Component Container (optional) |
| rightIcon               | none    | React Native Component | displays an icon to the right (optional)         |
| rightIconContainerStyle | none    | View style (object)    | styling for right Icon Component container       |
| leftIcon                | none    | React Native Component | displays an icon to the left (optional)          |
| leftIconContainerStyle  | none    | View style (object)    | styling for left Icon Component container        |
| inputStyle              | none    | object                 | add styling to input component (optional)        |
| shake                   | none    | any                    | add shaking effect to input component (optional) |
| displayError            | none    | bool                   | displays error (optional)                        |
| errorStyle              | none    | object                 | add styling to error message (optional)          |
| errorMessage            | none    | string                 | adds error message (optional)                    |
