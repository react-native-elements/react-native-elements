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

const log = () => {
  /* eslint-disable no-console */
  console.log('Please attach a method to this component');
};

class Button extends Component {
  componentDidMount() {
    if (
      this.props.linearGradientProps != null &&
      this.props.ButtonContainer == null
    ) {
      /* eslint-disable no-console */
      console.error(
        `You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('expo').LinearGradient}`
      );
    }
  }

  render() {
    const {
      ButtonContainer,
      Touchable,
      containerStyle,
      onPress,
      buttonStyle,
      clear,
      loading,
      loadingStyle,
      loadingProps,
      title,
      titleStyle,
      titleProps,
      icon,
      iconContainerStyle,
      iconRight,
      linearGradientProps,
      disabled,
      disabledStyle,
      disabledTitleStyle,
      ...attributes
    } = this.props;

    return (
      <View style={[styles.container, containerStyle]}>
        <Touchable
          onPress={onPress}
          underlayColor={clear && 'transparent'}
          activeOpacity={clear && 0}
          style={{
            borderRadius:
              (buttonStyle &&
                buttonStyle.borderRadius &&
                buttonStyle.borderRadius) ||
              3,
          }}
          disabled={disabled}
          {...attributes}
        >
          <ButtonContainer
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
          </ButtonContainer>
        </Touchable>
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

  icon: PropTypes.object,
  iconContainerStyle: ViewPropTypes.style,
  iconRight: PropTypes.bool,

  linearGradientProps: PropTypes.object,

  Touchable: PropTypes.any,
  ButtonContainer: PropTypes.any,

  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
  disabledTitleStyle: Text.propTypes.style,
};

Button.defaultProps = {
  title: 'Welcome to\nReact Native Elements',
  iconRight: false,
  Touchable: Platform.OS === 'ios' ? TouchableOpacity : TouchableNativeFeedback,
  ButtonContainer: View,
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
  disabledTitle: {
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
  title: {
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
