import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  Animated,
  Easing,
  TextInput,
  StyleSheet,
  Platform,
  Dimensions,
  Text as NativeText,
} from 'react-native';
import colors from '../config/colors';
import normalize from '../helpers/normalizeText';
import ViewPropTypes from '../config/ViewPropTypes';

const { width } = Dimensions.get('window');

class FormInput extends Component {
  constructor(props) {
    super(props);
    this.shake = this.shake.bind(this);
  }

  componentWillMount() {
    this.shakeAnimationValue = new Animated.Value(0);
    this.props.shake && this.shake();
  }

  componentWillReceiveProps(nextProps) {
    nextProps.shake && this.props.shake !== nextProps.shake && this.shake();
  }

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
      return input => (this.input = input);
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

  shake() {
    const { shakeAnimationValue } = this;
    shakeAnimationValue.setValue(0);
    Animated.timing(shakeAnimationValue, {
      duration: 375,
      toValue: 3,
      ease: Easing.bounce,
    }).start();
  }

  render() {
    const {
      containerStyle,
      inputStyle,
      containerRef,
      normalizeFontSize,
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
          {...attributes}
          ref={this.getRefHandler()}
          style={[
            styles.input,
            { fontSize: normalizeFontSize ? normalize(14) : 14 },
            inputStyle && inputStyle,
          ]}
        />
      </Animated.View>
    );
  }
}

FormInput.propTypes = {
  containerStyle: ViewPropTypes.style,
  inputStyle: NativeText.propTypes.style,
  // Deprecated
  textInputRef: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  // Deprecated
  containerRef: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
  normalizeFontSize: PropTypes.bool,
  shake: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.object,
    PropTypes.number,
    PropTypes.array,
  ]),
};

FormInput.defaultProps = {
  normalizeFontSize: true,
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
    // breaks tests - fix before release
    // Invariant Violation: Invalid undefined `width` of type `string`
    // supplied to `StyleSheet input`, expected `number`.
    // width: '100%',
    color: colors.grey3,
  },
});

export default FormInput;
