---
id: rating
title: Rating
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Props from './props/rating.md'

Ratings are used to collect measurable feedback from users. Use Rating over an
Input where imagery can increase user interaction.

> This component is imported from [react-native-ratings](https://github.com/Monte9/react-native-ratings)

<img src="https://raw.githubusercontent.com/Monte9/react-native-ratings/master/resources/airbnb_ratings.gif" width="500" />

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

<Rating imageSize={20} readonly startingValue={rating} style={styles.rating} />;
```

<img alt="readonly demo jpg" src={useBaseUrl('img/rating_readonly.png')} />

### Fractions

```html
<Rating showRating fractions="{1}" startingValue="{3.3}" />
```

![Fractions demo gif](https://cloud.githubusercontent.com/assets/241553/26780040/e8cd1a2c-49f8-11e7-8859-6dd9b4e0a779.gif)

---

<Props />

---
