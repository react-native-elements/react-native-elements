import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  StyleSheet,
} from 'react-native';

import { withTheme, ViewPropTypes } from '../config';
import { renderNode, nodeType } from '../helpers';
import Icon from '../icons/Icon';

class Button extends Component {
  componentDidMount() {
    const { linearGradientProps, ViewComponent } = this.props;
    if (linearGradientProps && !global.Expo && !ViewComponent) {
      /* eslint-disable no-console */
      console.error(
        `You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}`
      );
    }
  }

  render() {
    const {
      TouchableComponent,
      containerStyle,
      onPress,
      buttonStyle,
      clear,
      loading,
      loadingStyle,
      loadingProps,
      title,
      titleProps,
      titleStyle,
      icon,
      iconContainerStyle,
      iconRight,
      disabled,
      disabledStyle,
      disabledTitleStyle,
      raised,
      linearGradientProps,
      ViewComponent = !disabled && linearGradientProps && global.Expo
        ? global.Expo.LinearGradient
        : View,
      theme,
      ...attributes
    } = this.props;

    if (
      Platform.OS === 'android' &&
      (buttonStyle.borderRadius && !attributes.background)
    ) {
      if (Platform.Version >= 21) {
        attributes.background = TouchableNativeFeedback.Ripple(
          'ThemeAttrAndroid',
          true
        );
      } else {
        attributes.background = TouchableNativeFeedback.SelectableBackground();
      }
    }
    return (
      <View style={[containerStyle, raised && styles.raised]}>
        <TouchableComponent
          onPress={onPress}
          underlayColor={clear ? 'transparent' : undefined}
          activeOpacity={clear ? 0 : undefined}
          disabled={disabled}
          {...attributes}
        >
          <ViewComponent
            {...linearGradientProps}
            style={StyleSheet.flatten([
              styles.button(theme),
              buttonStyle,
              disabled && styles.disabled,
              disabled && disabledStyle,
              clear && { backgroundColor: 'transparent', elevation: 0 },
            ])}
          >
            {loading && (
              <ActivityIndicator
                animating={true}
                style={StyleSheet.flatten([styles.loading, loadingStyle])}
                color={loadingProps.color}
                size={loadingProps.size}
                {...loadingProps}
              />
            )}
            {!loading &&
              icon &&
              !iconRight &&
              renderNode(Icon, icon, {
                containerStyle: StyleSheet.flatten([
                  styles.iconContainer,
                  iconContainerStyle,
                ]),
              })}
            {!loading &&
              !!title && (
                <Text
                  style={StyleSheet.flatten([
                    styles.title,
                    titleStyle,
                    disabled && styles.disabledTitle,
                    disabled && disabledTitleStyle,
                  ])}
                  {...titleProps}
                >
                  {title}
                </Text>
              )}
            {!loading &&
              icon &&
              iconRight &&
              renderNode(Icon, icon, {
                containerStyle: StyleSheet.flatten([
                  styles.iconContainer,
                  iconContainerStyle,
                ]),
              })}
          </ViewComponent>
        </TouchableComponent>
      </View>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  titleStyle: Text.propTypes.style,
  titleProps: PropTypes.object,
  buttonStyle: ViewPropTypes.style,
  clear: PropTypes.bool,
  loading: PropTypes.bool,
  loadingStyle: ViewPropTypes.style,
  loadingProps: PropTypes.object,
  onPress: PropTypes.any,
  containerStyle: ViewPropTypes.style,
  icon: nodeType,
  iconContainerStyle: ViewPropTypes.style,
  iconRight: PropTypes.bool,
  linearGradientProps: PropTypes.object,
  TouchableComponent: PropTypes.any,
  ViewComponent: PropTypes.any,
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
  disabledTitleStyle: Text.propTypes.style,
  raised: PropTypes.bool,
  theme: PropTypes.object,
};

Button.defaultProps = {
  title: 'Welcome to\nReact Native Elements',
  iconRight: false,
  TouchableComponent:
    Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity,
  onPress: () => console.log('Please attach a method to this component'),
  clear: false,
  loadingProps: {
    color: 'white',
    size: 'small',
  },
  buttonStyle: {
    borderRadius: 3,
  },
  disabled: false,
  raised: false,
  loading: false,
};

const styles = {
  button: theme => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: theme.colors.primary,
    ...Platform.select({
      android: {
        elevation: 4,
        borderRadius: 2,
      },
    }),
  }),
  disabled: {
    // grey from designmodo.github.io/Flat-UI/
    backgroundColor: '#D1D5D8',
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    padding: 8,
    ...Platform.select({
      ios: {
        fontSize: 18,
      },
      android: {
        fontFamily: 'sans-serif-medium',
      },
    }),
  },
  disabledTitle: {
    color: '#F3F4F5',
  },
  iconContainer: {
    marginHorizontal: 5,
  },
  raised: {
    ...Platform.select({
      ios: {
        shadowColor: 'rgba(0,0,0, .4)',
        shadowOffset: { height: 1, width: 1 },
        shadowOpacity: 1,
        shadowRadius: 1,
      },
      android: {
        backgroundColor: '#fff',
        elevation: 2,
      },
    }),
  },
};

export { Button };
export default withTheme(Button, 'Button');
