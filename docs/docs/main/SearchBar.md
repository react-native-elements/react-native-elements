---
id: searchbar
title: SearchBar
slug: /searchbar
---

import Usage from './usage/SearchBar/SearchBar.md'

SearchBars are used to search or filter items. Use a SearchBar when the number
of items directly impacts a user's ability to find one of them.

## Usage

<Usage />

---

## Props

> This component inherits all
> [React Native Elements Input props](input#props),
> which means
> [all native TextInput props that come with a standard React Native TextInput element](https://reactnative.dev/docs/textinput.html),
> along with the following:

- [`cancelButtonProps`](#cancelbuttonprops)
- [`cancelButtonTitle`](#cancelbuttontitle)
- [`cancelIcon`](#cancelicon-platformandroid-only) (**`platform="android"`
  only**)
- [`clearIcon`](#clearicon)
- [`containerStyle`](#containerstyle)
- [`inputContainerStyle`](#inputcontainerstyle)
- [`inputStyle`](#inputstyle)
- [`leftIconContainerStyle`](#lefticoncontainerstyle)
- [`lightTheme`](#lighttheme-platformdefault-only) (**`platform="default"`
  only**)
- [`loadingProps`](#loadingprops)
- [`onCancel`](#oncancel)
- [`onChangeText`](#onchangetext)
- [`onClear`](#onclear)
- [`placeholder`](#placeholder)
- [`placeholderTextColor`](#placeholdertextcolor)
- [`platform`](#platform)
- [`rightIconContainerStyle`](#righticoncontainerstyle)
- [`round`](#round-platformdefault-only) (**`platform="default"` only**)
- [`searchIcon`](#searchicon)
- [`showCancel`](#showcancel-platformios-only) (**`platform="ios"` only**)
- [`showLoading`](#showloading)
- [`underlineColorAndroid`](#underlinecolorandroid)

---

## Reference

### `cancelButtonProps`

**(iOS only)** props passed to cancel Button

> Also receives all
> [TouchableOpacity](http://reactnative.dev/docs/touchableopacity.html#props)
> props

- [`buttonStyle`](#buttonstyle)
- [`buttonTextStyle`](#buttontextstyle)
- [`color`](#color)
- [`disabled`](#disabled)
- [`buttonDisabledStyle`](#buttondisabledstyle)
- [`buttonDisabledTextStyle`](#buttondisabledtextstyle)

#### `buttonStyle`

cancel Button styling

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

#### `buttonTextStyle`

cancel Button Text styling

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

#### `color`

cancel Button text color

|      Type      | Default |
| :------------: | :-----: |
| string (color) | #007aff |

#### `disabled`

Prop to indicate cancel Button is disabled

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

#### `buttonDisabledStyle`

Disabled cancel Button styling

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

#### `buttonDisabledTextStyle`

Styles for the text when cancel Button is disabled

|      Type      |        Default         |
| :------------: | :--------------------: |
| object (style) | `{ color: '#cdcdcd' }` |

---

### `cancelButtonTitle`

**(iOS only)** title of the cancel button on the right side

|  Type  | Default  |
| :----: | :------: |
| string | "Cancel" |

---

### `cancelIcon` (**`platform="android"` only**)

This props allows to override the `Icon` props or use a custom component. Use
`null` or `false` to hide the icon.

|                          Type                           | Default |
| :-----------------------------------------------------: | :-----: |
| {[...Icon props](icon#props)}<br/>**OR**<br/> component |  none   |

---

### `clearIcon`

This props allows to override the `Icon` props or use a custom component. Use
`null` or `false` to hide the icon.

|                          Type                           | Default |
| :-----------------------------------------------------: | :-----: |
| {[...Icon props](icon#props)}<br/>**OR**<br/> component |  none   |

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

### `platform`

choose the look and feel of the search bar. One of "default", "ios", "android"

|  Type  |  Default  |
| :----: | :-------: |
| string | "default" |

---

### `rightIconContainerStyle`

style the icon container on the right side

|      Type      |      Default      |
| :------------: | :---------------: |
| object (style) | inherited styling |

---

### `round` (**`platform="default"` only**)

change TextInput styling to rounded corners

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `searchIcon`

This props allows to override the `Icon` props or use a custom component. Use
`null` or `false` to hide the icon.

|                          Type                           | Default |
| :-----------------------------------------------------: | :-----: |
| {[...Icon props](icon#props)}<br/>**OR**<br/> component |  none   |

---

### `showCancel` (**`platform="ios"` only**)

When `true` the cancel button will stay visible after blur events.

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

### `value`

The value of the search field

|  Type  | Default |
| :----: | :-----: |
| string |  none   |
