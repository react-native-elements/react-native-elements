<img src="https://i.imgur.com/mvPgPfg.png" width="300" >

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

#### SearchBar props

##### This component inherits [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| icon | { type: 'material', color: '#86939e', name: 'search' } | object {type (string), name (string), color (string), style (object)} | specify type, name, color, and styling of the icon |
| noIcon | false | boolean | remove icon from textinput |
| lightTheme | false | boolean | change theme to light theme |
| containerStyle | inherited styling | View style (object) | style the container of the TextInput |
| inputStyle | inherited styling | Text style (object) | style the TextInput |
| round | false | boolean | change TextInput styling to rounded corners |
| showLoadingIcon | false | boolean | show the loading ActivityIndicator effect |
| loadingIcon | {} | object {color (string), style (object)} | specify color, styling of the loading ActivityIndicator effect |
| clearIcon | { color: '#86939e', name: 'close' } | boolean or object {name (string), color (string), style (object)} | specify color, styling, or another [Material Icon Name](https://design.google.com/icons/) (Note: pressing on this icon clears text inside the searchbar) |
| textInputRef (Deprecated) | none | string or function | set reference to TextInput Component |
| containerRef (Deprecated) | none | string or function | set reference to Container Component |
| underlineColorAndroid | transparent | string (color) | specify other than the default transparent underline color |
| onChangeText | none | function | method to fire when text is changed |
| onClearText | none | function | method to fire when text is cleared |
| placeholder | '' | string | set the placeholder text |
| placeholderTextColor | '#86939e' | string | set the color of the placeholder text |

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
