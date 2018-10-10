---
id: version-1.0.0-beta5-searchbar
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
  onClear={someMethod}
  placeholder='Type Here...' />

<SearchBar
  clearIcon={{ color: 'red' }}
  searchIcon={false} // You could have passed `null` too
  onChangeText={someMethod}
  onClear={someMethod}
  placeholder='Type Here...' />

<SearchBar
  round
  searchIcon={{ size: 24 }}
  onChangeText={someMethod}
  onClear={someMethod}
  placeholder='Type Here...' />

<SearchBar
  lightTheme
  searchIcon={<CustomComponent />}
  onChangeText={someMethod}
  onClear={someMethod}
  placeholder='Type Here...' />

<SearchBar
  lightTheme
  onChangeText={someMethod}
  onClear={someMethod}
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

<SearchBar
  showLoading
  platform="android"
  cancelIcon={{ type: 'font-awesome', name: 'chevron-left' }}
  placeholder='Search' />
```

### Props

> This component inherits all [React Native Elements Input props](/react-native-elements/docs/input.html#props), which means [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

* [`platform`](#platform)
* [`clearIcon`](#clearicon)
* [`searchIcon`](#searchIcon)
* [`cancelIcon`](#cancelicon-platform-android-only) (**`platform="android"` only**)
* [`containerStyle`](#containerstyle)
* [`inputContainerStyle`](#inputcontainerstyle)
* [`inputStyle`](#inputstyle)
* [`leftIconContainerStyle`](#lefticoncontainerstyle)
* [`rightIconContainerStyle`](#righticoncontainerstyle)
* [`lightTheme`](#lighttheme-platform-default-only) (**`platform="default"` only**)
* [`loadingProps`](#loadingprops)
* [`noIcon`](#noicon)
* [`onChangeText`](#onchangetext)
* [`onClear`](#onclear)
* [`placeholder`](#placeholder)
* [`placeholderTextColor`](#placeholdertextcolor)
* [`round`](#round-platform-default-only) (**`platform="default"` only**)
* [`showLoading`](#showloading)
* [`underlineColorAndroid`](#underlinecolorandroid)
* [`cancelButtonTitle`](#cancelbuttontitle)
* [`cancelButtonProps`](#cancelbuttonprops)
* [`onCancel`](#oncancel)

---

# Reference

### `platform`

choose the look and feel of the search bar. One of "default", "ios", "android"

|  Type  |  Default  |
| :----: | :-------: |
| string | "default" |

---

### `clearIcon`

This props allows to override the `Icon` props or use a custom component.
Use `null` or `false` to hide the icon.

|                                             Type                                              | Default |
| :-------------------------------------------------------------------------------------------: | :-----: |
| {[...Icon props](/react-native-elements/docs/icon.html#icon-props)}<br/>**OR**<br/> component |  none   |

---

### `searchIcon`

This props allows to override the `Icon` props or use a custom component.
Use `null` or `false` to hide the icon.

|                                             Type                                              | Default |
| :-------------------------------------------------------------------------------------------: | :-----: |
| {[...Icon props](/react-native-elements/docs/icon.html#icon-props)}<br/>**OR**<br/> component |  none   |

---

### `cancelIcon` (**`platform="android"` only**)

This props allows to override the `Icon` props or use a custom component.
Use `null` or `false` to hide the icon.

|                                             Type                                              | Default |
| :-------------------------------------------------------------------------------------------: | :-----: |
| {[...Icon props](/react-native-elements/docs/icon.html#icon-props)}<br/>**OR**<br/> component |  none   |

---

### `containerStyle`

style the container of the SearchBar

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `inputContainerStyle`

style the container of the TextInput

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `inputStyle`

style the TextInput

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `leftIconContainerStyle`

style the icon container on the left side

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `rightIconContainerStyle`

style the icon container on the right side

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `lightTheme` (**`platform="default"` only**)

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

### `onChangeText`

method to fire when text is changed

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onClear`

method to fire when input is cleared

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

### `round` (**`platform="default"` only**)

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

### `cancelButtonProps`

**(iOS only)** props passed to Button

|  Type  | Default |
| :----: | :-----: |
| object |   { }   |

---

### `onCancel`

callback fired when pressing the cancel button (iOS) or the back icon (Android)

|   Type   | Default |
| :------: | :-----: |
| function |  null   |

---

## Interaction methods

| method | description                                                                                                                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| focus  | call focus on the textinput ([example](#calling))                                                                                                                                                |
| blur   | call blur on the textinput ([example](#calling))                                                                                                                                                 |
| clear  | call clear on the textinput ([example](#calling))                                                                                                                                                |
| cancel | **(Android and iOS SearchBars only)** call cancel on the SearchBar (left arrow on Android, Cancel button on iOS). This will basically blur the input and hide the keyboard ([example](#calling)) |

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
this.search.cancel(); // Only available if `platform` props is "ios" | "android"
```
