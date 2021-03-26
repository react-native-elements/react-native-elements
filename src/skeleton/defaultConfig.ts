import { StyleProp, ViewStyle } from 'react-native';

type defaultLinearGradientPropsReturnParams = {
  colors: string[];
  start: { x: number; y: number };
  end: { x: number; y: number };
};

const defaultContainerStyle: StyleProp<ViewStyle> = {
  overflow: 'hidden',
  borderRadius: 10,
};

// workaround to pass linear gradient props to View
const defaultLinearGradientProps = (
  backgroundColor: string,
  skeletonColor: string
): defaultLinearGradientPropsReturnParams => ({
  colors: [backgroundColor, skeletonColor, backgroundColor],
  start: { x: 0, y: 0 },
  end: { x: 1, y: 0 },
});

export { defaultContainerStyle, defaultLinearGradientProps };
