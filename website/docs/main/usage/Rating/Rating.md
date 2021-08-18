import Snack from './snack/index.md'

<Snack />

<!-- Adding the read-only mode and fractions example as it is not added in the comments of Rating Component. -->

### Read-only mode

```js
const { rating } = this.props;

<Rating imageSize={20} readonly startingValue={rating} style={styles.rating} />;
```

### Fractions

```html
<Rating showRating fractions="{1}" startingValue="{3.3}" />
```

![Fractions demo gif](https://cloud.githubusercontent.com/assets/241553/26780040/e8cd1a2c-49f8-11e7-8859-6dd9b4e0a779.gif)
