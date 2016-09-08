'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _fonts = require('../config/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var TextElement = function TextElement(_ref) {
  var style = _ref.style;
  var children = _ref.children;
  var h1 = _ref.h1;
  var h2 = _ref.h2;
  var h3 = _ref.h3;
  var h4 = _ref.h4;
  return _react2.default.createElement(
    _reactNative.Text,
    {
      style: [styles.text, h1 && { fontSize: 40 }, h2 && { fontSize: 34 }, h3 && { fontSize: 28 }, h4 && { fontSize: 22 }, h1 && styles.bold, h2 && styles.bold, h3 && styles.bold, h4 && styles.bold, style && style] },
    children
  );
};

styles = _reactNative.StyleSheet.create({
  text: _extends({}, _reactNative.Platform.select({
    ios: {
      fontFamily: _fonts2.default.ios.regular
    },
    android: {
      fontFamily: _fonts2.default.android.regular
    }
  })),
  bold: _extends({}, _reactNative.Platform.select({
    ios: {
      fontFamily: _fonts2.default.ios.bold
    },
    android: {
      fontFamily: _fonts2.default.android.bold
    }
  }))
});

exports.default = TextElement;