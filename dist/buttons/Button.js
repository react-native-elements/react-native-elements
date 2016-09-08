'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _MaterialIcons = require('react-native-vector-icons/MaterialIcons');

var _MaterialIcons2 = _interopRequireDefault(_MaterialIcons);

var _colors = require('../config/colors');

var _colors2 = _interopRequireDefault(_colors);

var _Text = require('../text/Text');

var _Text2 = _interopRequireDefault(_Text);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var log = function log() {
  console.log('please attach method to this component');
};

var Button = function Button(_ref) {
  var buttonStyle = _ref.buttonStyle;
  var title = _ref.title;
  var onPress = _ref.onPress;
  var icon = _ref.icon;
  var secondary = _ref.secondary;
  var secondary2 = _ref.secondary2;
  var secondary3 = _ref.secondary3;
  var primary1 = _ref.primary1;
  var primary2 = _ref.primary2;
  var primary3 = _ref.primary3;
  var backgroundColor = _ref.backgroundColor;
  var color = _ref.color;
  var fontSize = _ref.fontSize;
  var underlayColor = _ref.underlayColor;
  var raised = _ref.raised;
  var textStyle = _ref.textStyle;
  return _react2.default.createElement(
    _reactNative.TouchableHighlight,
    {
      underlayColor: underlayColor || 'transparent',
      onPress: onPress || log },
    _react2.default.createElement(
      _reactNative.View,
      {
        style: [styles.button, secondary && { backgroundColor: _colors2.default.secondary }, secondary2 && { backgroundColor: _colors2.default.secondary2 }, secondary3 && { backgroundColor: _colors2.default.secondary3 }, primary1 && { backgroundColor: _colors2.default.primary1 }, primary2 && { backgroundColor: _colors2.default.primary2 }, backgroundColor && { backgroundColor: backgroundColor }, buttonStyle && buttonStyle, raised && styles.raised]
      },
      icon && _react2.default.createElement(_MaterialIcons2.default, { color: icon.color || 'white', size: icon.size || 26, style: styles.icon, name: icon.name }),
      _react2.default.createElement(
        _Text2.default,
        { style: [styles.text, textStyle && textStyle, color && { color: color }, fontSize && { fontSize: fontSize }] },
        title
      )
    )
  );
};

Button.propTypes = {
  buttonStyle: _react.PropTypes.any,
  title: _react.PropTypes.string,
  onPress: _react.PropTypes.any,
  icon: _react.PropTypes.object,
  secondary: _react.PropTypes.bool,
  secondary2: _react.PropTypes.bool,
  secondary3: _react.PropTypes.bool,
  primary1: _react.PropTypes.bool,
  primary2: _react.PropTypes.bool,
  primary3: _react.PropTypes.bool,
  backgroundColor: _react.PropTypes.string,
  color: _react.PropTypes.string,
  fontSize: _react.PropTypes.number,
  underlayColor: _react.PropTypes.string,
  raised: _react.PropTypes.bool,
  textStyle: _react.PropTypes.any
};

styles = _reactNative.StyleSheet.create({
  button: {
    padding: 20,
    borderTopWidth: 1,
    marginLeft: 15,
    marginRight: 15,
    borderColor: '#ededed',
    backgroundColor: _colors2.default.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    marginTop: 7.5,
    marginBottom: 7.5
  },
  text: {
    color: 'white',
    fontSize: 18
  },
  icon: {
    marginRight: 10
  },
  raised: _extends({}, _reactNative.Platform.select({
    ios: {
      shadowColor: 'rgba(0,0,0, .4)',
      shadowOffset: { height: 1, width: 1 },
      shadowOpacity: 1,
      shadowRadius: 1
    },
    android: {
      elevation: 2
    }
  }))
});

exports.default = Button;