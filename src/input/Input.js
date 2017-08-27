import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View, TextInput, Dimensions } from 'react-native';
import ViewPropTypes from '../config/ViewPropTypes';
const SCREEN_WIDTH = Dimensions.get('window').width;

class Input extends Component {
  focus() {
    this.input.focus();
  }

  blur() {
    this.input.blur();
  }

  clear() {
    this.input.clear();
  }

  render() {
    const {
      containerStyle,
      icon,
      iconContainerStyle,
      inputStyle,
      displayError,
      errorStyle,
      errorMessage,
      ...attributes
    } = this.props;

    const styles = this.context.theme.input;

    return (
      <View>
        <View
          style={[
            styles.container,
            { width: SCREEN_WIDTH - 100, height: 40 },
            containerStyle,
          ]}
        >
          {icon &&
            <View
              style={[styles.iconContainer, { height: 40 }, iconContainerStyle]}
            >
              {icon}
            </View>}
          <TextInput
            ref={input => (this.input = input)}
            underlineColorAndroid="transparent"
            style={[
              styles.input,
              { width: SCREEN_WIDTH - 100, height: 40 },
              inputStyle,
            ]}
            {...attributes}
          />
        </View>
        {displayError &&
          <Text style={[styles.error, errorStyle && errorStyle]}>
            {errorMessage || 'Error!'}
          </Text>}
      </View>
    );
  }
}

Input.propTypes = {
  containerStyle: ViewPropTypes.style,
  icon: PropTypes.object,
  iconContainerStyle: ViewPropTypes.style,
  inputStyle: PropTypes.object,
  displayError: PropTypes.bool,
  errorStyle: PropTypes.object,
  errorMessage: PropTypes.string,
};

Input.contextTypes = {
  theme: PropTypes.object.isRequired,
};

export default Input;
