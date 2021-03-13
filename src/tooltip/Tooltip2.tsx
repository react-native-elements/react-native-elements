import React, {
  Fragment,
  useState,
  useEffect,
  useRef,
  useCallback,
} from 'react';
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
} from 'react-native';
import { act } from 'react-test-renderer';
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
} & typeof defaultProps;

const defaultProps = {
  withOverlay: true,
  overlayColor: 'rgba(250, 250, 250, 0.70)',
  highlightColor: 'transparent',
  withPointer: true,
  toggleOnPress: true,
  toggleAction: 'onPress',
  height: 40,
  width: 150,
  containerStyle: {},
  backgroundColor: '#617080',
  onClose: () => {},
  onOpen: () => {},
  skipAndroidStatusBar: false,
  ModalComponent: Modal,
  closeOnlyOnBackdropPress: false,
};

const Tooltip: React.FunctionComponent<TooltipProps> = (props) => {
  const renderedElement = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [yOffset, setYOffset] = useState(0);
  const [xOffset, setXOffset] = useState(0);
  const [elementWidth, setElementWidth] = useState(0);
  const [elementHeight, setElementHeight] = useState(0);

  const {
    withOverlay = true,
    overlayColor = 'rgba(250, 250, 250, 0.70)',
    highlightColor = 'transparent',
    withPointer = true,
    toggleOnPress = true,
    toggleAction = 'onPress',
    height = 40,
    width = 150,
    backgroundColor = '#617080',
    onClose = () => {},
    onOpen = () => {},
    skipAndroidStatusBar = false,
    ModalComponent = Modal,
    closeOnlyOnBackdropPress = false,
    pointerColor,
  } = props;

  const toggleTooltip = () => {
    getElementPosition();
    if (isVisible) {
      onClose && onClose();
    }
    act(() => {
      setIsVisible(!isVisible);
    });
  };

  const wrapWithPress = (
    toggleOnPressDefault: TooltipProps['toggleOnPress'],
    toggleActionDefault: TooltipProps['toggleAction'],
    children: React.ReactNode
  ) => {
    if (toggleOnPressDefault) {
      return (
        <TouchableOpacity
          {...{ [toggleActionDefault]: toggleTooltip }}
          delayLongPress={250}
          activeOpacity={1}
        >
          {children}
        </TouchableOpacity>
      );
    }
    return children;
  };

  const containerStyle = (
    withOverlayPassed: boolean,
    overlayColorPassed: string
  ): ViewStyle => {
    return {
      backgroundColor: withOverlayPassed ? overlayColorPassed : 'transparent',
      flex: 1,
    };
  };

  const getTooltipStyle = () => {
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
    const pastMiddleLine = yOffset > tooltipY;
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
        onPress={toggleTooltip}
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
    if (closeOnlyOnBackdropPress) {
      return renderTouchableHighlightedButton();
    } else {
      return renderStaticHighlightedButton();
    }
  };

  const renderContent = (withTooltip: boolean) => {
    const { popover } = props;
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

  const getElementPosition = useCallback(() => {
    renderedElement &&
      renderedElement.current.measure(
        (
          frameOffsetX,
          frameOffsetY,
          elewidth,
          eleheight,
          pageOffsetX,
          pageOffsetY
        ) => {
          setXOffset(pageOffsetX);
          setYOffset(
            isIOS || skipAndroidStatusBar
              ? pageOffsetY
              : pageOffsetY - StatusBar.currentHeight
          );
          setElementWidth(elewidth);
          setElementHeight(eleheight);
        }
      );
  }, [skipAndroidStatusBar]);

  useEffect(() => {
    requestAnimationFrame(getElementPosition);
  }, [getElementPosition]);
  const renderStaticModalContent = () => {
    return (
      <Fragment>
        <TouchableOpacity
          style={containerStyle(withOverlay, overlayColor)}
          onPress={toggleTooltip}
          activeOpacity={1}
        />
        <View>{renderContent(true)}</View>
      </Fragment>
    );
  };

  const renderTogglingModalContent = () => {
    return (
      <TouchableOpacity
        style={containerStyle(withOverlay, overlayColor)}
        onPress={toggleTooltip}
        activeOpacity={1}
      >
        {renderContent(true)}
      </TouchableOpacity>
    );
  };

  const renderModalContent = () => {
    if (closeOnlyOnBackdropPress) {
      return renderStaticModalContent();
    } else {
      return renderTogglingModalContent();
    }
  };

  return (
    <View collapsable={false} ref={renderedElement}>
      {renderContent(false)}
      {ModalComponent && (
        <ModalComponent
          animationType="fade"
          visible={isVisible}
          transparent
          onDismiss={onClose}
          onShow={onOpen}
          onRequestClose={onClose}
        >
          {renderModalContent()}
        </ModalComponent>
      )}
    </View>
  );
};
export { Tooltip };
export default withTheme(Tooltip, 'Tooltip');
