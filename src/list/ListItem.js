import PropTypes from 'prop-types';
import React from 'react';
import {
  CheckBox,
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
import Icon from '../icons/Icon';
import Text from '../text/Text';
import ViewPropTypes from '../config/ViewPropTypes';

const ListItem = props => {
  const {
    title,
    titleProps,
    subtitle,
    subtitleProps,
    containerStyle,
    component,
    leftElement,
    rightElement,
    rightTitle,
    rightTitleProps,
    textInputProps,
    switchProps,
    checkBoxProps,
    badgeProps,
    disclosure,
    ...attributes
  } = props;

  const { onPress, onLongPress } = props;
  let Component =
    component || (onPress || onLongPress ? TouchableOpacity : View);

  return (
    <Component {...attributes} onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        {React.isValidElement(leftElement) && leftElement}
        <View
          style={[styles.centerContainer, leftElement && { paddingLeft: 16 }]}
        >
          {title != null &&
            (React.isValidElement(title) ? (
              title
            ) : (
              <Text
                {...titleProps}
                style={[styles.title, titleProps && titleProps.style]}
              >
                {title}
              </Text>
            ))}
          {subtitle != null &&
            (React.isValidElement(subtitle) ? (
              subtitle
            ) : (
              <Text
                {...subtitleProps}
                style={[styles.subtitle, subtitleProps && subtitleProps.style]}
              >
                {subtitle}
              </Text>
            ))}
        </View>
        {rightTitle != null &&
          (React.isValidElement(rightTitle) ? (
            rightTitle
          ) : (
            <Text
              {...rightTitleProps}
              style={[
                styles.rightTitle,
                rightElement && { paddingRight: 16 },
                rightTitleProps && rightTitleProps.style,
              ]}
            >
              {rightTitle}
            </Text>
          ))}
        {textInputProps && (
          <TextInput
            {...textInputProps}
            style={[styles.textInput, textInputProps && textInputProps.style]}
          />
        )}
        {switchProps && <Switch {...switchProps} />}
        {checkBoxProps && <CheckBox {...checkBoxProps} />}
        {badgeProps && <Badge {...badgeProps} />}
        {React.isValidElement(rightElement) && rightElement}
        {disclosure && Disclosure}
      </View>
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightTitle: {
    paddingLeft: 16,
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
  disclosure: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 20,
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
  leftElement: PropTypes.element,
  rightElement: PropTypes.element,
  rightTitle: PropTypes.node,
  rightTitleProps: PropTypes.object,
  textInputProps: PropTypes.object,
  switchProps: PropTypes.object,
  checkBoxProps: PropTypes.object,
  badgeProps: PropTypes.object,
  disclosure: PropTypes.bool,
};

const Disclosure =
  Platform.OS === 'ios' ? (
    <Ionicons name="ios-arrow-forward" style={styles.disclosure} />
  ) : (
    <MaterialIcons name="keyboard-arrow-right" style={styles.disclosure} />
  );

export default ListItem;
