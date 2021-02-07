---
id: bottomsheet
title: Bottom Sheet
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Props from './props/bottomsheet.md'

**Note:**
Make sure that you have completed [Step 3](getting_started.md#step-3-setup-react-native-safe-area-context) in the setup guide before using `BottomSheet`.

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

<BottomSheet
  isVisible={isVisible}
  containerStyle={{ backgroundColor: 'rgba(0.5, 0.25, 0, 0.2)' }}
>
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

<Props />

---
