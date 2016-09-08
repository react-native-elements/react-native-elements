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

var styles = void 0;

var Component = function Component(_ref) {
  var children = _ref.children;
  var containerStyle = _ref.containerStyle;
  return _react2.default.createElement(
    _reactNative.View,
    { style: [styles.listContainer, containerStyle && containerStyle] },
    children
  );
};

Component.propTypes = {};

styles = _reactNative.StyleSheet.create({
  listContainer: {
    marginTop: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: _colors2.default.greyOutline
  }
});

exports.default = Component;