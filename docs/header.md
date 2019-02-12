---
id: header
title: Header
---

Headers are navigation components that display information and actions relating
to the current screen.

![Header](/react-native-elements/img/header.png)

## Usage

### Header with default components

For quick setup we provide default components, which are React Native Elements
Icon for left/right buttons and React Native Text for title. You can customize
them with configuration objects passed in as props.

```js
<Header
  leftComponent={{ icon: 'menu', color: '#fff' }}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
  rightComponent={{ icon: 'home', color: '#fff' }}
/>
```

### Left aligned center component

![Header](/react-native-elements/img/header-left.png)

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

Components defined through props take precedence over components passed in as
children, so in this case only the left component with icon set to home will be
rendered.

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

## Props

- [`containerStyle`](#containerstyle)
- [`backgroundColor`](#backgroundcolor)
- [`backgroundImage`](#backgroundimage)
- [`backgroundImageStyle`](#backgroundimagestyle)
- [`leftComponent`](#leftcomponent)
- [`centerComponent`](#centercomponent)
- [`rightComponent`](#rightcomponent)
- [`leftContainerStyle`](#leftcontainerstyle)
- [`centerContainerStyle`](#centercontainerstyle)
- [`rightContainerStyle`](#rightcontainerstyle)
- [`placement`](#placement)
- [`barStyle`](#barstyle)
- [`statusBarProps`](#statusbarprops)

---

## Reference

### `containerStyle`

styling around the main container

| Type  | Default |
| :---: | :-----: |
| style |  none   |

---

### `backgroundColor`

sets backgroundColor of the parent component

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `backgroundImage`

sets backgroundImage for parent component

|      Type      | Default |
| :------------: | :-----: |
| object (image) |  none   |

---

### `backgroundImageStyle`

styling for backgroundImage in the main container

| Type  | Default |
| :---: | :-----: |
| style |  none   |

---

### `leftComponent`

define your left component here

|                                                                                                                     Type                                                                                                                     | Default |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| { text: string, [...Text props](https://facebook.github.io/react-native/docs/text.html#props)}<br/>**OR**<br/>{ icon: string, [...Icon props](/react-native-elements/docs/icon.html#icon-props)} <br/>**OR**<br/> React element or component |  none   |

---

### `centerComponent`

define your center component here

|                                                                                                                     Type                                                                                                                     | Default |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| { text: string, [...Text props](https://facebook.github.io/react-native/docs/text.html#props)}<br/>**OR**<br/>{ icon: string, [...Icon props](/react-native-elements/docs/icon.html#icon-props)} <br/>**OR**<br/> React element or component |  none   |

---

### `rightComponent`

define your right component here

|                                                                                                                     Type                                                                                                                     | Default |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| { text: string, [...Text props](https://facebook.github.io/react-native/docs/text.html#props)}<br/>**OR**<br/>{ icon: string, [...Icon props](/react-native-elements/docs/icon.html#icon-props)} <br/>**OR**<br/> React element or component |  none   |

---

### `leftContainerStyle`

styling for container around the leftComponent

| Type  |   Default   |
| :---: | :---------: |
| style | { flex: 1 } |

---

### `centerContainerStyle`

styling for container around the centerComponent

| Type  |   Default   |
| :---: | :---------: |
| style | { flex: 3 } |

---

### `rightContainerStyle`

styling for container around the rightComponent

| Type  |   Default   |
| :---: | :---------: |
| style | { flex: 1 } |

---

### `placement`

Alignment for title

|            Type             | Default  |
| :-------------------------: | :------: |
| 'left', 'center' or 'right' | 'center' |

---

### `barStyle`

Sets the color of the status bar text.

|                    Type                    |                                          Default                                           |
| :----------------------------------------: | :----------------------------------------------------------------------------------------: |
| 'default', 'light-content', 'dark-content' | 'default' ([source](https://facebook.github.io/react-native/docs/statusbar.html#barstyle)) |

---

### `statusBarProps`

accepts all props for StatusBar

|                                            Type                                             | Default |
| :-----------------------------------------------------------------------------------------: | :-----: |
| { [...StatusBar props](https://facebook.github.io/react-native/docs/statusbar.html#props) } |  none   |
