![React Native Elements](http://i.imgur.com/uJcDB6g.png)
## React Native UI Toolkit

![React Native UI Toolkit]()

## Get Started

1 install React Native Elements

```
npm i react-native-elements --save
```

2 link project

```
rnpm link
```

3 start using components

```
import {
  RNEButton
} from 'react-native-elements'

<RNEButton
  raised
  icon={{name: 'cached'}}
  title='RAISED WITH ICON' />

```


# Included
- [x] [Buttons]()
- [x] Pricing Component
- [x] [Social Icons / Buttons]()
- [x] [Card component]()
- [x] [Form Elements]()
- [x] [List Element]()
- [x] [Linked List Element]()
- [x] HTML style headings (h1, h2, etc...)

#### Todo Soon
- [ ] Add icons to TextInputs
- [ ] Add Profile Component
- [ ] Add Picker
- [ ] Add Search Bar
- [ ] Add Side Menu

# API

## Buttons

![Buttons](http://i.imgur.com/aZNhgFp.png)

```
import Button from 'HSButton'

<Button
  raised
  icon={{name: 'cached'}}
  title='RAISED WITH ICON' />
```

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| buttonStyle | none | object (style) | add additional styling for button component (optional) |
| title | none | string | button title (required) | 
| onPress | none | function | onPress method (required) |
| icon | none | object {name(string), color(string), size(number)} | [Material Icon Name](https://design.google.com/icons/) (optional) | 
| secondary | false | boolean | secondary button flag (optional) |
| backgroundColor | primary color | string (color) | background color of button (optional) |
| color | white | string(color) | font color (optional) |
| textStyle | none | object (style) | text styling (optional)  |
| fontSize | 18 | number | font size (optional)  |
| underlayColor | transparent | string(color) | underlay color for button press (optional)  |
| raised | false | boolean | flag to add raised button styling (optional)  |

## Social Icons & Buttons

![Social Icons](http://i.imgur.com/k9jQh2u.png)

```
import SocialIcon from 'HSSocialIcon'

// Icon
<SocialIcon
  type='twitter'
/>

// Button
<SocialIcon
  title='Sign In With Facebook'
  button
  type='facebook'
/>
```

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| component | TouchableHighlight | React Native Component | type of button (optional)  |
| type | none | social media type (facebook, twitter, google-plus-official, pinterest, linkedin, youtube, vimeo, tumblr, instagram, quora, foursquare, wordpress, stumbleupon) | social media type (required) |
| button | false | boolean | creates button (optional) |
| onPress | none | funciton | onPress method (optional) |
| iconStyle | none | object (style) | extra styling for icon component ([React Native Vector Icons](https://github.com/oblador/react-native-vector-icons)) (optional) |
| style | none | object (style) | button styling (optional) |
| iconColor | white | string | icon color (optional) |
| title | none | string | title if made into a button (optional) |

## Lists

![Lists](http://i.imgur.com/D8Y4mp3l.png)

#### Using Map Function. Implemented with icons.

```
import List from 'HSList'
import ListItem from 'HSListItem'

<List>
  {
    list1.map((l, i) => (
      <ListItem
        key={i}
        onPress={log}
        title={l.title}
        icon={{name: l.icon}}
      />
    ))
  }
</List>
```

#### Using RN ListView. Implemented with avatars.

```
renderRow (rowData, sectionID) {
  return (
    <ListItem
      key={sectionID}
      onPress={log}
      title={rowData.title}
      icon={{name: rowData.icon}}
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

#### HSList Props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | none | object (style) | style the list container |


#### HSListItem Props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| avatar | none | string | left avatar (optional) |
| avatarStyle | none | object (style) | avatar styling (optional) |
| chevronColor | #bdc6cf | string | set chevron color |
| component | View or TouchableHighlight if onPress method is added as prop | React Native element | replace element with custom element (optional) |
| containerStyle | none | object (style) | additional main container styling (optional) |
| hideChevron | false | boolean | set if you do not want a chevron (optional) |
| icon | none | object {name, color, style} | icon configuration for left icon (optional) |
| onPress | none | function | onPress method for link (optional) |
| rightIcon | chevron | string | right icon (optional) ([material icon name](https://design.google.com/icons/)) |
| roundAvatar | false | boolan | make left avatar round |
| subtitle | none | string | subtitle text (optional) |
| subtitleStyle | none | object (style) | additional subtitle styling (optional ) |
| title | none | string | main title for list item (required) |
| titleStyle | none | object (style) | additional title styling (optional) |
| wrapperStyle | none | object (style) | additional wrapper styling (optional) |
| underlayColor | white | string | define underlay color for TouchableHighlight (optional) |

## Forms

![Forms](http://i.imgur.com/9idGiXr.png)

```
import FormLabel from 'HSFormLabel'
import FormInput from 'HSFormInput'

<FormLabel containerStyle={styles.labelContainerStyle}>Name</FormLabel>
<FormInput onChangeText={someFunction}/>

```
### FormInput

##### This component inherits [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | none | object (style) | TextInput container styling (optional) |
| inputStyle | none | object (style) | TextInput styling (optional) |

### FormLabel

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | none | object (style) | additional label container style (optional) |
| labelStyle | none | object (style) | additional label styling (optional) |

## Card

![Card Component](http://i.imgur.com/eRaY7Ok.png)

```
import Card from 'HSCard'

<Card
  title='CARD WITH DIVIDER'>
  {
    users.map((u, i) => {}
  }
</Card>
```

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| flexDirection | column | string | flex direction (row or column) |
| containerStyle | none | object (style) | outer container style |
| wrapperStyle | none | object (style) | inner container style |
| title | none | string | optional card title |
| titleStyle | none | object (style) | additional title styling (if title provided) |
| dividerStyle | none | object (style) | additional divider styling (if title provided) |

## Colors

Colors are configured in `./src/config/colors`:

````
/**
 * @providesModule HSColors
 */

export default {
  primary: '#397af8',
  primary1: '#4d86f7',
  primary2: '#6296f9',
  secondary: '#8F0CE8',
  secondary2: '#00B233',
  secondary3: '#00FF48',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  dkGreyBg: '#232323',
  greyOutline: '#cbd2d9'
}


```



