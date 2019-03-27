---
id: textsegment
title: TextSegment
---

<img src="/react-native-elements/img/text-segment.gif" width="300" >
<img src="https://user-images.githubusercontent.com/7840686/54508802-5f5ae500-4904-11e9-9721-6b1ab6353891.png" width="300" >
<img src="https://user-images.githubusercontent.com/7840686/54508803-5f5ae500-4904-11e9-9c1f-b05204f9b4bd.png" width="300" >

```jsx
import TextSegment from 'react-native-elements';

   ...
  render() {
    return (
      <TextSegment
        delimiter={'.'}
        delimiterStyle={{ fontSize: 18, color: '#fd7251' }}
        postDelimiterTextStyle={{ fontSize: 12, color: '#fd7251' }}
        preDelimiterTextStyle={{ fontSize: 18, color: '#fd7251' }}
        value={'9.02%'}
      />
    );
  }
```

or

```js
const array = [
  { value: '10.01%' },
  { value: '99.02%' },
  { value: '96.02%' },
  { value: '9.02%' },
];
array.map(item => {
  return (
    <TextSegment
      delimiter={'.'}
      delimiterStyle={{ fontSize: 18, color: '#fd7251' }}
      preDelimiterTextStyle={{ fontSize: 12, color: '#fd7251' }}
      postDelimiterTextStyle={{ fontSize: 18, color: '#fd7251' }}
      value={item.value}
    />
  );
});
```

---

### Props

- [`delimiter`](#delimiter)
- [`delimiterStyle`](#delimiterStyle)
- [`postDelimiterTextStyle`](#postDelimiterTextStyle)
- [`postDelimiterOnPress`](#postDelimiterOnPress)
- [`preDelimiterTextStyle`](#preDelimiterTextStyle)
- [`preDelimiterOnPress`](#preDelimiterOnPress)
- [`style`](#style)
- [`value`](#value)

---

# Reference

### `postDelimiterTextStyle`

Text style for character follwing delimeter.

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `postDelimiterOnPress`

Split the click event after the string。

| Type  | Default |
| :---: | :-----: |
| touch |  none   |

---

### `delimiter`

sequence of one or more characters used to specify the boundary between separation

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `delimiterStyle`

delimiter style

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `preDelimiterTextStyle`

Style for characters preceding delimeter.

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `preDelimiterOnPress`

Click on the click event of the string in front of the split point.

| Type  | Default |
| :---: | :-----: |
| touch |  none   |

---

### `containerStyle`

container style

|      Type      |          Default           |
| :------------: | :------------------------: |
| object (style) | { alignItems: 'flex-end' } |

---

### `value`

the string that needs to be split

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---
