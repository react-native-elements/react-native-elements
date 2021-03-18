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
  isVisible?: boolean;
  yOffset?: number;
  xOffset?: number;
  elementWidth?: number;
  elementHeight?: number;
};

const Tooltip: React.ForwardRefExoticComponent<TooltipProps> = React.forwardRef(
  (
    {
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
    },
    ref
  ) => {
    let _isMounted = React.useRef<boolean>(false);

    const [state, setState] = React.useState<TooltipState>({
      isVisible: false,
      yOffset: 0,
      xOffset: 0,
      elementWidth: 0,
      elementHeight: 0,
    });
    let { current: renderedElement } = React.useRef<View>(null);

    const toggleTooltip = () => {
      getElementPosition();
      if (_isMounted.current) {
        if (state.isVisible) {
          onClose && onClose();
        }
        setState({ isVisible: !state.isVisible });
      }
    };

    const wrapWithPress = (
      ToggleOnPress: TooltipProps['toggleOnPress'],
      ToggleAction: TooltipProps['toggleAction'],
      children: React.ReactNode
    ) => {
      if (ToggleOnPress) {
        return (
          <TouchableOpacity
            {...{ [ToggleAction]: toggleTooltip }}
            delayLongPress={250}
            activeOpacity={1}
          >
            {children}
          </TouchableOpacity>
        );
      }
      return children;
    };

    const ContainerStyle = (
      WithOverlay: boolean,
      OverlayColor: ColorValue
    ): ViewStyle => {
      return {
        backgroundColor: WithOverlay ? OverlayColor : 'transparent',
        flex: 1,
      };
    };

    const getTooltipStyle = () => {
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
      const { yOffset, xOffset, elementHeight, elementWidth } = state;
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
      const { yOffset, xOffset, elementWidth, elementHeight } = state;

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

      return (
        <View style={TooltipHighlightedButtonStyle}>{props.children}</View>
      );
    };

    const renderHighlightedButton = () => {
      if (closeOnlyOnBackdropPress) {
        return renderTouchableHighlightedButton();
      } else {
        return renderStaticHighlightedButton();
      }
    };

    const renderContent = (withTooltip: boolean) => {
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
      renderedElement &&
        renderedElement.measure(
          (
            frameOffsetX,
            frameOffsetY,
            Width,
            Height,
            pageOffsetX,
            pageOffsetY
          ) => {
            _isMounted.current &&
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
    };

    const renderStaticModalContent = () => {
      return (
        <Fragment>
          <TouchableOpacity
            style={ContainerStyle(withOverlay, overlayColor)}
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
          style={ContainerStyle(withOverlay, overlayColor)}
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

    React.useEffect(() => {
      _isMounted.current = true;
      // wait to compute onLayout values.
      requestAnimationFrame(getElementPosition);
      return () => {
        _isMounted.current = false;
      };
    });

    React.useImperativeHandle(ref, () => ({ toggleTooltip }));

    return (
      <View
        collapsable={false}
        ref={(e) => {
          renderedElement = e;
        }}
      >
        {renderContent(false)}
        <ModalComponent
          animationType="fade"
          visible={state.isVisible}
          transparent
          onShow={onOpen}
        >
          {renderModalContent()}
        </ModalComponent>
      </View>
    );
  }
);

export { Tooltip };

export default withTheme(Tooltip, 'Tooltip');
