---
id: bottomsheet
title: Bottom Sheet
---

import useBaseUrl from '@docusaurus/useBaseUrl';

Overlay Modal that displays content from the bottom of the screen.

<img src={useBaseUrl('img/bottomsheet.gif')} alt="Bottom Sheet Component" />

## Usage

```js
const [isVisible, setIsVisible] = useState(false);
const list = [
  { title: 'List Item 1' },
  { title: 'List Item 2' },
  {
    title: 'Cancel',
    containerStyle: { backgroundColor: 'red' },
    titleStyle: { color: 'white' },
    onPress: () => setIsVisible(false),
  },
];

<BottomSheet isVisible={isVisible}>
  {list.map((l, i) => (
    <ListItem key={i} containerStyle={l.containerStyle} onPress={l.onPress}>
      <ListItem.Content>
        <ListItem.Title style={l.titleStyle}>{l.title}</ListItem.Title>
      </ListItem.Content>
    </ListItem>
  ))}
</BottomSheet>;
```

---

## Props

- [`isVisible`](#isvisible)
- [`modalProps`](#modalprops)

---

## Reference

### `isVisible`

Is the modal component shown

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `modalProps`

Additional props handed to the `Modal`

|                             Type                             | Default |
| :----------------------------------------------------------: | :-----: |
| [Modal Props](https://reactnative.dev/docs/modal.html#props) |   {}    |
