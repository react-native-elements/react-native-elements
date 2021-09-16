var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { TouchableOpacity, Modal, View, StatusBar, I18nManager, Platform, Dimensions, Pressable, } from 'react-native';
import Triangle from './components/Triangle';
import { ScreenWidth, isIOS } from '../helpers';
import { getElementVisibleWidth } from './helpers/getTooltipCoordinate';
import { getTooltipStyle } from './helpers/getTooltipStyle';
/** Tooltips display informative text when users tap on an element. */
export const Tooltip = (_a) => {
    var { withOverlay = true, theme, overlayColor = '#fafafa14', highlightColor = 'transparent', withPointer = true, toggleOnPress = true, toggleAction = 'onPress', height = 40, width = 150, containerStyle = {}, backgroundColor = '#617080', pointerColor = backgroundColor, pointerStyle, onClose = () => { }, onOpen = () => { }, visible = false, skipAndroidStatusBar = false, ModalComponent = Modal, closeOnlyOnBackdropPress = false } = _a, props = __rest(_a, ["withOverlay", "theme", "overlayColor", "highlightColor", "withPointer", "toggleOnPress", "toggleAction", "height", "width", "containerStyle", "backgroundColor", "pointerColor", "pointerStyle", "onClose", "onOpen", "visible", "skipAndroidStatusBar", "ModalComponent", "closeOnlyOnBackdropPress"]);
    const isMounted = React.useRef(false);
    const renderedElement = React.useRef(null);
    const [dimensions, setDimensions] = React.useState({
        yOffset: 0,
        xOffset: 0,
        elementWidth: 0,
        elementHeight: 0,
    });
    const getElementPosition = React.useCallback(() => {
        renderedElement.current &&
            renderedElement.current.measure((_frameOffsetX, _frameOffsetY, _width, _height, pageOffsetX, pageOffsetY) => {
                isMounted.current &&
                    setDimensions({
                        xOffset: pageOffsetX,
                        yOffset: isIOS || skipAndroidStatusBar
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
            });
    }, [skipAndroidStatusBar]);
    const handleOnPress = React.useCallback(() => {
        getElementPosition();
        isMounted.current && toggleOnPress && (visible ? onClose === null || onClose === void 0 ? void 0 : onClose() : onOpen === null || onOpen === void 0 ? void 0 : onOpen());
    }, [getElementPosition, onClose, onOpen, toggleOnPress, visible]);
    const Pointer = ({ tooltipY }) => {
        const { yOffset, xOffset, elementHeight, elementWidth } = dimensions;
        const pastMiddleLine = yOffset > (tooltipY || 0);
        if (!withPointer) {
            return null;
        }
        return (<View style={{
                position: 'absolute',
                top: pastMiddleLine ? yOffset - 13 : yOffset + elementHeight - 2,
                [I18nManager.isRTL ? 'right' : 'left']: xOffset +
                    getElementVisibleWidth(elementWidth, xOffset, ScreenWidth) / 2 -
                    7.5,
            }}>
        <Triangle style={pointerStyle} pointerColor={pointerColor} isDown={pastMiddleLine}/>
      </View>);
    };
    const TooltipHighlightedButtonStyle = React.useMemo(() => {
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
    }, [dimensions, highlightColor]);
    const HighlightedButton = () => {
        if (closeOnlyOnBackdropPress) {
            return (<Pressable testID="tooltipTouchableHighlightedButton" onPress={handleOnPress} style={TooltipHighlightedButtonStyle}>
          {props.children}
        </Pressable>);
        }
        else {
            return (<View style={TooltipHighlightedButtonStyle}>{props.children}</View>);
        }
    };
    /**
     * Listen for change in layout, i.e. Portrait or Landscape
     */
    React.useEffect(() => {
        isMounted.current = true;
        // Wait till element's position is calculated
        requestAnimationFrame(getElementPosition);
        Dimensions.addEventListener('change', getElementPosition);
        return () => {
            isMounted.current = false;
            Dimensions.removeEventListener('change', getElementPosition);
        };
    }, [getElementPosition]);
    /**
     * Calculate position of tooltip
     */
    const tooltipStyle = React.useMemo(() => getTooltipStyle(Object.assign(Object.assign({}, dimensions), { backgroundColor,
        containerStyle,
        height,
        width,
        withPointer })), [backgroundColor, containerStyle, dimensions, height, width, withPointer]);
    return (<View collapsable={false} ref={renderedElement}>
      <Pressable {...{ [toggleAction]: handleOnPress }} delayLongPress={250}>
        {props.children}
      </Pressable>
      <ModalComponent transparent visible={visible} onShow={onOpen} animationType="fade">
        <TouchableOpacity style={{
            backgroundColor: withOverlay ? overlayColor : 'transparent',
            flex: 1,
        }} onPress={handleOnPress} activeOpacity={1}>
          <View>
            <HighlightedButton />
            <Pointer tooltipY={tooltipStyle.top}/>
            <View style={tooltipStyle} testID="tooltipPopoverContainer">
              {props.popover}
            </View>
          </View>
        </TouchableOpacity>
      </ModalComponent>
    </View>);
};
Tooltip.displayName = 'Tooltip';
