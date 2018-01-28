## Default SearchBar
<img src="https://i.imgur.com/mvPgPfg.png" width="300" >

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

#### SearchBar props

##### This component inherits [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

| prop | default | type | description |
| ---- | ---- | ----| ---- |
|platform|"default"|string| choose the look and feel of the search bar. One of "default", "ios", "android"|
|cancelButtonTitle|"Cancel"|string| **(iOS only)** title of the cancel button on the right side|
| containerStyle | inherited styling | object (style) | style the container of the TextInput |
| inputStyle | inherited styling | object (style) | style the TextInput |
| icon | { type: 'material', color: '#86939e', name: 'search' } | object {type (string), name (string), color (string), style (object)} | specify type, name, color, and styling of the icon |
| noIcon | false | boolean | remove icon from textinput |
| lightTheme | false | boolean | change theme to light theme |
| round | false | boolean | change TextInput styling to rounded corners |
| underlineColorAndroid | transparent | string (color) | specify other than the default transparent underline color |
| loadingProps | { } | object | props passed to ActivityIndicator |
| showLoading | false | boolean | show the loading ActivityIndicator effect |
| placeholder | '' | string | set the placeholder text |
| placeholderTextColor | '#86939e' | string | set the color of the placeholder text |
| onChangeText | none | function | method to fire when text is changed |
| onClearText | none | function | method to fire when text is cleared |
|onCancel| null | function | callback fired when pressing the cancel button (iOS) or the back icon (Android)|
| clearIcon | { color: '#86939e', name: 'search' } | object {name (string), color (string), style (object)} | specify color, styling, or another [Material Icon Name](https://design.google.com/icons/) (Note: pressing on this icon clears text inside the searchbar) |

##### Interaction methods
| method | description |
| ---- | ---- |
| focus | call focus on the textinput ([example](#calling)) |
| blur | call blur on the textinput ([example](#calling)) |
| clearText | call clear on the textinput ([example](#calling))|


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
