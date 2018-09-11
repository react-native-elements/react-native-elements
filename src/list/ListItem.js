import PropTypes from 'prop-types';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import renderNode from '../helpers/renderNode';
import nodeType from '../helpers/nodeType';
import Avatar from '../avatar/Avatar';
import Badge from '../badge/badge';
import CheckBox from '../checkbox/CheckBox';
import Icon from '../icons/Icon';
import Text from '../text/Text';
import ButtonGroup from '../buttons/ButtonGroup';
import Input from '../input/Input';
import Divider from '../divider/Divider';
import ViewPropTypes from '../config/ViewPropTypes';
import colors from '../config/colors';

const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';

const renderText = (content, defaultProps, style) =>
  renderNode(Text, content, {
    ...defaultProps,
    style: [style, defaultProps && defaultProps.style],
  });
const renderAvatar = content =>
  renderNode(Avatar, content, {
    size: 40,
    rounded: true,
  });
const renderIcon = content =>
  renderNode(Icon, content, {
    color: Platform.OS === 'ios' ? null : ANDROID_SECONDARY,
    size: 24,
  });

const ListItem = props => {
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
    component: Component = onPress || onLongPress ? TouchableOpacity : View,
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
    chevronColor,
    contentContainerStyle,
    rightContentContainerStyle,
    checkmark,
    checkmarkColor,
    disabled,
    disabledStyle,
    bottomDivider,
    topDivider,
    pad,
    linearGradientProps,
    ViewComponent = linearGradientProps && global.Expo
      ? global.Expo.LinearGradient
      : View,
    ...attributes
  } = props;
  return (
    <Component
      {...attributes}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
    >
      {topDivider && <Divider />}
      <PadView
        Component={ViewComponent}
        {...linearGradientProps}
        style={[
          styles.container,
          (buttonGroup || switchProps) && { paddingVertical: 8 },
          containerStyle,
          disabled && disabledStyle,
        ]}
        pad={pad}
      >
        {renderNode(Text, leftElement)}
        {renderIcon(leftIcon)}
        {renderAvatar(leftAvatar)}
        {(title || subtitle) && (
          <View style={[styles.contentContainer, contentContainerStyle]}>
            {renderText(title, titleProps, [styles.title, titleStyle])}
            {renderText(subtitle, subtitleProps, [
              styles.subtitle,
              subtitleStyle,
            ])}
          </View>
        )}
        {(!!rightTitle || !!rightSubtitle) && (
          <View
            style={[styles.rightContentContainer, rightContentContainerStyle]}
          >
            {renderText(rightTitle, rightTitleProps, [
              styles.title,
              styles.rightTitle,
              rightTitleStyle,
            ])}
            {renderText(rightSubtitle, rightSubtitleProps, [
              styles.subtitle,
              styles.rightSubtitle,
              rightSubtitleStyle,
            ])}
          </View>
        )}
        {input && (
          <Input
            {...input}
            inputStyle={[styles.input, input && input.inputStyle]}
            inputContainerStyle={[
              styles.inputContentContainer,
              input && input.inputContainerStyle,
            ]}
            containerStyle={[
              styles.inputContainer,
              input && input.containerStyle,
            ]}
          />
        )}
        {switchProps && <Switch {...switchProps} />}
        {checkBox && (
          <CheckBox
            {...checkBox}
            containerStyle={[
              styles.checkboxContainer,
              checkBox && checkBox.containerStyle,
            ]}
          />
        )}
        {badge && <Badge {...badge} />}
        {buttonGroup && (
          <ButtonGroup
            {...buttonGroup}
            containerStyle={[
              styles.buttonGroupContainer,
              buttonGroup && buttonGroup.containerStyle,
            ]}
          />
        )}
        {renderAvatar(rightAvatar)}
        {renderIcon(rightIcon)}
        {renderNode(Text, rightElement)}
        {checkmark && <Checkmark color={checkmarkColor} />}
        {chevron && <Chevron color={chevronColor} />}
      </PadView>
      {bottomDivider && <Divider />}
    </Component>
  );
};

const Chevron = ({ color }) => (
  <Icon
    type={Platform.OS === 'ios' ? 'ionicon' : 'material'}
    name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'keyboard-arrow-right'}
    size={16}
    color={color}
  />
);

const Checkmark = ({ color }) => (
  <Icon type="material" name="check" size={20} color={color} />
);

const styles = StyleSheet.create({
  container: {
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
    backgroundColor: 'white',
  },
  title: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        fontSize: 17,
      },
      default: {
        fontSize: 16,
      },
    }),
  },
  subtitle: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        fontSize: 15,
      },
      default: {
        color: ANDROID_SECONDARY,
        fontSize: 14,
      },
    }),
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  rightContentContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  inputContainer: {
    flex: 1,
  },
  inputContentContainer: {
    flex: 1,
    borderBottomWidth: 0,
    width: null,
    height: null,
  },
  input: {
    flex: 1,
    textAlign: 'right',
    width: null,
    height: null,
    marginLeft: 0,
  },
  checkboxContainer: {
    margin: 0,
    marginRight: 0,
    marginLeft: 0,
    padding: 0,
  },
  buttonGroupContainer: {
    flex: 1,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
  },
  rightTitle: {
    color: ANDROID_SECONDARY,
  },
  rightSubtitle: {
    color: ANDROID_SECONDARY,
  },
});

ListItem.propTypes = {
  containerStyle: ViewPropTypes.style,
  contentContainerStyle: ViewPropTypes.style,
  rightContentContainerStyle: ViewPropTypes.style,
  component: PropTypes.func,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleStyle: Text.propTypes.style,
  titleProps: PropTypes.object,
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  subtitleStyle: Text.propTypes.style,
  subtitleProps: PropTypes.object,
  leftIcon: nodeType,
  leftAvatar: nodeType,
  leftElement: nodeType,
  rightIcon: nodeType,
  rightAvatar: nodeType,
  rightElement: nodeType,
  rightTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  rightTitleStyle: Text.propTypes.style,
  rightTitleProps: PropTypes.object,
  rightSubtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  rightSubtitleStyle: Text.propTypes.style,
  rightSubtitleProps: PropTypes.object,
  input: PropTypes.object,
  buttonGroup: PropTypes.object,
  switch: PropTypes.object,
  checkBox: PropTypes.object,
  badge: PropTypes.object,
  chevron: PropTypes.bool,
  chevronColor: PropTypes.string,
  checkmark: PropTypes.bool,
  checkmarkColor: PropTypes.string,
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
  topDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
  pad: PropTypes.number,
};

ListItem.defaultProps = {
  chevronColor: '#D1D1D6',
  checkmarkColor: colors.primary,
  pad: 16,
};

const PadView = ({ children, pad, Component, ...props }) => {
  const childrens = React.Children.toArray(children);
  const length = childrens.length;
  const Container = Component || View;
  return (
    <Container {...props}>
      {React.Children.map(
        childrens,
        (child, index) =>
          child && [child, index !== length - 1 && <View width={pad} />]
      )}
    </Container>
  );
};

export default ListItem;
