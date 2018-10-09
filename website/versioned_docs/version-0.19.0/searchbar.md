---
id: version-0.19.0-searchbar
title: SearchBar
original_id: searchbar
---

<img src="/react-native-elements/img/searchbar.png" width="300" >

```js
import { SearchBar } from 'react-native-elements'

<SearchBar
  onChangeText={someMethod}
  onClearText={someMethod}
  placeholder='Type Here...' />

<SearchBar
  noIcon
  onChangeText={someMethod}
  onClearText={someMethod}
  placeholder='Type Here...' />

<SearchBar
  round
  onChangeText={someMethod}
  onClearText={someMethod}
  placeholder='Type Here...' />

<SearchBar
  lightTheme
  onChangeText={someMethod}
  onClearText={someMethod}
  placeholder='Type Here...' />

<SearchBar
  lightTheme
  onChangeText={someMethod}
  onClearText={someMethod}
  icon={{ type: 'font-awesome', name: 'search' }}
  placeholder='Type Here...' />
```

### Props

> This component inherits [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

* [`clearIcon`](#clearicon)
* [`containerStyle`](#containerstyle)
* [`icon`](#icon)
* [`inputStyle`](#inputstyle)
* [`lightTheme`](#lighttheme)
* [`loadingIcon`](#loadingicon)
* [`noIcon`](#noicon)
* [`onChangeText`](#onchangetext)
* [`onClearText`](#oncleartext)
* [`placeholder`](#placeholder)
* [`placeholderTextColor`](#placeholdertextcolor)
* [`round`](#round)
* [`showLoadingIcon`](#showloadingicon)
* [`underlineColorAndroid`](#underlinecolorandroid)

---

# Reference

### `clearIcon`

specify color, styling, or another [Material Icon Name](https://design.google.com/icons/) (Note: pressing on this icon clears text inside the searchbar)

|                          Type                          |               Default                |
| :----------------------------------------------------: | :----------------------------------: |
| object {name (string), color (string), style (object)} | { color: '#86939e', name: 'search' } |

---

### `containerStyle`

style the container of the TextInput

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `icon`

specify type, name, color, and styling of the icon

|                                 Type                                  |                        Default                         |
| :-------------------------------------------------------------------: | :----------------------------------------------------: |
| object {type (string), name (string), color (string), style (object)} | { type: 'material', color: '#86939e', name: 'search' } |

---

### `inputStyle`

style the TextInput

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `lightTheme`

change theme to light theme

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `loadingIcon`

specify color, styling of the loading ActivityIndicator effect

|                  Type                   |       Default        |
| :-------------------------------------: | :------------------: |
| object {color (string), style (object)} | { color: '#86939e' } |

---

### `noIcon`

remove icon from textinput

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `onChangeText`

method to fire when text is changed

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onClearText`

method to fire when text is cleared

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `placeholder`

set the placeholder text

|  Type  | Default |
| :----: | :-----: |
| string |   ''    |

---

### `placeholderTextColor`

set the color of the placeholder text

|  Type  |  Default  |
| :----: | :-------: |
| string | '#86939e' |

---

### `round`

change TextInput styling to rounded corners

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `showLoadingIcon`

show the loading ActivityIndicator effect

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `underlineColorAndroid`

specify other than the default transparent underline color

|      Type      |   Default   |
| :------------: | :---------: |
| string (color) | transparent |

---

## Interaction methods

| method    | description                                       |
| --------- | ------------------------------------------------- |
| focus     | call focus on the textinput ([example](#calling)) |
| blur      | call blur on the textinput ([example](#calling))  |
| clearText | call clear on the textinput ([example](#calling)) |

#### <a name="calling"></a> Calling methods on SearchBar

Store a reference to the SearchBar in your component by using the ref prop provided by React ([see docs](https://facebook.github.io/react/docs/refs-and-the-dom.html)):

```js
<SearchBar
  ref={search => this.search = search}
  ...
/>
```

You can then access SearchBar methods like so:

```
this.search.focus();
this.search.blur();
this.search.clearText();
```
