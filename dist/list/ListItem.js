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

var _Text = require('../text/Text');

var _Text2 = _interopRequireDefault(_Text);

var _colors = require('../config/colors');

var _colors2 = _interopRequireDefault(_colors);

var _fonts = require('../config/fonts');

var _fonts2 = _interopRequireDefault(_fonts);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = void 0;

var ListItem = function ListItem(_ref) {
  var onPress = _ref.onPress;
  var title = _ref.title;
  var icon = _ref.icon;
  var rightIcon = _ref.rightIcon;
  var avatar = _ref.avatar;
  var avatarStyle = _ref.avatarStyle;
  var underlayColor = _ref.underlayColor;
  var subtitle = _ref.subtitle;
  var subtitleStyle = _ref.subtitleStyle;
  var containerStyle = _ref.containerStyle;
  var wrapperStyle = _ref.wrapperStyle;
  var titleStyle = _ref.titleStyle;
  var hideChevron = _ref.hideChevron;
  var chevronColor = _ref.chevronColor;
  var roundAvatar = _ref.roundAvatar;
  var component = _ref.component;

  var Component = onPress ? _reactNative.TouchableHighlight : _reactNative.View;
  if (component) {
    Component = component;
  }
  return _react2.default.createElement(
    Component,
    {
      onPress: onPress,
      underlayColor: underlayColor,
      style: [styles.container, containerStyle && containerStyle] },
    _react2.default.createElement(
      _reactNative.View,
      { style: [styles.wrapper, wrapperStyle && wrapperStyle] },
      icon && icon.name && _react2.default.createElement(_MaterialIcons2.default, {
        size: 28,
        style: [styles.icon, icon.style && icon.style],
        name: icon.name,
        color: icon.color || _colors2.default.grey4
      }),
      avatar && _react2.default.createElement(_reactNative.Image, {
        style: [styles.avatar, roundAvatar && { borderRadius: 15 }, avatarStyle && avatarStyle],
        source: { uri: avatar }
      }),
      _react2.default.createElement(
        _reactNative.View,
        { style: styles.titleContainer },
        _react2.default.createElement(
          _Text2.default,
          {
            style: [styles.title, titleStyle && titleStyle, !icon && { marginLeft: 10 }] },
          title
        ),
        subtitle && _react2.default.createElement(
          _Text2.default,
          {
            style: [styles.subtitle, !icon && { marginLeft: 10 }, subtitleStyle && subtitleStyle] },
          subtitle
        )
      ),
      onPress && !hideChevron && _react2.default.createElement(
        _reactNative.View,
        { style: styles.chevronContainer },
        _react2.default.createElement(_MaterialIcons2.default, {
          style: styles.chevron,
          size: 28,
          name: rightIcon,
          color: chevronColor })
      )
    )
  );
};

ListItem.defaultProps = {
  underlayColor: 'white',
  chevronColor: _colors2.default.grey4,
  rightIcon: 'chevron-right',
  hideChevron: false,
  roundAvatar: false
};

ListItem.propTypes = {
  title: _react.PropTypes.string,
  avatar: _react.PropTypes.any,
  icon: _react.PropTypes.any,
  onPress: _react.PropTypes.func,
  rightIcon: _react.PropTypes.string,
  underlayColor: _react.PropTypes.string,
  subtitle: _react.PropTypes.string,
  subtitleStyle: _react.PropTypes.any,
  containerStyle: _react.PropTypes.any,
  wrapperStyle: _react.PropTypes.any,
  titleStyle: _react.PropTypes.any,
  hideChevron: _react.PropTypes.bool,
  chevronColor: _react.PropTypes.string,
  roundAvatar: _react.PropTypes.bool
};

styles = _reactNative.StyleSheet.create({
  avatar: {
    width: 34,
    height: 34
  },
  container: {
    padding: 10,
    borderBottomColor: '#ededed',
    borderBottomWidth: 1,
    backgroundColor: 'white'
  },
  wrapper: {
    flexDirection: 'row'
  },
  icon: {
    marginRight: 10
  },
  title: {
    fontSize: 16,
    color: _colors2.default.grey1,
    marginTop: -2
  },
  subtitle: _extends({
    color: _colors2.default.grey3,
    fontSize: 12,
    marginTop: 1
  }, _reactNative.Platform.select({
    ios: {
      fontFamily: _fonts2.default.ios.bold
    },
    android: {
      fontFamily: _fonts2.default.android.bold
    }
  })),
  titleContainer: {
    justifyContent: 'center'
  },
  chevronContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  chevron: {}
});

exports.default = ListItem;