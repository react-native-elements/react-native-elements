---
id: searchbar
title: SearchBar
---

import Props from './props/searchbar.md'

SearchBars are used to search or filter items. Use a SearchBar when the number
of items directly impacts a user's ability to find one of them.

## Default SearchBar

<img src="/img/searchbar.png" width="300" />

## Platform specific SearchBar

**iOS**

<img src="https://user-images.githubusercontent.com/17592779/31585176-b124cdae-b1bd-11e7-809f-ba966cebc663.gif" width="300"/>

**Android**

<img src="https://user-images.githubusercontent.com/17592779/31586716-f6e8ff9c-b1d4-11e7-918f-2a7e11d51b08.gif" width="300"/>

## Usage

```jsx
import { SearchBar } from 'react-native-elements';

export default class App extends React.Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
```

---

<Props />

---

## Interaction methods

| method | description                                                                                                                                                                                      |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| focus  | call focus on the textinput ([example](#calling))                                                                                                                                                |
| blur   | call blur on the textinput ([example](#calling))                                                                                                                                                 |
| clear  | call clear on the textinput ([example](#calling))                                                                                                                                                |
| cancel | **(Android and iOS SearchBars only)** call cancel on the SearchBar (left arrow on Android, Cancel button on iOS). This will basically blur the input and hide the keyboard ([example](#calling)) |

#### <a name="calling"></a> Calling methods on SearchBar

Store a reference to the SearchBar in your component by using the ref prop
provided by React
([see docs](https://reactjs.org/docs/refs-and-the-dom.html)):

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
