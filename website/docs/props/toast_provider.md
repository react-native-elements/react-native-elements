## Props

- [`duration`](#duration)
- [`maxMessages`](#maxmessages)
- [`position`](#position)
- [`containerToastStyle`](#containertoaststyle)
- [`containerMessageStyle`](#containermessagestyle)
- [`textMessageStyle`](#textmessagestyle)
- [`textMessageProps`](#textmessageprops)

## Reference

### `duration`

How long message will be visible on the screen (in milliseconds)

|  Type  | Default |
| :----: | :-----: |
| number |  2000   |

---

### `maxMessages`

How many messages can be displayed on the screen at the same time

|  Type  | Default |
| :----: | :-----: |
| number |    5    |

---

### `position`

The position of toast component

|       Type        | Default |
| :---------------: | :-----: |
| 'top' or 'bottom' |  'top'  |

---

### `containerToastStyle`

Styles for toast container element

|          Type           | Default |
| :---------------------: | :-----: |
| object typeof ViewStyle |   {}    |

---

### `containerMessageStyle`

Styles for particular container of message element

|                          Type                           | Default |
| :-----------------------------------------------------: | :-----: |
| object typeof [ViewStyleWithTypes](#viewstylewithprops) |   {}    |

---

### `textMessageStyle`

Props for particular text of message element

|                          Type                           | Default |
| :-----------------------------------------------------: | :-----: |
| object typeof [TextStyleWithTypes](#textstylewithtypes) |   {}    |

---

### `textMessageProps`

Styling for toast component

|          Type           | Default |
| :---------------------: | :-----: |
| object typeof TextProps |   {}    |

---

### Explanation to types

### `ViewStyleWithProps`

```ts
import { ViewStyle } from 'react-native';

type ViewStyleWithProps = ViewStyle & {
  info?: ViewStyle;
  error?: ViewStyle;
  warning?: ViewStyle;
  success?: ViewStyle;
};
```

### `TextStyleWithTypes`

```ts
import { TextStyle } from 'react-native';

type ViewStyleWithProps = TextStyle & {
  info?: TextStyle;
  error?: TextStyle;
  warning?: TextStyle;
  success?: TextStyle;
};
```
