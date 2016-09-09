import React, { Component, PropTypes } from 'react'
import { View, Easing, StyleSheet, Animated, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
let styles

class SideMenu extends Component {
  constructor () {
    super()
    this.state = {
      toggled: false
    }
    this.AnimatedLeft = new Animated.Value(0)
  }
  toggleMenu () {
    const { menuWidth } = this.props
    let toValue = menuWidth || (width - 80)
    if (this.state.toggled) {
      toValue = 0
    }
    Animated.timing(this.AnimatedLeft, {
      toValue,
      duration: 250,
      easing: Easing.inout }).start(() => {
        this.setState({
          toggled: !this.state.toggled
        })
      })
  }
  render () {
    const { children, menuWidth, MenuComponent } = this.props
    return (
      <View style={styles.container}>
        <View style={[ styles.sideMenu, menuWidth ? {width: menuWidth} : {width: width - 80} ]}>
          {MenuComponent}
        </View>
        <Animated.View
          style={[styles.appView,
            { marginLeft: this.AnimatedLeft },
            this.state.toggled && { borderLeftWidth: 1, borderLeftColor: '#d5d5d5' }
          ]}>
          {children}
        </Animated.View>
      </View>
    )
  }
}

SideMenu.propTypes = {
  menuWidth: PropTypes.number,
  MenuComponent: PropTypes.element
}

SideMenu.propTypes = {}

styles = StyleSheet.create({
  container: {
    flex: 1
  },
  appView: {
    flex: 1,
    width
  },
  sideMenu: {
    backgroundColor: '#898989',
    flex: 1,
    position: 'absolute',
    height
  }
})

export default SideMenu
