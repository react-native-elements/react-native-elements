![Forms](http://i.imgur.com/bnoD5rl.png)

```js
import { FormLabel, FormInput } from 'react-native-elements'

<FormLabel>Name</FormLabel>
<FormInput onChangeText={someFunction}/>
<FormValidationMessage>Error message</FormValidationMessage>
```

#### FormValidationMessage example
![FormValidationMessage example](http://i.imgur.com/IHVmL5d.png)

#### FormInput props

##### This component inherits [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | none | object (style) | TextInput container styling (optional) |
| inputStyle | none | object (style) | TextInput styling (optional) |
| textInputRef | none | ref | get ref of TextInput |
| containerRef | none | ref | get ref of TextInput container |
| focus | none | function | call focus on the textinput(optional), eg `this.refs.someInputRef.focus()` |

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

#### Using FormInput refs

```js
<FormInput
  ref='forminput'
  textInputRef='email'
  ...
/>
```
You should be able to access the refs like this

```
this.refs.forminput.refs.email

```
