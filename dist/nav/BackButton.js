'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _MaterialIcons = require('react-native-vector-icons/MaterialIcons');

var _MaterialIcons2 = _interopRequireDefault(_MaterialIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BackButton = function BackButton(_ref) {
  var onPress = _ref.onPress;
  var name = _ref.name;
  var size = _ref.size;
  return _react2.default.createElement(
    _reactNative.TouchableHighlight,
    { onPress: onPress },
    _react2.default.createElement(_MaterialIcons2.default, { name: name, size: size || 28 })
  );
}; /**
    * @providesModule HSBackButton
    */

exports.default = BackButton;