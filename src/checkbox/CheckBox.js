import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Platform,
  Text as NativeText,
} from 'react-native';
import TextElement from '../text/Text';
import fonts from '../config/fonts';
import colors from '../config/colors';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import getIconType from '../helpers/getIconType';
import ViewPropTypes from '../config/ViewPropTypes';

const CheckBox = props => {
  const {
    component,
    checked,
    iconRight,
    title,
    center,
    right,
    containerStyle,
    textStyle,
    onPress,
    onLongPress,
    onIconPress,
    onLongIconPress,
    size,
    checkedIcon,
    uncheckedIcon,
    iconType,
    checkedColor,
    uncheckedColor,
    checkedTitle,
    fontFamily,
    ...attributes
  } = props;

  let Icon = FAIcon;
  if (iconType) {
    Icon = getIconType(iconType);
  }
  const Component = component || TouchableOpacity;
  let iconName = uncheckedIcon;
  if (checked) {
    iconName = checkedIcon;
  }
  return (
    <Component
      onLongPress={onLongPress}
      onPress={onPress}
      style={[styles.container, containerStyle && containerStyle]}
      {...attributes}
    >
      <View
        style={[
          styles.wrapper,
          right && { justifyContent: 'flex-end' },
          center && { justifyContent: 'center' },
        ]}
      >
        {!iconRight &&
          <Icon
            color={checked ? checkedColor : uncheckedColor}
            name={iconName}
            size={size || 24}
            onLongPress={onLongIconPress}
            onPress={onIconPress}
          />}

        {React.isValidElement(title)
          ? title
          : <TextElement
              style={[
                styles.text,
                textStyle && textStyle,
                fontFamily && { fontFamily },
              ]}
            >
              {checked ? checkedTitle || title : title}
            </TextElement>}

        {iconRight &&
          <Icon
            color={checked ? checkedColor : uncheckedColor}
            name={iconName}
            size={size || 24}
            onLongPress={onLongIconPress}
            onPress={onIconPress}
          />}
      </View>
    </Component>
  );
};

CheckBox.defaultProps = {
  checked: false,
  iconRight: false,
  right: false,
  center: false,
  checkedColor: 'green',
  uncheckedColor: '#bfbfbf',
  checkedIcon: 'check-square-o',
  uncheckedIcon: 'square-o',
  size: 24,
};

CheckBox.propTypes = {
  component: PropTypes.any,
  checked: PropTypes.bool,
  iconRight: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  center: PropTypes.bool,
  right: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  textStyle: NativeText.propTypes.style,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  checkedIcon: PropTypes.string,
  uncheckedIcon: PropTypes.string,
  iconType: PropTypes.string,
  size: PropTypes.number,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
  checkedTitle: PropTypes.string,
  onIconPress: PropTypes.func,
  onLongIconPress: PropTypes.func,
  fontFamily: PropTypes.string,
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#fafafa',
    borderColor: '#ededed',
    borderWidth: 1,
    padding: 10,
    borderRadius: 3,
  },
  text: {
    marginLeft: 10,
    marginRight: 10,
    color: colors.grey1,
    ...Platform.select({
      ios: {
        fontWeight: 'bold',
      },
      android: {
        ...fonts.android.bold,
      },
    }),
  },
});

export default CheckBox;
