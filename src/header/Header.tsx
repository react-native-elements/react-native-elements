import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  View,
  ImageBackground,
  TextStyle,
  StyleProp,
  TextProps,
  ViewProps,
  StatusBarProps,
  StatusBarStyle,
  ImageSourcePropType,
  ImageStyle,
  ViewStyle,
  FlexAlignType,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { withTheme } from '../config';
import { renderNode, RneFunctionComponent } from '../helpers';

import Text from '../text/Text';
import Icon, { IconObject } from '../icons/Icon';

type Placement = 'left' | 'center' | 'right';

const ALIGN_STYLE: Record<Placement, FlexAlignType> = {
  left: 'flex-start',
  right: 'flex-end',
  center: 'center',
};

type HeaderChildrenProps = {
  placement: Placement;
  style: StyleProp<ViewStyle>;
  children: any;
};

const Children = ({ style, placement, children }: HeaderChildrenProps) => (
  <View
    style={StyleSheet.flatten([{ alignItems: ALIGN_STYLE[placement] }, style])}
  >
    {children == null || children === false
      ? null
      : children.text
      ? renderNode(Text, children.text, { numberOfLines: 1, ...children })
      : children.icon
      ? renderNode(Icon, {
          ...children,
          name: children.icon,
          containerStyle: StyleSheet.flatten([
            { alignItems: ALIGN_STYLE[placement] },
            children.containerStyle,
          ]),
        })
      : renderNode(Text, children)}
  </View>
);

interface HeaderIcon extends IconObject {
  icon?: string;
  text?: string;
  color?: string;
  style?: StyleProp<TextStyle>;
}

type HeaderSubComponent = React.ReactElement<{}> | TextProps | HeaderIcon;

export type HeaderProps = ViewProps & {
  ViewComponent?: typeof React.Component;
  linearGradientProps?: Object;
  statusBarProps?: StatusBarProps;
  barStyle?: StatusBarStyle;
  leftComponent?: HeaderSubComponent;
  centerComponent?: HeaderSubComponent;
  rightComponent?: HeaderSubComponent;
  backgroundColor?: string;
  backgroundImage?: ImageSourcePropType;
  backgroundImageStyle?: ImageStyle;
  placement?: 'left' | 'center' | 'right';
  containerStyle?: StyleProp<ViewStyle>;
  centerContainerStyle?: StyleProp<ViewStyle>;
  leftContainerStyle?: StyleProp<ViewStyle>;
  rightContainerStyle?: StyleProp<ViewStyle>;
  children?: JSX.Element[];
  elevated: boolean;
};

const Header: RneFunctionComponent<HeaderProps> = (props) => {
  React.useEffect(() => {
    const { linearGradientProps, ViewComponent } = props;
    if (linearGradientProps && !ViewComponent) {
      console.error(
        "You need to pass a ViewComponent to use linearGradientProps !\nExample: ViewComponent={require('react-native-linear-gradient')}"
      );
    }
  });

  const {
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
    ...attributes
  } = props;

  return (
    <>
      <StatusBar
        barStyle={barStyle}
        translucent={true}
        backgroundColor={backgroundColor || theme.colors.primary}
        {...statusBarProps}
      />
      <ViewComponent
        testID="headerContainer"
        {...attributes}
        style={StyleSheet.flatten([
          {
            borderBottomColor: '#f2f2f2',
            borderBottomWidth: StyleSheet.hairlineWidth,
            paddingHorizontal: 10,
            paddingVertical: 10,
            backgroundColor: theme.colors.primary,
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

export { Header };

export default withTheme<HeaderProps, {}>(Header, 'Header');
