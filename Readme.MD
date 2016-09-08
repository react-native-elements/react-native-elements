![React Native Elements](http://i.imgur.com/HU4S78V.png)
## React Native UI Toolkit

![React Native UI Toolkit](http://i.imgur.com/2ehiIx1.png)

## Get Started

#### Step 1 

Install rnpm if not already installed on your machine

`npm install rnpm -g`

####Step 2

Install React Native Elements

`npm i react-native-elements --save`

Step 3

Link project

`rnpm link`

Step 4

Start using components

```
import {
  RNEButton,
  RNECard,
  RNEFormInput,
  RNEFormLabel,
  RNEList,
  RNEListItem,
  RNEPricingCard,
  RNESocialIcon,
  RNEText,
  RNEDivider
} from 'react-native-elements'

<RNEButton
  raised
  icon={{name: 'cached'}}
  title='RAISED WITH ICON' />

```


## Included
- [x] [Buttons](https://github.com/dabit3/React-Native-Elements#buttons)
- [x] Pricing Component
- [x] [Social Icons / Buttons](https://github.com/dabit3/React-Native-Elements#social-icons--buttons)
- [x] [Card component](https://github.com/dabit3/React-Native-Elements#card)
- [x] [Form Elements](https://github.com/dabit3/React-Native-Elements#forms)
- [x] [List Element](https://github.com/dabit3/React-Native-Elements#lists)
- [x] [Linked List Element](https://github.com/dabit3/React-Native-Elements#lists)
- [x] HTML style headings (h1, h2, etc...)

## Roadmap
- [ ] Add icons to TextInputs
- [ ] Profile Component
- [ ] Custom Picker
- [ ] Search Bar
- [ ] Side Menu
- [ ] Cross Platform Tab Bar
- [ ] Something you's like to see? Submit an [issue](https://github.com/dabit3/React-Native-Elements/issues) or a [pull request](https://github.com/dabit3/React-Native-Elements/pulls)

# API

## Buttons

![Buttons](http://i.imgur.com/aZNhgFp.png)

```
import { RNEButton } from 'react-native-elements'

<RNEButton
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
import { RNESocialIcon } from 'react-native-elements'

// Icon
<RNESocialIcon
  type='twitter'
/>

// Button
<RNESocialIcon
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
import { RNEList, RNEListItem } from 'react-native-elements'

<RNEList>
  {
    list1.map((l, i) => (
      <RNEListItem
        key={i}
        title={l.title}
        icon={{name: l.icon}}
      />
    ))
  }
</RNEList>
```

#### Using RN ListView. Implemented with avatars.

```
renderRow (rowData, sectionID) {
  return (
    <RNEListItem
      key={sectionID}
      title={rowData.title}
      icon={{name: rowData.icon}}
    />
  )
}

render () {  
  return (
    <RNEList>
      <ListView
        renderRow={this.renderRow}
        dataSource={this.state.dataSource}
      />
    </RNEList>
  )
}

```

#### RNEList Props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | none | object (style) | style the list container |


#### RNEListItem Props

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
import { RNEFormLabel, RNEFormInput } from 'react-native-elements'

<RNEFormLabel containerStyle={styles.labelContainerStyle}>Name</RNEFormLabel>
<RNEFormInput onChangeText={someFunction}/>

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
import { RNECard } from 'react-native-elements'

<RNECard
  title='CARD WITH DIVIDER'>
  {
    users.map((u, i) => {}
  }
</RNECard>
```

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| flexDirection | column | string | flex direction (row or column) |
| containerStyle | none | object (style) | outer container style |
| wrapperStyle | none | object (style) | inner container style |
| title | none | string | optional card title |
| titleStyle | none | object (style) | additional title styling (if title provided) |
| dividerStyle | none | object (style) | additional divider styling (if title provided) |



