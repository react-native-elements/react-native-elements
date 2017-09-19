![Side Menu](http://i.imgur.com/cjIcRl6.gif)

> This component implements [react-native-side-menu](https://github.com/react-native-community/react-native-side-menu) which is part of the [react-native-community](https://github.com/react-native-community).

> __Deprecation warning__: With the release of 1.0.0, we are going to remove this component. SideMenu is a navigational component, but it isn't a full navigation solution. For a complete navigation library that includes SideMenu(Drawer) as well as many other features, be sure to check out [react-navigation](https://reactnavigation.org) and it's DrawerNavigator.

```js
import { SideMenu, List, ListItem } from 'react-native-elements'

constructor () {
  super()
  this.state = {
    isOpen: false
  }
  this.toggleSideMenu = this.toggleSideMenu.bind(this)
}

onSideMenuChange (isOpen: boolean) {
  this.setState({
    isOpen: isOpen
  })
}

toggleSideMenu () {
  this.setState({
    isOpen: !this.state.isOpen
  })
}

render () {
  const MenuComponent = (
    <View style={{flex: 1, backgroundColor: '#ededed', paddingTop: 50}}>
      <List containerStyle={{marginBottom: 20}}>
      {
        list.map((l, i) => (
          <ListItem
            roundAvatar
            onPress={() => console.log('Pressed')}
            avatar={l.avatar_url}
            key={i}
            title={l.name}
            subtitle={l.subtitle}
          />
        ))
      }
      </List>
    </View>
  )

  return (
    <SideMenu
      isOpen={this.state.isOpen}
      onChange={this.onSideMenuChange.bind(this)}
      menu={MenuComponent}>
      <App toggleSideMenu={this.toggleSideMenu.bind(this)} />
    </SideMenu>
  )
}

```

#### SideMenu props

| prop | default | type | description |
| ---- | ---- | ----| ---- |
| menu | inherited | React.Component | Menu component |
| isOpen |false | Boolean | Props driven control over menu open state |
| openMenuOffset | 2/3 of device screen width | Number | Content view left margin if menu is opened |
| hiddenMenuOffset | none | Number | Content view left margin if menu is hidden |
| edgeHitWidth | none | Number | Edge distance on content view to open side menu, defaults to 60 |
| toleranceX | none | Number | X axis tolerance |
| toleranceY | none | Number | Y axis tolerance |
| disableGestures | false | Bool | Disable whether the menu can be opened with gestures or not |
| onStartShould <br /> SetResponderCapture | none | Function | Function that accepts event as an argument and specify if side-menu should react on the touch or not. Check https://facebook.github.io/react-native/docs/gesture-responder-system.html for more details |
| onChange | none | Function | Callback on menu open/close. Is passed isOpen as an argument |
| onMove | none | Function | Callback on menu move. Is passed left as an argument |
| menuPosition | left | String | either 'left' or 'right' |
| animationFunction | none | (Function -> Object) | Function that accept 2 arguments (prop, value) and return an object: <br /> - `prop` you should use at the place you specify parameter to animate <br /> - `value` you should use to specify the final value of prop |
| animationStyle | none | (Function -> Object) | Function that accept 1 argument (value) and return an object: <br /> - `value` you should use at the place you need current value of animated parameter (left offset of content view) |
| bounceBackOnOverdraw | true | boolean | when true, content view will bounce back to openMenuOffset when dragged further |

> For issues or feature requests related to SideMenu component please click [here](https://github.com/react-native-community/react-native-side-menu/issues)
