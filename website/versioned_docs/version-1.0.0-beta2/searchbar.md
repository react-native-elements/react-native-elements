---
id: version-1.0.0-beta2-searchbar
title: SearchBar
original_id: searchbar
---

## Default SearchBar

<img src="/react-native-elements/img/searchbar.png" width="300" >

## Platform specific SearchBar

**iOS**

<img src="https://user-images.githubusercontent.com/17592779/31585176-b124cdae-b1bd-11e7-809f-ba966cebc663.gif" width="300">

**Android**

<img src="https://user-images.githubusercontent.com/17592779/31586716-f6e8ff9c-b1d4-11e7-918f-2a7e11d51b08.gif" width="300">

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

<SearchBar
  showLoading
  platform="ios"
  cancelButtonTitle="Cancel"
  placeholder='Search' />

<SearchBar
  showLoading
  platform="android"
  placeholder='Search' />
```

### Props

> This component inherits [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

* [`cancelButtonTitle`](#cancelbuttontitle)
* [`clearIcon`](#clearicon)
* [`containerStyle`](#containerstyle)
* [`icon`](#icon)
* [`inputStyle`](#inputstyle)
* [`leftIconContainerStyle`](#lefticoncontainerstyle-platform-android-ios)
* [`rightIconContainerStyle`](#righticoncontainerstyle-platform-android-ios)
* [`lightTheme`](#lighttheme)
* [`loadingProps`](#loadingprops)
* [`noIcon`](#noicon)
* [`onCancel`](#oncancel)
* [`onChangeText`](#onchangetext)
* [`onClearText`](#oncleartext)
* [`placeholder`](#placeholder)
* [`placeholderTextColor`](#placeholdertextcolor)
* [`platform`](#platform)
* [`round`](#round)
* [`showLoading`](#showloading)
* [`underlineColorAndroid`](#underlinecolorandroid)

# Reference

---

### `clearIcon`

specify color, styling, or another [Material Icon Name](https://design.google.com/icons/) (Note: pressing on this icon clears text inside the searchbar)

|                          Type                          |               Default               |
| :----------------------------------------------------: | :---------------------------------: |
| object {name (string), color (string), style (object)} | { color: '#86939e', name: 'close' } |

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

### `leftIconContainerStyle` (platform="android|ios")

style the icon container on the left side

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `rightIconContainerStyle` (platform="android|ios")

style the icon container on the right side

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

### `loadingProps`

props passed to ActivityIndicator

|  Type  | Default |
| :----: | :-----: |
| object |   { }   |

---

### `noIcon`

remove icon from textinput

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `onCancel`

callback fired when pressing the cancel button (iOS) or the back icon (Android)

|   Type   | Default |
| :------: | :-----: |
| function |  null   |

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

### `showLoading`

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

### `cancelButtonTitle`

**(iOS only)** title of the cancel button on the right side

|  Type  | Default  |
| :----: | :------: |
| string | "Cancel" |

---

### `platform`

choose the look and feel of the search bar. One of "default", "ios", "android"

|  Type  |  Default  |
| :----: | :-------: |
| string | "default" |

## Interaction methods

| method    | description                                       |
| --------- | ------------------------------------------------- |
| focus     | call focus on the textinput ([example](#calling)) |
| blur      | call blur on the textinput ([example](#calling))  |
| clear     | call clear on the textinput ([example](#calling)) |

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
this.search.clear();
```
