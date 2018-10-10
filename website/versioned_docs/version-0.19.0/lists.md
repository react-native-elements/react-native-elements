---
id: version-0.19.0-lists
title: Lists
original_id: lists
---

![Lists](/react-native-elements/img/lists.png)

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
    list.map((l) => (
      <ListItem
        roundAvatar
        avatar={{uri:l.avatar_url}}
        key={l.name}
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
    list.map((item) => (
      <ListItem
        key={item.title}
        title={item.title}
        leftIcon={{name: item.icon}}
      />
    ))
  }
</List>
```

#### Using RN FlatList. Implemented with link and avatar.

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

renderRow ({ item }) {
  return (
    <ListItem
      roundAvatar
      title={item.name}
      subtitle={item.subtitle}
      avatar={{uri:item.avatar_url}}
    />
  )
}

render () {
  return (
    <List>
      <FlatList
        data={list}
        renderItem={this.renderRow}
        keyExtractor={item => item.name}
      />
    </List>
  )
}
```

#### Using RN FlatList. Implemented with custom avatar component.

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

renderRow ({ item }) {
  return (
    <ListItem
      avatar={<Avatar
                rounded
                source={item.avatar_url && {uri: item.avatar_url}}
                title={item.name[0]}
              />}
      title={item.name}
      subtitle={item.subtitle}
    />
  )
}

render () {
  return (
    <List>
      <FlatList
        data={list}
        renderItem={this.renderRow}
        keyExtractor={item => item.name}
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

### List Props

* [`containerStyle`](#containerstyle-list)

---

### `containerStyle` (List)

style the list container

|      Type      |                                      Default                                       |
| :------------: | :--------------------------------------------------------------------------------: |
| object (style) | marginTop: 20, borderTopWidth: 1, borderBottomWidth: 1, borderBottomColor: #cbd2d9 |

---

### ListItem Props

* [`avatar`](#avatar)
* [`avatarContainerStyle`](#avatarcontainerstyle)
* [`avatarOverlayContainerStyle`](#avataroverlaycontainerstyle)
* [`avatarStyle`](#avatarstyle)
* [`chevronColor`](#chevroncolor)
* [`component`](#component)
* [`containerStyle`](#containerstyle-listitem)
* [`disabled`](#disabled)
* [`disabledStyle`](#disabledstyle)
* [`fontFamily`](#fontfamily)
* [`hideChevron`](#hidechevron)
* [`label`](#label)
* [`leftIcon`](#lefticon)
* [`leftIconOnLongPress`](#lefticononlongpress)
* [`leftIconOnPress`](#lefticononpress)
* [`leftIconUnderlayColor`](#lefticonunderlaycolor)
* [`onLongPress`](#onlongpress)
* [`onPress`](#onpress)
* [`onPressRightIcon`](#onpressrighticon)
* [`onSwitch`](#onswitch)
* [`rightIcon`](#righticon)
* [`rightTitle`](#righttitle)
* [`rightTitleContainerStyle`](#righttitlecontainerstyle)
* [`rightTitleNumberOfLines`](#righttitlenumberoflines)
* [`rightTitleStyle`](#righttitlestyle)
* [`roundAvatar`](#roundavatar)
* [`subtitle`](#subtitle)
* [`subtitleContainerStyle`](#subtitlecontainerstyle)
* [`subtitleNumberOfLines`](#subtitlenumberoflines)
* [`subtitleStyle`](#subtitlestyle)
* [`switchButton`](#switchbutton)
* [`switchDisabled`](#switchdisabled)
* [`switched`](#switched)
* [`switchOnTintColor`](#switchontintcolor)
* [`switchThumbTintColor`](#switchthumbtintcolor)
* [`switchTintColor`](#switchtintcolor)
* [`textInput`](#textinput)
* [`textInputAutoCapitalize`](#textinputautocapitalize)
* [`textInputAutoCorrect`](#textinputautocorrect)
* [`textInputAutoFocus`](#textinputautofocus)
* [`textInputContainerStyle`](#textinputcontainerstyle)
* [`textInputEditable`](#textinputeditable)
* [`textInputKeyboardType`](#textinputkeyboardtype)
* [`textInputMaxLength`](#textinputmaxlength)
* [`textInputMultiline`](#textinputmultiline)
* [`textInputOnBlur`](#textinputonblur)
* [`textInputOnChangeText`](#textinputonchangetext)
* [`textInputOnFocus`](#textinputonfocus)
* [`textInputPlaceholder`](#textinputplaceholder)
* [`textInputReturnKeyType`](#textinputreturnkeytype)
* [`textInputSecure`](#textinputsecure)
* [`textInputSelectTextOnFocus`](#textinputselecttextonfocus)
* [`textInputStyle`](#textinputstyle)
* [`textInputValue`](#textinputvalue)
* [`title`](#title)
* [`titleContainerStyle`](#titlecontainerstyle)
* [`titleNumberOfLines`](#titlenumberoflines)
* [`titleStyle`](#titlestyle)
* [`underlayColor`](#underlaycolor)
* [`wrapperStyle`](#wrapperstyle)

---

# Reference

### `avatar`

left avatar (optional). This is the [React Native Image](https://facebook.github.io/react-native/docs/images.html) `source` prop. Avatar can be used in parallel to leftIcon if needed.

|      Type       | Default |
| :-------------: | :-----: |
| object (source) |  none   |

---

### `avatarContainerStyle`

Avatar outer container styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `avatarOverlayContainerStyle`

Avatar overlay container styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `avatarStyle`

avatar styling (optional). This is the [React Native Image](https://facebook.github.io/react-native/docs/images.html) `style` prop

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `chevronColor`

set chevron color

|  Type  | Default |
| :----: | :-----: |
| string | #bdc6cf |

---

### `component`

replace element with custom element (optional)

|         Type         |                            Default                            |
| :------------------: | :-----------------------------------------------------------: |
| React Native element | View or TouchableHighlight if onPress method is added as prop |

---

### `containerStyle` (ListItem)

additional main container styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `disabled`

If true the user won't be able to perform any action on the list item. Default value is false.

|  Type   | Default |
| :-----: | :-----: |
| boolean |         |

---

### `disabledStyle`

Specific styling to be used when list item is disabled.

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `fontFamily`

specify different font family

|  Type  |                  Default                  |
| :----: | :---------------------------------------: |
| string | HelveticaNeue (iOS), Sans Serif (android) |

---

### `hideChevron`

set if you do not want a chevron (optional)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `label`

add a label with your own styling by providing a label={<SomeComponent />} prop to ListItem

|          Type          | Default |
| :--------------------: | :-----: |
| react native component |  none   |

---

### `leftIcon`

icon configuration for left icon (optional), either a name from the icon library (like material) or a React Native element like `Image`. leftIcon can be used in parallel to avatar if needed.

|                                                         Type                                                          | Default |
| :-------------------------------------------------------------------------------------------------------------------: | :-----: |
| object {name, color, style, type} (type defaults to material icons) <br/><br/> **OR** <br/><br/> React Native element |  none   |

---

### `leftIconOnLongPress`

Attaches an onLongPress on left Icon

| Type | Default  |
| :--: | :------: |
| none | function |

---

### `leftIconOnPress`

Attaches an onPress on left Icon

| Type | Default  |
| :--: | :------: |
| none | function |

---

### `leftIconUnderlayColor`

Underlay color for left Icon

| Type  | Default |
| :---: | :-----: |
| white | string  |

---

### `onLongPress`

onLongPress method for link (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onPress`

onPress method for link (optional)

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `onPressRightIcon`

Attaches an onPress on right Icon

| Type | Default  |
| :--: | :------: |
| none | function |

---

### `onSwitch`

add a callback function when the switch is toggled

|   Type   | Default |
| :------: | :-----: |
| function |  none   |

---

### `rightIcon`

icon configuration for right icon (optional), either a name from the icon library (like material) or a React Native element like `Image`. Shows up unless hideChevron is set

|                                                         Type                                                          |         Default         |
| :-------------------------------------------------------------------------------------------------------------------: | :---------------------: |
| object {name, color, style, type} (type defaults to material icons) <br/><br/> **OR** <br/><br/> React Native element | {name: 'chevron-right'} |

---

### `rightTitle`

provide a rightTitle to have a title show up on the right side of the button

|  Type  | Default |
| :----: | :-----: |
| string |  none   |

---

### `rightTitleContainerStyle`

style the outer container of the rightTitle text

|      Type      |                          Default                          |
| :------------: | :-------------------------------------------------------: |
| object (style) | flex: 1, alignItems: 'flex-end', justifyContent: 'center' |

---

### `rightTitleNumberOfLines`

Number of lines for Right Title

|  Type  | Default |
| :----: | :-----: |
| number |    1    |

---

### `rightTitleStyle`

style the text of the rightTitle text

|      Type      |             Default              |
| :------------: | :------------------------------: |
| object (style) | marginRight: 5, color: '#bdc6cf' |

---

### `roundAvatar`

make left avatar round

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `subtitle`

subtitle text or custom view (optional)

|           Type           | Default |
| :----------------------: | :-----: |
| string, number or object |  none   |

---

### `subtitleContainerStyle`

provide styling for subtitle container

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `subtitleNumberOfLines`

Number of lines for Subtitle

| Type | Default |
| :--: | :-----: |
|  1   | number  |

---

### `subtitleStyle`

additional subtitle styling (optional )

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `switchButton`

add a switch to the right side of your component (Note: in order to display the switchButton you need to add the `hideChevron` prop as well. Snack demo here: https://snack.expo.io/SJPQNScUZ)

|  Type   | Default |
| :-----: | :-----: |
| boolean |  false  |

---

### `switchDisabled`

If true the user won't be able to toggle the switch. Default value is false.

|  Type   | Default |
| :-----: | :-----: |
| boolean |         |

---

### `switched`

The value of the switch. If true the switch will be turned on. Default value is false.

|  Type   | Default |
| :-----: | :-----: |
| boolean |         |

---

### `switchOnTintColor`

Background color when the switch is turned on.

|  Type  | Default |
| :----: | :-----: |
| string |         |

---

### `switchThumbTintColor`

Color of the foreground switch grip.

|  Type  | Default |
| :----: | :-----: |
| string |         |

---

### `switchTintColor`

Border color on iOS and background color on Android when the switch is turned off.

|  Type  | Default |
| :----: | :-----: |
| string |         |

---

### `textInput`

Whether to have the right title area be an input text component.

|      Type      | Default |
| :------------: | :-----: |
| PropTypes.bool |         |

---

### `textInputAutoCapitalize`

Can be one of the following: 'none', 'sentences', 'words', 'characters'.

|  Type  | Default |
| :----: | :-----: |
| string |         |

---

### `textInputAutoCorrect`

Can tell TextInput to automatically capitalize certain characters.

|  Type   | Default |
| :-----: | :-----: |
| boolean |         |

---

### `textInputAutoFocus`

If true, focuses the input on componentDidMount. The default value is false.

|  Type   | Default |
| :-----: | :-----: |
| boolean |         |

---

### `textInputContainerStyle`

Style for the container surrounding the input text

|      Type      | Default |
| :------------: | :-----: |
| object (style) |         |

---

### `textInputEditable`

If false, text is not editable. The default value is true.

|  Type   | Default |
| :-----: | :-----: |
| boolean |         |

---

### `textInputKeyboardType`

Can be one of the following: 'default', 'email-address', 'numeric', 'phone-pad', 'ascii-capable', 'numbers-and-punctuation', 'url', 'number-pad', 'name-phone-pad', 'decimal-pad', 'twitter', 'web-search'

|  Type  | Default |
| :----: | :-----: |
| string |         |

---

### `textInputMaxLength`

Limits the maximum number of characters that can be entered.

|  Type  | Default |
| :----: | :-----: |
| number |         |

---

### `textInputMultiline`

If true, the text input can be multiple lines. The default value is false.

|  Type   | Default |
| :-----: | :-----: |
| boolean |         |

---

### `textInputOnBlur`

Callback that is called when the text input is blurred.

|   Type   | Default |
| :------: | :-----: |
| function |         |

---

### `textInputOnChangeText`

Callback that is called when the text input's text changes. Changed text is passed as an argument to the callback handler.

|   Type   | Default |
| :------: | :-----: |
| function |         |

---

### `textInputOnFocus`

Callback that is called when the text input is focused.

|   Type   | Default |
| :------: | :-----: |
| function |         |

---

### `textInputPlaceholder`

Placeholder for the text input

|  Type  | Default |
| :----: | :-----: |
| string |         |

---

### `textInputReturnKeyType`

Determines how the return key should look. For more info see [the React Native docs](https://facebook.github.io/react-native/docs/textinput.html#returnkeytype)

|  Type  | Default |
| :----: | :-----: |
| string |         |

---

### `textInputSecure`

If true, obscures the text entered so that sensitive text like passwords stay secure.

|  Type   | Default |
| :-----: | :-----: |
| boolean |         |

---

### `textInputSelectTextOnFocus`

If true, all text will automatically be selected on focus.

|  Type   | Default |
| :-----: | :-----: |
| boolean |         |

---

### `textInputStyle`

Style for the input text

|      Type      | Default |
| :------------: | :-----: |
| object (style) |         |

---

### `textInputValue`

Manually set value of the input

|  Type  | Default |
| :----: | :-----: |
| string |         |

---

### `title`

main title for list item, can be text or custom view (required)

|           Type           | Default |
| :----------------------: | :-----: |
| string, number or object |  none   |

---

### `titleContainerStyle`

provide styling for title container

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `titleNumberOfLines`

Number of lines for Title

|  Type  | Default |
| :----: | :-----: |
| number |    1    |

---

### `titleStyle`

additional title styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

### `underlayColor`

define underlay color for TouchableHighlight (optional)

|  Type  | Default |
| :----: | :-----: |
| string |  white  |

---

### `wrapperStyle`

additional wrapper styling (optional)

|      Type      | Default |
| :------------: | :-----: |
| object (style) |  none   |

---

## Badges

![Badges](/react-native-elements/img/list-badges.jpeg)

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

### Badge Props

* [`badge`](#badge)

---

### `badge`

add a badge to the ListItem by using this prop

|                                                                                                                          Type                                                                                                                           | Default |
| :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :-----: |
| object, accepts the following properties: value (string), containerStyle (object), textStyle (object). You can override the default badge by providing your own component with it's own styling by providing badge={{ element: <YourCustomElement /> }} |  none   |
