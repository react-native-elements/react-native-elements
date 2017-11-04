import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  Switch,
  TextInput,
} from 'react-native';
import Avatar from '../avatar/Avatar';
import Badge from '../badge/badge';
import Icon from '../icons/Icon';
import Text from '../text/Text';
import colors from '../config/colors';
import fonts from '../config/fonts';
import normalize from '../helpers/normalizeText';
import ViewPropTypes from '../config/ViewPropTypes';

const ListItem = props => {
  const {
    title,
    titleProps,
    subtitle,
    subtitleProps,
    containerStyle,
    component,
    avatar,
    rightIcon,
    rightTitle,
    rightTitleProps,
    textInputProps,
    ...attributes
  } = props;

  const { onPress, onLongPress } = props;
  let Component = component
    ? Component
    : onPress || onLongPress ? TouchableOpacity : View;

  return (
    <Component {...attributes} onPress={onPress}>
      <View style={[styles.container, containerStyle]}>
        {React.isValidElement(avatar) && avatar}
        <View style={styles.centerContainer}>
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
        {textInputProps && (
          <TextInput
            {...textInputProps}
            style={[styles.textInput, textInputProps && textInputProps.style]}
          />
        )}
        {rightTitle != null &&
          (React.isValidElement(rightTitle) ? (
            rightTitle
          ) : (
            <Text
              {...rightTitleProps}
              style={[
                styles.rightTitle,
                rightIcon && { paddingRight: 16 },
                rightTitleProps && rightTitleProps.style,
              ]}
            >
              {rightTitle}
            </Text>
          ))}
        {React.isValidElement(rightIcon) && rightIcon}
      </View>
    </Component>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    margin: 8,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rightTitle: {
    paddingLeft: 16,
  },
  title: {
    fontSize: 16,
  },
  subtitle: {
    color: 'rgba(0, 0, 0, 0.54)',
    fontSize: 16,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 16,
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
  avatar: PropTypes.element,
  rightIcon: PropTypes.element,
  rightTitle: PropTypes.node,
  rightTitleProps: PropTypes.object,
  textInputProps: PropTypes.object,
};

export default ListItem;
