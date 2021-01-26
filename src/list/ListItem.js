import React from 'react';
import PropTypes from 'prop-types';
import { Platform, StyleSheet, TouchableHighlight, View } from 'react-native';

import { withTheme } from '../config';

import ListItemContent from './ListItemContent';
import ListItemChevron from './ListItemChevron';
import ListItemInput from './ListItemInput';
import ListItemCheckBox from './ListItemCheckBox';
import ListItemButtonGroup from './ListItemButtonGroup';
import ListItemTitle from './ListItemTitle';
import ListItemSubtitle from './ListItemSubtitle';

const ListItem = (props) => {
  const {
    containerStyle,
    onPress,
    onLongPress,
    Component = onPress || onLongPress ? TouchableHighlight : View,
    disabled,
    disabledStyle,
    bottomDivider,
    topDivider,
    pad,
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
          styles.container(theme),
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

const styles = {
  container: (theme) => ({
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
  }),
};

ListItem.propTypes = {
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  Component: PropTypes.elementType,
  onPress: PropTypes.func,
  onLongPress: PropTypes.func,
  disabled: PropTypes.bool,
  disabledStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  topDivider: PropTypes.bool,
  bottomDivider: PropTypes.bool,
  pad: PropTypes.number,
  linearGradientProps: PropTypes.object,
  ViewComponent: PropTypes.elementType,
  theme: PropTypes.object,
};

ListItem.defaultProps = {
  pad: 16,
};

class PadView extends React.Component {
  constructor(props) {
    super(props);
    this._root = React.createRef();
  }

  setNativeProps = (nativeProps) => {
    this._root.current.setNativeProps(nativeProps);
  };

  render() {
    const { children, pad, Component, ...props } = this.props;
    const childrens = React.Children.toArray(children);
    const { length } = childrens;
    const Container = Component || View;
    return (
      <Container {...props} ref={this._root} testID="padView">
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
  }
}

PadView.propTypes = {
  children: PropTypes.node,
  pad: PropTypes.number,
  Component: PropTypes.elementType,
};

export { ListItem };

const ThemedListItem = withTheme(ListItem, 'ListItem');
ThemedListItem.Chevron = ListItemChevron;
ThemedListItem.Content = ListItemContent;
ThemedListItem.Input = ListItemInput;
ThemedListItem.Title = ListItemTitle;
ThemedListItem.Subtitle = ListItemSubtitle;
ThemedListItem.CheckBox = ListItemCheckBox;
ThemedListItem.ButtonGroup = ListItemButtonGroup;
export default ThemedListItem;
