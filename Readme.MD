![React Native Elements](http://i.imgur.com/HU4S78V.png)
## Cross Platform React Native UI Toolkit

![React Native UI Toolkit](http://i.imgur.com/g5fM8vL.png)

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
  Button
} from 'react-native-elements'

<Button
  raised
  icon={{name: 'cached'}}
  title='RAISED WITH ICON' />

```
## Included
- [x] [Buttons](https://github.com/dabit3/React-Native-Elements#buttons)
- [x] [Social Icons / Buttons](https://github.com/dabit3/React-Native-Elements#social-icons--buttons)
- [x] [Side Menu](https://github.com/dabit3/React-Native-Elements#sidemenu)
- [x] [Form Elements](https://github.com/dabit3/React-Native-Elements#forms)
- [x] [Checkboxes](https://github.com/dabit3/React-Native-Elements#checkboxes)
- [x] [List Element](https://github.com/dabit3/React-Native-Elements#lists)
- [x] [Linked List Element](https://github.com/dabit3/React-Native-Elements#lists)
- [x] HTML style headings (h1, h2, etc...)
- [x] [Card component](https://github.com/dabit3/React-Native-Elements#card)
- [x] [Pricing Component](https://github.com/dabit3/React-Native-Elements#pricing-component)

## Roadmap
- [ ] Add divider with inset
- [ ] Add radio buttons
- [ ] Add icons to TextInputs
- [ ] Profile Component
- [ ] Custom Picker
- [ ] Search Bar
- [ ] Side Menu Improvements
- [ ] Button Group
- [ ] Cross Platform Tab Bar
- [ ] Something you's like to see? Submit an [issue](https://github.com/dabit3/React-Native-Elements/issues) or a [pull request](https://github.com/dabit3/React-Native-Elements/pulls)

## Examples
Check out the pre built and configured [React Native Hackathon Starter Project](https://github.com/dabit3/react-native-hackathon-starter) which uses all of these elements.

# API


## Buttons

![Buttons](http://i.imgur.com/jeXZSMC.png)

```
import { Button } from 'react-native-elements'

<Button
  title='BUTTON' />

<Button
  raised
  icon={{name: 'cached'}}
  title='RAISED WITH ICON' />

<Button
  small
  iconRight
  icon={{name: 'code'}}
  title='SMALL WITH RIGHT ICON' />

```

#### Button props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| buttonStyle | none | object (style) | add additional styling for button component (optional) |
| title | none | string | button title (required) | 
| small | false | boolean | makes button small |
| iconRight | false | boolean | moves icon to right of title |
| onPress | none | function | onPress method (required) |
| icon | none | object {name(string), color(string), size(number)} | [Material Icon Name](https://design.google.com/icons/) (optional) | 
| backgroundColor | #397af8 | string (color) | background color of button (optional) |
| color | white | string(color) | font color (optional) |
| textStyle | none | object (style) | text styling (optional)  |
| fontSize | 18 | number | font size (optional)  |
| underlayColor | transparent | string(color) | underlay color for button press (optional)  |
| raised | false | boolean | flag to add raised button styling (optional)  |


## Social Icons & Buttons

![Social Icons](http://i.imgur.com/IKCrDzO.png)

```
import { SocialIcon } from 'react-native-elements'

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

#### SocialIcon props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| component | TouchableHighlight | React Native Component | type of button (optional)  |
| type | none | social media type (facebook, twitter, google-plus-official, pinterest, linkedin, youtube, vimeo, tumblr, instagram, quora, foursquare, wordpress, stumbleupon) | social media type (required) |
| raised | true | boolean | raised adds a drop shadow, set to false to remove |
| button | false | boolean | creates button (optional) |
| onPress | none | function | onPress method (optional) |
| light | false | boolean | reverses icon color scheme, setting background to white and icon to primary color |
| iconStyle | none | object (style) | extra styling for icon component (optional) |
| style | none | object (style) | button styling (optional) |
| iconColor | white | string | icon color (optional) |
| title | none | string | title if made into a button (optional) |


## Lists

![Lists](http://i.imgur.com/k3WOt3n.png)

#### Using Map Function. Implemented with icons.

```
import { List, ListItem } from 'react-native-elements'

const list = [
  {
    title: 'Appointments',
    icon: 'av-timer'
  },
  {
    title: 'Trips',
    icon: 'flight-takeoff'
  }
]

<List>
  {
    list.map((item, i) => (
      <ListItem
        key={i}
        title={item.title}
        icon={{name: item.icon}}
      />
    ))
  }
</List>
```

#### Using RN ListView. Implemented with avatars.

```
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
  }
]

renderRow (rowData, sectionID) {
  return (
    <ListItem
      roundAvatar
      key={sectionID}
      title={rowData.name}
      subtitle={rowData.subtitle}
      avatar={rowData.avatar_url}
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

#### List Props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | none | object (style) | style the list container |


#### ListItem props

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


## SideMenu

![Side Menu](http://i.imgur.com/cjIcRl6.gif)

```
import { SideMenu, ListItem } from 'react-native-elements'

constructor () {
  super()
  this.state = { toggled: false }
}

toggleSideMenu () {
  this.setState({
    toggled: true
  })
}

render () {
  // SideMenu takes a React Native element as a prop for the actual Side Menu
  const MenuComponent = (
    <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
      <List containerStyle={{marginBottom: 20}}>
      {
        list.map((item, i) => (
          <ListItem
            roundAvatar
            onPress={() => console.log('something')}
            avatar={item.avatar_url}
            key={i}
            title={item.name}
            subtitle={item.subtitle} />
        ))
      }
      </List>
    </View>
  )
  return (
    <SideMenu
      MenuComponent={MenuComponent}
      toggled={this.state.toggled}>
      <App />
    </SideMenu>
  )
}

```

#### SideMenu props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| toggled | false | boolean | toggles side menu when true (required) |
| easing | Easing.inout | Easing method | specifies different easing method (optional) |
| duration | 250 | animation length | specifies length of animation (optional) |
| menuWidth | window width - 80 | number | the width and offset of the menu (optional) |
| MenuComponent | none | React Native Component | the actual side menu component you would like to use (required) |
| children | none | React Native Component | wrap RNSideMenu around the component you would like to animate (required)  |

## Checkboxes

![Checkboxes](http://i.imgur.com/8BKC77S.png)

```

import { CheckBox } from 'react-native-elements'

<CheckBox
  title='Click Here'
  checked={this.state.checked}
/>

<CheckBox
  center
  title='Click Here'
  checked={this.state.checked}
/>

<CheckBox
  center
  title='Click Here'
  checkedIcon='dot-circle-o'
  uncheckedIcon='circle-o'
  checked={this.state.checked}
/>

<CheckBox
  center
  title='Click Here to Remove This Item'
  iconRight
  iconType='material'
  checkedIcon='clear'
  uncheckedIcon='add'
  checkedColor='red'
  checked={this.state.checked}
/>

```

#### Checkbox props

> This component uses FontAwesome icons out of the box. You can also specify one of the following types of icons by specifying an iconType prop: Zocial, Octicons, MaterialIcons, Ionicons, Foundation, EvilIcons, or Entypo

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| iconType | fontawesome | string | icon family, can be one of the following: zocial, octicon, material, ionicon, foundation, evilicon, entypo (required only if specifying an icon that is not from font-awesome) |
| component | TouchableOpacity | React Native Component | specify React Native component for main button (optional) |
| checked | false | boolean | flag for checking the icon (required) |
| iconRight | false | boolean | moves icon to right of text (optional) |
| right | false | boolean | aligns checkbox to right (optional) |
| center | false | boolean | aligns checkbox to center (optional) |
| title | none | string | title of checkbox (required) |
| containerStyle | none | object (style) | style of main container (optional) |
| textStyle | none | object (style) | style of text (optional) |
| onPress | none | function | onPress function for checkbox (required) |
| checkedIcon | check-square-o | string | default checked icon ([Font Awesome Icon](http://fontawesome.io/icons/)) (optional) |
| uncheckedIcon | square-o | string | default checked icon ([Font Awesome Icon](http://fontawesome.io/icons/)) (optional) |
| checkedColor | green | string | default checked color (optional) |
| uncheckedColor | #bfbfbf | string | default unchecked color (optional) |
| checkedTitle | none | string | specify a custom checked message (optional) |

## Forms

![Forms](http://i.imgur.com/9idGiXr.png)

```
import { FormLabel, FormInput } from 'react-native-elements'

<FormLabel containerStyle={styles.labelContainerStyle}>Name</FormLabel>
<FormInput onChangeText={someFunction}/>

```

#### FormInput props

##### This component inherits [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | none | object (style) | TextInput container styling (optional) |
| inputStyle | none | object (style) | TextInput styling (optional) |

#### FormLabel props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | none | object (style) | additional label container style (optional) |
| labelStyle | none | object (style) | additional label styling (optional) |


## Card

![Card Component](http://i.imgur.com/eRaY7Ok.png)

```
import { Card } from 'react-native-elements'

<Card
  title='CARD WITH DIVIDER'>
  {
    users.map((u, i) => {}
  }
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
| dividerStyle | none | object (style) | additional divider styling (if title provided) (optional) |


## Pricing Component

![Pricing Component](http://i.imgur.com/EMMDZwo.png)

```
import { PricingCard } from 'react-native-elements'

<PricingCard
  color={colors.primary}
  title='Free'
  price='$0'
  info={['1 User', 'Basic Support', 'All Core Features']}
  button={{ title: 'GET STARTED', icon: 'flight-takeoff' }}
/>

```

#### PricingCard props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| title | none | string | title (required) |
| price | none | string | price (required) |
| color | none | string | color scheme for button & title (required) |
| info | none | array of strings | pricing information (optional) |
| button | none | object {title, icon, buttonStyle} | button information (required) |
| containerStyle | inherited styling | object (style) | outer component styling (optional) |
| wrapperStyle | inherited styling | object (style) | inner wrapper component styling (optional) |
 











