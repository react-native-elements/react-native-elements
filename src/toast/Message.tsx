import React, {
  useEffect,
  useRef,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import { Animated, Text, StyleSheet } from 'react-native';

import {
  StylePropsWithMessageType,
  ToastContext,
  ToastPosition,
  ToastTypes,
} from './ToastProvider';

import { renderNode } from '../helpers';
import { useTheme } from '../config';

import type { RneFunctionComponent } from '../helpers';
import type { MessageState } from './ToastProvider';
import type { StyleProp, ViewStyle, TextStyle } from 'react-native';

type MessageProps = {
  message: MessageState;
  onHide: () => void;
};

const Message: RneFunctionComponent<MessageProps> = ({ message, onHide }) => {
  if (!message) {
    throw new Error('Message is a required prop type of MessageState!');
  }

  if (!onHide || typeof onHide !== 'function') {
    throw new Error('onHide is a required prop type of function!');
  }

  const {
    duration,
    position,
    containerMessageStyle,
    textMessageStyle,
    textMessageProps,
  } = useContext(ToastContext);

  const opacity = useRef(new Animated.Value(0)).current;

  const { theme } = useTheme();

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

  const themeBasedColorStyles = useMemo((): StyleProp<ViewStyle> => {
    const colorType = message.type === 'info' ? 'primary' : message.type;

    // TODO resolve issue with platform colors
    // ios/android colors in theme.colors.platform always filled by default
    // that why you can't prioritize colors with them

    // const platformColorStyles = theme.colors?.platform?.[isIOS ? 'ios' : 'android'] ?? {};

    const color = theme.colors?.[colorType];

    return {
      backgroundColor: color,
      shadowColor: color,
    };
  }, [message.type, theme.colors]);

  const createTypedStyles = useCallback(
    function <T>(styles: StylePropsWithMessageType<T>): StyleProp<T> {
      const localStyles = {
        ...(styles as object),
      } as StylePropsWithMessageType<T>;
      const typedStyles = { ...((localStyles[message.type] ?? {}) as object) };

      for (let key in ToastTypes) {
        delete localStyles[key as keyof StylePropsWithMessageType<T>];
      }

      return Object.keys(typedStyles as object).length > 0
        ? ({
            ...(localStyles as object),
            ...(typedStyles as object),
          } as StyleProp<T>)
        : localStyles;
    },
    [message.type]
  );

  const typedContainerStyles = createTypedStyles<ViewStyle>(
    containerMessageStyle
  );
  const typedTextStyles = createTypedStyles<TextStyle>(textMessageStyle);

  return (
    <Animated.View
      testID={'messages-test'}
      style={StyleSheet.flatten([
        animationContainerStyles,
        themeBasedColorStyles,
        typedContainerStyles,
      ])}
    >
      {renderNode(Text, message.text, {
        testID: 'messages-text-test',
        style: typedTextStyles,
        ...textMessageProps,
      })}
    </Animated.View>
  );
};

export default Message;
