---
id: input
title: Input
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
  errorStyle={{ color: 'red' }}
  errorMessage='ENTER A VALID ERROR HERE'
/>
```

#### Input props

##### This component inherits [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

| prop                         | default | type                   | description                                                                               |
| ---------------------------- | ------- | ---------------------- | ----------------------------------------------------------------------------------------- |
| inputContainerStyle          | none    | View style (object)    | styling for Input Component Container (optional)                                          |
| containerStyle               | none    | View style (object)    | styling for view containing the label, the input and the error message                    |
| rightIcon                    | none    | React Native Component | displays an icon to the right (optional)                                                  |
| rightIconContainerStyle      | none    | View style (object)    | styling for right Icon Component container                                                |
| leftIcon                     | none    | React Native Component | displays an icon to the left (optional)                                                   |
| leftIconContainerStyle       | none    | View style (object)    | styling for left Icon Component container                                                 |
| inputStyle                   | none    | object                 | style that will be passed to the `style` props of the React Native `TextInput` (optional) |
| shake                        | none    | any                    | add shaking effect to input component (optional)                                          |
| label                        | none    | string                 | add a label on top of the input (optional)                                                |
| labelStyle                   | none    | object                 | styling for the label (optional)                                                          |
| errorMessage                 | none    | string                 | add error message (optional)                                                              |
| errorStyle                   | none    | object                 | styling for the error message (optional)                                                  |


#### Styles explanation

| Input with a label and an error message                                 | Styles explanation                                                  |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------- |
|<img src="/react-native-elements/img/input_without_explanation.png" />   | <img src="/react-native-elements/img/input_with_explanation.png" /> |
