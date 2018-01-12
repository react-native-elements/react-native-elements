import PropTypes from 'prop-types';
import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  Platform,
  Switch,
  Image,
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
    onPress,
    title,
    leftIcon,
    rightIcon,
    leftIconOnPress,
    leftIconOnLongPress,
    leftIconUnderlayColor,
    leftIconContainerStyle,
    avatarStyle,
    avatarContainerStyle,
    avatarOverlayContainerStyle,
    underlayColor,
    subtitle,
    subtitleStyle,
    containerStyle,
    wrapperStyle,
    titleNumberOfLines,
    titleStyle,
    titleContainerStyle,
    hideChevron,
    chevronColor,
    roundAvatar,
    component,
    fontFamily,
    rightTitle,
    rightTitleContainerStyle,
    rightTitleStyle,
    rightTitleNumberOfLines,
    subtitleContainerStyle,
    subtitleNumberOfLines,
    badge,
    label,
    onLongPress,
    switchButton,
    onSwitch,
    switchDisabled,
    switchOnTintColor,
    switchThumbTintColor,
    switchTintColor,
    switched,
    textInput,
    textInputAutoCapitalize,
    textInputAutoCorrect,
    textInputAutoFocus,
    textInputEditable,
    textInputKeyboardType,
    textInputMaxLength,
    textInputMultiline,
    textInputOnChangeText,
    textInputOnFocus,
    textInputOnBlur,
    textInputSelectTextOnFocus,
    textInputReturnKeyType,
    textInputValue,
    textInputSecure,
    textInputStyle,
    textInputContainerStyle,
    textInputPlaceholder,
    onPressRightIcon,
    disabled,
    disabledStyle,
    ...attributes
  } = props;

  let { avatar } = props;

  let Component = onPress || onLongPress ? TouchableHighlight : View;
  let LeftIconWrapper =
    leftIconOnPress || leftIconOnLongPress ? TouchableHighlight : View;
  if (component) {
    Component = component;
  }
  if (typeof avatar === 'string') {
    avatar = { uri: avatar };
  }
  return (
    <Component
      {...attributes}
      onLongPress={onLongPress}
      onPress={onPress}
      disabled={disabled}
      underlayColor={underlayColor}
      style={[
        styles.container,
        containerStyle && containerStyle,
        disabled && styles.disabled,
        disabled && disabledStyle && disabledStyle,
      ]}
    >
      <View style={[styles.wrapper, wrapperStyle && wrapperStyle]}>
        {React.isValidElement(leftIcon)
          ? leftIcon
          : leftIcon &&
            leftIcon.name && (
              <LeftIconWrapper
                onLongPress={leftIconOnLongPress}
                onPress={leftIconOnPress}
                disabled={disabled}
                underlayColor={leftIconUnderlayColor}
                style={[
                  styles.iconStyle,
                  leftIconContainerStyle && leftIconContainerStyle,
                ]}
              >
                <View>
                  <Icon
                    type={leftIcon.type}
                    iconStyle={[styles.icon, leftIcon.style && leftIcon.style]}
                    name={leftIcon.name}
                    color={leftIcon.color || colors.grey4}
                    size={leftIcon.size || 24}
                  />
                </View>
              </LeftIconWrapper>
            )}
        {avatar && React.isValidElement(avatar)
          ? avatar
          : avatar &&
            !React.isValidElement(avatar) && (
              <Avatar
                avatarStyle={avatarStyle && avatarStyle}
                containerStyle={avatarContainerStyle && avatarContainerStyle}
                overlayContainerStyle={
                  avatarOverlayContainerStyle && avatarOverlayContainerStyle
                }
                rounded={roundAvatar}
                source={avatar}
              />
            )}
        <View style={styles.titleSubtitleContainer}>
          <View style={titleContainerStyle}>
            {title !== null &&
            (typeof title === 'string' || typeof title === 'number') ? (
              <Text
                numberOfLines={titleNumberOfLines}
                style={[
                  styles.title,
                  !leftIcon && { marginLeft: 10 },
                  titleStyle && titleStyle,
                  fontFamily && { fontFamily },
                ]}
              >
                {title}
              </Text>
            ) : (
              <View>{title}</View>
            )}
          </View>
          <View style={subtitleContainerStyle}>
            {subtitle !== null &&
            (typeof subtitle === 'string' || typeof subtitle === 'number') ? (
              <Text
                numberOfLines={subtitleNumberOfLines}
                style={[
                  styles.subtitle,
                  !leftIcon && { marginLeft: 10 },
                  subtitleStyle && subtitleStyle,
                  fontFamily && { fontFamily },
                ]}
              >
                {subtitle}
              </Text>
            ) : (
              <View>{subtitle}</View>
            )}
          </View>
        </View>
        {rightTitle &&
          rightTitle !== '' &&
          !textInput && (
            <View
              style={[styles.rightTitleContainer, rightTitleContainerStyle]}
            >
              <Text
                numberOfLines={rightTitleNumberOfLines}
                style={[styles.rightTitleStyle, rightTitleStyle]}
              >
                {rightTitle}
              </Text>
            </View>
          )}
        {textInput && (
          <View
            style={[
              styles.rightTitleContainer,
              styles.textInputContainerStyle,
              textInputContainerStyle,
            ]}
          >
            <TextInput
              style={[styles.textInputStyle, textInputStyle]}
              underlineColorAndroid={'transparent'}
              defaultValue={rightTitle}
              value={textInputValue}
              placeholder={textInputPlaceholder}
              autoCapitalize={textInputAutoCapitalize}
              autoCorrect={textInputAutoCorrect}
              autoFocus={textInputAutoFocus}
              editable={disabled ? false : textInputEditable}
              keyboardType={textInputKeyboardType}
              maxLength={textInputMaxLength}
              multiline={textInputMultiline}
              onChangeText={textInputOnChangeText}
              onFocus={textInputOnFocus}
              onBlur={textInputOnBlur}
              secureTextEntry={textInputSecure}
              selectTextOnFocus={textInputSelectTextOnFocus}
              returnKeyType={textInputReturnKeyType}
            />
          </View>
        )}
        {badge && !rightTitle && <Badge {...badge} />}
        {!hideChevron &&
          (React.isValidElement(rightIcon) ? (
            rightIcon
          ) : (
            <TouchableOpacity
              onPress={onPressRightIcon}
              disabled={disabled ? disabled : !onPressRightIcon}
              style={styles.chevronContainer}
            >
              <Icon
                type={rightIcon.type}
                iconStyle={rightIcon.style}
                size={28}
                name={rightIcon.name || 'chevron-right'}
                color={rightIcon.color || chevronColor}
              />
            </TouchableOpacity>
          ))}
        {switchButton &&
          hideChevron && (
            <View style={styles.switchContainer}>
              <Switch
                onValueChange={onSwitch}
                disabled={disabled ? disabled : switchDisabled}
                onTintColor={switchOnTintColor}
                thumbTintColor={switchThumbTintColor}
                tintColor={switchTintColor}
                value={switched}
              />
            </View>
          )}
        {label && label}
      </View>
    </Component>
  );
};

