import PropTypes from 'prop-types';
import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Avatar from '../avatar/Avatar';
import Badge from '../badge/badge';
import CheckBox from '../checkbox/CheckBox';
import Icon from '../icons/Icon';
import Text from '../text/Text';
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
    switchProps,
    checkBoxProps,
    badgeProps,
    disclosure,
    centerContainerStyle,
    checkmark,
    ...attributes
  } = props;

  const { onPress, onLongPress } = props;
  let Component =
    component || (onPress || onLongPress ? TouchableOpacity : View);

  return (
    <Component {...attributes} onPress={onPress}>
      <PadView style={[styles.container, containerStyle]}>
        {renderNode(leftElement)}
        {icon && (
          <Icon
            color={Platform.OS === 'ios' ? null : ANDROID_SECONDARY}
            size={24}
            {...icon}
            containerStyle={[styles.iconContainer, icon.containerStyle]}
          />
        )}
        {avatar && (
          <Avatar
            {...avatar}
            width={avatar.width || 40}
            height={avatar.height || 40}
            rounded={avatar.rounded || true}
          />
        )}
        <View
          style={[
            styles.centerContainer,
            textInputProps && { flex: 0 },
            centerContainerStyle,
          ]}
        >
          {renderNode(title, titleProps, styles.title)}
          {renderNode(subtitle, subtitleProps, styles.subtitle)}
        </View>
        {renderNode(rightTitle, rightTitleProps, styles.rightTitle)}
        {textInputProps && (
          <TextInput
            {...textInputProps}
            style={[styles.textInput, textInputProps && textInputProps.style]}
          />
        )}
        {switchProps && <Switch {...switchProps} />}
        {checkBoxProps && <CheckBox {...checkBoxProps} />}
        {badgeProps && <Badge {...badgeProps} />}
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
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    textAlign: 'right',
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
  />
);

ListItem.propTypes = {
  containerStyle: ViewPropTypes.style,
  component: PropTypes.element,
  onPress: PropTypes.func,
  title: PropTypes.node,
  subtitle: PropTypes.node,
  titleProps: PropTypes.object,
  subtitleProps: PropTypes.object,
  icon: PropTypes.object,
  avatar: PropTypes.object,
  leftElement: PropTypes.element,
  rightElement: PropTypes.element,
  rightTitle: PropTypes.node,
  rightTitleProps: PropTypes.object,
  textInputProps: PropTypes.object,
  switchProps: PropTypes.object,
  checkBoxProps: PropTypes.object,
  badgeProps: PropTypes.object,
  disclosure: PropTypes.bool,
  checkmark: PropTypes.bool,
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

const renderNode = (content, props, style) =>
  content == null ? null : React.isValidElement(content) ? (
    content
  ) : (
    <Text {...props} style={[style, props && props.style]}>
      {content}
    </Text>
  );

export default ListItem;
