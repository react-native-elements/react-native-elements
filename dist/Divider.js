'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _colors = require('./config/colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var Divider = function Divider(_ref) {
  var style = _ref.style;
  return _react2.default.createElement(_reactNative.View, { style: [styles.container, style && style] });
};

styles = _reactNative.StyleSheet.create({
  container: {
    height: 1,
    backgroundColor: _colors2.default.grey5
  }
});

exports.default = Divider;