---
id: textsegment
title: TextSegment
---

![TextSegment](https://github.com/suwu150/static-resource/blob/master/images/react-native/react-native-text-segment.gif?raw=true)

```js
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
- [`postTextPress`](#postTextPress)
- [`preDelimiterTextStyle`](#preDelimiterTextStyle)
- [`preTextPress`](#preTextPress)
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

### `postTextPress`

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

### `preTextPress`

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
