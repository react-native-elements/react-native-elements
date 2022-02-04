---
id: usage
title: Usage
---

This section of the documentation describes the props and examples for all the
components from React Native Elements. Please take some time and explore all of the components that are at your disposal!

## Quick start

Here's a quick example to get you started, **it's literally all you need:**

```ts
import { Button } from '@react-native-elements/base';

const App = () => {
  return <Button title="Hello World" />;
};
```

## Using React Native Elements

The components in this library have a single theme running through them. From
one central location, we can update the colours used in all components. While
this was great for the developers of the library, the actual users also needed a
way to use this feature.

But why stop at colours? Why not allow the props of every component to be
defined in one central place? And so the idea behind theming with React Native
Elements was born!

```jsx
import { Button, ThemeProvider } from '@react-native-elements/themed';

const MyApp = () => {
  return (
    <ThemeProvider>
      <Button title="Hey!" />
    </ThemeProvider>
  );
};
```

To customize the theme, or use it within your own components, be sure to check
the docs on [Customization](customization.md).
