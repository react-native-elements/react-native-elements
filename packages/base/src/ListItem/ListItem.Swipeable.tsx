import React from 'react';
import {
  PanResponder,
  Animated,
  View,
  StyleSheet,
  StyleProp,
  ViewStyle,
  PanResponderGestureState,
} from 'react-native';
import { ListItemBase, ListItemProps } from './ListItem';
import { RneFunctionComponent, ScreenWidth } from '../helpers';

export interface ListItemSwipeableProps extends ListItemProps {
  /**
   * Left Content.
   * @type ReactNode or resetCallback => ReactNode
   */
  leftContent?: React.ReactNode | ((reset: () => void) => React.ReactNode);

  /**
   *  Right Content.
   * @type ReactNode or resetCallback => ReactNode
   */
  rightContent?: React.ReactNode | ((reset: () => void) => React.ReactNode);

  /** Style of left container.*/
  leftStyle?: StyleProp<ViewStyle>;

  /** Style of right container.*/
  rightStyle?: StyleProp<ViewStyle>;

  /** Width to swipe left. */
  leftWidth?: number;

  /** Width to swipe right. */
  rightWidth?: number;

  /** Handler for swipe in either direction */
  onSwipeBegin?: (direction: 'left' | 'right') => unknown;

  /** Handler for swipe end. */
  onSwipeEnd?: () => unknown;

  /** Decide whether to show animation.
   * @default Object with duration 350ms and type timing
   * @type Animated.TimingAnimationConfig
   */
  animation?: {
    type?: 'timing' | 'spring';
    duration?: number;
  };
}

/** We offer a special kind of ListItem which is swipeable from both ends and allows users select an event. */
export const ListItemSwipeable: RneFunctionComponent<
  ListItemSwipeableProps
> = ({
  children,
  leftStyle,
  rightStyle,
  leftContent,
  rightContent,
  leftWidth = ScreenWidth / 3,
  rightWidth = ScreenWidth / 3,
  onSwipeBegin,
  onSwipeEnd,
  animation = { type: 'spring', duration: 200 },
  ...rest
}) => {
  const translateX = React.useRef(new Animated.Value(0));
  const panX = React.useRef(0);

  const slideAnimation = React.useCallback(
    (toValue: number) => {
      panX.current = toValue;
      Animated[animation.type || 'spring'](translateX.current, {
        toValue,
        useNativeDriver: true,
        duration: animation.duration || 200,
      }).start();
    },
    [animation.duration, animation.type]
  );

  const resetCallBack = React.useCallback(() => {
    slideAnimation(0);
  }, [slideAnimation]);

  const onMove = React.useCallback(
    (_: unknown, { dx }: PanResponderGestureState) => {
      translateX.current.setValue(panX.current + dx);
    },
    []
  );

  const onRelease = React.useCallback(
    (_: unknown, { dx }: PanResponderGestureState) => {
      if (Math.abs(panX.current + dx) >= ScreenWidth / 3) {
        slideAnimation(panX.current + dx > 0 ? leftWidth : -rightWidth);
      } else {
        slideAnimation(0);
      }
    },
    [leftWidth, rightWidth, slideAnimation]
  );

  const shouldSlide = React.useCallback(
    (_: unknown, { dx, dy, vx, vy }: PanResponderGestureState): boolean => {
      if (dx > 0 && !leftContent && !panX.current) {
        return false;
      }
      if (dx < 0 && !rightContent && !panX.current) {
        return false;
      }
      return (
        Math.abs(dx) > Math.abs(dy) * 2 && Math.abs(vx) > Math.abs(vy) * 2.5
      );
    },
    [leftContent, rightContent]
  );

  const _panResponder = React.useMemo(
    () =>
      PanResponder.create({
        onMoveShouldSetPanResponder: shouldSlide,
        onPanResponderGrant: (_event, { vx }) => {
          onSwipeBegin?.(vx > 0 ? 'left' : 'right');
        },
        onPanResponderMove: onMove,
        onPanResponderRelease: onRelease,
        onPanResponderReject: onRelease,
        onPanResponderTerminate: onRelease,
        onPanResponderEnd: () => {
          onSwipeEnd?.();
        },
      }),
    [onMove, onRelease, onSwipeBegin, onSwipeEnd, shouldSlide]
  );

  return (
    <View
      style={{
        justifyContent: 'center',
      }}
    >
      <View style={styles.actions}>
        <View
          style={[
            {
              width: leftWidth,
              zIndex: 1,
            },
            leftStyle,
          ]}
        >
          {typeof leftContent === 'function'
            ? leftContent(resetCallBack)
            : leftContent}
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
          {typeof rightContent === 'function'
            ? rightContent(resetCallBack)
            : rightContent}
        </View>
      </View>
      <Animated.View
        style={{
          transform: [
            {
              translateX: translateX.current,
            },
          ],
        }}
        {..._panResponder.panHandlers}
      >
        <ListItemBase {...rest}>{children}</ListItemBase>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  actions: {
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    position: 'absolute',
    right: 0,
    top: 0,

    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

ListItemSwipeable.displayName = 'ListItem.Swipeable';
