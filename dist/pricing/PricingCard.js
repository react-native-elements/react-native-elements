'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _Text = require('../text/Text');

var _Text2 = _interopRequireDefault(_Text);

var _fonts = require('../config/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

var _colors = require('../config/colors');

var _colors2 = _interopRequireDefault(_colors);

var _Button = require('../buttons/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var PricingCard = function PricingCard(_ref) {
  var children = _ref.children;
  var flexDirection = _ref.flexDirection;
  var containerStyle = _ref.containerStyle;
  var wrapperStyle = _ref.wrapperStyle;
  var title = _ref.title;
  var price = _ref.price;
  var info = _ref.info;
  var button = _ref.button;
  var color = _ref.color;
  return _react2.default.createElement(
    _reactNative.View,
    { style: [styles.container, containerStyle && containerStyle] },
    _react2.default.createElement(
      _reactNative.View,
      { style: [styles.wrapper, wrapperStyle && wrapperStyle, flexDirection && { flexDirection: flexDirection }] },
      _react2.default.createElement(
        _Text2.default,
        { style: [styles.pricingTitle, { color: color }] },
        title
      ),
      _react2.default.createElement(
        _Text2.default,
        { style: styles.pricingPrice },
        price
      ),
      info.map(function (info, i) {
        return _react2.default.createElement(
          _Text2.default,
          { key: i, style: styles.pricingInfo },
          info
        );
      }),
      _react2.default.createElement(_Button2.default, {
        icon: { name: button.icon },
        buttonStyle: [styles.button, button.buttonStyle, { backgroundColor: color }],
        title: button.title })
    )
  );
};

styles = _reactNative.StyleSheet.create({
  container: _extends({
    marginBottom: 15,
    backgroundColor: 'white',
    borderColor: _colors2.default.grey5,
    borderWidth: 1,
    padding: 15
  }, _reactNative.Platform.select({
    ios: {
      shadowColor: 'rgba(0,0,0, .2)',
      shadowOffset: { height: 1, width: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 0.5
    },
    android: {
      elevation: 1
    }
  })),
  wrapper: {
    backgroundColor: 'transparent'
  },
  pricingTitle: _extends({
    textAlign: 'center',
    color: _colors2.default.primary,
    fontSize: 30
  }, _reactNative.Platform.select({
    ios: {
      fontFamily: _fonts2.default.ios.black
    },
    android: {
      fontFamily: _fonts2.default.android.black
    }
  })),
  pricingPrice: _extends({
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 40
  }, _reactNative.Platform.select({
    ios: {
      fontFamily: _fonts2.default.ios.bold
    },
    android: {
      fontFamily: _fonts2.default.android.bold
    }
  })),
  pricingInfo: _extends({
    textAlign: 'center',
    marginTop: 5,
    marginBottom: 5,
    color: _colors2.default.grey3
  }, _reactNative.Platform.select({
    ios: {
      fontFamily: _fonts2.default.ios.bold
    },
    android: {
      fontFamily: _fonts2.default.android.bold
    }
  })),
  button: {
    marginTop: 15,
    marginBottom: 10
  }
});

exports.default = PricingCard;