---
id: tab
title: Tabs
slug: /tab
---

import Props from './props/tab.md'

Tabs organize content across different screens, data sets, and other interactions.

<div className="component-preview component-preview--grid component-preview--grid-10">
  <figure>
    <img src="/img/tab.jpg" alt="Floating Action Button" />
  </figure>
</div>

## Usage

```SnackPlayer name=RNE Tabs
import React from 'react';
import { Tab, TabView, Text } from 'react-native-elements';

export default () => {
  const [index, setIndex] = React.useState(0);
  return (
    <>
      <Tab value={index} onChange={setIndex}>
        <Tab.Item title="recent" />
        <Tab.Item title="favorite" />
        <Tab.Item title="cart" />
      </Tab>

      <TabView value={index} onChange={setIndex}>
        <TabView.Item style={{ backgroundColor: 'red', width: '100%' }}>
          <Text h1>Recent</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'blue', width: '100%' }}>
          <Text h1>Favorite</Text>
        </TabView.Item>
        <TabView.Item style={{ backgroundColor: 'green', width: '100%' }}>
          <Text h1>Cart</Text>
        </TabView.Item>
      </TabView>
    </>
  );
};
```

---

<Props />

---
