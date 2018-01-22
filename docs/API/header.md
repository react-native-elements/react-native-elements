![Header](https://raw.githubusercontent.com/react-native-training/react-native-elements/master/docs/images/header.png)

### Header with default components

For quick setup we provide default components, which are React Native Elements Icon for left/right buttons and React Native Text for title. You can customize them with configuration objects passed in as props.

```js
<Header
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

You can also mix the content, for example you can have default components defined by configuration combined with custom components. Passing a render function that returns a React Element is valid too.

```js
<Header
  leftComponent={<MyCustomLeftComponent />}
  centerComponent={this.renderCenterComponent()}
  rightComponent={{ icon: 'home', style: { color: '#fff'} }}
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

Components defined through props take precedence over components passed in as children, so in this case only the left component with icon set to home will be rendered.

```js
<Header
  leftComponent={{ icon: 'menu' }}
>
  <MyCustomLeftComponent />
  <MyCustomCenterComponent />
  <MyCustomRightComponent />
</Header>
```

### Header customisability

We wanted the Header to be as customisable as possible, so you are free to try different combinations of props. For example, if you want to change the left, center, or right component's layout, you can adjust the ` innerContainerStyles `

```js
<Header
  statusBarProps={{ barStyle: 'light-content' }}
  leftComponent={<MyCustomLeftComponent />}
  centerComponent={{ text: 'MY TITLE', style: { color: '#fff'} }}
  outerContainerStyles={{ backgroundColor: '#3D6DCC' }}
  innerContainerStyles={{ justifyContent: 'space-around',}}
/>
```


### Header Props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| statusBarProps | none | object (props) | accepts all props for StatusBar |
| leftComponent | none | configuration object for default component (icon: string, ...props for React Native Elements Icon) or a valid React Element | define your left component here |
| centerComponent | none | configuration object for default component (text: string, ...props for React Native Text component) valid React Element | define your center component here |
| rightComponent | none | configuration object for default component (icon: string, ...props for React Native Elements Icon component) or a valid React Element | define your right component here |
| backgroundColor | none | string | sets backgroundColor of the parent component |
| outerContainerStyles | [source](https://github.com/react-native-training/react-native-elements/blob/1f06e20e7742b87be696cf3921979afdfdd87315/src/header/Header.js#L91) | object (style) | styling for outer container |
| innerContainerStyles | [source](https://github.com/react-native-training/react-native-elements/blob/1f06e20e7742b87be696cf3921979afdfdd87315/src/header/Header.js#L85) | object (style) | styling for inner container |
