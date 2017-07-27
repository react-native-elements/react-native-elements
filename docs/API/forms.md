![Forms](http://i.imgur.com/bnoD5rl.png)

```js
import { FormLabel, FormInput } from 'react-native-elements'

<FormLabel>Name</FormLabel>
<FormInput onChangeText={someFunction}/>
<FormValidationMessage>Error message</FormValidationMessage>
```

#### FormValidationMessage example

##### The [FormValidationMessage](https://react-native-training.github.io/react-native-elements/API/forms/#formvalidationmessage-props) component is just a styled text. You have to implement for now the logic of errors. Basically, if you have an error, display the FormValidationMesage, if not, display nothing.

```js
<FormValidationMessage>
  {'This field is required'}
</FormValidationMessage>
```
![FormValidationMessage example](http://i.imgur.com/IHVmL5d.png)

#### FormInput props

##### This component inherits [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | none | object (style) | TextInput container styling (optional) |
| inputStyle | none | object (style) | TextInput styling (optional) |

##### Interaction methods
| method | description |
| ---- | ---- |
| focus | call focus on the textinput ([example](#calling)) |
| blur | call blur on the textinput ([example](#calling)) |
| clearText | call clear on the textinput ([example](#calling))|

#### FormLabel props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | none | object (style) | additional label container style (optional) |
| labelStyle | none | object (style) | additional label styling (optional) |
| fontFamily | System font bold (iOS), Sans Serif Bold (android) | string | specify different font family |

#### FormValidationMessage props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | none | object (style) | additional label container style (optional) |
| labelStyle | none | object (style) | additional label styling (optional) |
| fontFamily | System font bold (iOS), Sans Serif Bold (android) | string | specify different font family |

#### <a name="calling"></a> Calling methods on FormInput
Store a reference to the FormInput in your component by using the ref prop provided by React ([see docs](https://facebook.github.io/react/docs/refs-and-the-dom.html)):
```js
<FormInput
  ref={input => this.input = input}
  ...
/>
```
You can then access FormInput methods like so:

```
this.input.focus();
this.input.blur();
this.input.clearText();
```
