The Grid component provides two types of layouts, Row and Column. This provides you with an easy way to position your elements on screen without using flex directly.

> This component was inspired from [react-native-easy-grid](https://github.com/GeekyAnts/react-native-easy-grid) by [GeekyAnts](https://github.com/GeekyAnts). Check out [NativeBase.io](http://nativebase.io/) if you haven't already!

#### Row

<img src="http://i.imgur.com/1e8W6j6.png" width="300" >

```js
import {Grid, Row} from 'react-native-elements';

<Grid>
  <Row></Row>
  <Row></Row>
</Grid>
```

#### Column

<img src="http://i.imgur.com/MWIBLKk.png" width="300" >

```js
import {Grid, Col} from 'react-native-elements';

<Grid>
  <Col></Col>
  <Col></Col>
</Grid>
```

Creating nested layout

<table width="100" height="100">
  <tr>
    <td rowspan="2" width="50">1</td>
    <td width="50" height="50">2</td>
  </tr>
  <tr>
    <td>3</td>
  </tr>
</table>

<img src="http://i.imgur.com/PZ4vR6z.png" width="300" >

```js
import {Grid, Col, Row} from 'react-native-elements';

<Grid>
  <Col></Col>
  <Col>
    <Row></Row>
    <Row></Row>
  </Col>
</Grid>
```

#### Using the size prop

A ratio can be passed to the Size Prop

<img src="https://i.imgur.com/xYDQ3XV.png" width="300" >

```js
<Grid>
  <Row size={3}></Row>
  <Row size={1}></Row>
</Grid>
```

<img src="http://i.imgur.com/34nfZtP.png" width="300" >

```js
<Grid>
  <Col size={75}></Col>
  <Col size={25}></Col>
</Grid>
```

#### GridComponent Props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | none | object (style) | Outer grid styling (optional) |
| onPress | none | function | onPress method (optional) |
| activeOpacity | 1 | number | Opacity on pressing (optional) |

#### ColComponent Props

| props | default | type | description |
| ---- | ---- | ---- | ---- |
| containerStyle | none | object (style) | Styling for the outer column (optional) |
| size | none | number | Size for column (optional) |
| onPress | none | function | onPress method (optional) |
| activeOpacity | 1 | number | Opacity on pressing (optional) |

#### RowComponent Props

| props | default | type | description |
| ---- | ---- | ---- | ---- |
| containerStyle | none | object (style) | Styling for the outer column (optional) |
| size | none | number | Size for row (optional) |
| onPress | none | function | onPress method (optional) |
| activeOpacity | 1 | number | Opacity on pressing (optional) |
