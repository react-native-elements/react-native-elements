import PropTypes from 'prop-types';
import React from 'react';
import {
  Platform,
  StyleSheet,
  Switch,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Avatar from '../avatar/Avatar';
import Badge from '../badge/badge';
import CheckBox from '../checkbox/CheckBox';
import Icon from '../icons/Icon';
import Text from '../text/Text';
import ViewPropTypes from '../config/ViewPropTypes';

console.disableYellowBox = true;

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
        {icon && <Icon {...icon} size={icon.size || 40} />}
        {avatar && (
          <Avatar
            {...avatar}
            width={!avatar.width && !avatar.height ? 40 : avatar.width}
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
        {renderNode(rightTitle, rightTitleProps)}
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
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 14,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  textInput: {
    flex: 1,
    textAlign: 'right',
  },
});

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

const Disclosure = (
  <Icon
    type={Platform.OS === 'ios' ? 'ionicon' : 'material'}
    name={Platform.OS === 'ios' ? 'ios-arrow-forward' : 'keyboard-arrow-right'}
    size={20}
    color="rgba(0, 0, 0, 0.54)"
  />
);

const Checkmark = (
  <Icon
    type={Platform.OS === 'ios' ? 'ionicon' : 'material'}
    name={Platform.OS === 'ios' ? 'ios-checkmark' : 'check'}
    size={Platform.OS === 'ios' ? 35 : 20}
    color="rgba(0, 0, 0, 0.54)"
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
