---
id: rating
title: Rating
---

An extendable Ratings components for React Native with gestures and an intuitive API

> This component was inspired from [react-native-ratings](https://github.com/Monte9/react-native-ratings) by [Monte Thakkar](https://github.com/Monte9).

### Demo

<img src="/react-native-elements/img/rating_component.gif" width="500" >

```js
import { Rating } from 'react-native-elements';

ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}

<Rating
  showRating
  onFinishRating={this.ratingCompleted}
  onStartRating={this.ratingStarted}
  style={{ paddingVertical: 10 }}
/>

<Rating
  showRating
  type="star"
  fractions={1}
  startingValue={3.6}
  readonly
  imageSize={40}
  onFinishRating={this.ratingCompleted}
  onStartRating={this.ratingStarted}
  style={{ paddingVertical: 10 }}
/>

<Rating
  type="heart"
  ratingCount={3}
  fractions={2}
  startingValue={1.57}
  imageSize={40}
  onFinishRating={this.ratingCompleted}
  onStartRating={this.ratingStarted}
  showRating
  style={{ paddingVertical: 10 }}
/>


const WATER_IMAGE = require('./water.png')

<Rating
  type='custom'
  ratingImage={WATER_IMAGE}
  ratingColor='#3498db'
  ratingBackgroundColor='#c8c7c8'
  ratingCount={10}
  imageSize={30}
  onFinishRating={this.ratingCompleted}
  onStartRating={this.ratingStarted}
  style={{ paddingVertical: 10 }}
/>
```

##### Read-only mode

```js
const { rating } = this.props;

<Rating
  imageSize={20}
  readonly
  startingValue={rating}
  style={{ styles.rating }}
/>
```

![readonly demo jpg](/react-native-elements/img/rating_readonly.jpg)

##### Fractions

```html
<Rating showRating fractions={1} startingValue={3.3} />
```

![Fractions demo gif](https://cloud.githubusercontent.com/assets/241553/26780040/e8cd1a2c-49f8-11e7-8859-6dd9b4e0a779.gif)

---

### Props

* [`onFinishRating`](#onfinishrating)
* [`onStartRating`](#onstartrating)
* [`fractions`](#fractions)
* [`imageSize`](#imagesize)
* [`ratingBackgroundColor`](#ratingbackgroundcolor)
* [`ratingColor`](#ratingcolor)
* [`ratingCount`](#ratingcount)
* [`ratingImage`](#ratingimage)
* [`ratingTextColor`](#ratingtextcolor)
* [`readonly`](#readonly)
* [`showRating`](#showrating)
* [`showReadOnlyText`](#showreadonlytext)
* [`startingValue`](#startingvalue)
* [`style`](#style)
* [`type`](#type)

---

# Reference

### `onFinishRating`

Callback method when the user finishes rating. Gives you the final rating value as a whole number **(required)**

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onStartRating`

Callback method when the user starts the rating. (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  undefined   |

---

### `fractions`

The number of decimal places for the rating value; must be between 0 and 20 (optional)

|  Type  |  Default  |
| :----: | :-------: |
| number | undefined |

---

### `imageSize`

The size of each rating image (optional)

|  Type  | Default |
| :----: | :-----: |
| number |   50    |

---

### `ratingBackgroundColor`

Pass in a custom background-fill-color for the rating icon; use this along with `type='custom'` prop above (optional)

|      Type      | Default |
| :------------: | :-----: |
| string (color) |  white  |

---

### `ratingColor`

Pass in a custom fill-color for the rating icon; use this along with `type='custom'` prop above (optional)

|      Type      | Default |
| :------------: | :-----: |
| string (color) | #f1c40f |

---

### `ratingCount`

The number of rating images to display (optional)

|  Type  | Default |
| :----: | :-----: |
| number |    5    |

---

### `ratingImage`

Pass in a custom image source; use this along with `type='custom'` prop above (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  star   |

---

### `ratingTextColor`

Pass in a custom text color for the rating text (optional)

|      Type      | Default |
| :------------: | :-----: |
| string (color) | #f1c40f |

---

### `readonly`

Whether the rating can be modiefied by the user (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `showRating`

Displays the Built-in Rating UI to show the rating value in real-time (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  none   |

---

### `showReadOnlyText`

Whether to show the read only text or not (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |

---

### `startingValue`

The initial rating to render (optional)

|  Type  |     Default     |
| :----: | :-------------: |
| number | ratingCount / 2 |

---

### `style`

Exposes style prop to add additonal styling to the container view (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `type`

Choose one of the built-in types: `star`, `rocket`, `bell`, `heart` or use type `custom` to render a custom image (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  star   |
