<img src="https://raw.githubusercontent.com/react-native-training/react-native-elements/master/docs/images/avatar_all.png" width="500" >

#### Avatars

<img src="https://raw.githubusercontent.com/react-native-training/react-native-elements/master/docs/images/avatar_with_images.png" width="500" >

``` js
<Avatar
  small
  rounded
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg"}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  medium
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  large
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg"}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  xlarge
  rounded
  source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg"}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
```

#### Avatar with initials

<img src="https://raw.githubusercontent.com/react-native-training/react-native-elements/master/docs/images/avatar_with_initials.png" width="500" >

```js
<Avatar
  small
  rounded
  title="MT"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  medium
  title="BP"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  large
  title="LW"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
<Avatar
  xlarge
  rounded
  title="CR"
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
/>
```

#### Avatar with icons

<img src="https://raw.githubusercontent.com/react-native-training/react-native-elements/master/docs/images/avatar_with_icons.png" width="500" >

``` js
<Avatar
  small
  rounded
  icon={{name: 'user'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 2, marginLeft: 20, marginTop: 115}}
/>
<Avatar
  medium
  overlayContainerStyle={{backgroundColor: 'blue'}}
  icon={{name: 'meetup', color: 'red'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 3, marginTop: 100}}
/>
<Avatar
  large
  icon={{name: 'rocket', color: 'orange'}}
  overlayContainerStyle={{backgroundColor: 'white'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 4, marginTop: 75}}
/>
<Avatar
  xlarge
  rounded
  icon={{name: 'home'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
  containerStyle={{flex: 5, marginRight: 60}}
/>
```

### Avatar Props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| component | TouchableOpacity | function | component for enclosing element (eg: TouchableHighlight, View, etc) |
| width | 34 | number | width for the Avatar |
| height | 34 | number | height for the Avatar |
| onPress | none | function | callback function when pressing component |
| onLongPress | none | function | callback function when long pressing component |
| containerStyle | none | object (style) | styling for outer container |
| source | none | object (image) | image source |
| avatarStyle | none | object (style) | style for avatar image |
| rounded | false | boolean | determines the shape of avatar |
| title | none | string | renders title in the avatar |
| titleStyle | none | object (style) | style for the title |
| overlayContainerStyle | none | object (style) | style for the view outside image or icon |
| activeOpacity | 0.2 | number | opacity when pressed |
| icon | none | object {name: string, color: string, size: number, type: string (default is material-community, or choose one of simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo), iconStyle: object(style)} |
| iconStyle | none | object (style) | extra styling for icon component (optional) |
