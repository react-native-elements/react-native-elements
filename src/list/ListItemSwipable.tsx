import React from 'react';
import {
  PanResponder,
  Animated,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import { ListItem, ListItemProps } from './ListItem';
import { RneFunctionComponent, ScreenWidth } from '../helpers';
import { withTheme } from '../config';

export type ListItemSwipeableProps = ListItemProps & {
  leftContent?: React.ReactNode;
  rightContent?: React.ReactNode;
  leftStyle?: StyleProp<ViewStyle>;
  rightStyle?: StyleProp<ViewStyle>;
  leftWidth?: number;
  rightWidth?: number;
};

const ListItemSwipeable: RneFunctionComponent<ListItemSwipeableProps> = ({
  children,
  leftStyle,
  rightStyle,
  leftContent,
  rightContent,
  leftWidth = ScreenWidth / 3,
  rightWidth = ScreenWidth / 3,
  ...props
}) => {
  const { current: translateX } = React.useRef(new Animated.Value(0));

  const slideAnimation = React.useCallback(
    (toValue: number) => {
      Animated.timing(translateX, {
        toValue,
        duration: 200,
        useNativeDriver: true,
      }).start();
    },
    [translateX]
  );

  const { current: _panResponder } = React.useRef(
    PanResponder.create({
      onMoveShouldSetPanResponderCapture: () => true,
      onMoveShouldSetPanResponder: (_, { dx }) => Math.abs(dx) > 2,
      onPanResponderMove: Animated.event([null, { dx: translateX }], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_e, { dx, dy }) => {
        const absDx = Math.abs(dx);
        const absDy = Math.abs(dy);

        if (absDy > absDx) {
          return;
        }
        if (absDx >= ScreenWidth / 3) {
          slideAnimation(dx > 0 ? rightWidth : -leftWidth);
        } else {
          slideAnimation(0);
        }
      },
    })
  );
  return (
    <View
      style={{
        justifyContent: 'center',
      }}
    >
      <View
        style={[
          styles.hidden,
          {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          },
        ]}
      >
        <View
          style={[
            {
              width: leftWidth,
              zIndex: 1,
            },
            leftStyle,
          ]}
        >
          {leftContent}
        </View>
        <View style={{ flex: 0 }} />
        <View
          style={[
            {
              width: rightWidth,
              zIndex: 1,
            },
            rightStyle,
          ]}
        >
          {rightContent}
        </View>
      </View>
      <Animated.View
        style={{
          transform: [
            {
              translateX,
            },
          ],
          zIndex: 2,
        }}
        {..._panResponder.panHandlers}
      >
        <ListItem {...props}>{children}</ListItem>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  hidden: {
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default withTheme(ListItemSwipeable, 'ListItemSwipeable');
