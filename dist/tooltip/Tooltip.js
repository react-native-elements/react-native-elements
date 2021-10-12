import React, { Fragment } from 'react';
import { TouchableOpacity, Modal, View, StatusBar, I18nManager, StyleSheet, Platform, } from 'react-native';
import { withTheme } from '../config';
import { ScreenWidth, ScreenHeight, isIOS } from '../helpers';
import Triangle from './Triangle';
import getTooltipCoordinate, { getElementVisibleWidth, } from './getTooltipCoordinate';
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
    onClose: () => { },
    onOpen: () => { },
    skipAndroidStatusBar: false,
    ModalComponent: Modal,
    closeOnlyOnBackdropPress: false,
};
class Tooltip extends React.Component {
    constructor() {
        super(...arguments);
        this._isMounted = false;
        this.state = {
            isVisible: false,
            yOffset: 0,
            xOffset: 0,
            elementWidth: 0,
            elementHeight: 0,
        };
        this.toggleTooltip = () => {
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
        this.wrapWithPress = (toggleOnPress, toggleAction, children) => {
            if (toggleOnPress) {
                return (<TouchableOpacity {...{ [toggleAction]: this.toggleTooltip }} delayLongPress={250} activeOpacity={1}>
          {children}
        </TouchableOpacity>);
            }
            return children;
        };
        this.containerStyle = (withOverlay, overlayColor) => {
            return {
                backgroundColor: withOverlay ? overlayColor : 'transparent',
                flex: 1,
            };
        };
        this.getTooltipStyle = () => {
            const { yOffset, xOffset, elementHeight, elementWidth } = this.state;
            const { height, backgroundColor, width, withPointer, containerStyle, } = this.props;
            const { x, y } = getTooltipCoordinate(xOffset, yOffset, elementWidth, elementHeight, ScreenWidth, ScreenHeight, width, height, withPointer);
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
        this.renderPointer = (tooltipY) => {
            const { yOffset, xOffset, elementHeight, elementWidth } = this.state;
            const { backgroundColor, pointerColor } = this.props;
            const pastMiddleLine = yOffset > (tooltipY || 0);
            return (<View style={{
                position: 'absolute',
                top: pastMiddleLine ? yOffset - 13 : yOffset + elementHeight - 2,
                [I18nManager.isRTL ? 'right' : 'left']: xOffset +
                    getElementVisibleWidth(elementWidth, xOffset, ScreenWidth) / 2 -
                    7.5,
            }}>
        <Triangle style={{ borderBottomColor: pointerColor || backgroundColor }} isDown={pastMiddleLine}/>
      </View>);
        };
        this.getTooltipHighlightedButtonStyle = () => {
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
        this.renderTouchableHighlightedButton = () => {
            const TooltipHighlightedButtonStyle = this.getTooltipHighlightedButtonStyle();
            return (<TouchableOpacity testID="tooltipTouchableHighlightedButton" onPress={() => this.toggleTooltip()} style={TooltipHighlightedButtonStyle}>
        {this.props.children}
      </TouchableOpacity>);
        };
        this.renderStaticHighlightedButton = () => {
            const TooltipHighlightedButtonStyle = this.getTooltipHighlightedButtonStyle();
            return (<View style={TooltipHighlightedButtonStyle}>{this.props.children}</View>);
        };
        this.renderHighlightedButton = () => {
            const { closeOnlyOnBackdropPress } = this.props;
            if (closeOnlyOnBackdropPress) {
                return this.renderTouchableHighlightedButton();
            }
            else {
                return this.renderStaticHighlightedButton();
            }
        };
        this.renderContent = (withTooltip) => {
            const { popover, withPointer, toggleOnPress, toggleAction } = this.props;
            if (!withTooltip) {
                return this.wrapWithPress(toggleOnPress, toggleAction, this.props.children);
            }
            const tooltipStyle = this.getTooltipStyle();
            return (<View>
        {this.renderHighlightedButton()}
        {withPointer && this.renderPointer(tooltipStyle.top)}
        <View style={tooltipStyle} testID="tooltipPopoverContainer">
          {popover}
        </View>
      </View>);
        };
        this.getElementPosition = () => {
            const { skipAndroidStatusBar } = this.props;
            this.renderedElement &&
                this.renderedElement.measure((_frameOffsetX, _frameOffsetY, width, height, pageOffsetX, pageOffsetY) => {
                    this._isMounted &&
                        this.setState({
                            xOffset: pageOffsetX,
                            yOffset: isIOS || skipAndroidStatusBar
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
                });
        };
        this.renderStaticModalContent = () => {
            const { withOverlay, overlayColor } = this.props;
            return (<Fragment>
        <TouchableOpacity style={this.containerStyle(withOverlay, overlayColor)} onPress={this.toggleTooltip} activeOpacity={1}/>
        <View>{this.renderContent(true)}</View>
      </Fragment>);
        };
        this.renderTogglingModalContent = () => {
            const { withOverlay, overlayColor } = this.props;
            return (<TouchableOpacity style={this.containerStyle(withOverlay, overlayColor)} onPress={this.toggleTooltip} activeOpacity={1}>
        {this.renderContent(true)}
      </TouchableOpacity>);
        };
        this.renderModalContent = () => {
            const { closeOnlyOnBackdropPress } = this.props;
            if (closeOnlyOnBackdropPress) {
                return this.renderStaticModalContent();
            }
            else {
                return this.renderTogglingModalContent();
            }
        };
    }
    componentDidMount() {
        this._isMounted = true;
        // wait to compute onLayout values.
        requestAnimationFrame(this.getElementPosition);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        const { isVisible } = this.state;
        const { onOpen, ModalComponent } = this.props;
        return (<View collapsable={false} ref={(e) => {
            this.renderedElement = e;
        }}>
        {this.renderContent(false)}
        <ModalComponent animationType="fade" visible={isVisible} transparent onShow={onOpen}>
          {this.renderModalContent()}
        </ModalComponent>
      </View>);
    }
}
Tooltip.defaultProps = defaultProps;
export { Tooltip };
export default withTheme(Tooltip, 'Tooltip');
