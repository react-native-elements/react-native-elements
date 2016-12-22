![React Native Elements](http://i.imgur.com/Ok2KaWq.png)
## Cross Platform React Native UI Toolkit

![React Native UI Toolkit](http://i.imgur.com/UXrGTeG.png)

## Get Started

*If you are using Exponent, you can run `npm i react-native-elements --save` and skip to step 3.*

#### Step 1

Install react-native-vector-icons (if you do not already have it)

`npm i react-native-vector-icons --save && react-native link react-native-vector-icons`

*If you have any issues with icons not working or installation of React Native Vector Icons, check out their installation guide [here](https://github.com/oblador/react-native-vector-icons#installation)*

#### Step 2

Install React Native Elements

`npm i react-native-elements --save`

or

`yarn add react-native-elements`

#### Step 3

Start using components

```js
import {
  Button
} from 'react-native-elements'

<Button
  raised
  icon={{name: 'cached'}}
  title='RAISED WITH ICON' />

```
## Included
- [x] [Buttons](https://github.com/react-native-community/react-native-elements#buttons)
- [x] [Social Icons / Buttons](https://github.com/react-native-community/react-native-elements#social-icons--buttons)
- [x] [Icons](https://github.com/react-native-community/react-native-elements#icons--icon-buttons)
- [x] [Side Menu](https://github.com/react-native-community/react-native-elements#sidemenu)
- [x] [Form Elements](https://github.com/react-native-community/react-native-elements#forms)
- [x] [Search Bar](https://github.com/react-native-community/react-native-elements#search-bar)
- [x] [ButtonGroup](https://github.com/react-native-community/react-native-elements#buttongroup)
- [x] [Checkboxes](https://github.com/react-native-community/react-native-elements#checkboxes)
- [x] [List Element](https://github.com/react-native-community/react-native-elements#lists)
- [x] [Linked List Element](https://github.com/react-native-community/react-native-elements#lists)
- [x] [Cross Platform Tab Bar](https://github.com/react-native-community/react-native-elements#cross-platform-tab-bar)
- [x] HTML style headings (h1, h2, etc...)
- [x] [Card component](https://github.com/react-native-community/react-native-elements#card)
- [x] [Pricing Component](https://github.com/react-native-community/react-native-elements#pricing-component)

## Roadmap
- [ ] Add radio buttons
- [ ] Searchable Drop Down similar to [Bootstrap-3-Typehead](https://github.com/bassjobsen/Bootstrap-3-Typeahead)
- [ ] [Swipeable List Item component](https://github.com/jemise111/react-native-swipe-list-view)
- [ ] Add icons to TextInputs
- [ ] Profile Component `in progress`
- [ ] Add grid component `in progress`
- [ ] Custom Picker
- [ ] Side Menu Improvements
- [ ] Something you's like to see? Submit an [issue](https://github.com/dabit3/react-native-elements/issues) or a [pull request](https://github.com/dabit3/react-native-elements/pulls)

## Examples
Check out the pre built and configured [React Native Hackathon Starter Project](https://github.com/dabit3/react-native-hackathon-starter) which uses all of these elements.

## Notes

#### Fonts
React Native Elements uses the System font as the default font family for iOS and Roboto as the default font family for Android.

**In the example screenshots, we are using Lato which can be downloaded [here](https://fonts.google.com/specimen/Lato?selection.family=Lato).**

> We are working on a way to make a custom font family configurable through the command line.

[Here](https://github.com/dabit3/react-native-fonts) is a list of fonts available out of the box for each platform, or you can install and use a custom font of your own.

To override the fontFamily in any element, simply provide a fontFamily prop:

```js
<Button
  raised
  icon={{name: 'cached'}}
  title='RAISED WITH ICON'
  fontFamily='Comic Sans MS' />

```

# API


## Buttons
Buttons take a title and an optional [material icon name](https://design.google.com/icons/), as well as the props below.

> You can override Material icons with one of the following: simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo by providing an icon.type as a prop.

![Buttons](http://i.imgur.com/CVf1xbr.png)

```js
import { Button } from 'react-native-elements'

<Button
  title='BUTTON' />

<Button
  raised
  icon={{name: 'cached'}}
  title='BUTTON WITH ICON' />

<Button
  large
  iconRight
  icon={{name: 'code'}}
  title='LARGE WITH RIGHT ICON' />

<Button
  large
  icon={{name: 'envira', type: 'font-awesome'}}
  title='LARGE WITH RIGHT ICON' />

<Button
  large
  icon={{name: 'squirrel', type: 'octicon', buttonStyle: styles.someButtonStyle }}
  title='OCTICON' />

```

#### Button props

> Also recevies all TouchableWithoutFeedback props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| Component | TouchableHighlight (iOS), TouchableNativeFeedback (android) | React Native Component | Specify other component such as TouchableOpacity or other (optional) |
| buttonStyle | none | object (style) | add additional styling for button component (optional) |
| title | none | string | button title (required) |
| large | false | boolean | makes button large |
| fontFamily | System font (iOS), Roboto (android) | string | specify different font family |
| fontWeight | none | string | specify font weight for title (optional) |
| iconRight | false | boolean | moves icon to right of title |
| onPress | none | function | onPress method (required) |
| icon | {color: 'white'} | object {name: string, color: string, size: number, type: string (default is material, or choose one of simple-line-icon, zocial, font-awesome, octicon, ionicon, foundation, evilicon, or entypo), style: object(style)} | icon configuration (optional) |
| backgroundColor | #397af8 | string (color) | background color of button (optional) |
| borderRadius | none | number | adds border radius to card (optional) |
| color | white | string(color) | font color (optional) |
| textStyle | none | object (style) | text styling (optional)  |
| fontSize | 18 | number | font size (optional)  |
| underlayColor | transparent | string(color) | underlay color for button press (optional)  |
| raised | false | boolean | flag to add raised button styling (optional)  |
| disabled | false | boolean | prop to indicate button is disabled (optional) |


## Social Icons & Buttons

![Social Icons](http://i.imgur.com/HYZ5sbP.png)

```js
import { SocialIcon } from 'react-native-elements'

// Icon
<SocialIcon
  type='twitter'
/>

<SocialIcon
  raised={false}
  type='gitlab'
/>

<SocialIcon
  light
  type='medium'
/>

<SocialIcon
  light
  raised={false}
  type='medium'
/>


// Button
<SocialIcon
  title='Sign In With Facebook'
  button
  type='facebook'
/>

<SocialIcon
  title='Some Twitter Message'
  button
  type='twitter'
/>

<SocialIcon
  button
  type='medium'
/>


<SocialIcon
  button
  light
  type='instagram'
/>

```

#### SocialIcon props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| title | none | string | title if made into a button (optional) |
| type | none | social media type (facebook, twitter, google-plus-official, pinterest, linkedin, youtube, vimeo, tumblr, instagram, quora, foursquare, wordpress, stumbleupon, github, github-alt, twitch, medium, soundcloud, gitlab, angellist, codepen) | social media type (required) |
| raised | true | boolean | raised adds a drop shadow, set to false to remove |
| button | false | boolean | creates button (optional) |
| onPress | none | function | onPress method (optional) |
| light | false | boolean | reverses icon color scheme, setting background to white and icon to primary color |
| iconStyle | none | object (style) | extra styling for icon component (optional) |
| style | none | object (style) | button styling (optional) |
| iconColor | white | string | icon color (optional) |
| iconSize | 24 | number | icon size (optional) |
| component | TouchableHighlight | React Native Component | type of button (optional)  |
| fontFamily | System font bold (iOS), Roboto-Black (android) | string | specify different font family (optional) |
| fontWeight | bold (ios), black(android) | string | specify font weight of title if set as a button with a title |
| fontStyle | none | object (style) | specify text styling (optional) |
| disabled | false | boolean | disable button (optional) |
| loading | false | boolean | shows loading indicator (optional) |


## Icons & Icon Buttons

![Icons](http://i.imgur.com/2A28abz.png)

Icons take the name of a [material icon](https://design.google.com/icons/) as a prop.

> You can override Material icons with one of the following: [font-awesome](http://fontawesome.io/icons/), [octicon](https://octicons.github.com/), [ionicon](http://ionicons.com/), [foundation](http://zurb.com/playground/foundation-icon-fonts-3), [evilicon](http://evil-icons.io/), [simple line icons](http://simplelineicons.com/), [zocial](http://weloveiconfonts.com/), or [entypo](http://www.entypo.com/) by providing a type prop.

> Hint: use **reverse** to make your icon look like a button

```js

import { Icon } from 'react-native-elements'

<Icon
  name='rowing' />

<Icon
  name='g-translate'
  color='#00aced' />

<Icon
  name='sc-telegram'
  type='evilicon'
  color='#517fa4'
/>

<Icon
  reverse
  name='ios-american-football'
  type='ionicon'
  color='#517fa4'
/>

<Icon
  raised
  name='heartbeat'
  type='font-awesome'
  color='#f50'
  onPress={() => console.log('hello')} />

```

#### Icon props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| name | none | string | name of icon (required) |
| type | material | string | type (defaults to material, options are `zocial, font-awesome, octicon, ionicon, foundation, evilicon, simple-line-icon, or entypo`) |
| size | 26 | number | size of icon (optional) |
| color | black | string | color of icon (optional) |
| iconStyle | inherited style | object (style) | additional styling to icon (optional) |
| component | View if no onPress method is defined, TouchableHighlight if onPress method is defined | React Native component | update React Native Component (optional) |
| onPress | none | function | onPress method for button (optional) |
| underlayColor | icon color | string | underlayColor for press event |
| reverse | false | boolean | reverses color scheme (optional) |
| raised | false | boolean | adds box shadow to button (optional) |
| containerStyle | inherited styling | object (style) | add styling to container holding icon (optional) |
| reverseColor | white | string | specify reverse icon color (optional) |



## Lists

![Lists](http://i.imgur.com/7V8CIfl.png)

#### Using Map Function. Implemented with avatar.

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

#### List Props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | marginTop: 20, borderTopWidth: 1, borderBottomWidth: 1, borderBottomColor: #cbd2d9 | object (style) | style the list container |


#### ListItem props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| avatar | none | object| left avatar (optional). Refer to [React Native Image Source](https://facebook.github.io/react-native/docs/images.html) |
| avatarStyle | none | object (style) | avatar styling (optional) |
| chevronColor | #bdc6cf | string | set chevron color |
| component | View or TouchableHighlight if onPress method is added as prop | React Native element | replace element with custom element (optional) |
| containerStyle | none | object (style) | additional main container styling (optional) |
| hideChevron | false | boolean | set if you do not want a chevron (optional) |
| leftIcon | none | object {name, color, style, type} (type defaults to material icons) | icon configuration for left icon (optional) |
| rightIcon | {name: 'chevron-right'} | object {name, color, style, type} (type defaults to material icons) | right icon (optional), will only show up if there is an onPress method attached ([material icon name](https://design.google.com/icons/)) |
| onPress | none | function | onPress method for link (optional) |
| roundAvatar | false | boolean | make left avatar round |
| subtitle | none | string | subtitle text (optional) |
| subtitleContainerStyle | none | style (object) | provide styling for subtitle container |
| subtitleStyle | none | object (style) | additional subtitle styling (optional ) |
| title | none | string | main title for list item (required) |
| titleStyle | none | object (style) | additional title styling (optional) |
| wrapperStyle | none | object (style) | additional wrapper styling (optional) |
| underlayColor | white | string | define underlay color for TouchableHighlight (optional) |
| fontFamily | HelevticaNeue (iOS), Roboto (android) | string | specify different font family |
| rightTitle | none | string | provide a rightTitle to have a title show up on the right side of the button, will override any icon on the right |
| rightTitleContainerStyle | flex: 1, alignItems: 'flex-end', justifyContent: 'center' | object (style) | style the outer container of the rightTitle text |
| rightTitleStyle | marginRight: 5, color: '#bdc6cf' | object (style) | style the text of the rightTitle text |


## SideMenu

![Side Menu](http://i.imgur.com/cjIcRl6.gif)

```js
import { SideMenu, List, ListItem } from 'react-native-elements'

constructor () {
  super()
  this.state = { toggled: false }
}

toggleSideMenu () {
  this.setState({
    toggled: !this.state.toggled
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
            avatar={{uri:item.avatar_url}}
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
| toggledContainerStyle | none | object (style) | toggled state menu styling |
| easing | Easing.inout | Easing method | specifies different easing method (optional) |
| duration | 250 | animation length | specifies length of animation (optional) |
| menuWidth | window width - 80 | number | the width and offset of the menu (optional) |
| MenuComponent | none | React Native Component | the actual side menu component you would like to use (required) |
| children | none | React Native Component | wrap RNSideMenu around the component you would like to animate (required)  |

## Search Bar

![Search Bar](http://i.imgur.com/QvSrF62.png)

```js
import { SearchBar } from 'react-native-elements'

<SearchBar
  onChangeText={someMethod}
  placeholder='Type Here...' />

<SearchBar
  noIcon
  onChangeText={someMethod}
  placeholder='Type Here...' />

<SearchBar
  round
  onChangeText={someMethod}
  placeholder='Type Here...' />

<SearchBar
  lightTheme
  onChangeText={someMethod}
  placeholder='Type Here...' />

```

#### SearchBar props

##### This component inherits [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | inherited styling | object (style) | style the container of the TextInput |
| inputStyle | inherited styling | object (style) | style the TextInput |
| icon | { color: '#86939e', name: 'search' } | object {name (string), color (string), style (object)} | specify color, styling, or another [Material Icon Name](https://design.google.com/icons/) |
| noIcon | false | boolean | remove icon from textinput |
| lightTheme | false | boolean | change theme to light theme |
| round | false | boolean | change TextInput styling to rounded corners |
| containerRef | none | ref | ref for TextInput conainer |
| textInputRef | none | ref | ref for TextInput |
| focus | none | function | call focus on the textinput(optional), eg `this.refs.someInputRef.focus()` |


## Cross Platform Tab Bar

![Cross Platform Tab Bar](http://i.imgur.com/61lOjCy.png)

> This component implements the [react-native-tab-navigator](https://github.com/exponentjs/react-native-tab-navigator) from [Exponent](https://getexponent.com/). Check out [Exponent](https://getexponent.com/) if you haven't already!

```js

import { Tabs, Tab, Icon } from 'react-native-elements'

changeTab (selectedTab) {
  this.setState({selectedTab})
}

const { selectedTab } = this.state

<Tabs>
  <Tab
    tabStyle={selectedTab !== 'home' && { styles.tabSelectedstyle }}
    titleStyle={[styles.titleStyle]}
    selectedTitleStyle={[styles.titleSelected]}
    selected={selectedTab === 'home'}
    title={selectedTab === 'home' ? 'HOME' : null}
    renderIcon={() => <Icon name='whatshot' size={26} />}
    renderSelectedIcon={() => <Icon name='whatshot' size={26} />}
    onPress={() => this.changeTab('home')}>
    <Home />
  </Tab>
  <Tab
    tabStyle={selectedTab !== 'about' && { styles.tabSelectedstyle }}
    titleStyle={[styles.titleStyle]}
    selectedTitleStyle={[styles.titleSelected]}
    selected={selectedTab === 'about'}
    title={selectedTab === 'about' ? 'ABOUT' : null}
    renderIcon={() => <Icon name='important-devices' size={26} />}
    renderSelectedIcon={() => <Icon name='important-devices' size={26} />}
    onPress={() => this.changeTab('about')}>
    <About />
  </Tab>
  /* ... more tabs here */
</Tabs>

styles = { /* some custom styles /* }

```

### Tabs Props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| sceneStyle | inherited | object (style) | define for rendered scene |
| tabBarStyle | inherited | object (style) | define style for TabBar |
| tabBarShadowStyle | inherited | object (style) | define shadow style for tabBar |
| hidesTabTouch | false | boolean | disable onPress opacity for Tab |

### Tab Props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| renderIcon | none | function | returns Item icon |
| renderSelectedIcon | none | function | returns selected Item icon |
| badgeText | none | string or number | text for Item badge |
| renderBadge | none | function | returns Item badge |
| title | none | string | Item title |
| titleStyle | inherited | style | styling for Item title |
| selectedTitleStyle | none | style | styling for selected Item title |
| tabStyle | inherited | style | styling for tab |
| selected | none | boolean | return whether the item is selected |
| onPress | none | function | onPress method for Item |
| allowFontScaling | false | boolean | allow font scaling for title |

## ButtonGroup

![ButtonGroup](http://i.imgur.com/uBJbULr.png)

Using strings

```js
constructor () {
  super()
  this.state = {
    selectedIndex: 2
  }
  this.updateIndex = this.updateIndex.bind(this)
}
updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}

render () {
  const buttons = ['Hello', 'World', 'Buttons']
  const { selectedIndex } = this.state
  return (
    <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons} />
  )
}

```

Using components

```js
constructor () {
  super()
  this.state = {
    selectedIndex: 2
  }
  this.updateIndex = this.updateIndex.bind(this)
}
updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}

const component1 = () => <Text>Hello</Text>
const component2 = () => <Text>World</Text>
const component3 = () => <Text>ButtonGroup</Text>

render () {
  const buttons = [{ element: component1 }, { element: component2 }, { element: component3 }]
  const { selectedIndex } = this.state
  return (
    <ButtonGroup
      onPress={this.updateIndex}
      selectedIndex={selectedIndex}
      buttons={buttons} />
  )
}

```

#### ButtonGroup props

##### This component inherits [all native TouchableHighlight and TouchableOpacity props that come with React Native TouchableHighlight or TouchableOpacity elements](https://facebook.github.io/react-native/docs/touchablehighlight.html), along with the following:

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| selectedIndex | none | number | current selected index of array of buttons (required) |
| onPress | none | function | method to update Button Group Index (required) |
| buttons | none | array | array of buttons for component (required), if returning a component, must be an object with { element: componentName } |
| component | TouchableHighlight | React Native Component | Choose other button component such as TouchableOpacity (optional) |
| containerStyle | inherited styling | object (style) | specify styling for main button container (optional) |
| selectedBackgroundColor | white | string | specify color for selected state of button (optional) |
| textStyle | inherited styling | object (style) | specify specific styling for text (optional) |
| selectedTextStyle | inherited styling | object (style) | specify specific styling for text in the selected state (optional)|
| underlayColor | white | string | specify underlayColor for TouchableHighlight (optional) |
| borderStyle | inherited styling | object (style) | update the styling of the interior border of the list of buttons (optional) |

## Checkboxes

![Checkboxes](http://i.imgur.com/8BKC77S.png)

```js

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

> This component uses FontAwesome icons out of the box. You can also specify one of the following types of icons by specifying an iconType prop: Simple Line Icon, Zocial, Octicons, MaterialIcons, Ionicons, Foundation, EvilIcons, or Entypo

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| iconType | fontawesome | string | icon family, can be one of the following: simple-line-icon, zocial, octicon, material, ionicon, foundation, evilicon, entypo (required only if specifying an icon that is not from font-awesome) |
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
| fontFamily | System font bold (iOS), Roboto-Bold (android) | string | specify different font family |

## Forms

![Forms](http://i.imgur.com/bnoD5rl.png)

```js
import { FormLabel, FormInput } from 'react-native-elements'

<FormLabel>Name</FormLabel>
<FormInput onChangeText={someFunction}/>

```

#### FormInput props

##### This component inherits [all native TextInput props that come with a standard React Native TextInput element](https://facebook.github.io/react-native/docs/textinput.html), along with the following:

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | none | object (style) | TextInput container styling (optional) |
| inputStyle | none | object (style) | TextInput styling (optional) |
| textInputRef | none | ref | get ref of TextInput |
| containerRef | none | ref | get ref of TextInput container |
| focus | none | function | call focus on the textinput(optional), eg `this.refs.someInputRef.focus()` |

#### FormLabel props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| containerStyle | none | object (style) | additional label container style (optional) |
| labelStyle | none | object (style) | additional label styling (optional) |
| fontFamily | System font bold (iOS), Roboto-Bold (android) | string | specify different font family |

#### Using FormInput refs

```
<FormInput
  ref='forminput'
  textInputRef='email'
  ...
/>
```
You should be able to access the refs like this

```
this.refs.forminput.refs.email

```

## Card

![Card Component](http://i.imgur.com/bY5uAC3.png)

```js

const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 ... // more users here
]

import { Text } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

// implemented without image with header
<Card
  title='CARD WITH DIVIDER'>
  {
    users.map((u, i) => {}
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
          avatar={{uri:u.avatar}} />

      )
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
| dividerStyle | none | object (style) | additional divider styling (if title provided) (optional) |
| fontFamily | System font bold (iOS), Roboto-Bold (android) | string | specify different font family |
| imageStyle | inherited styling | object(style) | specify image styling if image is provided |
| image | none | image uri or require pathh | add an image as the heading with the image prop (optional) |


## Pricing Component

![Pricing Component](http://i.imgur.com/EMMDZwo.png)

```js
import { PricingCard } from 'react-native-elements'

<PricingCard
  color='#4f9deb'
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
| onButtonPress | none | any | function to be run when button is pressed |
| containerStyle | inherited styling | object (style) | outer component styling (optional) |
| wrapperStyle | inherited styling | object (style) | inner wrapper component styling (optional) |
| titleFont | System font (font weight 800) (iOS), Roboto-Black (android) | string | specify title font family |
| pricingFont | System font (font weight 700) (iOS), Roboto-Bold (android) | string | specify pricing font family |
| infoFont | System font bold (iOS), Roboto-Bold (android) | string | specify pricing information font family |
| buttonFont | System font (iOS), Roboto (android) | string | specify button font family |
