![Card Component](http://i.imgur.com/bY5uAC3.png)

```js

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 ... // more users here
]

import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

// implemented without image with header
<Card title="CARD WITH DIVIDER">
  {
    users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
          <Text style={styles.name}>{u.name}</Text>
        </View>
      );
    })
  }
</Card>

// implemented without image without header, using ListItem component
 <Card containerStyle={{padding: 0}} >
  {
    users.map((u, i) => {
      return (
        <ListItem
          key={i}
          roundAvatar
          title={u.name}
          avatar={{uri:u.avatar}}
        />
      );
    })
  }
</Card>


// implemented with Text and Button as children
<Card
  title='HELLO WORLD'
  image={require('../images/pic2.jpg')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={{name: 'code'}}
    backgroundColor='#03A9F4'
    fontFamily='Lato'
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>

```

#### Card props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| flexDirection | column | string | flex direction (row or column) (optional) |
| containerStyle | none | object (style) | outer container style (optional) |
| wrapperStyle | none | object (style) | inner container style (optional) |
| title | none | string | optional card title (optional) |
| titleStyle | none | object (style) | additional title styling (if title provided) (optional) |
| titleNumberOfLines | none | number | number of lines for title (optional) |
| featuredTitle | none | string | title rendered over the image (only works if image prop is present) |
| featuredTitleStyle | none | object (style) | styling for featured title |
| featuredSubtitle | none | string | subtitle rendered over the image (only works if image prop is present) |
| featuredSubtitleStyle | none | object (style) | styling for featured subtitle |
| dividerStyle | none | object (style) | additional divider styling (if title provided) (optional) |
| fontFamily | System font bold (iOS), Sans Serif Bold (android) | string | specify different font family |
| imageStyle | inherited styling | object(style) | specify image styling if image is provided |
| imageProps | none | object (ImageProperties) | optional properties to pass to the image if provided e.g "resizeMode" |
| imageWrapperStyle | none | object(style) | specify styling for view surrounding image |
| image | none | image uri or require path | add an image as the heading with the image prop (optional) |
