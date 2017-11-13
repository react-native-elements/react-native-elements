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
    leftElement,
    rightIcon,
    rightTitle,
    rightTitleProps,
    textInputProps,
    switchProps,
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
  leftElement: PropTypes.element,
  rightIcon: PropTypes.element,
  rightTitle: PropTypes.node,
  rightTitleProps: PropTypes.object,
  textInputProps: PropTypes.object,
};

export default ListItem;
