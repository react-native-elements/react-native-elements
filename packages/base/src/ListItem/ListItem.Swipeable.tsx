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
import { ListItemBase, ListItemBaseProps } from './ListItem';
import { RneFunctionComponent, ScreenWidth } from '../helpers';

export type ListItemSwipeableProps = ListItemBaseProps & {
  /** Left Content. */
  leftContent?: React.ReactNode;

  /** Right Content. */
  rightContent?: React.ReactNode;

  /** Style of left container. */
  leftStyle?: StyleProp<ViewStyle>;

  /** Style of right container. */
  rightStyle?: StyleProp<ViewStyle>;

  /** Width to swipe left. */
  leftWidth?: number;

  /** Width to swipe right. */
  rightWidth?: number;

  /** Function to call when user swipes left. */
  onLeftSwipe?: () => any;

  /** Function to call when user swipes right. */
  onRightSwipe?: () => any;
};

/** We offer a special kind of ListItem which is swipeable from both ends and allows users select an event. */
export const ListItemSwipeable: RneFunctionComponent<ListItemSwipeableProps> =
  ({
    children,
    leftStyle,
    rightStyle,
    leftContent,
    rightContent,
    leftWidth = ScreenWidth / 3,
    rightWidth = ScreenWidth / 3,
    onLeftSwipe,
    onRightSwipe,
    ...rest
  }) => {
    const { current: panX } = React.useRef(new Animated.Value(0));
    const currValue = React.useRef(0);
    const prevValue = React.useRef(0);

    React.useEffect(() => {
      let subs = panX.addListener(({ value }) => {
        currValue.current = value;
      });
      return () => {
        panX.removeListener(subs);
      };
    }, [panX]);

    const slideAnimation = React.useCallback(
      (toValue: number) => {
        Animated.spring(panX, {
          toValue,
          useNativeDriver: true,
        }).start();
        prevValue.current = toValue;
      },
      [panX]
    );

    const onPanResponderMove = (_: any, { dx }: PanResponderGestureState) => {
      if (!prevValue.current) {
        prevValue.current = currValue.current;
      }
      let newDX = prevValue.current + dx;

      if (Math.abs(newDX) > ScreenWidth / 2) {
        return;
      }
      panX.setValue(newDX);
    };

    const onPanResponderRelease = (
      _: any,
      { dx }: PanResponderGestureState
    ) => {
      prevValue.current = currValue.current;
      if (Math.sign(dx) > 0) {
        onLeftSwipe?.();
      } else if (Math.sign(dx) < 0) {
        onRightSwipe?.();
      }
      if (
        (Math.sign(dx) > 0 && !leftContent) ||
        (Math.sign(dx) < 0 && !rightContent)
      ) {
        return slideAnimation(0);
      }

      if (Math.abs(currValue.current) >= ScreenWidth / 3) {
        slideAnimation(currValue.current > 0 ? rightWidth : -leftWidth);
      } else {
        slideAnimation(0);
      }
    };

    const { current: _panResponder } = React.useRef(
      PanResponder.create({
        onMoveShouldSetPanResponderCapture: () => true,
        onPanResponderGrant: () => false,
        onPanResponderMove,
        onPanResponderRelease,
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
                translateX: panX,
              },
            ],
            zIndex: 2,
          }}
          {..._panResponder.panHandlers}
        >
          <ListItemBase {...rest}>{children}</ListItemBase>
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

ListItemSwipeable.displayName = 'ListItem.Swipeable';
