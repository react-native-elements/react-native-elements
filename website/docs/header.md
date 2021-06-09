---
id: header
title: Header
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Props from './props/header.md'

**Note:**
Make sure that you have completed [Step 3](getting_started.md#step-3-setup-react-native-safe-area-context) in the setup guide before using `Header`.

Headers are navigation components that display information and actions relating
to the current screen.

<img alt="Header" src={useBaseUrl('img/header.png')} />

## Usage

### Header with default components

For quick setup we provide default components, which are React Native Elements
Icon for left/right buttons and React Native Text for title. You can customize
them with configuration objects passed in as props.

```js
<Header
  leftComponent={{ icon: 'menu', color: '#fff', iconStyle: { color: '#fff' } }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
```

### Left aligned center component

<img alt="Header" src={useBaseUrl('img/header-left.png')} />

```js
<Header
  placement="left"
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
```

### Header with custom components passed in through props

You can pass in your custom components like this too.

```js
<Header
  leftComponent={<MyCustomLeftComponent />}
  centerComponent={<MyCustomCenterComponent />}
  rightComponent={<MyCustomRightComponent />}
/>
```

### Header with mixed components

You can also mix the content, for example you can have default components
defined by configuration combined with custom components. Passing a render
function that returns a React Element is valid too.

```js
<Header
  leftComponent={<MyCustomLeftComponent />}
  centerComponent={this.renderCenterComponent()}
  rightComponent={{ icon: 'home', style: { color: '#fff' } }}
/>
```

### Header with custom components passed in as children

```js
<Header>
  <MyCustomLeftComponent />
  <MyCustomCenterComponent />
  <MyCustomRightComponent />
</Header>
```

### Component precedence

Components defined through children take precedence over components passed in as props, so in this case `<MyCustomLeftComponent>` will be rendered instead of `leftComponent={{ icon: 'menu' }}`.

```js
<Header leftComponent={{ icon: 'menu' }}>
  <MyCustomLeftComponent />
  <MyCustomCenterComponent />
  <MyCustomRightComponent />
</Header>
```

### Header customisability

We wanted the Header to be as customisable as possible, so you are free to try
different combinations of props. For example, if you want to change the left,
center, or right component's layout, you can adjust the `containerStyle`

```js
<Header
  statusBarProps={{ barStyle: 'light-content' }}
  barStyle="light-content" // or directly
  leftComponent={<MyCustomLeftComponent />}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  containerStyle={{
    backgroundColor: '#3D6DCC',
    justifyContent: 'space-around',
  }}
/>
```

---

<Props />

---

## LinearGradient Usage

Using LinearGradient in React Native Elements is supported through the
[react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)
package. If you're using expo or create-react-native-app then you can use
`linearGradientProps` prop right out the box with no additional setup.

For react-native-cli users, make sure to follow the
[installation instructions](https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project)
and use it like this:

```jsx
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

...

<Header
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
/>
```
