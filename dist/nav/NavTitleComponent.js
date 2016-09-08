'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _HSText = require('HSText');

var _HSText2 = _interopRequireDefault(_HSText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NavTitleComponent = function NavTitleComponent() {
  return _react2.default.createElement(
    _reactNative.View,
    null,
    _react2.default.createElement(
      _HSText2.default,
      null,
      'Hello from Nav'
    )
  );
}; /**
    * @providesModule HSNavTitleComponent
    */

exports.default = NavTitleComponent;