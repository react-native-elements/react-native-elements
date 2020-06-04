import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
} from 'react-native';

import { getStatusBarHeight, withTheme } from '../config';
import { renderNode, nodeType, ImageSourceType } from '../helpers';

import Text from '../text/Text';
import Icon from '../icons/Icon';

const ALIGN_STYLE = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

const Children = ({ style, placement, children }) => (
  <View
    style={StyleSheet.flatten([{ alignItems: ALIGN_STYLE[placement] }, style])}
  >
    {children == null || children === false
      ? null
      : children.text
      ? renderNode(Text, children.text, { numberOfLines: 1, ...children })
      : children.icon
      ? renderNode(Icon, {
          ...children,
          name: children.icon,
          containerStyle: StyleSheet.flatten([
            { alignItems: ALIGN_STYLE[placement] },
            children.containerStyle,
          ]),
        })
      : renderNode(Text, children)}
  </View>
);

Children.propTypes = {
  placement: PropTypes.oneOf(['left', 'center', 'right']),
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  children: PropTypes.oneOfType([nodeType, PropTypes.node]),
};

class Header extends Component {
  componentDidMount() {
    const { linearGradientProps, ViewComponent } = this.props;
    if (linearGradientProps && !global.Expo && !ViewComponent) {
      console.error(
        "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
      );
    }
  }

  render() {
    const {
      statusBarProps,
      leftComponent,
      centerComponent,
      rightComponent,
      leftContainerStyle,
      centerContainerStyle,
      rightContainerStyle,
      backgroundColor,
      backgroundImage,
      backgroundImageStyle,
      containerStyle,
      placement,
      barStyle,
      children,
      linearGradientProps,
      ViewComponent = linearGradientProps && global.Expo
        ? global.Expo.LinearGradient
        : backgroundImage
        ? ImageBackground
        : View,
      theme,
      ...attributes
    } = this.props;

    return (
      <ViewComponent
        testID="headerContainer"
        {...attributes}
        style={StyleSheet.flatten([
          styles.container(theme),
          backgroundColor && { backgroundColor },
          containerStyle,
        ])}
        source={backgroundImage}
        imageStyle={backgroundImageStyle}
        {...linearGradientProps}
      >
        <StatusBar barStyle={barStyle} {...statusBarProps} />
        <Children
          style={StyleSheet.flatten([
            placement === 'center' && styles.rightLeftContainer,
            leftContainerStyle,
          ])}
          placement="left"
        >
          {(React.isValidElement(children) && children) ||
            children[0] ||
            leftComponent}
        </Children>

        <Children
          style={StyleSheet.flatten([
            styles.centerContainer,
            placement !== 'center' && {
              paddingHorizontal: Platform.select({
                android: 16,
                default: 15,
              }),
            },
            centerContainerStyle,
          ])}
          placement={placement}
        >
          {children[1] || centerComponent}
        </Children>

        <Children
          style={StyleSheet.flatten([
            placement === 'center' && styles.rightLeftContainer,
            rightContainerStyle,
          ])}
          placement="right"
        >
          {children[2] || rightComponent}
        </Children>
      </ViewComponent>
    );
  }
}

Header.propTypes = {
  placement: PropTypes.oneOf(['left', 'center', 'right']),
  leftComponent: nodeType,
  centerComponent: nodeType,
  rightComponent: nodeType,
  leftContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  centerContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  rightContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  backgroundColor: PropTypes.string,
  backgroundImage: ImageSourceType,
  backgroundImageStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  statusBarProps: PropTypes.object,
  barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  theme: PropTypes.object,
  linearGradientProps: PropTypes.object,
  ViewComponent: PropTypes.elementType,
};

Header.defaultProps = {
  placement: 'center',
  children: [],
};

const styles = {
  container: theme => ({
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 10,
    backgroundColor: theme.colors.primary,
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height:
      Platform.select({
        android: 56,
        default: 44,
      }) + getStatusBarHeight(),
  }),
  centerContainer: {
    flex: 3,
  },
  rightLeftContainer: {
    flex: 1,
  },
};

export { Header };
export default withTheme(Header, 'Header');
