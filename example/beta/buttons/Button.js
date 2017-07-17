import PropTypes from 'prop-types';
import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Text
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
      loading, loadingStyle, loadingProps,
      text, textStyle, textProps,
      icon, iconContainerStyle, iconRight,
      ...attributes
    } = this.props;

    return (
      <View style={[styles.container, containerStyle]}>
        <TouchableHighlight
          onPress={onPress || this.log.bind(this)}
          style={{borderRadius: buttonStyle && buttonStyle.borderRadius && buttonStyle.borderRadius || 3}}
          {...attributes}
        >
          <View style={[styles.button, buttonStyle]}>
            {loading &&
              <ActivityIndicator
                animating={true}
                style={[styles.loading, loadingStyle]}
                color={loadingProps && loadingProps.color || 'white'}
                size={loadingProps && loadingProps.size || 'small'}
                {...loadingProps}
              />
            }
            {!loading && icon && !iconRight &&
              <View style={[styles.iconContainer, iconContainerStyle]}>
                {icon}
              </View>
            }
            {!loading &&
              <Text style={[styles.text, textStyle]}
                {...textProps}
              >
                {text || 'Welcome to\nReact Native Elements'}
              </Text>
            }
            {!loading && icon && iconRight &&
              <View style={[styles.iconContainer, iconContainerStyle]}>
                {icon}
              </View>
            }
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

Button.propTypes = {
  text: PropTypes.string,
  textStyle: PropTypes.object,
  textProps: PropTypes.object,

  buttonStyle: ViewPropTypes.style,

  loading: PropTypes.bool,
  loadingStyle: ViewPropTypes.style,
  loadingProps: PropTypes.object,

  onPress: PropTypes.any,
  containerStyle: ViewPropTypes.style,

  icon: PropTypes.object,
  iconContainerStyle: ViewPropTypes.style,
  iconRight: PropTypes.bool,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 200,
    backgroundColor: 'rgba(78, 116, 289, 1)',
    borderRadius: 3
  },
  text: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  iconContainer: {
    marginHorizontal: 5
  }
});

export default Button;
