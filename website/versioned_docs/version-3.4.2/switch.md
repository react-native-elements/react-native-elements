---
id: switch
title: Switch
---

import Props from './props/switch.md'

Switch represents user's decision of a process and indicates whether a state is on/off. Switch is a controlled component that requires an `onValueChange` to update the `value` prop. This renders a `boolean` value. React native elements provide you with additional `theme` and `color` support in the Switch Button.

<div className="component-preview component-preview--grid component-preview--grid-3">
   <figure>
    <img src="/img/switch_gif.gif" alt="Switch" height="130px"/>
    <figcaption>Switch</figcaption>
  </figure>
</div>

## Usage

```js
import { Switch } from 'react-native-elements';
```

```js
<Switch value={true} />

<Switch value={false} color="orange" />

```

---

<Props />

---
