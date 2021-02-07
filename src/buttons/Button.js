import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  ActivityIndicator,
  Platform,
  StyleSheet,
} from 'react-native';
import Color from 'color';

import { withTheme } from '../config';
import { renderNode, nodeType, conditionalStyle, color } from '../helpers';
import Icon from '../icons/Icon';

const defaultLoadingProps = (type, theme) => ({
  color: type === 'solid' ? 'white' : theme.colors.primary,
  size: 'small',
});

class Button extends Component {
  componentDidMount() {
    const { linearGradientProps, ViewComponent } = this.props;
    if (linearGradientProps && !ViewComponent) {
      console.error(
        "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
      );
    }
  }

  handleOnPress = (evt) => {
    const { loading, onPress } = this.props;

    if (!loading) {
      onPress(evt);
    }
  };

  render() {
    const {
      TouchableComponent,
      containerStyle,
      onPress,
      buttonStyle,
      type,
      loading,
      loadingStyle,
      loadingProps: passedLoadingProps,
      title,
      titleProps,
      titleStyle: passedTitleStyle,
      icon,
      iconContainerStyle,
      iconRight,
      disabled,
      disabledStyle,
      disabledTitleStyle,
      raised,
      linearGradientProps,
      ViewComponent = View,
      theme,
      ...attributes
    } = this.props;

    // Refactor to Pressable
    const TouchableComponentInternal =
      TouchableComponent ||
      Platform.select({
        android: linearGradientProps
          ? TouchableOpacity
          : TouchableNativeFeedback,
        default: TouchableOpacity,
      });

    const titleStyle = StyleSheet.flatten([
      styles.title(type, theme),
      passedTitleStyle,
      disabled && styles.disabledTitle(theme),
      disabled && disabledTitleStyle,
    ]);

    const background =
      Platform.OS === 'android' && Platform.Version >= 21
        ? TouchableNativeFeedback.Ripple(
            Color(titleStyle.color).alpha(0.32).rgb().string(),
            true
          )
        : undefined;

    const loadingProps = {
      ...defaultLoadingProps(type, theme),
      ...passedLoadingProps,
    };

    const accessibilityState = {
      disabled: !!disabled,
      busy: !!loading,
    };

    return (
      <View
        style={StyleSheet.flatten([
          styles.container,
          {
            borderRadius:
              buttonStyle.borderRadius || styles.container.borderRadius,
          },
          containerStyle,
          raised && !disabled && styles.raised(type),
        ])}
      >
        <TouchableComponentInternal
          onPress={this.handleOnPress}
          delayPressIn={0}
          activeOpacity={0.3}
          accessibilityRole="button"
          accessibilityState={accessibilityState}
          disabled={disabled}
          background={background}
          {...attributes}
        >
          <ViewComponent
            {...linearGradientProps}
            style={StyleSheet.flatten([
              styles.button(type, theme),
              buttonStyle,
              disabled && styles.disabled(type, theme),
              disabled && disabledStyle,
            ])}
          >
            {loading && (
              <ActivityIndicator
                style={StyleSheet.flatten([styles.loading, loadingStyle])}
                color={loadingProps.color}
                size={loadingProps.size}
                {...loadingProps}
              />
            )}

            {!loading &&
              icon &&
              !iconRight &&
              renderNode(Icon, icon, {
                containerStyle: StyleSheet.flatten([
                  styles.iconContainer,
                  iconContainerStyle,
                ]),
              })}

            {!loading &&
              !!title &&
              renderNode(Text, title, {
                style: titleStyle,
                ...titleProps,
              })}

            {!loading &&
              icon &&
              iconRight &&
              renderNode(Icon, icon, {
                containerStyle: StyleSheet.flatten([
                  styles.iconContainer,
                  iconContainerStyle,
                ]),
              })}
          </ViewComponent>
        </TouchableComponentInternal>
      </View>
    );
  }
}

Button.propTypes = {
  title: PropTypes.string,
  titleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  titleProps: PropTypes.object,
  buttonStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  type: PropTypes.oneOf(['solid', 'clear', 'outline']),
  loading: PropTypes.bool,
  loadingStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  loadingProps: PropTypes.object,
  onPress: PropTypes.func,
  containerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  icon: nodeType,
  iconContainerStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  iconRight: PropTypes.bool,
  linearGradientProps: PropTypes.object,
  TouchableComponent: PropTypes.elementType,
  ViewComponent: PropTypes.elementType,
  disabled: PropTypes.bool,
  disabledStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  disabledTitleStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  raised: PropTypes.bool,
  theme: PropTypes.object,
};

Button.defaultProps = {
  title: '',
  iconRight: false,
  onPress: () => console.log('Please attach a method to this component'),
  type: 'solid',
  buttonStyle: {
    borderRadius: 3,
  },
  disabled: false,
  raised: false,
  loading: false,
};

const styles = {
  button: (type, theme) => ({
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: type === 'solid' ? theme.colors.primary : 'transparent',
    padding: 8,
    borderWidth: type === 'outline' ? StyleSheet.hairlineWidth : 0,
    borderColor: theme.colors.primary,
  }),
  container: {
    overflow: 'hidden',
    borderRadius: 3,
  },
  disabled: (type, theme) => ({
    ...conditionalStyle(type === 'solid', {
      backgroundColor: theme.colors.disabled,
    }),
    ...conditionalStyle(type === 'outline', {
      borderColor: color(theme.colors.disabled).darken(0.3).string(),
    }),
  }),
  disabledTitle: (theme) => ({
    color: color(theme.colors.disabled).darken(0.3).string(),
  }),
  title: (type, theme) => ({
    color: type === 'solid' ? 'white' : theme.colors.primary,
    fontSize: 16,
    textAlign: 'center',
    paddingVertical: 1,
    ...Platform.select({
      android: {
        fontFamily: 'sans-serif-medium',
      },
      default: {
        fontSize: 18,
      },
    }),
  }),
  iconContainer: {
    marginHorizontal: 5,
  },
  raised: (type) =>
    type !== 'clear' && {
      backgroundColor: '#fff',
      overflow: 'visible',
      ...Platform.select({
        android: {
          elevation: 4,
        },
        default: {
          shadowColor: 'rgba(0,0,0, .4)',
          shadowOffset: { height: 1, width: 1 },
          shadowOpacity: 1,
          shadowRadius: 1,
        },
      }),
    },
  loading: {
    marginVertical: 2,
  },
};

export { Button };
export default withTheme(Button, 'Button');
