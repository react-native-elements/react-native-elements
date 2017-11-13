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

import ViewPropTypes from '../config/ViewPropTypes';

class Button extends Component {
  log() {
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
    const ButtonContainer = linearGradientProps
      ? require('expo').LinearGradient
      : View;

    return (
      <View style={[styles.container, containerStyle]}>
        <Touchable
          onPress={onPress || this.log.bind(this)}
          underlayColor={clear && 'transparent'}
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
              clear && { backgroundColor: 'transparent', elevation: 0 },
              buttonStyle,
              linearGradientProps && { backgroundColor: 'transparent' },
            ]}
          >
            {loading &&
              <ActivityIndicator
                animating={true}
                style={[styles.loading, loadingStyle]}
                color={loadingProps && loadingProps.color || 'white'}
                size={loadingProps && loadingProps.size || 'small'}
                {...loadingProps}
              />}
            {!loading &&
              icon &&
              !iconRight &&
              <View style={[styles.iconContainer, iconContainerStyle]}>
                {icon}
              </View>}
            {!loading &&
              <Text style={[styles.text, textStyle]} {...textProps}>
                {text || 'Welcome to\nReact Native Elements'}
              </Text>}
            {!loading &&
              icon &&
              iconRight &&
              <View style={[styles.iconContainer, iconContainerStyle]}>
                {icon}
              </View>}
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    ...Platform.select({
      ios: {
        // iOS blue from https://developer.apple.com/ios/human-interface-guidelines/visual-design/color/
        backgroundColor: '#007AFF',
      },
      android: {
        elevation: 4,
        // Material design blue from https://material.google.com/style/color.html#color-color-palette
        backgroundColor: '#2196F3',
        borderRadius: 2,
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
