import React from 'react';
import { View, useWindowDimensions, StyleSheet } from 'react-native';
import { Icon, Text } from '..';
import { Pressable, Animated } from 'react-native';
import { renderNode, RneFunctionComponent } from '../helpers';

export interface MenuProps {
  visible: boolean;
  onOpen: () => void;
  onClose: () => void;
  withOverlay: boolean;
}

export const Menu: RneFunctionComponent<MenuProps> = ({
  visible = false,
  onOpen = () => {},
  onClose = () => {},
  children,
  withOverlay = false,
  anchor,
}) => {
  const [e, setE] = React.useState({});
  const d = React.useRef(new Animated.Value(0));

  const animate = () => {
    Animated.timing(d.current, {
      toValue: visible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  React.useEffect(() => {
    animate();
  }, [visible]);

  const { width: ScreenWidth, height: ScreenHeight } = useWindowDimensions();

  const D = React.useCallback(
    () => (
      <Animated.View
        style={[
          e.y > ScreenHeight / 2
            ? {
                bottom: e.height,
              }
            : {
                top: (e.y || 0) + (e.height || 0),
              },
          {
            elevation: 4,
            position: 'absolute',
            paddingTop: 12,
            paddingBottom: 12,
            backgroundColor: 'white',
            transform: [
              {
                scale: d.current.interpolate({
                  inputRange: [0, 1],
                  outputRange: [0, 1],
                }),
              },
            ],
            opacity: d.current.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
        ]}
      >
        {children}
      </Animated.View>
    ),
    [ScreenWidth, children, e.height, e.x, e.y]
  );

  return (
    <>
      {visible && withOverlay && (
        <Pressable
          onPress={onClose}
          style={[StyleSheet.absoluteFillObject, { backgroundColor: '#0064' }]}
        />
      )}
      <Text>{JSON.stringify(e)}</Text>
      <View
        onLayout={(e) => setE(e.nativeEvent.layout)}
        style={{ backgroundColor: '#f004', alignSelf: 'flex-start' }}
      >
        {anchor}
      </View>
      <D />
    </>
  );
};

export const MenuItem = ({
  children,
  style,
  icon,
  iconContainerStyle,
  ...rest
}) => {
  return (
    <Pressable
      android_ripple={{
        borderless: false,
        radius: -5,
      }}
      style={[
        {
          padding: 12,
          flexDirection: 'row',
        },
        style,
      ]}
      {...rest}
    >
      {icon &&
        renderNode(Icon, icon, {
          size: 18,
          containerStyle: StyleSheet.flatten([iconContainerStyle]),
        })}
      <Text style={{ paddingLeft: 4 }}>{children}</Text>
    </Pressable>
  );
};
