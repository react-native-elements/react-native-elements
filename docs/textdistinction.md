---
id: text-distinction
title: text-distinction
---

![Text-Distinction](/react-native-elements/img/text_distion.gif)

```js
import TextDistinction from 'react-native-elements';

   ...
  render() {
    return (
        <TextDistinction
          value={'9.02%'}
          delimiter={'.'}
          frontStyle={{ fontSize: 18, color: '#fd7251' }}
          delimiterStyle={{ fontSize: 18, color: '#fd7251' }}
          behindStyle={{ fontSize: 12, color: '#fd7251' }}
        />
    );
  }
```

---

### Props

|Props|Explain|type|require|default|          
|:-------|:--------|:--------|:-------|:----------|
|value|the string that needs to be split|string|yes|''|       
|delimiter|split string|string|no|no|     
|style|container style|object|no|{ alignItems: 'flex-end' }|     
|frontStyle|The style in the string before the split symbol|object|no|no|  
|delimiterStyle|Split symbol style|object|no|no|     
|behindStyle|The style behind the split symbol in the string|object|no|{}|     


* [`value`](#value)
* [`delimiter`](#delimiter)
* [`style`](#style)
* [`frontStyle`](#frontStyle)
* [`delimiterStyle`](#delimiterStyle)
* [`behindStyle`](#behindStyle)

---

# Reference

### `value`

the string that needs to be split

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `delimiter`

split string

|  Type   | Default |
| :-----: | :-----: |
| string |  none   |

---

### `style`

container style

|  Type   | Default |
| :-----: | :-----: |
| object (style) |  { alignItems: 'flex-end' }   |

---

### `frontStyle`

The style in the string before the split symbol

|  Type   | Default |
| :-----: | :-----: |
| object (style) |  none   |

---

### `delimiterStyle`

Split symbol style

|  Type   | Default |
| :-----: | :-----: |
| object (style) |  none   |

---

### `behindStyle`

The style behind the split symbol in the string

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |
