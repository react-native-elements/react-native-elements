---
id: speeddial
title: Speed Dial
---

import Props from './props/speeddial.md'

When pressed, a floating action button can display three to six related actions in the form of a speed dial. If more than six actions are needed, something other than a FAB should be used to present them. Upon press, the FAB remains visible and emits a stack of related actions. If the FAB is tapped in this state, it should either initiate its default action or close the speed dial actions.

<div className="component-preview component-preview--grid component-preview--grid-10">
  <figure>
    <img src="/img/SpeedDial.gif" alt="Speed Dial" />
  </figure>
</div>

## Usage

```js
import { SpeedDial } from 'react-native-elements';
```

```js
<SpeedDial
  isOpen={open}
  icon={{ name: 'edit', color: '#fff' }}
  openIcon={{ name: 'close', color: '#fff' }}
  onOpen={() => setOpen(!open)}
  onClose={() => setOpen(!open)}
>
  <SpeedDial.Action
    icon={{ name: 'add', color: '#fff' }}
    title="Add"
    onPress={() => console.log('Add Something')}
  />
  <SpeedDial.Action
    icon={{ name: 'delete', color: '#fff' }}
    title="Delete"
    onPress={() => console.log('Delete Something')}
  />
</SpeedDial>
```

---

## Props

<Props />

---

## Child Components

### SpeedDial.Action

> Receives all [FAB](fab.md#props) props.
