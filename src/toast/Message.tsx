import React, { useEffect, useRef, useContext, useMemo } from 'react';
import { Animated, Text, StyleSheet } from 'react-native';

import { ToastContext, ToastPosition } from './ToastProvider';

import type { VFC } from 'react';
import type { MessageState } from './ToastProvider';
import type { StyleProp, ViewStyle } from 'react-native';

type MessageProps = {
  message: MessageState;
  onHide: () => void;
};

const Message: VFC<MessageProps> = ({ message, onHide }) => {
  const { duration, position, containerMessageStyle } = useContext(
    ToastContext
  );

  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.delay(duration),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start(() => onHide());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const animationContainerStyles = useMemo(
    () => ({
      opacity,
      transform: [
        {
          translateY: opacity.interpolate({
            inputRange: [0, 1],
            outputRange: [position === ToastPosition.top ? -20 : 20, 0],
          }),
        },
      ],
    }),
    [opacity, position]
  );

  const typedContainerStyles = useMemo((): StyleProp<ViewStyle> => {
    let styles = {
      ...(containerMessageStyle as object),
    } as typeof containerMessageStyle;

    const typedStyles = containerMessageStyle[message.type] ?? {};

    return Object.keys(typedStyles).length > 0
      ? {
          ...(styles as object),
          ...(typedStyles as object),
        }
      : styles;
  }, [containerMessageStyle, message.type]);

  return (
    <Animated.View
      style={StyleSheet.flatten([
        animationContainerStyles,
        styles.messageContainer,
        typedContainerStyles,
      ])}
    >
      <Text>{message.text}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  messageContainer: {
    margin: 10,
    marginBottom: 5,
    padding: 10,
    borderRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    elevation: 6,
  },
  message: {},
});

export default Message;
