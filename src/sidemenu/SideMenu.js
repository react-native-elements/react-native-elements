import React, { Component, PropTypes } from 'react'
import { View, Easing, StyleSheet, Animated, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')
let styles

class SideMenu extends Component {
  constructor () {
    super()
    this.AnimatedLeft = new Animated.Value(0)
  }
  componentWillReceiveProps (pdata) {
    const { menuWidth, toggled, easing, duration } = pdata
    let toValue = 0
    if (toggled) {
      toValue = menuWidth || (width - 80)
    }
    Animated.timing(this.AnimatedLeft, {
      toValue,
      duration: duration || 250,
      easing: easing || Easing.inout }).start()
  }
  render () {
    const { children, menuWidth, MenuComponent, toggled, toggledContainerStyle } = this.props
    return (
      <View style={styles.container}>
        <View style={[ styles.sideMenu, menuWidth ? {width: menuWidth} : {width: width - 80} ]}>
          {MenuComponent}
        </View>
        <Animated.View
          style={[styles.appView,
            { marginLeft: this.AnimatedLeft },
            toggled && toggledContainerStyle && toggledContainerStyle
          ]}>
          {children}
        </Animated.View>
      </View>
    )
  }
}

SideMenu.propTypes = {
  menuWidth: PropTypes.number,
  MenuComponent: PropTypes.element,
  toggled: PropTypes.bool
}

SideMenu.defaultProps = {
  toggled: false
}

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
