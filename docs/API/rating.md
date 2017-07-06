An extendable Ratings components for React Native with gestures and an intuitive API

> This component was inspired from [react-native-ratings](https://github.com/Monte9/react-native-ratings) by [Monte Thakkar](https://github.com/Monte9).

### Demo

<img src="https://raw.githubusercontent.com/react-native-training/react-native-elements/master/docs/images/rating_component.gif" width="500" >

```js
import { Rating } from 'react-native-elements';

ratingCompleted(rating) {
  console.log("Rating is: " + rating)
}

<Rating
  showRating
  onFinishRating={this.ratingCompleted}
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
  style={{ paddingVertical: 10 }}
/>

<Rating
  type="heart"
  ratingCount={3}
  fractions={2}
  startingValue={1.57}
  imageSize={40}
  onFinishRating={this.ratingCompleted}
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

![readonly demo jpg](https://i.imgur.com/LSVE8sN.jpg)

##### Fractions
```html
<Rating showRating fractions={1} startingValue={3.3} />
```

![Fractions demo gif](https://cloud.githubusercontent.com/assets/241553/26780040/e8cd1a2c-49f8-11e7-8859-6dd9b4e0a779.gif)

#### Rating Props

| prop                  | default         | type           | description                                                                                                                  |
| ----                  | ----            | ----           | ----                                                                                                                         |
| **onFinishRating**    | none            | function       | Callback method when the user finishes rating. Gives you the final rating value as a whole number **(required)**             |
| type                  | star            | string         | Choose one of the built-in types: `star`, `rocket`, `bell`, `heart` or use type `custom` to render a custom image (optional) |
| ratingImage           | star            | string         | Pass in a custom image source; use this along with `type='custom'` prop above (optional)                                     |
| ratingColor           | #f1c40f         | string (color) | Pass in a custom fill-color for the rating icon; use this along with `type='custom'` prop above (optional)                   |
| ratingBackgroundColor | white           | string (color) | Pass in a custom background-fill-color for the rating icon; use this along with `type='custom'` prop above (optional)        |
| ratingCount           | 5               | number         | The number of rating images to display (optional)                                                                            |
| imageSize             | 50              | number         | The size of each rating image (optional)                                                                                     |
| showRating            | none            | boolean        | Displays the Built-in Rating UI to show the rating value in real-time (optional)                                             |
| readonly              | false           | boolean        | Whether the rating can be modiefied by the user (optional)                                                                   |
| startingValue         | ratingCount / 2 | number         | The initial rating to render (optional)                                                                                      |
| fractions             | undefined       | number         | The number of decimal places for the rating value; must be between 0 and 20 (optional)                                       |
| style                 | none            | function       | Exposes style prop to add additonal styling to the container view (optional)                                                 |
