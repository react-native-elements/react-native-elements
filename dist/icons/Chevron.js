'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _HSColors = require('HSColors');

var _HSColors2 = _interopRequireDefault(_HSColors);

var _MaterialIcons = require('react-native-vector-icons/MaterialIcons');

var _MaterialIcons2 = _interopRequireDefault(_MaterialIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chevron = function Chevron(_ref) {
  var type = _ref.type;
  var style = _ref.style;
  var color = _ref.color;
  return _react2.default.createElement(
    _reactNative.View,
    { style: [style && style] },
    _react2.default.createElement(_MaterialIcons2.default, { name: 'chevron-' + type, size: 26, color: color || _HSColors2.default.silver })
  );
};

Chevron.propTypes = {
  type: _react.PropTypes.string,
  style: _react.PropTypes.any,
  color: _react.PropTypes.string
};

exports.default = Chevron;