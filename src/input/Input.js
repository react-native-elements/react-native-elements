import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Dimensions } from 'react-native';

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
      width,
      height,
      containerStyle,
      icon,
      iconContainerStyle,
      inputStyle,
      displayError,
      errorStyle,
      errorMessage,
      ...attributes
    } = this.props;

    const inputWidth = width || SCREEN_WIDTH - 100;
    const inputHeight = height || 40;

    return (
      <View>
        <View
          style={[
            styles.container,
            { width: inputWidth, height: inputHeight },
            containerStyle && containerStyle,
          ]}
        >
          {icon &&
            <View
              style={[
                styles.iconContainer,
                { height: inputHeight },
                iconContainerStyle,
              ]}
            >
              {icon}
            </View>}
          <TextInput
            ref={input => (this.input = input)}
            style={[
              styles.input,
              { width: inputWidth, height: inputHeight },
              inputStyle && inputStyle,
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
  width: PropTypes.number,
  height: PropTypes.number,

  containerStyle: ViewPropTypes.style,

  icon: PropTypes.object,
  iconContainerStyle: ViewPropTypes.style,

  inputStyle: PropTypes.object,

  displayError: PropTypes.bool,
  errorStyle: PropTypes.object,
  errorMessage: PropTypes.string,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'rgba(171, 189, 219, 1)',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    fontSize: 18,
  },
  error: {
    color: '#FF2D00',
    margin: 5,
    fontSize: 12,
  },
});

export default Input;
