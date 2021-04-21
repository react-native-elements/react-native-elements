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

import ListItemContent from './ListItemContent';
import ListItemChevron from './ListItemChevron';
import ListItemInput from './ListItemInput';
import ListItemCheckBox from './ListItemCheckBox';
import ListItemButtonGroup from './ListItemButtonGroup';
import ListItemTitle from './ListItemTitle';
import ListItemSubtitle from './ListItemSubtitle';
import ListItemAccordion from './ListItemAccordion';
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

interface ListItem extends RneFunctionComponent<ListItemProps> {
  Accordion: typeof ListItemAccordion;
  Chevron: typeof ListItemChevron;
  Content: typeof ListItemContent;
  Input: typeof ListItemInput;
  Title: typeof ListItemTitle;
  Subtitle: typeof ListItemSubtitle;
  CheckBox: typeof ListItemCheckBox;
  ButtonGroup: typeof ListItemButtonGroup;
}

const ListItem: ListItem = Object.assign((props) => {
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
            backgroundColor: theme.colors.white,
            borderColor: theme.colors.divider,
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
});

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

export { ListItem };

const ThemedListItem = Object.assign(withTheme(ListItem, 'ListItem'), {
  Accordion: ListItemAccordion,
  Chevron: ListItemChevron,
  Content: ListItemContent,
  Input: ListItemInput,
  Title: ListItemTitle,
  Subtitle: ListItemSubtitle,
  CheckBox: ListItemCheckBox,
  ButtonGroup: ListItemButtonGroup,
});

export default ThemedListItem;
