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
      ...attributes
    } = this.props;

    return (
      <View style={[styles.container, containerStyle]}>
        <TouchableComponent
          onPress={onPress}
          underlayColor={clear ? 'transparent' : undefined}
          activeOpacity={clear ? 0 : undefined}
          style={{
            borderRadius: buttonStyle.borderRadius,
          }}
          {...attributes}
        >
          <ViewComponent
            {...linearGradientProps}
            style={[
              styles.button,
              clear && { backgroundColor: 'transparent', elevation: 0 },
              buttonStyle,
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
            {!loading && (
              <Text style={[styles.text, textStyle]} {...textProps}>
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
