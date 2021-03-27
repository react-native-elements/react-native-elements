import { View } from 'react-native';
const defaultProps = {
    ViewComponent: View,
    duration: 1000,
    fluid: false,
    rounded: false,
    height: 20,
    width: '100%',
    containerStyle: {},
    easingType: 'ease',
    linearGradientProps: {},
};
const defaultContainerStyle = {
    overflow: 'hidden',
    borderRadius: 10,
};
// workaround to pass linear gradient props to View
const createDefaultLinearGradientProps = (backgroundColor, skeletonColor) => ({
    colors: [backgroundColor, skeletonColor, backgroundColor],
    start: { x: 0, y: 0 },
    end: { x: 1, y: 0 },
});
export { defaultContainerStyle, createDefaultLinearGradientProps, defaultProps, };
