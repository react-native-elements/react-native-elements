import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { withTheme } from '../config';
import { renderNode } from '../helpers';
type BadgeProps = {
  containerStyle?: any;
  badgeStyle?: any;
  textStyle?: any;
  value?: React.ReactNode;
  onPress?: (...args: any[]) => any;
  Component?: React.ReactNode;
  theme?: object;
  status?: 'primary' | 'success' | 'warning' | 'error';
};
class Badge extends React.PureComponent<BadgeProps> {
  static defaultProps = {
    status: 'primary',
  };

  render() {
    const {
      containerStyle,
      textStyle,
      badgeStyle,
      onPress,
      Component = onPress ? TouchableOpacity : View,
      value,
      theme,
      status,
      ...attributes
    } = this.props;
    const element = renderNode(Text, value, {
      style: StyleSheet.flatten([styles.text, textStyle && textStyle]),
      ...attributes,
    });
    return (
      <View style={StyleSheet.flatten([containerStyle && containerStyle])}>
        <Component
          {...attributes}
          style={StyleSheet.flatten([
            styles.badge(theme, status),
            !element && styles.miniBadge,
            badgeStyle && badgeStyle,
          ])}
          onPress={onPress}
        >
          {element}
        </Component>
      </View>
    );
  }
}

const size = 18;
const miniSize = 8;
const styles = {
  badge: (theme, status) => ({
    alignSelf: 'center',
    minWidth: size,
    height: size,
    borderRadius: size / 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors[status],
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#fff',
  }),
  miniBadge: {
    paddingHorizontal: 0,
    paddingVertical: 0,
    minWidth: miniSize,
    height: miniSize,
    borderRadius: miniSize / 2,
  },
  text: {
    fontSize: 12,
    color: 'white',
    paddingHorizontal: 4,
  },
};
export { Badge };
export default withTheme(Badge, 'Badge');
