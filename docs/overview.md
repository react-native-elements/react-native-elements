---
id: overview
title: Overview
---

This section of the documentation describes the props and examples for all the
components from React Native Elements.

## Using React Native Elements

The components in this library have a single theme running through them. From
one central location, we can update the colours used in all components. While
this was great for the developers of the library, the actual users also needed a
way to use this feature.

But why stop at colours? Why not allow the props of every component to be
defined in one central place? And so the idea behind theming with React Native
Elements was born!

> **To use any component, you'll need to wrap them in the `ThemeProvider` (even
> if you dont want to use custom theming)**. You'll only need to do this once in
> your app.

```jsx
import { Button, ThemeProvider } from 'react-native-elements';

const MyApp = () => {
  return (
    <ThemeProvider>
      <Button title="Hey!" />
    </ThemeProvider>
  );
};
```

If you want to customize the theme, or use it with your own components — be sure
to check out the docs on [Customization](customization.md).
