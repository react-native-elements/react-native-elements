---
id: tooltip
title: Tooltip
---

import Props from './props/tooltip.md'

Tooltips display informative text when users tap on an element.

<img src="/img/tooltipExample.gif" alt="tooltip example gif" width="290" />

## Usage

```js
import { Tooltip, Text } from 'react-native-elements';

...

<Tooltip popover={<Text>Info here</Text>}>
  <Text>Press me</Text>
</Tooltip>
```

> Web-platform specific note:
>
> You **must** pass a valid React Native [`Modal`](https://reactnative.dev/docs/modal) component implementation
> into [`ModalComponent`](#modalcomponent) prop because `Modal` component is not implemented yet in `react-native-web`

```js
...
import Modal from 'modal-react-native-web';

...

<Tooltip ModalComponent={Modal} ... />
...
```

---

<Props />

---
