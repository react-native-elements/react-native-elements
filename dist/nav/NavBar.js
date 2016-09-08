'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /**
                                                                                                                                                                                                                                                                   * @providesModule HSNavBar
                                                                                                                                                                                                                                                                   */

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _HSNavTitleComponent = require('HSNavTitleComponent');

var _HSNavTitleComponent2 = _interopRequireDefault(_HSNavTitleComponent);

var _HSNavTitleIcon = require('HSNavTitleIcon');

var _HSNavTitleIcon2 = _interopRequireDefault(_HSNavTitleIcon);

var _HSColors = require('HSColors');

var _HSColors2 = _interopRequireDefault(_HSColors);

var _MaterialIcons = require('react-native-vector-icons/MaterialIcons');

var _MaterialIcons2 = _interopRequireDefault(_MaterialIcons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {};

var NavigationBar = function NavigationBar() {
  var src = require('image!logo');
  var LeftButton = function LeftButton(route, navigator, index, navState) {
    if (index > 0) {
      var leftAction = navigator.pop;
      var leftIcon = 'chevron-left';
      return _react2.default.createElement(_MaterialIcons2.default, {
        onPress: leftAction,
        name: leftIcon, size: 28 });
    }
    return null;
  };

  var RightButton = function RightButton() /* route, navigator, index, navState */{
    return null;
  };

  var Title = function Title(route, navigator, index, navState) {
    if (route.title) {
      return _react2.default.createElement(_HSNavTitleComponent2.default, { title: route.title });
    }
    return _react2.default.createElement(_HSNavTitleIcon2.default, { src: src });
  };

  return _react2.default.createElement(_reactNative.Navigator.NavigationBar, {
    routeMapper: {
      LeftButton: LeftButton,
      RightButton: RightButton,
      Title: Title
    },
    style: styles.navBar
  });
};

styles = _reactNative.StyleSheet.create({
  navBar: _extends({
    height: 65,
    backgroundColor: _HSColors2.default.dkGreyBg
  }, _reactNative.Platform.select({
    android: {
      height: 55
    }
  })),
  backIcon: _extends({
    marginLeft: 10,
    marginTop: 10
  }, _reactNative.Platform.select({
    android: {
      marginTop: 15
    }
  }))
});

exports.default = NavigationBar;