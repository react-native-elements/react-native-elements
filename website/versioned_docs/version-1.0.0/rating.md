---
id: version-1.0.0-rating
title: Rating
original_id: rating
---

Ratings are used to collect measurable feedback from users. Use Rating over an
Input where imagery can increase user interaction.

> This component is imported from [react-native-ratings](https://github.com/Monte9/react-native-ratings)

<img src="https://raw.githubusercontent.com/Monte9/react-native-ratings/master/resources/airbnb_ratings.gif" width="500" >

## Usage

```js
import { Rating, AirbnbRating } from 'react-native-elements';

ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}

<AirbnbRating />

<AirbnbRating
  count={11}
  reviews={["Terrible", "Bad", "Meh", "OK", "Good", "Hmm...", "Very Good", "Wow", "Amazing", "Unbelievable", "Jesus"]}
  defaultRating={11}
  size={20}
/>

<Rating
  showRating
  onFinishRating={this.ratingCompleted}
  style={{ paddingVertical: 10 }}
/>

<Rating
  type='heart'
  ratingCount={3}
  imageSize={60}
  showRating
  onFinishRating={this.ratingCompleted}
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
  style={{ paddingVertical: 10 }}
/>
```

### Read-only mode

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

### Fractions

```html
<Rating showRating fractions="{1}" startingValue="{3.3}" />
```

![Fractions demo gif](https://cloud.githubusercontent.com/assets/241553/26780040/e8cd1a2c-49f8-11e7-8859-6dd9b4e0a779.gif)

---

## Props

### AirbnbRating

- [`defaultRating`](#defaultrating)
- [`reviews`](#reviews)
- [`count`](#count)
- [`showRating`](#showrating)
- [`onFinishRating`](#onfinishrating)

## Rating

- [`type`](#type)
- [`ratingImage`](#ratingimage)
- [`ratingColor`](#ratingcolor)
- [`ratingBackgroundColor`](#ratingbackgroundcolor)
- [`ratingCount`](#ratingcount)
- [`ratingTextColor`](#ratingtextcolor)
- [`imageSize`](#imagesize)
- [`showRating`](#showrating)
- [`readonly`](#readonly)
- [`startingValue`](#startingvalue)
- [`fractions`](#fractions)
- [`minValue`](#minValue)
- [`style`](#style)
- [`onStartRating`](#onstartrating)
- [`onFinishRating`](#onfinishrating)

---

## Reference

### `defaultRating`

Initial value for the rating

|  Type  | Default |
| :----: | :-----: |
| number |    3    |

---

### `reviews`

Labels to show when each value is tapped
e.g. If the first star is tapped, then value in index 0 will be used as the label

|   Type   |                   Default                    |
| :------: | :------------------------------------------: |
| string[] | ['Terrible', 'Bad', 'Okay', 'Good', 'Great'] |

---

### `count`

Total number of ratings to display

|  Type  | Default |
| :----: | :-----: |
| number |    5    |

---

### `showRating`

Determines if to show the reviews above the rating

|  Type   | Default |
| :-----: | :-----: |
| boolean |  true   |

---

### `onFinishRating`

Callback method when the user finishes rating. Gives you the final rating value
as a whole number **(required)**

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onStartRating`

Callback method when the user starts the rating. (optional)

|   Type   |  Default  |
| :------: | :-------: |
| function | undefined |

---

### `fractions`

The number of decimal places for the rating value; must be between 0 and 20
(optional)

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

Pass in a custom background-fill-color for the rating icon; use this along with
`type='custom'` prop above (optional)

|      Type      | Default |
| :------------: | :-----: |
| string (color) |  white  |

---

### `ratingColor`

Pass in a custom fill-color for the rating icon; use this along with
`type='custom'` prop above (optional)

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

Pass in a custom image source; use this along with `type='custom'` prop above
(optional)

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

### `minValue`

The minimum value the user can select

|  Type  | Default |
| :----: | :-----: |
| number |    0    |

---

### `style`

Exposes style prop to add additonal styling to the container view (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `type`

Choose one of the built-in types: `star`, `rocket`, `bell`, `heart` or use type
`custom` to render a custom image (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  star   |
