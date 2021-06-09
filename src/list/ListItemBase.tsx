import React, { useRef } from 'react';
import {
  Platform,
  StyleProp,
  StyleSheet,
  TouchableHighlight,
  TouchableHighlightProps,
  View,
  ViewStyle,
} from 'react-native';

import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';

export type ListItemProps = TouchableHighlightProps & {
  containerStyle?: StyleProp<ViewStyle>;
  disabledStyle?: StyleProp<ViewStyle>;
  topDivider?: boolean;
  bottomDivider?: boolean;
  pad?: number;
  Component?: typeof React.Component;
  ViewComponent?: typeof React.Component;
  linearGradientProps?: any;
  children?: any;
};

const ListItemBase: RneFunctionComponent<ListItemProps> = (props) => {
  const {
    containerStyle,
    onPress,
    onLongPress,
    Component = onPress || onLongPress ? TouchableHighlight : View,
    disabled,
    disabledStyle,
    bottomDivider,
    topDivider,
    pad = 16,
    linearGradientProps,
    ViewComponent = View,
    theme,
    children,
    ...attributes
  } = props;

  if (props.linearGradientProps && !props.ViewComponent) {
    console.error(
      "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
    );
  }

  return (
    <Component
      {...attributes}
      onPress={onPress}
      onLongPress={onLongPress}
      disabled={disabled}
    >
      <PadView
        Component={ViewComponent}
        {...linearGradientProps}
        style={StyleSheet.flatten([
          {
            ...Platform.select({
              ios: {
                padding: 14,
              },
              default: {
                padding: 16,
              },
            }),
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: theme?.colors?.white,
            borderColor: theme?.colors?.divider,
          },
          topDivider && { borderTopWidth: StyleSheet.hairlineWidth },
          bottomDivider && { borderBottomWidth: StyleSheet.hairlineWidth },
          containerStyle,
          disabled && disabledStyle,
        ])}
        pad={pad}
      >
        {children}
      </PadView>
    </Component>
  );
};

type PadViewProps = {
  Component: React.ComponentClass;
  pad: number;
};

const PadView: React.FC<PadViewProps> = ({
  children,
  pad,
  Component,
  ...props
}) => {
  const _root = useRef(null);

  const childrens = React.Children.toArray(children);
  const { length } = childrens;
  const Container = Component || View;

  return (
    <Container {...props} ref={_root} testID="padView">
      {React.Children.map(
        childrens,
        (child, index) =>
          child && [
            child,
            index !== length - 1 && <View style={{ paddingLeft: pad }} />,
          ]
      )}
    </Container>
  );
};

export { ListItemBase };
export default withTheme(ListItemBase, 'ListItem');
