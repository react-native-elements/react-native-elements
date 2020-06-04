---
id: version-2.0.1-gridlist
title: GridList
original_id: GridList
---

Grid lists display a collection of images in an organized grid.

![gridlist](/react-native-elements/img/gridlist.png)

## Usage

```js
import { GridList } from 'react-native-element';
const data = [
  { id: 1, img: require('./img/1.jpg'), featured: true, content: '1' },
  { id: 2, img: require('./img/2.jpg'), featured: false, content: '2' },
  { id: 3, img: require('./img/3.jpg'), featured: false, content: '3' },
  { id: 4, img: require('./img/4.jpg'), featured: true, content: '4' },
  { id: 5, img: require('./img/5.jpg'), featured: false, content: '5' },
  { id: 6, img: require('./img/6.jpg'), featured: false, content: '6' },
  { id: 7, img: require('./img/7.jpg'), featured: false, content: '7' },
  { id: 8, img: require('./img/8.jpg'), featured: false, content: '8' },
  { id: 9, img: require('./img/9.jpg'), featured: false, content: '9' },
  { id: 10, img: require('./img/10.jpg'), featured: false, content: '10' },
];
export default class GridListDemo extends Component {
  render() {
    return (
      <GridList data={data} column={3} itemHeight={80} featureHeight={180} />
    );
  }
}
```

---

## Props

- [`data`](#data)
- [`column`](#column)
- [`itemHeight`](#itemHeight)
- [`featureHeight`](#featureHeight)
- [`divider`](#divider)
- [`textStyle`](#textStyle)

---

## Reference

### `data`

all of the images data provided.

| Type  | Default |
| :---: | :-----: |
| array |   []    |

---

### `column`

define the number of column (optional)

|  Type  | Default |
| :----: | :-----: |
| number |    2    |

---

### `itemHeight`

height of image (optional)

|  Type  | Default |
| :----: | :-----: |
| number |   20    |

---

### `featureHeight`

height of a featured image (optional)

|  Type  | Default |
| :----: | :-----: |
| number |   100   |

---

### `divider`

height of a divider (optional)

|  Type  | Default |
| :----: | :-----: |
| number |    0    |

---

### `containerStyle`

add styling to container holding gridlist (optional)

|        Type         |      Default      |
| :-----------------: | :---------------: |
| View style (object) | inherited styling |

---

### `textStyle`

Style for the image text.

|        Type         |              Default               |
| :-----------------: | :--------------------------------: |
| View style (object) | `{{ backgroundColor: '#D1D5D8' }}` |

---
