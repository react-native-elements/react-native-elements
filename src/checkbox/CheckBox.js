import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, View, Text as NativeText } from 'react-native';
import TextElement from '../text/Text';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import getIconType from '../helpers/getIconType';
import ViewPropTypes from '../config/ViewPropTypes';

class CheckBox extends React.PureComponent {
  render() {
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
      checkedIcon,
      uncheckedIcon,
      iconType,
      checkedColor,
      uncheckedColor,
      checkedTitle,
      fontFamily,
      ...attributes
    } = this.props;

    let Icon = FAIcon;
    if (iconType) {
      Icon = getIconType(iconType);
    }
    const Component = component || TouchableOpacity;
    let iconName = uncheckedIcon;
    if (checked) {
      iconName = checkedIcon;
    }

    const styles = this.context.theme.checkbox;

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
              size={24}
              onLongPress={onLongIconPress}
              onPress={onIconPress}
            />}
          <TextElement
            style={[
              styles.text,
              textStyle && textStyle,
              fontFamily && { fontFamily },
            ]}
          >
            {checked ? checkedTitle || title : title}
          </TextElement>
          {iconRight &&
            <Icon
              color={checked ? checkedColor : uncheckedColor}
              name={iconName}
              size={24}
              onLongPress={onLongIconPress}
              onPress={onIconPress}
            />}
        </View>
      </Component>
    );
  }
}

CheckBox.defaultProps = {
  checked: false,
  iconRight: false,
  right: false,
  center: false,
  checkedColor: 'green',
  uncheckedColor: '#bfbfbf',
  checkedIcon: 'check-square-o',
  uncheckedIcon: 'square-o',
};

CheckBox.propTypes = {
  component: PropTypes.any,
  checked: PropTypes.bool,
  iconRight: PropTypes.bool,
  title: PropTypes.string,
  center: PropTypes.bool,
  right: PropTypes.bool,
  containerStyle: ViewPropTypes.style,
  textStyle: NativeText.propTypes.style,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  checkedIcon: PropTypes.string,
  uncheckedIcon: PropTypes.string,
  iconType: PropTypes.string,
  checkedColor: PropTypes.string,
  uncheckedColor: PropTypes.string,
  checkedTitle: PropTypes.string,
  onIconPress: PropTypes.func,
  onLongIconPress: PropTypes.func,
  fontFamily: PropTypes.string,
};

CheckBox.contextTypes = {
  theme: PropTypes.object.isRequired,
};

export default CheckBox;
