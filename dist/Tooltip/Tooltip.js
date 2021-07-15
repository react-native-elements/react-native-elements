"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = void 0;
const react_1 = __importStar(require("react"));
const react_native_1 = require("react-native");
const helpers_1 = require("../helpers");
const Triangle_1 = __importDefault(require("./components/Triangle"));
const getTooltipCoordinate_1 = __importStar(require("./getTooltipCoordinate"));
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
    ModalComponent: react_native_1.Modal,
    closeOnlyOnBackdropPress: false,
};
class Tooltip extends react_1.default.Component {
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
                return (<react_native_1.TouchableOpacity {...{ [toggleAction]: this.toggleTooltip }} delayLongPress={250} activeOpacity={1}>
          {children}
        </react_native_1.TouchableOpacity>);
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
            const { x, y } = getTooltipCoordinate_1.default(xOffset, yOffset, elementWidth, elementHeight, helpers_1.ScreenWidth, helpers_1.ScreenHeight, width, height, withPointer);
            return react_native_1.StyleSheet.flatten([
                {
                    position: 'absolute',
                    [react_native_1.I18nManager.isRTL ? 'right' : 'left']: x,
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
            return (<react_native_1.View style={{
                position: 'absolute',
                top: pastMiddleLine ? yOffset - 13 : yOffset + elementHeight - 2,
                [react_native_1.I18nManager.isRTL ? 'right' : 'left']: xOffset +
                    getTooltipCoordinate_1.getElementVisibleWidth(elementWidth, xOffset, helpers_1.ScreenWidth) / 2 -
                    7.5,
            }}>
        <Triangle_1.default style={{ borderBottomColor: pointerColor || backgroundColor }} isDown={pastMiddleLine}/>
      </react_native_1.View>);
        };
        this.getTooltipHighlightedButtonStyle = () => {
            const { highlightColor } = this.props;
            const { yOffset, xOffset, elementWidth, elementHeight } = this.state;
            return {
                position: 'absolute',
                top: yOffset,
                [react_native_1.I18nManager.isRTL ? 'right' : 'left']: xOffset,
                backgroundColor: highlightColor,
                overflow: 'visible',
                width: elementWidth,
                height: elementHeight,
            };
        };
        this.renderTouchableHighlightedButton = () => {
            const TooltipHighlightedButtonStyle = this.getTooltipHighlightedButtonStyle();
            return (<react_native_1.TouchableOpacity testID="tooltipTouchableHighlightedButton" onPress={() => this.toggleTooltip()} style={TooltipHighlightedButtonStyle}>
        {this.props.children}
      </react_native_1.TouchableOpacity>);
        };
        this.renderStaticHighlightedButton = () => {
            const TooltipHighlightedButtonStyle = this.getTooltipHighlightedButtonStyle();
            return (<react_native_1.View style={TooltipHighlightedButtonStyle}>{this.props.children}</react_native_1.View>);
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
            return (<react_native_1.View>
        {this.renderHighlightedButton()}
        {withPointer && this.renderPointer(tooltipStyle.top)}
        <react_native_1.View style={tooltipStyle} testID="tooltipPopoverContainer">
          {popover}
        </react_native_1.View>
      </react_native_1.View>);
        };
        this.getElementPosition = () => {
            const { skipAndroidStatusBar } = this.props;
            this.renderedElement &&
                this.renderedElement.measure((_frameOffsetX, _frameOffsetY, width, height, pageOffsetX, pageOffsetY) => {
                    this._isMounted &&
                        this.setState({
                            xOffset: pageOffsetX,
                            yOffset: helpers_1.isIOS || skipAndroidStatusBar
                                ? pageOffsetY
                                : pageOffsetY -
                                    react_native_1.Platform.select({
                                        android: react_native_1.StatusBar.currentHeight,
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
            return (<react_1.Fragment>
        <react_native_1.TouchableOpacity style={this.containerStyle(withOverlay, overlayColor)} onPress={this.toggleTooltip} activeOpacity={1}/>
        <react_native_1.View>{this.renderContent(true)}</react_native_1.View>
      </react_1.Fragment>);
        };
        this.renderTogglingModalContent = () => {
            const { withOverlay, overlayColor } = this.props;
            return (<react_native_1.TouchableOpacity style={this.containerStyle(withOverlay, overlayColor)} onPress={this.toggleTooltip} activeOpacity={1}>
        {this.renderContent(true)}
      </react_native_1.TouchableOpacity>);
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
        return (<react_native_1.View collapsable={false} ref={(e) => {
            this.renderedElement = e;
        }}>
        {this.renderContent(false)}
        <ModalComponent animationType="fade" visible={isVisible} transparent onShow={onOpen}>
          {this.renderModalContent()}
        </ModalComponent>
      </react_native_1.View>);
    }
}
exports.Tooltip = Tooltip;
Tooltip.defaultProps = defaultProps;
Tooltip.displayName = 'Tooltip';
