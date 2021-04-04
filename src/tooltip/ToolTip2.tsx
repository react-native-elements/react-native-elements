import React from 'react';
import {
  Modal,
  View,
  I18nManager,
  Pressable,
  ViewStyle,
  FlexStyle,
  StyleProp,
  StyleSheet,
  ColorValue,
  TouchableWithoutFeedback,
} from 'react-native';
import { Animated, Text, SafeAreaView } from 'react-native';
import Triangle from './Triangle';
import { withTheme } from '../config';
import { ScreenWidth, ScreenHeight } from '../helpers';

export type ToolTip2Props = {
  withPointer?: boolean;
  title?: string;
  popover?: React.ReactElement<{}>;
  toggleAction?: 'onPress' | 'onLongPress';
  width?: FlexStyle['width'];
  containerStyle?: StyleProp<ViewStyle>;
  pointerColor?: ColorValue;
  onDismiss?(): void;
  onShow?(): void;
  visible?: boolean;
  overlayColor?: ColorValue;
  backgroundColor?: ColorValue;
  closeOnlyOnBackdropPress?: boolean;
};

const ToolTip2: React.FunctionComponent<ToolTip2Props> = ({
  children,
  title,
  popover,
  withPointer = true,
  overlayColor,
  backgroundColor = '#616161',
  pointerColor,
  toggleAction = 'onPress',
  onShow = () => {},
  onDismiss = () => {},
  visible = false,
  width: propWidth = 200,
  closeOnlyOnBackdropPress = false,
  containerStyle,
}) => {
  const { current: animation } = React.useRef<Animated.Value>(
    new Animated.Value(0)
  );

  let containerElement = React.useRef<View>(null);
  let tooltipElement = React.useRef<View>(null);
  const [containerDimensions, setContainerDimensions] = React.useState({
    height: 0,
    px: 0,
    py: 0,
    width: 0,
  });
  const [tooltipDimension, setTooltipDimension] = React.useState({
    height: 0,
    width: 0,
  });

  const toogleToolTip = () => {
    if (visible) {
      onDismiss();
    } else {
      onShow();
    }
  };

  React.useEffect(() => {
    Animated.timing(animation, {
      toValue: Number(visible),
      useNativeDriver: true,
      duration: 200,
    }).start();
  }, [visible, animation]);

  React.useEffect(() => {
    let subs = true;
    requestAnimationFrame(
      () =>
        containerElement.current &&
        containerElement.current.measure((_x, _y, width, height, px, py) => {
          if (subs) {
            setContainerDimensions({ width, height, px, py });
          }
        })
    );
    return () => {
      subs = false;
    };
  }, [visible]);
  React.useEffect(() => {
    let subs = true;
    requestAnimationFrame(
      () =>
        tooltipElement.current &&
        tooltipElement.current.measure((_x, _y, width, height) => {
          if (subs) {
            setTooltipDimension({ width, height });
          }
        })
    );
    return () => {
      subs = false;
    };
  }, [visible]);

  const ToolTipStyle = () => {
    const { px, width, height, py } = containerDimensions;
    const { width: tooltipWidth, height: toolTipHeight } = tooltipDimension;
    let horizontal =
      (px || 0) +
      ((px || 0) > ScreenWidth / 2
        ? ((width || 0) - (tooltipWidth || 0)) / 2
        : 20) +
      (width > ScreenWidth / 2
        ? (width || 0) / 2 - (tooltipWidth || 0) / 2
        : 0) +
      (px < 10 ? 10 : 0) +
      (width < 30 ? -20 : 0);
    if (horizontal > ScreenWidth - tooltipWidth) {
      horizontal = ScreenWidth - (tooltipWidth || 0);
    }
    let top = py + (ScreenHeight / 2 < py ? -toolTipHeight - height - 28 : 0);
    return { top, [I18nManager.isRTL ? 'right' : 'left']: horizontal };
  };

  return (
    <>
      <View
        style={styles.content}
        ref={containerElement}
        onLayout={(e) => Object(e.nativeEvent.layout)}
      >
        <Pressable
          {...(!closeOnlyOnBackdropPress && { [toggleAction]: toogleToolTip })}
        >
          {children}
        </Pressable>
        {/* <Text>{JSON.stringify({ containerDimensions, tooltipDimension })}</Text> */}
        <Modal transparent visible={visible}>
          <TouchableWithoutFeedback onPress={toogleToolTip}>
            <Animated.View
              style={[
                StyleSheet.absoluteFillObject,
                {
                  backgroundColor: overlayColor || '#f1f1f188',
                },
              ]}
              pointerEvents={visible ? 'auto' : 'none'}
            />
          </TouchableWithoutFeedback>
          <SafeAreaView>
            <Animated.View
              pointerEvents={visible ? 'auto' : 'none'}
              style={[
                styles.tooltip,
                {
                  opacity: animation.interpolate({
                    inputRange: [0, 0.4, 0.8, 1, 1],
                    outputRange: [0, 0, 0, 1, 1],
                  }),
                },
              ]}
            >
              {withPointer ? (
                <Triangle
                  isDown={ScreenHeight / 2 < containerDimensions.py}
                  style={{
                    position: 'absolute',
                    borderBottomColor: pointerColor || backgroundColor,
                    top:
                      containerDimensions.py -
                      containerDimensions.height *
                        (ScreenHeight / 2 < containerDimensions.py ? 2 : 0) -
                      12,
                    left:
                      containerDimensions.px + containerDimensions.width / 2,
                  }}
                />
              ) : null}
              <View
                style={[
                  styles.tooltipView,
                  {
                    maxWidth:
                      ScreenWidth / 2 > propWidth ? propWidth : ScreenWidth / 3,
                    backgroundColor,
                  },
                  ToolTipStyle(),
                  containerStyle,
                ]}
                ref={tooltipElement}
                onLayout={(e) => Object(e.nativeEvent.layout)}
              >
                {title ? <Text style={styles.label}>{title}</Text> : popover}
              </View>
            </Animated.View>
          </SafeAreaView>
        </Modal>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  content: {
    position: 'relative',
    backgroundColor: 'pink',
  },
  tooltip: {
    position: 'absolute',
    top: 10,
    left: -10,
  },
  label: {
    color: '#fff',
  },
  tooltipView: {
    padding: 10,
    maxWidth: 200,
    width: ScreenWidth / 2,
    borderRadius: 5,
  },
});

export { ToolTip2 };

export default withTheme(ToolTip2, 'ToolTip2');
