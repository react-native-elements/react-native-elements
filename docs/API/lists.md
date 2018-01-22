![Lists](http://i.imgur.com/7V8CIfl.png)

#### Using Map Function. Implemented with avatar.

```js
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  ... // more items
]

<List containerStyle={{marginBottom: 20}}>
  {
    list.map((l, i) => (
      <ListItem
        roundAvatar
        avatar={{uri:l.avatar_url}}
        key={i}
        title={l.name}
      />
    ))
  }
</List>

```

#### Using Map Function. Implemented with link and icon.

```js
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  },
  ... // more items
]

<List>
  {
    list.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        leftIcon={{name: item.icon}}
      />
    ))
  }
</List>
```

#### Using RN ListView. Implemented with link and avatar.

```js
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  ... // more items
]

renderRow (rowData, sectionID) {
  return (
    <ListItem
      roundAvatar
      key={sectionID}
      title={rowData.name}
      subtitle={rowData.subtitle}
      avatar={{uri:rowData.avatar_url}}
    />
  )
}

render () {
  return (
    <List>
      <ListView
        renderRow={this.renderRow}
        dataSource={this.state.dataSource}
      />
    </List>
  )
}

```

#### Using RN ListView. Implemented with custom avatar component.

```js
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    name: 'Amy Farha',
    subtitle: 'Vice President'
  },
  {
    name: 'Chris Jackson',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'Vice Chairman'
  },
  ... // more items
]

renderRow (rowData, sectionID) {
  return (
    <ListItem
      avatar={<Avatar
                rounded
                source={rowData.avatar_url && {uri: rowData.avatar_url}}
                title={rowData.name[0]}
              />}
      key={sectionID}
      title={rowData.name}
      subtitle={rowData.subtitle}
    />
  )
}

render () {
  return (
    <List>
      <ListView
        renderRow={this.renderRow}
        dataSource={this.state.dataSource}
      />
    </List>
  )
}

```

#### ListItem implemented with custom View for Subtitle

```js
import { List, ListItem } from 'react-native-elements'

render () {
  return (
    <List>
      <ListItem
        roundAvatar
        title='Limited supply! Its like digital gold!'
        subtitle={
          <View style={styles.subtitleView}>
            <Image source={require('../images/rating.png')} style={styles.ratingImage}/>
            <Text style={styles.ratingText}>5 months ago</Text>
          </View>
        }
        avatar={require('../images/avatar1.jpg')}
      />
    </List>
  )
}

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})

```

#### List Props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | marginTop: 20, borderTopWidth: 1, borderBottomWidth: 1, borderBottomColor: #cbd2d9 | object (style) | style the list container |


#### ListItem props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| title | none | string, number or object | main title for list item, can be text or custom view (required) |
| avatar | none | object (source) | left avatar (optional). This is the [React Native Image](https://facebook.github.io/react-native/docs/images.html) `source` prop. Avatar can be used in parallel to leftIcon if needed. |
| onPress | none | function | onPress method for link (optional) |
| rightIcon | {name: 'chevron-right'} | object {name, color, style, type} (type defaults to material icons) <br/><br/> **OR** <br/><br/> React Native element | icon configuration for right icon (optional), either a name from the icon library (like material) or a React Native element like `Image`. Shows up unless hideChevron is set |
| underlayColor | white | string | define underlay color for TouchableHighlight (optional) |
| subtitle | none | string, number or object | subtitle text or custom view (optional) |
| subtitleStyle | none | object (style) | additional subtitle styling (optional ) |
| subtitleNumberOfLines | 1 | number | Number of lines for Subtitle |
| containerStyle | none | object (style) | additional main container styling (optional) |
| wrapperStyle | none | object (style) | additional wrapper styling (optional) |
| titleStyle | none | object (style) | additional title styling (optional) |
| titleContainerStyle | none | object (style) | provide styling for title container |
| titleNumberOfLines | 1 | number | Number of lines for Title |
| hideChevron | false | boolean | set if you do not want a chevron (optional) |
| chevronColor | #bdc6cf | string | set chevron color |
| roundAvatar | false | boolean | make left avatar round |
| badge | none | string or number or React Native Component | creates badge |
| switchButton | false | boolean | add a switch to the right side of your component (Note: in order to display the switchButton you need to add the `hideChevron` prop as well. Snack demo here: https://snack.expo.io/SJPQNScUZ) |
| onSwitch | none | function | add a callback function when the switch is toggled |
| switchDisabled | none | boolean | If true the user won't be able to toggle the switch. Default value is false. |
| switchOnTintColor | none | string | Background color when the switch is turned on. |
| switchThumbTintColor | none | string | Color of the foreground switch grip. |
| switchTintColor | none | string | Border color on iOS and background color on Android when the switch is turned off. |
| switched | none | boolean | The value of the switch. If true the switch will be turned on. Default value is false. |
| textInput | none | boolean | Whether to have the right title area be an input text component. |
| textInputAutoCapitalize | none | string | Can be one of the following: 'none', 'sentences', 'words', 'characters'. |
| textInputAutoCorrect | none | boolean | Can tell TextInput to automatically capitalize certain characters. |
| textInputAutoFocus | none | boolean | If true, focuses the input on componentDidMount. The default value is false. |
| textInputEditable | true | boolean | If false, text is not editable. The default value is true. |
| textInputKeyboardType | none | string | Can be one of the following: 'default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search' |
| textInputMaxLength | none | number | Limits the maximum number of characters that can be entered. |
| textInputMultiline | none | boolean | If true, the text input can be multiple lines. The default value is false. |
| textInputOnChangeText | none | function | Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler. |
| textInputOnFocus | none | function | Callback that is called when the text input is focused. |
| textInputOnBlur | none | function | Callback that is called when the text input is blurred. |
| textInputSelectTextOnFocus | none | boolean | If true, all text will automatically be selected on focus. |
| textInputReturnKeyType | none | string | Determines how the return key should look. For more info see [the React Native docs](https://facebook.github.io/react-native/docs/textinput.html#returnkeytype) |
| textInputValue | none | string | Manually set value of the input
| textInputSecure | none | boolean | If true, obscures the text entered so that sensitive text like passwords stay secure. |
| textInputStyle | none | object (style) | Style for the input text |
| textInputContainerStyle | none | object (style) | Style for the container surrounding the input text |
| textInputPlaceholder | none | string | Placeholder for the text input |
| component | View or TouchableHighlight if onPress method is added as prop | React Native element | replace element with custom element (optional) |
| fontFamily | HelveticaNeue (iOS), Sans Serif (android) | string | specify different font family |
| rightTitle | none | string | provide a rightTitle to have a title show up on the right side of the button |
| rightTitleContainerStyle | flex: 1, alignItems: 'flex-end', justifyContent: 'center' | object (style) | style the outer container of the rightTitle text |
| rightTitleStyle | marginRight: 5, color: '#bdc6cf' | object (style) | style the text of the rightTitle text |
| rightTitleNumberOfLines | 1 | number | Number of lines for Right Title |
| subtitleContainerStyle | none | object (style) | provide styling for subtitle container |
| label | none | react native component | add a label with your own styling by providing a label={<SomeComponent />} prop to ListItem |
| onLongPress | none | function | onLongPress method for link (optional) |
| leftIcon | none | object {name, color, style, type} (type defaults to material icons) <br/><br/> **OR** <br/><br/> React Native element | icon configuration for left icon (optional), either a name from the icon library (like material) or a React Native element like `Image`. leftIcon can be used in parallel to avatar if needed. |
| leftIconOnPress | none | function | Attaches an onPress on left Icon |
| leftIconOnLongPress | none | function | Attaches an onLongPress on left Icon |
| leftIconUnderlayColor | white | string | Underlay color for left Icon |
| avatarStyle | none | object (style) | avatar styling (optional). This is the [React Native Image](https://facebook.github.io/react-native/docs/images.html) `style` prop |
| avatarContainerStyle | none | object (style) | Avatar outer container styling (optional) |
| avatarOverlayContainerStyle | none | object (style) | Avatar overlay container styling (optional) |
| onPressRightIcon | none | function | Attaches an onPress on right Icon |
| disabled | false | boolean | If true the user won't be able to perform any action on the list item |
| disabledStyle | none | object (style) | Specific styling to be used when list item is disabled |

#### Badges
![Badges](http://i.imgur.com/qvJgGF2.png)

Example badge usage
```js
<ListItem
  ...
  badge={{ value: 3, textStyle: { color: 'orange' }, containerStyle: { marginTop: -20 } }}
/>

<ListItem
  ...
  badge={{ element: <MyCustomElement> }}
/>

```

##### Badge props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| badge | none | object, accepts the following properties: value (string), containerStyle (object), textStyle (object). You can override the default badge by providing your own component with it's own styling by providing badge={{ element: <YourCustomElement /> }} | add a badge to the ListItem by using this prop |
