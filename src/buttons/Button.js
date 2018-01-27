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
import elevation from '../config/elevation';

class Button extends Component {
  constructor(props) {
    super(props);
    let expoGradient;
    try {
      if (require.resolve('expo'))
        expoGradient = require('expo').LinearGradient;
    } catch (err) {
      // no expo
    }

    this.expoGradient = expoGradient;
  }

  log() {
    /* eslint-disable no-console */
    console.log('Please attach a method to this component');
  }

  render() {
    const {
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
      ...attributes
    } = this.props;

    // this is what RN Button does by default
    // https://github.com/facebook/react-native/blob/master/Libraries/Components/Button.js#L118
    const Touchable =
      Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
    const ButtonContainer =
      linearGradientProps && this.expoGradient ? this.expoGradient : View;

    return (
      <View style={[styles.container, containerStyle]}>
        <Touchable
          onPress={onPress || this.log.bind(this)}
          activeOpacity={clear && 0}
          style={{
            borderRadius:
              (buttonStyle &&
                buttonStyle.borderRadius &&
                buttonStyle.borderRadius) ||
              3,
          }}
          {...attributes}
        >
          <ButtonContainer
            {...linearGradientProps}
            style={[
              styles.button,
              clear && {
                backgroundColor: 'transparent',
                ...Platform.select({
                  android: elevation.android.zero,
                  web: elevation.web.zero,
                }),
              },
              buttonStyle,
              linearGradientProps && { backgroundColor: 'transparent' },
            ]}
          >
            {loading && (
              <ActivityIndicator
                animating={true}
                style={[styles.loading, loadingStyle]}
                color={(loadingProps && loadingProps.color) || 'white'}
                size={(loadingProps && loadingProps.size) || 'small'}
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
              <Text style={[styles.text, textStyle]} {...textProps}>
                {text || 'Welcome to\nReact Native Elements'}
              </Text>
            )}
            {!loading &&
              icon &&
              iconRight && (
                <View style={[styles.iconContainer, iconContainerStyle]}>
                  {icon}
                </View>
              )}
          </ButtonContainer>
        </Touchable>
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
        ...elevation.android.four,
        borderRadius: 2,
      },
      web: {
        backgroundColor: '#aaa',
        ...elevation.web.two,
      },
    }),
  },
  loading: {
    padding: 8,
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
