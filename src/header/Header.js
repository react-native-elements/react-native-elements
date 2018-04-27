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
import renderNode from '../helpers/renderNode';
import Text from '../text/Text';
import Icon from '../icons/Icon';
import Button from '../buttons/Button';
import Avatar from '../avatar/Avatar';
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
    <StatusBar barStyle="light-content" {...statusBarProps} />
    <View style={[styles.leftContainer, leftContainerStyle]}>
      {renderComponent(leftComponent)}
      {renderNode(Button, leftButton)}
      {renderNode(Icon, leftIcon)}
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
      {renderNode(Button, centerButton)}
      {renderNode(Icon, centerIcon)}
      {renderNode(Avatar, centerAvatar)}
    </View>
    <View style={[styles.rightContainer, rightContainerStyle]}>
      {renderComponent(rightComponent)}
      {renderNode(Button, rightButton)}
      {renderNode(Icon, rightIcon)}
      {renderNode(Avatar, rightAvatar)}
    </View>
  </Component>
);



Header.propTypes = {
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
  leftButton: ,
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
    alignItems: 'flex-start',
  },
  centerContainer: {
    flex: 2,
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default Header;
