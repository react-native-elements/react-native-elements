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
  Platform,
} from 'react-native';
import {
  ScreenWidth,
  ScreenHeight,
  isIOS,
  RneFunctionComponent,
} from '../helpers';
import Triangle from './components/Triangle';
import getTooltipCoordinate, {
  getElementVisibleWidth,
} from './getTooltipCoordinate';

export type TooltipProps = {
  withPointer?: boolean;
  popover?: React.ReactElement<{}>;
  toggleOnPress?: boolean;
  toggleAction?: string | 'onPress' | 'onLongPress';
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

export const Tooltip: RneFunctionComponent<TooltipProps> = ({
  // withOverlay = true,
  // overlayColor = 'rgba(250, 250, 250, 0.70)',
  // highlightColor = 'transparent',
  // withPointer = true,
  // toggleOnPress = true,
  // toggleAction = 'onPress',
  // height = 40,
  // width = 150,
  // containerStyle = {},
  // backgroundColor = '#617080',
  // onClose = () => {},
  // onOpen = () => {},
  // skipAndroidStatusBar = false,
  // ModalComponent = Modal,
  // closeOnlyOnBackdropPress = false,
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

  const toggleTooltip = () => {
    getElementPosition();
    isMounted.current &&
      setState((prevState) => {
        if (prevState.isVisible) {
          onClose && onClose();
        }
        return { isVisible: !prevState.isVisible };
      });
  };

  const wrapWithPress = (
    toggleOnPressHandler: TooltipProps['toggleOnPress'],
    toggleActionHandler: TooltipProps['toggleAction'],
    children: React.ReactNode
  ) => {
    if (toggleOnPressHandler) {
      return (
        <TouchableOpacity
          {...{ [toggleActionHandler]: toggleTooltip }}
          delayLongPress={250}
          activeOpacity={1}
        >
          {children}
        </TouchableOpacity>
      );
    }
    return children;
  };
  const getContainerStyle = (
    withOverlay: boolean,
    overlayColor: string
  ): ViewStyle => {
    return {
      backgroundColor: withOverlay ? overlayColor : 'transparent',
      flex: 1,
    };
  };
  const getTooltipStyle = () => {
    const { yOffset, xOffset, elementHeight, elementWidth } = dimensions;
    const {
      height,
      backgroundColor,
      width,
      withPointer,
      containerStyle,
    } = props;
    const { x, y } = getTooltipCoordinate(
      xOffset,
      yOffset,
      elementWidth,
      elementHeight,
      ScreenWidth,
      ScreenHeight,
      width,
      height,
      withPointer
    );
    return StyleSheet.flatten([
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
  };
  const renderPointer = (tooltipY: FlexStyle['top']) => {
    const { yOffset, xOffset, elementHeight, elementWidth } = dimensions;
    const { backgroundColor, pointerColor } = props;
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
          style={{ borderBottomColor: pointerColor || backgroundColor }}
          isDown={pastMiddleLine}
        />
      </View>
    );
  };
  const getTooltipHighlightedButtonStyle = (): ViewStyle => {
    const { highlightColor } = props;
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
  const renderTouchableHighlightedButton = () => {
    const TooltipHighlightedButtonStyle = getTooltipHighlightedButtonStyle();
    return (
      <TouchableOpacity
        testID="tooltipTouchableHighlightedButton"
        onPress={() => toggleTooltip()}
        style={TooltipHighlightedButtonStyle}
      >
        {props.children}
      </TouchableOpacity>
    );
  };
  const renderStaticHighlightedButton = () => {
    const TooltipHighlightedButtonStyle = getTooltipHighlightedButtonStyle();
    return <View style={TooltipHighlightedButtonStyle}>{props.children}</View>;
  };
  const renderHighlightedButton = () => {
    const { closeOnlyOnBackdropPress } = props;
    if (closeOnlyOnBackdropPress) {
      return renderTouchableHighlightedButton();
    } else {
      return renderStaticHighlightedButton();
    }
  };
  const renderContent = (withTooltip: boolean) => {
    const { popover, withPointer, toggleOnPress, toggleAction } = props;
    if (!withTooltip) {
      return wrapWithPress(toggleOnPress, toggleAction, props.children);
    }
    const tooltipStyle = getTooltipStyle() as ViewStyle;
    return (
      <View>
        {renderHighlightedButton()}
        {withPointer && renderPointer(tooltipStyle.top)}
        <View style={tooltipStyle} testID="tooltipPopoverContainer">
          {popover}
        </View>
      </View>
    );
  };

  const getElementPosition = () => {
    const { skipAndroidStatusBar } = props;
    renderedElement.current &&
      renderedElement.current.measure(
        (
          _frameOffsetX,
          _frameOffsetY,
          width,
          height,
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
              elementWidth: width,
              elementHeight: height,
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

  const renderStaticModalContent = () => {
    const { withOverlay, overlayColor } = props;
    return (
      <Fragment>
        <TouchableOpacity
          style={getContainerStyle(withOverlay, overlayColor)}
          onPress={toggleTooltip}
          activeOpacity={1}
        />
        <View>{renderContent(true)}</View>
      </Fragment>
    );
  };
  const renderTogglingModalContent = () => {
    const { withOverlay, overlayColor } = props;
    return (
      <TouchableOpacity
        style={getContainerStyle(withOverlay, overlayColor)}
        onPress={toggleTooltip}
        activeOpacity={1}
      >
        {renderContent(true)}
      </TouchableOpacity>
    );
  };
  const renderModalContent = () => {
    const { closeOnlyOnBackdropPress } = props;
    if (closeOnlyOnBackdropPress) {
      return renderStaticModalContent();
    } else {
      return renderTogglingModalContent();
    }
  };
  return (
    <View collapsable={false} ref={renderedElement}>
      {renderContent(false)}
      <props.ModalComponent
        animationType="fade"
        visible={isVisible}
        transparent
        onShow={props.onOpen}
      >
        {renderModalContent()}
      </props.ModalComponent>
    </View>
  );
};

Tooltip.displayName = 'Tooltip';
