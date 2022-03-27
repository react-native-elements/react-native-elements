---
id: migration_guide
title: Migration Guide
---

# Migrating to v4

React Native Elements v4 introduces many features including few new components, fully typescript support and some breaking changes whose migration is being given below.

:::caution Installation Guide
This version is published on GitHub Package registry, Please refer [Installation Guide](installation) first
:::

## Core changes

To use the v4 version, you first need to update the package names:

```diff
- import {} from 'react-native-elements'
+ import {} from '@rneui/themed'
```

You can install the packages from npm or yarn

```bash
npm install @rneui/base @rneui/themed

# or with yarn
yarn add @rneui/base @rneui/themed
```

You can also make `alias` for package to help you with migration.

```bash
yarn add react-native-elements@npm:@rneui/themed
```

### Pressable

These components are now using `Pressable` instead of `Touchable`

- Avatar
- Badge
- ButtonGroup
- CheckBox
- Icon
- Image
- ListItem
- SearchBar
- SpeedDial
- Tile

> [Pressable](https://reactnative.dev/docs/pressable) is a Core Component wrapper that can detect various stages of press interactions on any of its defined children.

This change would let you use `onPressIn` & `onPressOut` APIs in components, For example

```diff
  <CheckBox
    title="I agree"
    onPress={()=>{}}
    onLongPress={()=>{}}
+   onPressIn={()=>{}}
+   onPressOut={()=>{}}
    onPress={() => {}}
  />
```

and the rest of props for `Pressable` can be added via `pressableProps` API

```diff
  <ButtonGroup
+   pressableProps={{android_ripple:{radius:2}}}
  />
```

few other props (like `underlayColor`) will not be supported, you can remove them.

## Components

### `ThemeProvider`

Please make sure that `ThemeProvider` is defined at the root of your application (even if you are using the default theme) and `NO` useStyles or useTheme is called before `<ThemeProvider>`

```diff
- <ThemeProvider theme={myTheme} useDark={false}>
+ <ThemeProvider theme={myTheme}>
     <Button title="My Button" />
   </ThemeProvider>
```

Create custom theme using `createTheme` helper

```diff
- const myTheme: FullTheme = {
+ const myTheme = createTheme({
   colors: {
     primary: '#f2f2f2',
   },
+ darkColors: {
+   primary: '#121212',
+ },
+ mode: 'dark',
};
```

Since `useDark` is deprecated, you can switch `dark` and `light` themeColors using `updateTheme` function which can be access from `useTheme` hook.

Complete example of root of our application

```jsx title='App.tsx'
import { ThemeProvider, Button, createTheme } from '@rneui/themed';

const myTheme = createTheme({
  colors: {
    primary: '#f2f2f2',
  },
  darkColors: {
    primary: '#121212',
  },
  mode: 'dark',
});

const App = () => {
  return (
    <ThemeProvider theme={myTheme}>
      <Button title="My Button" />
    </ThemeProvider>
  );
};
```

### `Tooltip`

`Tooltip` is one of core component of RNE, Since v4 this component would be stateless and would use `visible`, `onOpen` & `onClose` Props for its working

```diff
  <Tooltip
+   visible={open}
+   onOpen={() => {
+      setOpen(true);
+   }}
+   onClose={() => {
+      setOpen(false);
+   }}
    popover="Hey All"
  />
```

You can still use Tooltip as stateful component by doing:

```js
const ControlledTooltip: React.FC<TooltipProps> = (props) => {
  const [open, setOpen] = React.useState(false);
  return (
    <Tooltip
      visible={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      {...props}
    />
  );
};
```