ListItem.defaultProps = {
  underlayColor: 'white',
  leftIconUnderlayColor: 'white',
  chevronColor: colors.grey4,
  rightIcon: { name: 'chevron-right' },
  hideChevron: false,
  roundAvatar: false,
  switchButton: false,
  textInputEditable: true,
  titleNumberOfLines: 1,
  subtitleNumberOfLines: 1,
  rightTitleNumberOfLines: 1,
  disabled: false,
};

ListItem.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  avatar: PropTypes.any,
  icon: PropTypes.any,
  onPress: PropTypes.func,
  rightIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  underlayColor: PropTypes.string,
  subtitle: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object,
  ]),
  subtitleStyle: PropTypes.any,
  subtitleNumberOfLines: PropTypes.number,
  containerStyle: PropTypes.any,
  wrapperStyle: PropTypes.any,
  titleStyle: PropTypes.any,
  titleContainerStyle: PropTypes.any,
  titleNumberOfLines: PropTypes.number,
  hideChevron: PropTypes.bool,
  chevronColor: PropTypes.string,
  roundAvatar: PropTypes.bool,
  badge: PropTypes.any,
  switchButton: PropTypes.bool,
  onSwitch: PropTypes.func,
  switchDisabled: PropTypes.bool,
  switchOnTintColor: PropTypes.string,
  switchThumbTintColor: PropTypes.string,
  switchTintColor: PropTypes.string,
  switched: PropTypes.bool,
  textInput: PropTypes.bool,
  textInputAutoCapitalize: PropTypes.oneOf([
    'none',
    'sentences',
    'words',
    'characters',
  ]),
  textInputAutoCorrect: PropTypes.bool,
  textInputAutoFocus: PropTypes.bool,
  textInputEditable: PropTypes.bool,
  textInputKeyboardType: PropTypes.oneOf([
    'default',
    'email-address',
    'numeric',
    'phone-pad',
    'ascii-capable',
    'numbers-and-punctuation',
    'url',
    'number-pad',
    'name-phone-pad',
    'decimal-pad',
    'twitter',
    'web-search',
  ]),
  textInputMaxLength: PropTypes.number,
  textInputMultiline: PropTypes.bool,
  textInputOnChangeText: PropTypes.func,
  textInputOnFocus: PropTypes.func,
  textInputOnBlur: PropTypes.func,
  textInputSelectTextOnFocus: PropTypes.bool,
  textInputReturnKeyType: PropTypes.string,
  textInputValue: PropTypes.string,
  textInputSecure: PropTypes.bool,
  textInputStyle: PropTypes.any,
  textInputContainerStyle: PropTypes.any,
  textInputPlaceholder: PropTypes.string,
  component: PropTypes.any,
  fontFamily: PropTypes.string,
  rightTitle: PropTypes.string,
  rightTitleContainerStyle: ViewPropTypes.style,
  rightTitleStyle: Text.propTypes.style,
  rightTitleNumberOfLines: PropTypes.number,
  subtitleContainerStyle: ViewPropTypes.style,
  label: PropTypes.any,
  onLongPress: PropTypes.func,
  leftIcon: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
  leftIconOnPress: PropTypes.func,
  leftIconOnLongPress: PropTypes.func,
  leftIconUnderlayColor: PropTypes.string,
  leftIconContainerStyle: ViewPropTypes.style,
  avatarStyle: Image.propTypes.style,
  avatarContainerStyle: ViewPropTypes.style,
  avatarOverlayContainerStyle: ViewPropTypes.style,
  onPressRightIcon: PropTypes.func,
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    borderBottomColor: colors.greyOutline,
    borderBottomWidth: 1,
    backgroundColor: 'transparent',
  },
  wrapper: {
    flexDirection: 'row',
    marginLeft: 10,
    alignItems: 'center',
  },
  iconStyle: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginRight: 8,
  },
  title: {
    fontSize: normalize(14),
    color: colors.grey1,
  },
  subtitle: {
    color: colors.grey3,
    fontSize: normalize(12),
    marginTop: 1,
    ...Platform.select({
      ios: {
        fontWeight: '600',
      },
      android: {
        ...fonts.android.bold,
      },
    }),
  },
  titleSubtitleContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  chevronContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  switchContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginRight: 5,
  },
  rightTitleContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  rightTitleStyle: {
    marginRight: 5,
    color: colors.grey4,
  },
  textInputContainerStyle: {
    alignItems: null,
  },
  textInputStyle: {
    height: 20,
    flex: 1,
    textAlign: 'right',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default ListItem;
