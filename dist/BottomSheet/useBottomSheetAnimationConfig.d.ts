import { Animated, ModalProps } from 'react-native';
export interface BottomSheetAnimationConfigProps {
    animationDuration: number;
    isVisible: boolean;
    animationType: ModalProps['animationType'];
    easing?: Animated.TimingAnimationConfig['easing'];
}
declare const useBottomSheetAnimationConfig: ({ animationDuration, isVisible, animationType, easing: _easing, }: BottomSheetAnimationConfigProps) => {
    onContentContainerLayout: (event: import("react-native").LayoutChangeEvent) => void;
    isVisibleWithAnimationDelay: boolean;
    fadeValue: Animated.Value;
    translateYValue: Animated.Value;
    contentContainerHeight: number;
};
export default useBottomSheetAnimationConfig;
