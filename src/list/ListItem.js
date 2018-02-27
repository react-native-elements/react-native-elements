import PropTypes from 'prop-types';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Switch,
  TouchableOpacity,
  View,
} from 'react-native';
import Avatar from '../avatar/Avatar';
import Badge from '../badge/badge';
import CheckBox from '../checkbox/CheckBox';
import Icon from '../icons/Icon';
import Text from '../text/Text';
import ButtonGroup from '../buttons/ButtonGroup'
import TextInput from '../input/Input';
import ViewPropTypes from '../config/ViewPropTypes';

console.disableYellowBox = true;

const IOS_BLUE = '#007AFF';
const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';

const ListItem = props => {
  const {
    title,
    titleProps,
    subtitle,
    subtitleProps,
    containerStyle,
    component,
    icon,
    avatar,
    leftElement,
    rightElement,
    rightTitle,
    rightTitleProps,
    textInputProps,
    buttonGroupProps,
    switchProps,
    checkBoxProps,
    badgeProps,
    disclosure,
    contentContainerStyle,
    checkmark,
    disabled,
    disabledStyle,
    ...attributes
  } = props;
  delete attributes.avatar;

  const { onPress, onLongPress } = props;
  let Component =
    component || (onPress || onLongPress ? TouchableOpacity : View);

  return (
    <Component {...attributes} onPress={onPress} disabled={disabled}>
      <PadView style={[styles.container, containerStyle, disabled && disabledStyle]}>
        {renderNode(leftElement)}
        {renderIcon(icon)}
        {renderAvatar(avatar)}
        <View
          style={[
            styles.contentContainer,
            (textInputProps || buttonGroupProps) && { flex: 0 },
            contentContainerStyle,
          ]}
        >
          {renderNode(title, titleProps, styles.title)}
          {renderNode(subtitle, subtitleProps, styles.subtitle)}
        </View>
        {renderNode(rightTitle, rightTitleProps, styles.rightTitle)}
        {textInputProps && (
          <TextInput
            {...textInputProps}
            inputStyle={[styles.textInput, textInputProps && textInputProps.inputStyle]}
            contentContainerStyle={[
              styles.textInputContentContainer,
              textInputProps && textInputProps.contentContainerStyle,
            ]}
            containerStyle={[
              styles.textInputContainer,
              textInputProps && textInputProps.containerStyle,
            ]}
          />
        )}
        {switchProps && <Switch {...switchProps} />}
        {checkBoxProps && <CheckBox {...checkBoxProps} containerStyle={[styles.checkboxContainer, checkBoxProps && checkBoxProps.containerStyle]} />}
        {badgeProps && <Badge {...badgeProps} />}
        {buttonGroupProps && <ButtonGroup {...buttonGroupProps} containerStyle={[styles.buttonGroupContainer, buttonGroupProps && buttonGroupProps.containerStyle]} />}
        {renderNode(rightElement)}
        {checkmark && Checkmark}
        {disclosure && Disclosure}
      </PadView>
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      ios: {
        padding: 14,
      },
      android: {
        padding: 16,
      },
    }),
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    ...Platform.select({
      ios: {
        fontSize: 17,
      },
      android: {
        fontSize: 16,
      },
    }),
  },
  subtitle: {
    ...Platform.select({
      ios: {
        fontSize: 15,
      },
      android: {
        color: ANDROID_SECONDARY,
        fontSize: 14,
      },
    }),
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    textAlign: 'right',
    width: null,
  },
  textInputContainer: {
    flex: 1,
  },
  textInputContentContainer: {
    flex: 1,
    borderBottomWidth: 0,
    width: null,
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
    ...Platform.select({
      ios: {
        fontSize: 17,
      },
      android: {
        fontSize: 16,
      },
    }),
    color: ANDROID_SECONDARY,
  },
});

const Disclosure = (
  <Icon
    type={Platform.OS === 'ios' ? 'ionicon' : 'material'}
    name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'keyboard-arrow-right'}
    size={16}
    color="#D1D1D6"
  />
);

const Checkmark = (
  <Icon
    type={Platform.OS === 'ios' ? 'ionicon' : 'material'}
    name={Platform.OS === 'ios' ? 'ios-checkmark' : 'check'}
    size={Platform.OS === 'ios' ? 34 : 20}
    color={Platform.OS === 'ios' ? IOS_BLUE : ANDROID_SECONDARY}
    style={{ color: "black" }}
  />
);

ListItem.propTypes = {
  containerStyle: ViewPropTypes.style,
  contentContainerStyle: ViewPropTypes.style,
  component: PropTypes.element,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  titleProps: PropTypes.object,
  subtitleProps: PropTypes.object,
  icon: PropTypes.node,
  avatar: PropTypes.node,
  leftElement: PropTypes.element,
  rightElement: PropTypes.element,
  rightTitle: PropTypes.node,
  rightTitleProps: PropTypes.object,
  textInputProps: PropTypes.object,
  buttonGroupProps: PropTypes.object,
  switchProps: PropTypes.object,
  checkBoxProps: PropTypes.object,
  badgeProps: PropTypes.object,
  disclosure: PropTypes.bool,
  checkmark: PropTypes.bool,
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
};

const PadView = ({ children, pad = 16, ...props }) => {
  const childrens = React.Children.toArray(children);
  const length = childrens.length;
  return (
    <View {...props}>
      {React.Children.map(
        childrens,
        (child, index) =>
          child && [child, index !== length - 1 && <View width={pad} />]
      )}
    </View>
  );
};

const renderAvatar = content =>
  content == null ? null : React.isValidElement(content) ? (
    content
  ) : (
    <Avatar width={40} height={40} rounded {...content} />
  );

const renderIcon = content =>
  content == null ? null : React.isValidElement(content) ? (
    content
  ) : (
    <Icon
      color={Platform.OS === 'ios' ? null : ANDROID_SECONDARY}
      size={24}
      {...content}
      containerStyle={[styles.iconContainer, content && content.containerStyle]}
    />
  );

const renderNode = (content, props, style) =>
  content == null ? null : React.isValidElement(content) ? (
    content
  ) : (
    <Text {...props} style={[style, props && props.style]}>
      {content}
    </Text>
  );

export default ListItem;