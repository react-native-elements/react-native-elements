import React, { Fragment } from 'react';
import {
  TouchableOpacity,
  Modal,
  View,
  StatusBar,
  I18nManager,
  ViewStyle,
  FlexStyle,
  StyleProp,
  StyleSheet,
  ColorValue,
  Text,
} from 'react-native';
import { withTheme } from '../config';
import { ScreenWidth, ScreenHeight, isIOS } from '../helpers';
import Triangle from './Triangle';
import getTooltipCoordinate, {
  getElementVisibleWidth,
} from './getTooltipCoordinate';

export type TooltipProps = {
  withPointer?: boolean;
  popover?: React.ReactElement<{}>;
  toggleOnPress?: boolean;
  toggleAction?: 'onPress' | 'onLongPress';
  height?: FlexStyle['height'];
  width?: FlexStyle['width'];
  containerStyle?: StyleProp<ViewStyle>;
  pointerColor?: ColorValue;
  onClose?(): void;
  onOpen?(): void;
  overlayColor?: ColorValue;
  withOverlay?: boolean;
  backgroundColor?: ColorValue;
  highlightColor?: ColorValue;
  skipAndroidStatusBar?: boolean;
  ModalComponent?: typeof React.Component;
  closeOnlyOnBackdropPress?: boolean;
};

type TooltipState = {
  yOffset?: number;
  xOffset?: number;
  elementWidth?: number;
  elementHeight?: number;
};

const Tooltip: React.FunctionComponent<TooltipProps> = ({
  withOverlay = true,
  overlayColor = 'rgba(250, 250, 250, 0.70)',
  highlightColor = 'transparent',
  withPointer = true,
  toggleOnPress = true,
  toggleAction = 'onPress',
  height = 40,
  width = 150,
  containerStyle = {},
  backgroundColor = '#617080',
  onClose = () => {},
  onOpen = () => {},
  skipAndroidStatusBar = false,
  ModalComponent = Modal,
  closeOnlyOnBackdropPress = false,
  pointerColor,
  popover,
  ...props
}) => {
  let renderedElement = React.useRef<View>(null);

  const [isVisible, setIsVisible] = React.useState(false);
  const [state, setState] = React.useState<TooltipState>({
    yOffset: 0,
    xOffset: 0,
    elementWidth: 0,
    elementHeight: 0,
  });

  const getElementPosition = React.useCallback(() => {
    renderedElement.current &&
      renderedElement.current.measure(
        (
          _frameOffsetX,
          _frameOffsetY,
          Width,
          Height,
          pageOffsetX,
          pageOffsetY
        ) => {
          setState({
            xOffset: pageOffsetX,
            yOffset:
              isIOS || skipAndroidStatusBar
                ? pageOffsetY
                : pageOffsetY - StatusBar.currentHeight,
            elementWidth: Width,
            elementHeight: Height,
          });
        }
      );
  }, [skipAndroidStatusBar]);

  const toggleTooltip = () => {
    getElementPosition();
    if (isVisible) {
      onClose && onClose();
    }
    setIsVisible(!isVisible);
  };

  const HighlightedButton: React.FunctionComponent = () => {
    const { yOffset, xOffset, elementWidth, elementHeight } = state;

    const TooltipHighlightedButtonStyle: ViewStyle = {
      position: 'absolute',
      top: yOffset,
      [I18nManager.isRTL ? 'right' : 'left']: xOffset,
      backgroundColor: highlightColor,
      overflow: 'visible',
      width: elementWidth,
      height: elementHeight,
    };

    if (closeOnlyOnBackdropPress) {
      return (
        <TouchableOpacity
          testID="tooltipTouchableHighlightedButton"
          onPress={toggleTooltip}
          style={TooltipHighlightedButtonStyle}
        >
          {props.children}
        </TouchableOpacity>
      );
    }
    return <View style={TooltipHighlightedButtonStyle}>{props.children}</View>;
  };

  const RenderContent: React.FunctionComponent<{ withTooltip: boolean }> = ({
    withTooltip,
  }) => {
    if (!withTooltip) {
      if (toggleOnPress) {
        return (
          <TouchableOpacity
            {...{ [toggleAction]: toggleTooltip }}
            delayLongPress={250}
            activeOpacity={1}
          >
            {props.children}
            <Text>sad</Text>
          </TouchableOpacity>
        );
      }
      return <>{props.children}</>;
    }
    const { yOffset, xOffset, elementHeight, elementWidth } = state;

    const { x, y } = getTooltipCoordinate(
      xOffset,
      yOffset,
      elementWidth,
      elementHeight,
      ScreenWidth,
      ScreenHeight,
      width as number,
      height as number,
      withPointer
    );
    const tooltipStyle: ViewStyle = StyleSheet.flatten([
      {
        position: 'absolute',
        [I18nManager.isRTL ? 'right' : 'left']: x,
        top: y,
        width,
        height,
        backgroundColor,
        // default styles
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        borderRadius: 10,
        padding: 10,
      },
      containerStyle,
    ]);
    const pastMiddleLine = yOffset > tooltipStyle.top;

    return (
      <View>
        <HighlightedButton />
        {withPointer && (
          <View
            style={{
              position: 'absolute',
              top: pastMiddleLine ? yOffset - 13 : yOffset + elementHeight - 2,
              [I18nManager.isRTL ? 'right' : 'left']:
                xOffset +
                getElementVisibleWidth(elementWidth, xOffset, ScreenWidth) / 2 -
                7.5,
            }}
          >
            <Triangle
              style={{ borderBottomColor: pointerColor || backgroundColor }}
              isDown={pastMiddleLine}
            />
          </View>
        )}
        <View style={tooltipStyle} testID="tooltipPopoverContainer">
          {popover}
        </View>
      </View>
    );
  };

  React.useEffect(() => {
    requestAnimationFrame(getElementPosition);
  }, [getElementPosition]);

  // React.useImperativeHandle(ref, () => ({ toggleTooltip }));

  return (
    <View collapsable={false} ref={renderedElement}>
      <RenderContent withTooltip={false} />
      <ModalComponent
        animationType="fade"
        visible={isVisible}
        transparent
        onShow={onOpen}
      >
        {closeOnlyOnBackdropPress ? (
          <Fragment>
            <TouchableOpacity
              style={{
                backgroundColor: withOverlay ? overlayColor : 'transparent',
                flex: 1,
              }}
              onPress={toggleTooltip}
              activeOpacity={1}
            />
            <View>
              <RenderContent withTooltip={true} />
            </View>
          </Fragment>
        ) : (
          <TouchableOpacity
            style={{
              backgroundColor: withOverlay ? overlayColor : 'transparent',
              flex: 1,
            }}
            onPress={toggleTooltip}
            activeOpacity={1}
          >
            <RenderContent withTooltip={true} />
          </TouchableOpacity>
        )}
      </ModalComponent>
    </View>
  );
};

export { Tooltip };

export default withTheme(Tooltip, 'Tooltip');
