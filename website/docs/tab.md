---
id: tab
title: Tabs
---

import Props from './props/tab.md'

Tabs organize content across different screens, data sets, and other interactions.

<div className="component-preview component-preview--grid component-preview--grid-10">
  <figure>
    <img src="/img/tab.jpg" alt="Floating Action Button" />
  </figure>
</div>

## Usage

```js
import { Tab } from 'react-native-elements';
```

```js
<Tab value={0}>
  <Tab.Item title="recent" />
  <Tab.Item title="favourite" />
  <Tab.Item title="cart" />
</Tab>
<Tab.Panel value={0}>
  <Tab.View/>
  <Tab.View/>
  <Tab.View/>
</Tab.Panel>
```

---

<Props />

---
