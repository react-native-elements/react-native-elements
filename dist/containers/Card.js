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

var _colors = require('../config/colors');

var _colors2 = _interopRequireDefault(_colors);

var _Text = require('../text/Text');

var _Text2 = _interopRequireDefault(_Text);

var _Divider = require('../Divider');

var _Divider2 = _interopRequireDefault(_Divider);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var Card = function Card(_ref) {
  var children = _ref.children;
  var flexDirection = _ref.flexDirection;
  var containerStyle = _ref.containerStyle;
  var wrapperStyle = _ref.wrapperStyle;
  var title = _ref.title;
  var titleStyle = _ref.titleStyle;
  var dividerStyle = _ref.dividerStyle;
  return _react2.default.createElement(
    _reactNative.View,
    { style: [styles.container, containerStyle && containerStyle] },
    _react2.default.createElement(
      _reactNative.View,
      { style: [styles.wrapper, wrapperStyle && wrapperStyle, flexDirection && { flexDirection: flexDirection }] },
      title && _react2.default.createElement(
        _reactNative.View,
        null,
        _react2.default.createElement(
          _Text2.default,
          { style: [styles.cardTitle, titleStyle && titleStyle] },
          title
        ),
        _react2.default.createElement(_Divider2.default, { style: [styles.divider, dividerStyle && dividerStyle] })
      ),
      children
    )
  );
};

styles = _reactNative.StyleSheet.create({
  container: _extends({
    backgroundColor: 'white',
    borderColor: _colors2.default.grey5,
    borderWidth: 1,
    borderRadius: 3,
    padding: 15,
    margin: 15,
    marginBottom: 0
  }, _reactNative.Platform.select({
    ios: {
      shadowColor: 'rgba(0,0,0, .2)',
      shadowOffset: { height: 0, width: 0 },
      shadowOpacity: 1,
      shadowRadius: 1
    },
    android: {
      elevation: 1
    }
  })),
  wrapper: {
    backgroundColor: 'transparent'
  },
  divider: {
    marginBottom: 15
  },
  cardTitle: {
    fontFamily: _fonts2.default.ios.bold,
    textAlign: 'center',
    marginBottom: 15
  }
});

exports.default = Card;