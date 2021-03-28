---
id: skeleton
title: Skeleton
---

import Props from './props/skeleton.md'

Skeleton loaders are a kind of loader components
to show the markup before the content will be loaded.
It's a pretty flexible component could be shown
instead of images, texts, avatars etc.

<img src="/img/skeleton-example.gif" alt="skeleton example gif" width="300" />

## Usage

**Attention!**

The library `react-native-linear-gradient` is necessary to include for properly work of component.
Also, don't forget to pass it through `ViewComponent` prop:

```js
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const ExampleComponent = ({ loading }) => {
  return (
    <View>
      {loading ? <Skeleton ViewComponent={LinearGradient} /> : <AnyComponent />}
    </View>
  );
};
```

Mainly, for default and simply configuration it's enough.

For advanced usage see props section for more details.

## Usage with ThemeProvider

_Tip_: prefer this method to configure all general styles, props and
`ViewComponent` prop as well to avoid duplicates in your code:

```js
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const App = ({ loading }) => {
  return (
    <ThemeProvider
      theme={{
        Skeleton: {
          ViewComponent: LinearGradient,
          duration: 2500,
          easingType: 'linear',
        },
      }}
    >
      <TheRestOfMyAppHere />
    </ThemeProvider>
  );
};
```

---

<Props />

---
