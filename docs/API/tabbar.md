![Tab Bar Component](http://i.imgur.com/61lOjCy.png)

> This component implements the [react-native-tab-navigator](https://github.com/exponentjs/react-native-tab-navigator) from [Exponent](https://getexponent.com/). Check out [Exponent](https://getexponent.com/) if you haven't already!

> __Deprecation warning__: With the release of 1.0.0, we are going to remove this component. Tabs, and Tab are navigational components but they weren't full navigation solutions. For a complete navigation solution that includes Tabs as well as many other features, be sure to check out [react-navigation](https://reactnavigation.org) and it's TabNavigator.

```js
import { Tabs, Tab, Icon } from 'react-native-elements'

constructor() {
  super()
  this.state = {
    selectedTab: 'profile',
  }
}

changeTab (selectedTab) {
  this.setState({selectedTab})
}

const { selectedTab } = this.state

<Tabs>
  <Tab
    titleStyle={{fontWeight: 'bold', fontSize: 10}}
    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
    selected={selectedTab === 'feed'}
    title={selectedTab === 'feed' ? 'FEED' : null}
    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='whatshot' size={33} />}
    renderSelectedIcon={() => <Icon color={'#6296f9'} name='whatshot' size={30} />}
    onPress={() => this.changeTab('feed')}>
    <Feed />
  </Tab>
  <Tab
    titleStyle={{fontWeight: 'bold', fontSize: 10}}
    selectedTitleStyle={{marginTop: -1, marginBottom: 6}}
    selected={selectedTab === 'profile'}
    title={selectedTab === 'profile' ? 'PROFILE' : null}
    renderIcon={() => <Icon containerStyle={{justifyContent: 'center', alignItems: 'center', marginTop: 12}} color={'#5e6977'} name='person' size={33} />}
    renderSelectedIcon={() => <Icon color={'#6296f9'} name='person' size={30} />}
    onPress={() => this.changeTab('profile')}>
    <Profile />
  </Tab>
  /* ... more tabs here */
</Tabs>

```

### Hide Tab Bar

```js
constructor () {
  super()
  this.state = {
    hideTabBar: true,
  }
}

hideTabBar(value) {
  this.setState({
    hideTabBar: value
  });
}

let tabBarStyle = {};
let sceneStyle = {};
if (this.state.hideTabBar) {
  tabBarStyle.height = 0;
  tabBarStyle.overflow = 'hidden';
  sceneStyle.paddingBottom = 0;
}

<Tabs hidesTabTouch tabBarStyle={tabBarStyle} sceneStyle={sceneStyle}>
  <Tab>
    <LoginView hideTabBar={this.hideTabBar.bind(this)} />
  </Tab>
  /* ... tabs here */
</Tabs>

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

> For issues or feature requests related to Tab Bar component please click [here](https://github.com/exponentjs/react-native-tab-navigator/issues)
