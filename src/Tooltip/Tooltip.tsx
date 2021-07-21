import React from 'react';
import {
  TouchableOpacity,
  Modal,
  View,
  StatusBar,
  I18nManager,
  ViewStyle,
  FlexStyle,
  StyleProp,
  ColorValue,
  Platform,
} from 'react-native';
import { ScreenWidth, isIOS, RneFunctionComponent } from '../helpers';
import Triangle from './components/Triangle';
import { getElementVisibleWidth } from './getTooltipCoordinate';
import { getTooltipStyle } from './getTooltipStyle';

export type TooltipProps = {
  withPointer?: boolean;
  popover?: React.ReactElement<{}>;
  toggleOnPress?: boolean;
  toggleAction?: string | 'onPress' | 'onLongPress';
  height?: number;
  width?: number;
  containerStyle?: StyleProp<ViewStyle>;
  pointerColor?: ColorValue;
  onClose?(): void;
  onOpen?(): void;
  overlayColor?: ColorValue;
  withOverlay?: boolean;
  backgroundColor?: ColorValue;
  highlightColor?: ColorValue;
  skipAndroidStatusBar?: boolean;
  closeOnlyOnBackdropPress?: boolean;
  ModalComponent?: typeof React.Component;
};

export const Tooltip: RneFunctionComponent<TooltipProps> = ({
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
  pointerColor = backgroundColor,
  onClose = () => {},
  onOpen = () => {},
  skipAndroidStatusBar = false,
  ModalComponent = Modal,
  closeOnlyOnBackdropPress = false,
  ...props
}) => {
  const isMounted = React.useRef(false);
  const renderedElement = React.useRef<View>(null);

  const [isVisible, setIsVisible] = React.useState(false);
  const [dimensions, setDimensions] = React.useState({
    yOffset: 0,
    xOffset: 0,
    elementWidth: 0,
    elementHeight: 0,
  });

  const handleOnPress = () => {
    getElementPosition();
    isMounted.current &&
      setIsVisible((prevState) => {
        if (prevState) {
          onClose?.();
        }
        return !prevState;
      });
  };

  const WrapWithPress: React.FC = ({ children }) => {
    if (toggleOnPress) {
      return (
        <TouchableOpacity
          {...{ [toggleAction]: handleOnPress }}
          delayLongPress={250}
          activeOpacity={1}
        >
          {children}
        </TouchableOpacity>
      );
    } else {
      return <>{children}</>;
    }
  };

  const Pointer: React.FC<{ tooltipY: FlexStyle['top'] }> = ({ tooltipY }) => {
    const { yOffset, xOffset, elementHeight, elementWidth } = dimensions;
    const pastMiddleLine = yOffset > (tooltipY || 0);
    return (
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
          style={{ borderBottomColor: pointerColor }}
          isDown={pastMiddleLine}
        />
      </View>
    );
  };

  const getTooltipHighlightedButtonStyle = (): ViewStyle => {
    const { yOffset, xOffset, elementWidth, elementHeight } = dimensions;
    return {
      position: 'absolute',
      top: yOffset,
      [I18nManager.isRTL ? 'right' : 'left']: xOffset,
      backgroundColor: highlightColor,
      overflow: 'visible',
      width: elementWidth,
      height: elementHeight,
    };
  };

  const HighlightedButton: React.FC = () => {
    const TooltipHighlightedButtonStyle = getTooltipHighlightedButtonStyle();
    if (closeOnlyOnBackdropPress) {
      return (
        <TouchableOpacity
          testID="tooltipTouchableHighlightedButton"
          onPress={() => handleOnPress()}
          style={TooltipHighlightedButtonStyle}
        >
          {props.children}
        </TouchableOpacity>
      );
    } else {
      return (
        <View style={TooltipHighlightedButtonStyle}>{props.children}</View>
      );
    }
  };

  const getElementPosition = () => {
    renderedElement.current &&
      renderedElement.current.measure(
        (
          _frameOffsetX,
          _frameOffsetY,
          _width,
          _height,
          pageOffsetX,
          pageOffsetY
        ) => {
          isMounted.current &&
            setDimensions({
              xOffset: pageOffsetX,
              yOffset:
                isIOS || skipAndroidStatusBar
                  ? pageOffsetY
                  : pageOffsetY -
                    Platform.select({
                      android: StatusBar.currentHeight,
                      ios: 20,
                      default: 0,
                    }),
              elementWidth: _width,
              elementHeight: _height,
            });
        }
      );
  };

  React.useEffect(() => {
    isMounted.current = true;
    requestAnimationFrame(getElementPosition);
    return () => (isMounted.current = false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Content: React.FC<{
    withTooltip?: boolean;
  }> = ({ withTooltip }) => {
    if (!withTooltip) {
      return <WrapWithPress>{props.children}</WrapWithPress>;
    }
    const tooltipStyle = getTooltipStyle({
      ...dimensions,
      backgroundColor,
      containerStyle,
      height,
      width,
      withPointer,
    }) as ViewStyle;
    return (
      <View>
        <HighlightedButton />
        {withPointer && <Pointer tooltipY={tooltipStyle.top} />}
        <View style={tooltipStyle} testID="tooltipPopoverContainer">
          {props.popover}
        </View>
      </View>
    );
  };

  const ModalContent: React.FC = () => {
    return (
      <>
        <TouchableOpacity
          style={{
            backgroundColor: withOverlay ? overlayColor : 'transparent',
            flex: 1,
          }}
          onPress={handleOnPress}
          activeOpacity={1}
        >
          {closeOnlyOnBackdropPress && <Content withTooltip />}
        </TouchableOpacity>
        {!closeOnlyOnBackdropPress && (
          <View>
            <Content withTooltip />
          </View>
        )}
      </>
    );
  };

  return (
    <View collapsable={false} ref={renderedElement}>
      <Content />
      <ModalComponent
        animationType="fade"
        visible={isVisible}
        transparent
        onShow={onOpen}
      >
        <ModalContent />
      </ModalComponent>
    </View>
  );
};

Tooltip.displayName = 'Tooltip';
