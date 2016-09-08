'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _colors;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _FontAwesome = require('react-native-vector-icons/FontAwesome');

var _FontAwesome2 = _interopRequireDefault(_FontAwesome);

var _Text = require('../text/Text');

var _Text2 = _interopRequireDefault(_Text);

var _fonts = require('../config/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var styles = void 0;

var colors = (_colors = {
  facebook: '#3b5998',
  twitter: '#00aced'
}, _defineProperty(_colors, 'google-plus-official', '#dd4b39'), _defineProperty(_colors, 'pinterest', '#cb2027'), _defineProperty(_colors, 'linkedin', '#007bb6'), _defineProperty(_colors, 'youtube', '#bb0000'), _defineProperty(_colors, 'vimeo', '#aad450'), _defineProperty(_colors, 'tumblr', '#32506d'), _defineProperty(_colors, 'instagram', '#517fa4'), _defineProperty(_colors, 'quora', '#a82400'), _defineProperty(_colors, 'foursquare', '#0072b1'), _defineProperty(_colors, 'wordpress', '#21759b'), _defineProperty(_colors, 'stumbleupon', '#EB4823'), _colors);

var onTouch = function onTouch() {
  return console.log('please attach a click handler...');
};

var SocialIcon = function SocialIcon(_ref) {
  var component = _ref.component;
  var type = _ref.type;
  var button = _ref.button;
  var onPress = _ref.onPress;
  var iconStyle = _ref.iconStyle;
  var style = _ref.style;
  var iconColor = _ref.iconColor;
  var title = _ref.title;

  var onClick = onPress || onTouch;
  var Component = component || _reactNative.TouchableHighlight;
  return _react2.default.createElement(
    Component,
    {
      underlayColor: colors[type],
      onPress: onClick,
      style: [styles.container, button ? styles.button : styles.icon, { backgroundColor: colors[type] }, style && style] },
    _react2.default.createElement(
      _reactNative.View,
      { style: styles.wrapper },
      _react2.default.createElement(_FontAwesome2.default, {
        style: [iconStyle && iconStyle],
        color: iconColor || 'white',
        name: type,
        size: 24 }),
      button && title && _react2.default.createElement(
        _Text2.default,
        { style: styles.title },
        title
      )
    )
  );
};

SocialIcon.propTypes = {
  component: _react.PropTypes.element,
  type: _react.PropTypes.string,
  button: _react.PropTypes.bool,
  onPress: _react.PropTypes.func,
  iconStyle: _react.PropTypes.any,
  style: _react.PropTypes.any,
  iconColor: _react.PropTypes.string,
  title: _react.PropTypes.string
};

styles = _reactNative.StyleSheet.create({
  container: _extends({
    margin: 7,
    padding: 15,
    borderRadius: 30
  }, _reactNative.Platform.select({
    ios: {
      shadowColor: 'rgba(0,0,0, .4)',
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: 1,
      shadowRadius: 1
    },
    android: {
      elevation: 2
    }
  })),
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: _extends({
    color: 'white',
    marginLeft: 15
  }, _reactNative.Platform.select({
    ios: {
      fontFamily: _fonts2.default.ios.black
    },
    android: {
      fontFamily: _fonts2.default.android.black
    }
  })),
  icon: {
    height: 52,
    width: 52
  }
});

exports.default = SocialIcon;