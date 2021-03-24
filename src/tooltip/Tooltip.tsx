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
import { ThemeProps } from '../config';
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
  toggleAction: 'onPress' as const,
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

type TooltipState = {
  isVisible: boolean;
  yOffset: number;
  xOffset: number;
  elementWidth: number;
  elementHeight: number;
};

class Tooltip extends React.Component<
  TooltipProps & Partial<ThemeProps<TooltipProps>>,
  TooltipState
> {
  static defaultProps = defaultProps;
  _isMounted: boolean = false;
  state = {
    isVisible: false,
    yOffset: 0,
    xOffset: 0,
    elementWidth: 0,
    elementHeight: 0,
  };
  renderedElement: View;

  toggleTooltip = () => {
    const { onClose } = this.props;
    this.getElementPosition();
    this._isMounted &&
      this.setState((prevState) => {
        if (prevState.isVisible) {
          onClose && onClose();
        }
        return { isVisible: !prevState.isVisible };
      });
  };

  wrapWithPress = (
    toggleOnPress: TooltipProps['toggleOnPress'],
    toggleAction: TooltipProps['toggleAction'],
    children: React.ReactNode
  ) => {
    if (toggleOnPress) {
      return (
        <TouchableOpacity
          {...{ [toggleAction]: this.toggleTooltip }}
          delayLongPress={250}
          activeOpacity={1}
        >
          {children}
        </TouchableOpacity>
      );
    }
    return children;
  };

  containerStyle = (withOverlay: boolean, overlayColor: string): ViewStyle => {
    return {
      backgroundColor: withOverlay ? overlayColor : 'transparent',
      flex: 1,
    };
  };

  getTooltipStyle = () => {
    const { yOffset, xOffset, elementHeight, elementWidth } = this.state;
    const {
      height,
      backgroundColor,
      width,
      withPointer,
      containerStyle,
    } = this.props;
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

  renderPointer = (tooltipY: FlexStyle['top']) => {
    const { yOffset, xOffset, elementHeight, elementWidth } = this.state;
    const { backgroundColor, pointerColor } = this.props;
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

  getTooltipHighlightedButtonStyle = (): ViewStyle => {
    const { highlightColor } = this.props;
    const { yOffset, xOffset, elementWidth, elementHeight } = this.state;

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

  renderTouchableHighlightedButton = () => {
    const TooltipHighlightedButtonStyle = this.getTooltipHighlightedButtonStyle();

    return (
      <TouchableOpacity
        testID="tooltipTouchableHighlightedButton"
        onPress={() => this.toggleTooltip()}
        style={TooltipHighlightedButtonStyle}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  };

  renderStaticHighlightedButton = () => {
    const TooltipHighlightedButtonStyle = this.getTooltipHighlightedButtonStyle();

    return (
      <View style={TooltipHighlightedButtonStyle}>{this.props.children}</View>
    );
  };

  renderHighlightedButton = () => {
    const { closeOnlyOnBackdropPress } = this.props;
    if (closeOnlyOnBackdropPress) {
      return this.renderTouchableHighlightedButton();
    } else {
      return this.renderStaticHighlightedButton();
    }
  };

  renderContent = (withTooltip: boolean) => {
    const { popover, withPointer, toggleOnPress, toggleAction } = this.props;
    if (!withTooltip) {
      return this.wrapWithPress(
        toggleOnPress,
        toggleAction,
        this.props.children
      );
    }

    const tooltipStyle = this.getTooltipStyle() as ViewStyle;

    return (
      <View>
        {this.renderHighlightedButton()}
        {withPointer && this.renderPointer(tooltipStyle.top)}
        <View style={tooltipStyle} testID="tooltipPopoverContainer">
          {popover}
        </View>
      </View>
    );
  };

  componentDidMount() {
    this._isMounted = true;
    // wait to compute onLayout values.
    requestAnimationFrame(this.getElementPosition);
  }
  componentWillUnmount() {
    this._isMounted = false;
  }

  getElementPosition = () => {
    const { skipAndroidStatusBar } = this.props;
    this.renderedElement &&
      this.renderedElement.measure(
        (
          frameOffsetX,
          frameOffsetY,
          width,
          height,
          pageOffsetX,
          pageOffsetY
        ) => {
          this._isMounted &&
            this.setState({
              xOffset: pageOffsetX,
              yOffset:
                isIOS || skipAndroidStatusBar
                  ? pageOffsetY
                  : pageOffsetY - StatusBar.currentHeight,
              elementWidth: width,
              elementHeight: height,
            });
        }
      );
  };

  renderStaticModalContent = () => {
    const { withOverlay, overlayColor } = this.props;
    return (
      <Fragment>
        <TouchableOpacity
          style={this.containerStyle(withOverlay, overlayColor)}
          onPress={this.toggleTooltip}
          activeOpacity={1}
        />
        <View>{this.renderContent(true)}</View>
      </Fragment>
    );
  };

  renderTogglingModalContent = () => {
    const { withOverlay, overlayColor } = this.props;
    return (
      <TouchableOpacity
        style={this.containerStyle(withOverlay, overlayColor)}
        onPress={this.toggleTooltip}
        activeOpacity={1}
      >
        {this.renderContent(true)}
      </TouchableOpacity>
    );
  };

  renderModalContent = () => {
    const { closeOnlyOnBackdropPress } = this.props;
    if (closeOnlyOnBackdropPress) {
      return this.renderStaticModalContent();
    } else {
      return this.renderTogglingModalContent();
    }
  };

  render() {
    const { isVisible } = this.state;
    const { onOpen, ModalComponent } = this.props;
    return (
      <View
        collapsable={false}
        ref={(e) => {
          this.renderedElement = e;
        }}
      >
        {this.renderContent(false)}
        <ModalComponent
          animationType="fade"
          visible={isVisible}
          transparent
          onShow={onOpen}
        >
          {this.renderModalContent()}
        </ModalComponent>
      </View>
    );
  }
}

export { Tooltip };
export default withTheme(Tooltip, 'Tooltip');
