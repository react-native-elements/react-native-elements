import React, { useMemo } from 'react';
import {
  Modal,
  StyleSheet,
  Pressable,
  ScrollView,
  StyleProp,
  ViewStyle,
  ModalProps,
  ScrollViewProps,
  Animated,
  Easing,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RneFunctionComponent } from '../helpers';
import useBottomSheetAnimationConfig from './useBottomSheetAnimationConfig';

export interface BottomSheetProps {
  /** Style of the bottom sheet's container. Use this to change the color of the underlay. */
  containerStyle?: StyleProp<ViewStyle>;

  /** Additional props handed to the `Modal`. */
  modalProps?: ModalProps;

  /** Style of the backdrop container. */
  backdropStyle?: StyleProp<ViewStyle>;

  /** Handler for backdrop press. */
  onBackdropPress?(): void;

  /** Is the modal component shown. */
  isVisible?: boolean;

  /** Used to add props to Scroll view. */
  scrollViewProps?: ScrollViewProps;

  /** Duration of backdrop fade and sheet translate.  */
  animationDuration?: number;

  /** Animation type.  */
  animationType?: ModalProps['animationType'];

  /** Easing config.  */
  easing?: Animated.TimingAnimationConfig['easing'];
}

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
/**
 * Overlay Modal that displays content from the bottom of the screen.
 * This opens from the bottom of the screen.
 */
export const BottomSheet: RneFunctionComponent<BottomSheetProps> = ({
  containerStyle,
  backdropStyle,
  onBackdropPress = () => null,
  isVisible = false,
  modalProps = {},
  children,
  scrollViewProps = {},
  animationDuration = 300,
  animationType = 'slide',
  easing = Easing.elastic(0.7),
  ...rest
}) => {
  const {
    isVisibleWithAnimationDelay,
    translateYValue,
    fadeValue,
    onContentContainerLayout,
    contentContainerHeight,
  } = useBottomSheetAnimationConfig({
    animationDuration,
    isVisible,
    animationType: modalProps.animationType || animationType,
    easing,
  });

  const contentContainerStyle = useMemo(() => {
    if (animationType === 'slide') {
      return {
        transform: [
          {
            translateY: translateYValue,
          },
        ],
      };
    } else if (animationType === 'fade') {
      return { opacity: fadeValue };
    } else {
      return null;
    }
  }, [animationType, fadeValue, translateYValue]);

  return (
    <Modal
      onRequestClose={onBackdropPress}
      transparent={true}
      visible={isVisibleWithAnimationDelay}
      {...modalProps}
      animationType="none"
    >
      <SafeAreaView
        style={StyleSheet.flatten([
          styles.safeAreaView,
          containerStyle && containerStyle,
          { opacity: contentContainerHeight ? 1 : 0 },
        ])}
        pointerEvents="box-none"
        {...rest}
      >
        <AnimatedPressable
          onPress={onBackdropPress}
          style={[
            StyleSheet.absoluteFill,
            styles.backdrop,
            backdropStyle,
            { opacity: fadeValue },
          ]}
          testID="RNE__Overlay__backdrop"
        />
        <Animated.View
          onLayout={onContentContainerLayout}
          style={contentContainerStyle}
        >
          <ScrollView {...scrollViewProps}>{children}</ScrollView>
        </Animated.View>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    flexDirection: 'column-reverse',
  },
  backdrop: {
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
});

BottomSheet.displayName = 'BottomSheet';
