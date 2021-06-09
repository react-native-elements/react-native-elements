---
id: divider
title: Divider
---

import Props from './props/divider.md'

Dividers are visual separators of content. Use Divider when you want to make a
distinction between sections of content.

## Usage

```js
import { Divider } from 'react-native-elements';

<Divider orientation="horizontal" />;

<Divider orientation="vertical" width={5} />;

<Divider inset={true} insetType="middle" />;

<Divider
  orientation="horizontal"
  subHeader="Test"
  subHeaderStyle={{ color: 'blue' }}
/>;
```

---

<Props />

---
