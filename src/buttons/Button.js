import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
} from 'react-native';
import colors from '../config/colors';

import ViewPropTypes from '../config/ViewPropTypes';

const log = () => {
  /* eslint-disable no-console */
  console.log('Please attach a method to this component');
};

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
      linearGradientProps,
      ViewComponent = linearGradientProps && global.Expo
        ? global.Expo.LinearGradient
        : View,
      ...attributes
    } = this.props;

    return (
      <View style={containerStyle}>
        <TouchableComponent
          {...attributes}
          onPress={onPress}
          underlayColor={clear ? 'transparent' : undefined}
          activeOpacity={clear ? 0 : undefined}
          disabled={disabled}
        >
          <ViewComponent
            {...linearGradientProps}
            style={[
              styles.button,
              disabled && styles.disabled,
              clear && { backgroundColor: 'transparent', elevation: 0 },
              buttonStyle,
              disabled && disabledStyle,
              linearGradientProps && { backgroundColor: 'transparent' },
            ]}
          >
            {loading && (
              <ActivityIndicator
                animating={true}
                style={[styles.loading, loadingStyle]}
                color={loadingProps.color}
                size={loadingProps.size}
                {...loadingProps}
              />
            )}
            {!loading &&
              icon &&
              !iconRight && (
                <View style={[styles.iconContainer, iconContainerStyle]}>
                  {icon}
                </View>
              )}
            {!loading &&
              !!title && (
                <Text
                  style={[
                    styles.title,
                    titleStyle,
                    disabled && styles.disabledTitle,
                    disabled && disabledTitleStyle,
                  ]}
                  {...titleProps}
                >
                  {title}
                </Text>
              )}
            {!loading &&
              icon &&
              iconRight && (
                <View style={[styles.iconContainer, iconContainerStyle]}>
                  {icon}
                </View>
              )}
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
  icon: PropTypes.element,
  iconContainerStyle: ViewPropTypes.style,
  iconRight: PropTypes.bool,
  linearGradientProps: PropTypes.object,
  TouchableComponent: PropTypes.any,
  ViewComponent: PropTypes.any,
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
  disabledTitleStyle: Text.propTypes.style,
};

Button.defaultProps = {
  title: 'Welcome to\nReact Native Elements',
  iconRight: false,
  TouchableComponent:
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback,
  onPress: log,
  clear: false,
  loadingProps: {
    color: 'white',
    size: 'small',
  },
  buttonStyle: {
    borderRadius: 3,
  },
  disabled: false,
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: colors.primary,
    ...Platform.select({
      android: {
        elevation: 4,
        borderRadius: 2,
      },
    }),
  },
  disabled: {
    // grey from designmodo.github.io/Flat-UI/
    backgroundColor: '#D1D5D8',
    ...Platform.select({
      android: {
        //no elevation
        borderRadius: 2,
      },
    }),
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
        fontWeight: '500',
      },
    }),
  },
  disabledTitle: {
    color: '#F3F4F5',
  },
  iconContainer: {
    marginHorizontal: 5,
  },
});

export default Button;
