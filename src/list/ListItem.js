import React from 'react';
import PropTypes from 'prop-types';
import {
  Platform,
  StyleSheet,
  Switch,
  TouchableHighlight,
  View,
} from 'react-native';

import { renderNode, nodeType } from '../helpers';
import { withTheme } from '../config';

import Avatar from '../avatar/Avatar';
import Badge from '../badge/Badge';
import Icon from '../icons/Icon';
import Text from '../text/Text';

import ListItemContent from './ListItemContent';
import ListItemChevron from './ListItemChevron';
import ListItemInput from './ListItemInput';
import ListItemCheckBox from './ListItemCheckBox';
import ListItemButtonGroup from './ListItemButtonGroup';
import ListItemTitle from './ListItemTitle';
import ListItemSubtitle from './ListItemSubtitle';

const checkmarkDefaultProps = (theme) => ({
  name: 'check',
  size: 20,
  color: theme.colors.primary,
});

const renderAvatar = (content) =>
  renderNode(Avatar, content, {
    size: 40,
    rounded: true,
  });

const renderIcon = (content, theme) =>
  renderNode(Icon, content, {
    color: Platform.select(theme.colors.platform).grey,
    size: 24,
  });

const ListItem = (props) => {
  const {
    title,
    titleStyle,
    titleProps,
    subtitle,
    subtitleStyle,
    subtitleProps,
    containerStyle,
    onPress,
    onLongPress,
    Component = onPress || onLongPress ? TouchableHighlight : View,
    leftIcon,
    leftAvatar,
    leftElement,
    rightIcon,
    rightAvatar,
    rightElement,
    rightTitle,
    rightTitleStyle,
    rightTitleProps,
    rightSubtitle,
    rightSubtitleStyle,
    rightSubtitleProps,
    input,
    buttonGroup,
    switch: switchProps, // switch is a reserved keyword
    checkBox,
    badge,
    chevron,
    contentContainerStyle,
    rightContentContainerStyle,
    checkmark,
    disabled,
    disabledStyle,
    bottomDivider,
    topDivider,
    pad,
    linearGradientProps,
    ViewComponent = linearGradientProps && global.Expo
      ? global.Expo.LinearGradient
      : View,
    theme,
    children,
    ...attributes
  } = props;

  if (title) {
    console.warn(
      "'ListItem.title' prop has been deprecated and will be removed in the next version."
    );
  }
  if (titleStyle) {
    console.warn(
      "'ListItem.titleStyle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (titleProps) {
    console.warn(
      "'ListItem.titleProps' prop has been deprecated and will be removed in the next version."
    );
  }
  if (subtitle) {
    console.warn(
      "'ListItem.subtitle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (subtitleStyle) {
    console.warn(
      "'ListItem.subtitleStyle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (subtitleProps) {
    console.warn(
      "'ListItem.subtitleProps' prop has been deprecated and will be removed in the next version."
    );
  }
  if (leftIcon) {
    console.warn(
      "'ListItem.leftIcon' prop has been deprecated and will be removed in the next version."
    );
  }
  if (leftAvatar) {
    console.warn(
      "'ListItem.leftAvatar' prop has been deprecated and will be removed in the next version."
    );
  }
  if (leftElement) {
    console.warn(
      "'ListItem.leftElement' prop has been deprecated and will be removed in the next version."
    );
  }
  if (rightTitle) {
    console.warn(
      "'ListItem.rightTitle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (rightTitleStyle) {
    console.warn(
      "'ListItem.rightTitleStyle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (rightTitleProps) {
    console.warn(
      "'ListItem.rightTitleProps' prop has been deprecated and will be removed in the next version."
    );
  }
  if (rightSubtitle) {
    console.warn(
      "'ListItem.rightSubtitle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (rightSubtitleStyle) {
    console.warn(
      "'ListItem.rightSubtitleStyle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (rightSubtitleProps) {
    console.warn(
      "'ListItem.rightSubtitleProps' prop has been deprecated and will be removed in the next version."
    );
  }
  if (input) {
    console.warn(
      "'ListItem.input' prop has been deprecated and will be removed in the next version."
    );
  }
  if (buttonGroup) {
    console.warn(
      "'ListItem.buttonGroup' prop has been deprecated and will be removed in the next version."
    );
  }
  if (switchProps) {
    console.warn(
      "'ListItem.switch' prop has been deprecated and will be removed in the next version."
    );
  }
  if (checkBox) {
    console.warn(
      "'ListItem.checkBox' prop has been deprecated and will be removed in the next version."
    );
  }
  if (badge) {
    console.warn(
      "'ListItem.badge' prop has been deprecated and will be removed in the next version."
    );
  }
  if (chevron) {
    console.warn(
      "'ListItem.chevron' prop has been deprecated and will be removed in the next version."
    );
  }
  if (contentContainerStyle) {
    console.warn(
      "'ListItem.contentContainerStyle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (rightContentContainerStyle) {
    console.warn(
      "'ListItem.rightContentContainerStyle' prop has been deprecated and will be removed in the next version."
    );
  }
  if (checkmark) {
    console.warn(
      "'ListItem.checkmark' prop has been deprecated and will be removed in the next version."
    );
  }

  return (
    <Component
      {...attributes}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
    >
      <PadView
        Component={ViewComponent}
        {...linearGradientProps}
        style={StyleSheet.flatten([
          styles.container(theme),
          (buttonGroup || switchProps) && { paddingVertical: 8 },
          topDivider && { borderTopWidth: StyleSheet.hairlineWidth },
          bottomDivider && { borderBottomWidth: StyleSheet.hairlineWidth },
          containerStyle,
          disabled && disabledStyle,
        ])}
        pad={pad}
      >
        {renderNode(Text, leftElement)}
        {renderIcon(leftIcon, theme)}
        {renderAvatar(leftAvatar)}

        {(!!title || !!subtitle) && (
          <ListItemContent style={contentContainerStyle}>
            {title &&
              renderNode(ListItemTitle, title, {
                style: titleStyle,
                ...titleProps,
              })}
            {subtitle &&
              renderNode(ListItemSubtitle, subtitle, {
                style: subtitleStyle,
                ...subtitleProps,
              })}
          </ListItemContent>
        )}

        {(!!rightTitle || !!rightSubtitle) && (
          <ListItemContent right style={rightContentContainerStyle}>
            {rightTitle &&
              renderNode(ListItemTitle, rightTitle, {
                right: true,
                style: rightTitleStyle,
                ...rightTitleProps,
              })}
            {rightSubtitle &&
              renderNode(ListItemSubtitle, rightSubtitle, {
                right: true,
                style: rightSubtitleStyle,
                ...rightSubtitleProps,
              })}
          </ListItemContent>
        )}

        {input && <ListItemInput {...input} />}
        {switchProps && <Switch {...switchProps} />}
        {checkBox && <ListItemCheckBox {...checkBox} />}
        {badge && <Badge {...badge} />}
        {buttonGroup && <ListItemButtonGroup {...buttonGroup} />}
        {renderAvatar(rightAvatar)}
        {renderIcon(rightIcon, theme)}
        {renderNode(Text, rightElement)}
        {renderNode(Icon, checkmark, checkmarkDefaultProps(theme))}
        {chevron && <ListItemChevron />}
        {children}
      </PadView>
    </Component>
  );
};

const styles = {
  container: (theme) => ({
    ...Platform.select({
      ios: {
        padding: 14,
      },
      default: {
        padding: 16,
      },
    }),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.white,
    borderColor: theme.colors.divider,
  }),
};

ListItem.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  contentContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  rightContentContainerStyle: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array,
  ]),
  Component: PropTypes.elementType,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  titleProps: PropTypes.object,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subtitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  subtitleProps: PropTypes.object,
  leftIcon: nodeType,
  leftAvatar: nodeType,
  leftElement: nodeType,
  rightIcon: nodeType,
  rightAvatar: nodeType,
  rightElement: nodeType,
  rightTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  rightTitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  rightTitleProps: PropTypes.object,
  rightSubtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  rightSubtitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  rightSubtitleProps: PropTypes.object,
  input: PropTypes.object,
  buttonGroup: PropTypes.object,
  switch: PropTypes.object,
  checkBox: PropTypes.object,
  badge: PropTypes.object,
  chevron: nodeType,
  checkmark: nodeType,
  disabled: PropTypes.bool,
  disabledStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  topDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
  pad: PropTypes.number,
  linearGradientProps: PropTypes.object,
  ViewComponent: PropTypes.elementType,
  theme: PropTypes.object,
};

ListItem.defaultProps = {
  pad: 16,
  title: '',
};

class PadView extends React.Component {
  constructor(props) {
    super(props);
    this._root = React.createRef();
  }

  setNativeProps = (nativeProps) => {
    this._root.current.setNativeProps(nativeProps);
  };

  render() {
    const { children, pad, Component, ...props } = this.props;
    const childrens = React.Children.toArray(children);
    const { length } = childrens;
    const Container = Component || View;
    return (
      <Container {...props} ref={this._root} testID="padView">
        {React.Children.map(
          childrens,
          (child, index) =>
            child && [
              child,
              index !== length - 1 && <View style={{ paddingLeft: pad }} />,
            ]
        )}
      </Container>
    );
  }
}

PadView.propTypes = {
  children: PropTypes.node,
  pad: PropTypes.number,
  Component: PropTypes.elementType,
};

export { ListItem };

const ThemedListItem = withTheme(ListItem, 'ListItem');
ThemedListItem.Chevron = ListItemChevron;
ThemedListItem.Content = ListItemContent;
ThemedListItem.Input = ListItemInput;
ThemedListItem.Title = ListItemTitle;
ThemedListItem.Subtitle = ListItemSubtitle;
ThemedListItem.CheckBox = ListItemCheckBox;
ThemedListItem.ButtonGroup = ListItemButtonGroup;
export default ThemedListItem;
