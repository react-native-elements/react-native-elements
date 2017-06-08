import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Platform,
  Dimensions,
  Text as NativeText,
} from 'react-native';
import colors from '../config/colors';
import normalize from '../helpers/normalizeText';

const { width } = Dimensions.get('window');

class FormInput extends Component {
  getRef = () => {
    return this.input || this.refs[this.props.textInputRef];
  };

  getRefHandler = () => {
    if (this.props.textInputRef) {
      if (typeof this.props.textInputRef === 'function') {
        return input => {
          this.input = input;
          this.props.textInputRef(input);
        };
      } else {
        return this.props.textInputRef;
      }
    } else {
      return input => this.input = input;
    }
  };

  focus() {
    this.getRef() && this.getRef().focus();
  }

  blur() {
    this.getRef() && this.getRef().blur();
  }

  clearText() {
    this.getRef() && this.getRef().clear();
  }

  render() {
    const {
      containerStyle,
      inputStyle,
      containerRef,
      selectionColor,
      ...attributes
    } = this.props;
    return (
      <View
        ref={containerRef}
        style={[styles.container, containerStyle && containerStyle]}
      >
        <TextInput
          ref={this.getRefHandler()}
          selectionColor={selectionColor || colors.grey3}
          style={[styles.input, inputStyle && inputStyle]}
          {...attributes}
        />
      </View>
    );
  }
}

FormInput.propTypes = {
  containerStyle: View.propTypes.style,
  inputStyle: NativeText.propTypes.style,
  selectionColor: PropTypes.string,
  // Deprecated
  textInputRef: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  // Deprecated
  containerRef: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    marginRight: 15,
    ...Platform.select({
      ios: {
        borderBottomColor: colors.grey4,
        borderBottomWidth: 1,
        marginLeft: 20,
        marginRight: 20,
      },
    }),
  },
  input: {
    ...Platform.select({
      android: {
        height: 46,
      },
      ios: {
        height: 36,
      },
    }),
    width: width,
    color: colors.grey3,
    fontSize: normalize(14),
  },
});

export default FormInput;
