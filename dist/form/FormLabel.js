'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _colors = require('../config/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../config/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _Text = require('../text/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var FormLabel = function FormLabel(_ref) {
  var containerStyle = _ref.containerStyle;
  var labelStyle = _ref.labelStyle;
  var children = _ref.children;
  return _react2.default.createElement(
    _reactNative.View,
    { style: [styles.container, containerStyle && containerStyle] },
    _react2.default.createElement(
      _Text2.default,
      { style: [styles.label, labelStyle && labelStyle] },
      children.toUpperCase()
    )
  );
};

styles = _reactNative.StyleSheet.create({
  container: {},
  label: _extends({
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 1,
    color: _colors2.default.grey2,
    fontSize: 13
  }, _reactNative.Platform.select({
    ios: {
      fontFamily: _fonts2.default.ios.bold
    },
    android: {
      fontFamily: _fonts2.default.android.bold
    }
  }))
});

exports.default = FormLabel;