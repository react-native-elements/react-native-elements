import { View, ViewStyle } from 'react-native';

type defaultLinearGradientPropsReturnParams = {
  colors: string[];
  start: { x: number; y: number };
  end: { x: number; y: number };
};

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

const defaultContainerStyle: ViewStyle = {
  overflow: 'hidden',
  borderRadius: 10,
};

// workaround to pass linear gradient props to View
const createDefaultLinearGradientProps = (
  backgroundColor: string,
  skeletonColor: string
): defaultLinearGradientPropsReturnParams => ({
  colors: [backgroundColor, skeletonColor, backgroundColor],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
});

export {
  defaultContainerStyle,
  createDefaultLinearGradientProps,
  defaultProps,
};
