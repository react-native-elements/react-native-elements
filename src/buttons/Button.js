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
    if (
      this.props.linearGradientProps != null &&
      this.props.ViewComponent == null
    ) {
      /* eslint-disable no-console */
      console.error(
        `You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('expo').LinearGradient}`
      );
    }
  }

  render() {
    const {
      ViewComponent,
      TouchableComponent,
      containerStyle,
      onPress,
      buttonStyle,
      clear,
      loading,
      loadingStyle,
      loadingProps,
      text,
      textStyle,
      textProps,
      icon,
      iconContainerStyle,
      iconRight,
      linearGradientProps,
      disabled,
      disabledStyle,
      disabledTextStyle,
      ...attributes
    } = this.props;

    // this is what RN Button does by default
    // https://github.com/facebook/react-native/blob/master/Libraries/Components/Button.js#L118
    const Touchable =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

    // FIXME: This doesn't work for non-expo users. `require('expo')` is evaluated anyway.

    return (
      <View style={[styles.container, containerStyle]}>
        <TouchableComponent
          onPress={onPress}
          underlayColor={clear ? 'transparent' : undefined}
          activeOpacity={clear ? 0 : undefined}
          style={{
            borderRadius: buttonStyle.borderRadius,
          }}
          disabled={disabled}
          {...attributes}
        >
          <ViewComponent
            {...linearGradientProps}
            style={[
              styles.button,
              clear && { backgroundColor: 'transparent', elevation: 0 },
              buttonStyle,
              linearGradientProps && { backgroundColor: 'transparent' },
              disabled && styles.disabled,
              disabled && disabledStyle,
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
            {!loading && (
              <Text style={[styles.text, textStyle, disabled && styles.disabledText, disabled && disabledTextStyle]} {...textProps}>
                {text}
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
  text: PropTypes.string,
  textStyle: Text.propTypes.style,
  textProps: PropTypes.object,
  buttonStyle: ViewPropTypes.style,
  clear: PropTypes.bool,
  loading: PropTypes.bool,
  loadingStyle: ViewPropTypes.style,
  loadingProps: PropTypes.object,
  onPress: PropTypes.any,
  containerStyle: ViewPropTypes.style,
  icon: PropTypes.object,
  iconContainerStyle: ViewPropTypes.style,
  iconRight: PropTypes.bool,
  linearGradientProps: PropTypes.object,
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
  disabledTextStyle: Text.propTypes.style,
  TouchableComponent: PropTypes.any,
  ViewComponent: PropTypes.any,
};

Button.defaultProps = {
  text: 'Welcome to\nReact Native Elements',
  iconRight: false,
  TouchableComponent:
    Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback,
  ViewComponent: View,
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
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
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
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
      // grey from designmodo.github.io/Flat-UI/
    backgroundColor: '#D1D5D8',
    ...Platform.select({
      android: {
        //no elevation
        borderRadius: 2,
      },
    }),
  },
  disabledText: {
    color: '#F3F4F5',
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
  text: {
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
  iconContainer: {
    marginHorizontal: 5,
  },
});

export default Button;
