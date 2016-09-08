'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @providesModule HSNavTitleIcon
 */

var styles = {};

var NavTitleIcon = function NavTitleIcon(_ref) {
  var src = _ref.src;
  return _react2.default.createElement(
    _reactNative.View,
    null,
    _react2.default.createElement(_reactNative.Image, {
      source: src,
      style: styles.logo })
  );
};

styles = _reactNative.StyleSheet.create({
  container: {},
  logo: {
    resizeMode: 'center',
    marginTop: -15
  }
});

exports.default = NavTitleIcon;