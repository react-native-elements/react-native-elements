---
id: dialog
title: Dialog
---

import Props from './props/dialog.md'

Dialogs inform users about a task and can contain critical information, require decisions, or involve multiple tasks. You can wrap any component with a simple Dialog component to display quick information to the user.

<div className="component-preview component-preview--grid component-preview--grid-3">
  <figure>
    <img src="/img/dialog/dialog--simple.jpg" alt="Simple Dialog" />
    <figcaption>Simple</figcaption>
  </figure>
  <figure>
  <img src="/img/dialog/dialog--multi.jpg" alt="Multi Action Dialog" />
    <figcaption>Multi Action</figcaption>
  </figure>
  <figure>
  <img src="/img/dialog/dialog--noaction.jpg" alt="Buttonless Dialog" />
    <figcaption>No Action</figcaption>
  </figure>
</div>
<div className="component-preview component-preview--grid component-preview--grid-3">
  <figure>
    <img src="/img/dialog/dialog--loading.gif" alt="Loading Dialog" />
    <figcaption>Loading</figcaption>
  </figure>
  <figure>
  <img src="/img/dialog/dialog--custom1.gif" alt="Custom Multi Action" />
    <figcaption>Custom Multi Action</figcaption>
  </figure>
  <figure>
  <img src="/img/dialog/dialog--custom2.gif" alt="Custom No Action" />
    <figcaption>Custom No Action</figcaption>
  </figure>
</div>

## Usage

```jsx
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Dialog, Button } from 'react-native-elements';

const DialogExample = () => {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);
  const [visible3, setVisible3] = useState(false);

  const toggleDialog1 = () => {
    setVisible1(!visible1);
  };
  const toggleDialog2 = () => {
    setVisible2(!visible2);
  };
  const toggleDialog3 = () => {
    setVisible3(!visible3);
  };

  return (
    <View>
      <Button title="Open Simple Dialog" onPress={toggleDialog1} />
      <Button
        title="Open Mutli Action Dialog"
        onPress={toggleDialog2}
        buttonStyle={styles.button}
      />
      <Button
        title="Open Loading Dialog"
        onPress={toggleDialog3}
        buttonStyle={styles.button}
      />
      // Simple Dialog
      <Dialog isVisible={visible1} onBackdropPress={toggleDialog1}>
        <Dialog.Title title="Dialog Title" />
        <Text>Dialog body text. Add relevant information here.</Text>
      </Dialog>
      // Multi-Action Dialog
      <Dialog isVisible={visible2} onBackdropPress={toggleDialog2}>
        <Dialog.Title title="Dialog Title" />
        <Text>Dialog body text. Add relevant information here.</Text>
        <Dialog.Actions>
          <Dialog.Button
            title="ACTION 1"
            onPress={() => console.log('Primary Action Clicked!')}
          />
          <Dialog.Button
            title="ACTION 2"
            onPress={() => console.log('Secondary Action Clicked!')}
          />
        </Dialog.Actions>
      </Dialog>
      // Loading Dialog
      <Dialog isVisible={visible3} onBackdropPress={toggleDialog3}>
        <Dialog.Loading />
      </Dialog>
    </View>
  );
};
```

> Web-platform specific note:
>
> You **must** pass a valid React Native [`Modal`](https://reactnative.dev/docs/modal) component implementation
> into [`ModalComponent`](#modalcomponent) prop because `Modal` component is not implemented yet in `react-native-web`

```jsx
...
import Modal from 'modal-react-native-web';

...

<Dialog ModalComponent={Modal} ... />
...
```

---

<Props />

---
