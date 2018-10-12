---
id: version-1.0.0-beta7-customization
title: Customization
original_id: customization
---

Congrats! You've installed React Native Elements and your immediate question
goes something like this:

> So umm, how I do change how it looks?

Great question! A UI Kit wouldn't be that useful if the apps everyone built
looked the same right? For this case React Native Elements provide a number of
props on each component to enable you to style them how you want.

## Component Styles

_Every_ component from React Native Elements has a container around it. The
container is just a traditional `<View />` from react native that has some
styling on it. This default styling prevents components from colliding with each
other. If you want to change how two components react to each on the screen your
first stop should be the `containerStyle` prop.

Similar to `containerStyle`, components may provide their custom style props
like `buttonStyle`, `titleStyle` etc. Always refer to the documentation for the
component to find out which style props it provides.

## Theming

While component styles are great for single use, you may want to have the same
styling for every instance of a component. For example, you may want all your
buttons to be blue or have the same font. Here are some ways to reuse styles
with React Native Elements.

### Using Composition

With this approach, we create one component with the styles we want and use that
instead of the built-in component.

```jsx
import React from 'react';
import { Button } from 'react-native-elements';

const RaisedButton = props => <Button raised {...props} />;

// Your App
const App = () => {
  return <RaisedButton title="Yea" />;
};
```

If we want to use a button that's raised in our app, we can use `RaisedButton`
instead of using `Button`. This component still accepts all the props from the
normal `Button` just that it has the `raised` prop set by default.

### Using ThemeProvider

The previous solution works great for only one component, but imagine having to
do this for every component you want custom styles for. That could get a bit
tedious to manage. Thankfully, there's a better way to do this. React Native
Elements ships with a 3 utilities for large-scale theming.

Firstly you'll want to set up your `ThemeProvider`.

```jsx
import { ThemeProvider, Button } from 'react-native-elements';

const theme = {
  Button: {
    raised: true,
  },
};

// Your App
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Button title="My Button" />
      <Button title="My 2nd Button" />
    </ThemeProvider>
  );
};
```

The example above acheives the same goals as the first example — apply the same
styles to multiple instances of `Button` in the app. However this example
applies the `raised` prop to every instance of `Button` inside the component
tree under `ThemeProvider`. Both of these buttons will have the `raised` prop
set to true.

This is extremely convenient and is made possible through
[React's Context API](https://reactjs.org/docs/context.html).

---

### Order of Styles

What happens now if we want a `Button` that isn't raised? To do that we have to
the understand the order in which styles are applied.

> Internal > Theme > External

#### Internal

Internal components styles are the styles which are defined in the component
file. These are applied first.

#### Theme

Theme styles are the values that are set by the ThemeProvider If present, these
are applied second.

```jsx
import { ThemeProvider, Button } from 'react-native-elements';

const theme = {
  Button: {
    titleStyle: {
      color: 'red',
    },
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card title="My Button" />
    </ThemeProvider>
  );
};
```

This will override the white color for the title set in the component's style.

#### External

External styles are the styles which are set through the component props. These
are applied last and have the highest precendence.

```jsx
import { ThemeProvider, Button } from 'react-native-elements';

const theme = {
  Button: {
    titleStyle: {
      color: 'red',
    },
  },
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Card title="My Button" titleStyle={{ color: 'pink' }} />
    </ThemeProvider>
  );
};
```

This will override both the white color for the title set in the component's
style as well as the red color set in the theme.

> Remember if you want to override the values set in the theme you can always
> use component props.

---

### The Theme Object

By default, the theme object looks like this. You can add whatever values you
want to the theme, and they will be merged with the default.

```tsx
interface theme {
  colors: {
    primary;
    secondary;
    grey0;
    grey1;
    grey2;
    grey3;
    grey4;
    grey5;
    greyOutline;
    searchBg;
    error;
    divider;
  };
}
```

Setting styles in the theme is as simple as using the name of the component, as
a key and the props you want to change as the value.

```jsx
import { ThemeProvider } from 'react-native-elements';

const theme = {
  Avatar: {
    rounded: true,
  },
  Badge: {
    textStyle: { fontSize: 30 },
  },
};

...

<ThemeProvider theme={theme}>
```

---

### Using the theme in your own components

You may want to make use of the theming utilities in your own components. For
this you can use the `withTheme` HOC exported from this library. It adds two
props to the component it wraps - `theme` and `updateTheme`.

```jsx
import React from 'react';
import { Text } from 'react-native';
import { withTheme } from 'react-native-elements';

function MyComponent(props) {
  const { colors, updateTheme } = props.theme;
  return <Text style={{ color: colors.primary }}>Yo!</Text>;
}

export default withTheme(MyComponent);
```

The `updateTheme` merges the theme passed in with the current theme.

```jsx
const theme = {
  colors: {
    primary: 'pink',
  },
};

// We can update the primary color
updateTheme({ colors: { primary: 'red' } });
```

Don't want to wrap your components? You can use the `ThemeConsumer` component
which uses render props!

```jsx
import React from 'react';
import { Text } from 'react-native';
import { ThemeConsumer } from 'react-native-elements';

const MyComponent = () => (
  <ThemeConsumer>
    {({ theme }) => (
      <Text style={{ color: theme.colors.primary }}>Yo!</Text>;
    )}
  </ThemeConsumer>
)
```
