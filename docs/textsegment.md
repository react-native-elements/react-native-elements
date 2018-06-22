---
id: textsegment
title: TextSegment
---

![TextSegment](/react-native-elements/img/text-segment.gif)


```js
import TextSegment from 'react-native-elements';

   ...
  render() {
    return (
      <TextSegment
        behindStyle={{ fontSize: 12, color: '#fd7251' }}
        delimiter={'.'}
        delimiterStyle={{ fontSize: 18, color: '#fd7251' }}
        frontStyle={{ fontSize: 18, color: '#fd7251' }}
        value={'9.02%'}
      />
    );
  }
```
or
```js
const array = [{value: '10.01%' }, {value: '99.02%' }, {value: '96.02%' }, {value: '9.02%' }];
array.map(item => {
  return (
     <TextSegment
        behindStyle={{ fontSize: 12, color: '#fd7251' }}
        delimiter={'.'}
        delimiterStyle={{ fontSize: 18, color: '#fd7251' }}
        frontStyle={{ fontSize: 18, color: '#fd7251' }}
        value={item.value}
       />
   );
})   
```
---

### Props

* [`behindStyle`](#behindStyle)
* [`delimiter`](#delimiter)
* [`delimiterStyle`](#delimiterStyle)
* [`frontStyle`](#frontStyle)
* [`style`](#style)
* [`value`](#value)


---

# Reference


### `behindStyle`

The style behind the split symbol in the string

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `delimiter`

sequence of one or more characters used to specify the boundary between separation

|  Type   | Default |
| :-----: | :-----: |
| string |  none   |

---

### `delimiterStyle`

delimiter style

|  Type   | Default |
| :-----: | :-----: |
| object (style) |  none   |

---

### `frontStyle`

The style in the string before the split symbol

|  Type   | Default |
| :-----: | :-----: |
| object (style) |  none   |

---


### `style`

container style

|  Type   | Default |
| :-----: | :-----: |
| object (style) |  { alignItems: 'flex-end' }   |

---

### `value`

the string that needs to be split

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

