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

  renderContent() {
    let {
      type, loading, loadingStyle, loadingProps,
      text, textStyle, textProps
    } = this.props;

    let buttonTextStyle = null;

    if (type === 'login') {
      text ='LOG IN';
    } else if (type === 'login_android') {
      text ='Log in';
      buttonTextStyle={fontWeight: 'bold', fontSize: 23};
    } else {
      buttonTextStyle={textAlign: 'center'};
    }

    if (loading) {
      return (
        <ActivityIndicator
          animating={true}
          style={[styles.loading, loadingStyle]}
          color={loadingProps && loadingProps.color || 'white'}
          size={loadingProps && loadingProps.size || 'small'}
        />
      );
    } else {
      return (
        <Text
          style={[
            styles.text,
            buttonTextStyle,
            textStyle
          ]}
          {...textProps}
        >
          {text || 'Welcome to\nReact Native Elements'}
        </Text>
      );
    }
  }

  render() {
    let {
      type,
      onPress,
      containerStyle,
      buttonStyle,
      icon,
      iconContainerStyle,
      iconRight,
      ...attributes
    } = this.props;

    let buttonDefaultStyle = null;

    if (type === 'login') {
      buttonDefaultStyle = {height: 50, width: 250, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'white', borderRadius: 30};
    } else if (type === 'login_android') {
      buttonDefaultStyle = {height: 50, width: 230, backgroundColor: 'rgba(111, 202, 186, 1)', borderRadius: 5};
    } else {
      buttonDefaultStyle = {height: 60, width: 275, backgroundColor: 'transparent', borderWidth: 2, borderColor: 'white', borderRadius: 40};
    }

    return (
      <View
        style={[styles.container, containerStyle]}
      >
        <TouchableHighlight
          onPress={onPress || this.log.bind(this)}
          style={{borderRadius: buttonStyle && buttonStyle.borderRadius && buttonStyle.borderRadius || buttonDefaultStyle && buttonDefaultStyle.borderRadius && buttonDefaultStyle.borderRadius}}
          {...attributes}
        >
          <View
            style={[
              styles.button,
              buttonDefaultStyle && buttonDefaultStyle,
              buttonStyle
            ]}
          >
            {icon && !iconRight &&
              <View style={[styles.iconContainer, iconContainerStyle]}>
                {icon}
              </View>
            }
            {this.renderContent()}
            {icon && iconRight &&
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
  type: PropTypes.string,

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
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  iconContainer: {
    marginHorizontal: 5
  }
});

export default Button;
