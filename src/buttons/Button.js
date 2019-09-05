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
import { renderNode, nodeType, conditionalStyle, color } from '../helpers';
import Icon from '../icons/Icon';

const defaultLoadingProps = (type, theme) => ({
  color: type === 'solid' ? 'white' : theme.colors.primary,
  size: 'small',
});

class Button extends Component {
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
      TouchableComponent,
      containerStyle,
      onPress,
      buttonStyle,
      type,
      loading,
      loadingStyle,
      loadingProps: passedLoadingProps,
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
          undefined,
          false
        );
      } else {
        attributes.background = TouchableNativeFeedback.SelectableBackground();
      }
    }

    const loadingProps = {
      ...defaultLoadingProps(type, theme),
      ...passedLoadingProps,
    };

    return (
      <View
        style={StyleSheet.flatten([
          styles.container,
          {
            borderRadius:
              buttonStyle.borderRadius || styles.container.borderRadius,
          },
          containerStyle,
          raised && !disabled && styles.raised(type),
        ])}
      >
        <TouchableComponent
          onPress={onPress}
          activeOpacity={0.3}
          disabled={disabled}
          {...attributes}
        >
          <ViewComponent
            {...linearGradientProps}
            style={StyleSheet.flatten([
              styles.button(type, theme),
              buttonStyle,
              disabled && styles.disabled(type, theme),
              disabled && disabledStyle,
            ])}
          >
            {loading && (
              <ActivityIndicator
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

            {!loading && !!title && (
              <Text
                style={StyleSheet.flatten([
                  styles.title(type, theme),
                  titleStyle,
                  disabled && styles.disabledTitle(theme),
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
  type: PropTypes.oneOf(['solid', 'clear', 'outline']),
  loading: PropTypes.bool,
  loadingStyle: ViewPropTypes.style,
  loadingProps: PropTypes.object,
  onPress: PropTypes.func,
  containerStyle: ViewPropTypes.style,
  icon: nodeType,
  iconContainerStyle: ViewPropTypes.style,
  iconRight: PropTypes.bool,
  linearGradientProps: PropTypes.object,
  TouchableComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  ViewComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
  disabledTitleStyle: Text.propTypes.style,
  raised: PropTypes.bool,
  theme: PropTypes.object,
};

Button.defaultProps = {
  title: '',
  iconRight: false,
  TouchableComponent: Platform.select({
    android: TouchableNativeFeedback,
    default: TouchableOpacity,
  }),
  onPress: () => console.log('Please attach a method to this component'),
  type: 'solid',
  buttonStyle: {
    borderRadius: 3,
  },
  disabled: false,
  raised: false,
  loading: false,
};

const styles = {
  button: (type, theme) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: type === 'solid' ? theme.colors.primary : 'transparent',
    padding: 8,
    borderWidth: type === 'outline' ? StyleSheet.hairlineWidth : 0,
    borderColor: theme.colors.primary,
  }),
  container: {
    borderRadius: 3,
  },
  disabled: (type, theme) => ({
    ...conditionalStyle(type === 'solid', {
      backgroundColor: theme.colors.disabled,
    }),
    ...conditionalStyle(type === 'outline', {
      borderColor: color(theme.colors.disabled).darken(0.3),
    }),
  }),
  disabledTitle: theme => ({
    color: color(theme.colors.disabled).darken(0.3),
  }),
  title: (type, theme) => ({
    color: type === 'solid' ? 'white' : theme.colors.primary,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 2,
    paddingBottom: 1,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium',
      },
      default: {
        fontSize: 18,
      },
    }),
  }),
  iconContainer: {
    marginHorizontal: 5,
  },
  raised: type =>
    type !== 'clear' && {
      backgroundColor: '#fff',
      ...Platform.select({
        android: {
          elevation: 4,
        },
        default: {
          shadowColor: 'rgba(0,0,0, .4)',
          shadowOffset: { height: 1, width: 1 },
          shadowOpacity: 1,
          shadowRadius: 1,
        },
      }),
    },
  loading: {
    marginVertical: 2,
  },
};

export { Button };
export default withTheme(Button, 'Button');
