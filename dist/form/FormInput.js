'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _colors = require('../config/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var FormInput = function FormInput(_ref) {
  var containerStyle = _ref.containerStyle;
  var inputStyle = _ref.inputStyle;
  var value = _ref.value;
  var autoCapitalize = _ref.autoCapitalize;
  var autoCorrect = _ref.autoCorrect;
  var autoFocus = _ref.autoFocus;
  var blurOnSubmit = _ref.blurOnSubmit;
  var defaultValue = _ref.defaultValue;
  var editable = _ref.editable;
  var keyboardType = _ref.keyboardType;
  var maxLength = _ref.maxLength;
  var multiline = _ref.multiline;
  var onBlur = _ref.onBlur;
  var onChange = _ref.onChange;
  var onChangeText = _ref.onChangeText;
  var onContentSizeChange = _ref.onContentSizeChange;
  var onEndEditing = _ref.onEndEditing;
  var onFocus = _ref.onFocus;
  var onLayout = _ref.onLayout;
  var onSelectionChange = _ref.onSelectionChange;
  var onSubmitEditing = _ref.onSubmitEditing;
  var placeholder = _ref.placeholder;
  var placeholderTextColor = _ref.placeholderTextColor;
  var returnKeyType = _ref.returnKeyType;
  var secureTextEntry = _ref.secureTextEntry;
  var selectTextOnFocus = _ref.selectTextOnFocus;
  var selectionColor = _ref.selectionColor;
  var inlineImageLeft = _ref.inlineImageLeft;
  var inlineImagePadding = _ref.inlineImagePadding;
  var numberOfLines = _ref.numberOfLines;
  var returnKeyLabel = _ref.returnKeyLabel;
  var underlineColorAndroid = _ref.underlineColorAndroid;
  var clearButtonMode = _ref.clearButtonMode;
  var clearTextOnFocus = _ref.clearTextOnFocus;
  var dataDetectorTypes = _ref.dataDetectorTypes;
  var enablesReturnKeyAutomatically = _ref.enablesReturnKeyAutomatically;
  var keyboardAppearance = _ref.keyboardAppearance;
  var onKeyPress = _ref.onKeyPress;
  var selectionState = _ref.selectionState;
  return _react2.default.createElement(
    _reactNative.View,
    { style: [styles.container, containerStyle && containerStyle] },
    _react2.default.createElement(_reactNative.TextInput, {
      autoCapitalize: autoCapitalize,
      autoCorrect: autoCorrect,
      autoFocus: autoFocus,
      blurOnSubmit: blurOnSubmit,
      defaultValue: defaultValue,
      keyboardType: keyboardType,
      maxLength: maxLength,
      multiline: multiline,
      onBlur: onBlur,
      onChange: onChange,
      onChangeText: onChangeText,
      onContentSizeChange: onContentSizeChange,
      onEndEditing: onEndEditing,
      onFocus: onFocus,
      onLayout: onLayout,
      onSelectionChange: onSelectionChange,
      onSubmitEditing: onSubmitEditing,
      placeholder: placeholder,
      placeholderTextColor: placeholderTextColor,
      returnKeyType: returnKeyType,
      secureTextEntry: secureTextEntry,
      selectTextOnFocus: selectTextOnFocus,
      inlineImageLeft: inlineImageLeft,
      inlineImagePadding: inlineImagePadding,
      numberOfLines: numberOfLines,
      returnKeyLabel: returnKeyLabel,
      underlineColorAndroid: underlineColorAndroid,
      clearButtonMode: clearButtonMode,
      clearTextOnFocus: clearTextOnFocus,
      dataDetectorTypes: dataDetectorTypes,
      enablesReturnKeyAutomatically: enablesReturnKeyAutomatically,
      keyboardAppearance: keyboardAppearance,
      onKeyPress: onKeyPress,
      selectionState: selectionState,
      editable: editable,
      selectionColor: selectionColor || _colors2.default.grey3,
      value: value,
      style: [styles.input, inputStyle && inputStyle] })
  );
};

styles = _reactNative.StyleSheet.create({
  container: {
    borderBottomColor: _colors2.default.grey4,
    borderBottomWidth: 1,
    marginLeft: 20,
    marginRight: 20
  },
  input: {
    height: 40,
    color: _colors2.default.grey3
  }
});

exports.default = FormInput;