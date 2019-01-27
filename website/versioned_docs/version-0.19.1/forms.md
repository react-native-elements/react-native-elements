---
id: version-0.19.1-forms
title: Forms
original_id: forms
---

Components for managing forms. Includes `FormLabel`, `FormInput` and `FormValidationMessage`.

![Forms](/react-native-elements/img/forms_fields.png)

## Usage

```js
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

<FormLabel>Name</FormLabel>
<FormInput onChangeText={someFunction}/>
<FormValidationMessage>Error message</FormValidationMessage>
```

---

## FormLabel

Label above the FormInput. Can be used to describe the type of field (e.g Email).

- [`containerStyle`](#containerstyle)
- [`labelStyle`](#labelstyle)
- [`fontFamily`](#fontfamily)

---

### `containerStyle`

additional label container style (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

### `labelStyle`

additional label styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

### `fontFamily`

specify different font family

|  Type  |                      Default                      |
| :----: | :-----------------------------------------------: |
| string | System font bold (iOS), Sans Serif Bold (android) |

---

## FormValidationMessage

Providers feedback to user about their input - usually an error message.

This component is only styled version of the Text component. You have to handle the error logic yourself. Basically, if you have an error, display the FormValidationMesage, if not, display nothing.

![FormValidationMessage example](/react-native-elements/img/forms_validation.png)

```js
<FormValidationMessage>{'This field is required'}</FormValidationMessage>
```

- [`containerStyle`](#containerstyle)
- [`labelStyle`](#labelstyle)
- [`fontFamily`](#fontfamily)

---

### `containerStyle`

additional label container style (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `labelStyle`

additional label styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `fontFamily`

specify different font family

|  Type  |                      Default                      |
| :----: | :-----------------------------------------------: |
| string | System font bold (iOS), Sans Serif Bold (android) |

---

## FormInput

Allows the user to input text.

> This component inherits [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

- [`containerStyle`](#containerstyle)
- [`inputStyle`](#inputstyle)
- [`textInputRef`](#textinputref)
- [`containerRef`](#containerref)
- [`shake`](#shake)

### `containerStyle`

TextInput container styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `inputStyle`

TextInput styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `textInputRef`

get ref of TextInput

| Type | Default |
| :--: | :-----: |
| ref  |  none   |

---

### `containerRef`

get ref of TextInput container

| Type | Default |
| :--: | :-----: |
| ref  |  none   |

---

### `shake`

shake the textinput if not a falsy value and different from the previous value

|             Type             | Default |
| :--------------------------: | :-----: |
| all comparable types (`===`) |  none   |

---

### FormInput Methods

<br/>

| name      | description                                              |
| --------- | -------------------------------------------------------- |
| shake     | shake the textinput, eg `this.refs.someInputRef.shake()` |
| focus     | call focus on the textinput                              |
| blur      | call blur on the textinput                               |
| clearText | call clear on the textinput                              |

Store a reference to the FormInput in your component by using the ref prop provided by React ([see docs](https://facebook.github.io/react/docs/refs-and-the-dom.html)):

```js
<FormInput ref={input => (this.input = input)} />
```

You can then access FormInput methods like so:

```
this.input.focus();
this.input.blur();
this.input.clearText();
this.refs.forminput.refs.email
```

### FormInput Shake example

#### Using refs

```js
errorHandler() {
  if (this.state.error) {
    this.formInput.shake()
  }
}

<TextInput
  ref={ref => this.formInput = ref}
/>
```

#### Using props

```js
<TextInput shake={!this.state.error ? false : true} {...props} />
```

If you want to shake the input each time an error occurs, you can compare objects.
Each time an error occurs, it'll create a new object and trigger shake.

```js
  errorHandler(code, message) {
    this.setState({
      error: !code ? null :
        {
          code,
          message,
        }
    })
  }

  <TextInput
    shake={this.state.error}
    {...props}
  />
```

With this system, you can trigger shakes consecutively.
Of course, if shake is `null` or `false` or `undefined`, etc... (falsy values), it'll not trigger the shake.
