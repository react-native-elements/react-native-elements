import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Animated,
  Easing,
  TextInput,
  StyleSheet,
  View,
  Platform,
  Dimensions,
  Text as NativeText,
} from 'react-native';
import colors from '../config/colors';
import normalize from '../helpers/normalizeText';
import ViewPropTypes from '../config/ViewPropTypes';

const { width } = Dimensions.get('window');

class FormInput extends Component {
  componentWillMount() {
    this.shakeAnimationValue = new Animated.Value(0);
    this.props.shake && this.shake();
  }
  componentWillReceiveProps(nextProps) {
    nextProps.shake && this.props.shake !== nextProps.shake && this.shake();
  }
  focus() {
    const ref = this.props.textInputRef;
    this.refs[ref].focus();
  }
  blur() {
    const ref = this.props.textInputRef;
    this.refs[ref].blur();
  }
  shake() {
    const { shakeAnimationValue } = this;
    shakeAnimationValue.setValue(0);
    Animated.timing(shakeAnimationValue, {
      duration: 300,
      toValue: 3,
      ease: Easing.bounce,
    }).start();
  }
  render() {
    const {
      containerStyle,
      inputStyle,
      textInputRef,
      containerRef,
      ...attributes
    } = this.props;
    const translateX = this.shakeAnimationValue.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
      outputRange: [0, -15, 0, 15, 0, -15, 0],
    });
    return (
      <Animated.View
        ref={containerRef}
        style={[
          styles.container,
          containerStyle && containerStyle,
          {
            transform: [{ translateX }],
          },
        ]}
      >
        <TextInput
          ref={textInputRef}
          style={[styles.input, inputStyle && inputStyle]}
          {...attributes}
        />
      </Animated.View>
    );
  }
}

FormInput.propTypes = {
  containerStyle: ViewPropTypes.style,
  inputStyle: NativeText.propTypes.style,
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
        minHeight: 46,
        width: width - 30,
      },
      ios: {
        minHeight: 36,
        width: width,
      },
    }),
    color: colors.grey3,
    fontSize: normalize(14),
  },
});

export default FormInput;
