import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import Text from '../text/Text';
import Icon from '../icons/Icon';
import Button from '../buttons/Button';
import Avatar from '../avatar/Avatar';
import renderNode from '../helpers/renderNode';
import nodeType from '../helpers/nodeType';
import { colors, ViewPropTypes, getStatusBarHeight } from '../config';

const ALIGN_STYLE = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};
// Prevent breaking changes
const renderComponent = content =>
  content == null || content === false ? null : React.isValidElement(
    content
  ) ? (
    content
  ) : content.text || typeof content === 'string' ? (
    <Text {...content}>{content.text}</Text>
  ) : content.icon ? (
    <Icon {...content} name={content.icon} />
  ) : null;

const Header = ({
  onPress,
  onLongPress,
  Component = onPress || onLongPress ? TouchableOpacity : View,
  barStyle,
  statusBarProps,
  leftComponent,
  centerComponent,
  rightComponent,
  leftContainerStyle,
  centerContainerStyle,
  rightContainerStyle,
  backgroundColor,
  containerStyle,
  placement,
  leftTitle,
  centerTitle,
  rightTitle,
  leftTitleStyle,
  centerTitleStyle,
  rightTitleStyle,
  leftTitleProps,
  centerTitleProps,
  rightTitleProps,
  leftButton,
  centerButton,
  rightButton,
  leftIcon,
  centerIcon,
  rightIcon,
  leftAvatar,
  centerAvatar,
  rightAvatar,
  ...attributes
}) => (
  <Component
    activeOpacity={1}
    {...attributes}
    onPress={onPress}
    onLongPress={onLongPress}
    style={[
      styles.container,
      backgroundColor && { backgroundColor },
      containerStyle,
    ]}
  >
    <StatusBar barStyle={barStyle} {...statusBarProps} />
    <View style={[styles.leftContainer, leftContainerStyle]}>
      {renderComponent(leftComponent)}
      {leftTitle && (
        <Text
          {...leftTitleProps}
          style={[leftTitleStyle, leftTitleProps && leftTitleProps.style]}
        >
          {leftTitleProps}
        </Text>
      )}
      {renderNode(Text, leftTitle, {
        ...leftTitleProps,
        style: [leftTitleStyle, leftTitleProps && leftTitleProps.style],
      })}
      {renderNode(Button, leftButton)}
      {renderNode(Icon, leftIcon, defaultIconProps)}
      {renderNode(Avatar, leftAvatar)}
    </View>
    <View
      style={[
        styles.centerContainer,
        placement && { alignItems: ALIGN_STYLE[placement] },
        centerContainerStyle,
      ]}
    >
      {renderComponent(centerComponent)}
      {renderNode(Text, centerTitle, {
        ...centerTitleProps,
        style: [centerTitleStyle, centerTitleProps && centerTitleProps.style],
      })}
      {renderNode(Button, centerButton)}
      {renderNode(Icon, centerIcon, defaultIconProps)}
      {renderNode(Avatar, centerAvatar)}
    </View>
    <View style={[styles.rightContainer, rightContainerStyle]}>
      {renderComponent(rightComponent)}
      {renderNode(Text, rightTitle, {
        ...rightTitleProps,
        style: [rightTitleStyle, rightTitleProps && rightTitleProps.style],
      })}
      {renderNode(Button, rightButton)}
      {renderNode(Icon, rightIcon, defaultIconProps)}
      {renderNode(Avatar, rightAvatar)}
    </View>
  </Component>
);

Header.propTypes = {
  barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
  placement: PropTypes.oneOf(['left', 'center', 'right']),
  leftComponent: PropTypes.object,
  centerComponent: PropTypes.object,
  rightComponent: PropTypes.object,
  leftContainerStyle: ViewPropTypes.style,
  centerContainerStyle: ViewPropTypes.style,
  rightContainerStyle: ViewPropTypes.style,
  backgroundColor: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  statusBarProps: PropTypes.object,
  leftTitle: PropTypes.string,
  centerTitle: PropTypes.string,
  rightTitle: PropTypes.string,
  leftTitle: PropTypes.string,
  centerTitle: PropTypes.string,
  rightTitle: PropTypes.string,
  leftTitleStyle: ViewPropTypes.style,
  centerTitleStyle: ViewPropTypes.style,
  rightTitleStyle: ViewPropTypes.style,
  leftTitleProps: PropTypes.object,
  centerTitleProps: PropTypes.object,
  rightTitleProps: PropTypes.object,
  leftButton: nodeType,
  centerButton: nodeType,
  rightButton: nodeType,
  leftIcon: nodeType,
  centerIcon: nodeType,
  rightIcon: nodeType,
  leftAvatar: nodeType,
  centerAvatar: nodeType,
  rightAvatar: nodeType,
};

Header.defaultProps = {
  placement: 'center',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: StyleSheet.hairlineWidth,
    paddingTop: getStatusBarHeight(),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: (Platform.OS === 'ios' ? 44 : 56) + getStatusBarHeight(),
    paddingHorizontal: 8,
  },
  leftContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  iconContainer: {
    padding: 8,
  },
});

const defaultIconProps = { containerStyle: styles.iconContainer };

export default Header;
