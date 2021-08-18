import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  StyleProp,
  TextProps,
  ViewProps,
  StatusBarProps,
  StatusBarStyle,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RneFunctionComponent } from '../helpers';
import { Children } from './components/HeaderChildren';
import { HeaderIcon } from './components/HeaderIcon';

type HeaderSubComponent = React.ReactElement<{}> | TextProps | HeaderIcon;

export type HeaderProps = ViewProps & {
  /** Component for container. */
  ViewComponent?: typeof React.Component;

  /** Displays a linear gradient. See [usage](#lineargradient-usage). */
  linearGradientProps?: Object;

  /** Accepts all props for StatusBar. */
  statusBarProps?: StatusBarProps;

  /** Sets the color of the status bar text. */
  barStyle?: StatusBarStyle;

  /** Define your left component here. */
  leftComponent?: HeaderSubComponent;

  /** Define your center component here. */
  centerComponent?: HeaderSubComponent;

  /** Define your right component here. */
  rightComponent?: HeaderSubComponent;

  /** Sets backgroundColor of the parent component. */
  backgroundColor?: string;

  /** Sets backgroundImage for parent component. */
  backgroundImage?: ImageSourcePropType;

  /** Styling for backgroundImage in the main container. */
  backgroundImageStyle?: ImageStyle;

  /** Alignment for title. */
  placement?: 'left' | 'center' | 'right';

  /** Styling around the main container. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Styling for container around the centerComponent. */
  centerContainerStyle?: StyleProp<ViewStyle>;

  /** Styling for container around the leftComponent. */
  leftContainerStyle?: StyleProp<ViewStyle>;

  /** Styling for container around the rightComponent. */
  rightContainerStyle?: StyleProp<ViewStyle>;

  /** Add children component to the header. */
  children?: JSX.Element | JSX.Element[];

  /** Elevation for header */
  elevated?: boolean;
};

/** Headers are navigation components that display information and actions relating to the current screen.
 * **Note:**
 * Make sure that you have completed [Step 3](getting_started.md#step-3-setup-react-native-safe-area-context) in the setup guide before using `Header`.
 */
export const Header: RneFunctionComponent<HeaderProps> = ({
  statusBarProps,
  leftComponent,
  centerComponent,
  rightComponent,
  leftContainerStyle,
  centerContainerStyle,
  rightContainerStyle,
  backgroundColor,
  backgroundImage,
  backgroundImageStyle,
  containerStyle,
  placement = 'center',
  barStyle,
  children = [],
  linearGradientProps,
  ViewComponent = linearGradientProps || !backgroundImage
    ? View
    : ImageBackground,
  theme,
  elevated,
  ...rest
}) => {
  React.useEffect(() => {
    if (linearGradientProps && !ViewComponent) {
      console.error(
        "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
      );
    }
  });

  return (
    <>
      <StatusBar
        barStyle={barStyle}
        translucent={true}
        backgroundColor={backgroundColor || theme?.colors?.primary}
        {...statusBarProps}
      />
      <ViewComponent
        testID="headerContainer"
        {...rest}
        style={StyleSheet.flatten([
          {
            borderBottomColor: '#f2f2f2',
            borderBottomWidth: StyleSheet.hairlineWidth,
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: theme?.colors?.primary,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          backgroundColor && { backgroundColor },
          elevated && styles.elevatedHeader,
          containerStyle,
        ])}
        source={backgroundImage}
        imageStyle={backgroundImageStyle}
        {...linearGradientProps}
      >
        <SafeAreaView
          edges={['left', 'top', 'right']}
          style={styles.headerSafeView}
        >
          <Children
            style={StyleSheet.flatten([
              placement === 'center' && styles.rightLeftContainer,
              leftContainerStyle,
            ])}
            placement="left"
          >
            {(React.isValidElement(children) && children) ||
              children[0] ||
              leftComponent}
          </Children>
          <Children
            style={StyleSheet.flatten([
              styles.centerContainer,
              placement !== 'center' && {
                paddingHorizontal: Platform.select({
                  android: 16,
                  default: 15,
                }),
              },
              centerContainerStyle,
            ])}
            placement={placement}
          >
            {children[1] || centerComponent}
          </Children>

          <Children
            style={StyleSheet.flatten([
              placement === 'center' && styles.rightLeftContainer,
              rightContainerStyle,
            ])}
            placement="right"
          >
            {children[2] || rightComponent}
          </Children>
        </SafeAreaView>
      </ViewComponent>
    </>
  );
};

const styles = StyleSheet.create({
  headerSafeView: {
    width: '100%',
    flexDirection: 'row',
  },
  centerContainer: {
    flex: 3,
  },
  rightLeftContainer: {
    flex: 1,
  },
  elevatedHeader: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 8.0,
    elevation: 24,
  },
});

Header.displayName = 'Header';
