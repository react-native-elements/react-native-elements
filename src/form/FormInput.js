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
  constructor(props) {
    super(props);
    
    this.getRef = this.getRef.bind(this);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
  }
  
  getRef() {
    return this.props.textInputRef ? this.refs[this.props.textInputRef] : this.input;
  }
  focus() {
    getRef() && getRef().focus();
  }
  blur() {
    getRef() && getRef().blur();
  }
  render() {
    const {
      containerStyle,
      inputStyle,
      textInputRef,
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
          ref={textInputRef || input => this.input = input}
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
  textInputRef: PropTypes.string,
  containerRef: PropTypes.string,
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
