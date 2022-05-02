interface AccessibilityProps {
  accessibilityHint?: string;
  accessibilityLabel?: string;
}

export const inlineAccessibilityProps = (
  props: AccessibilityProps | undefined
): AccessibilityProps | void => {
  if (props === undefined) {
    return;
  }
  const { accessibilityHint, accessibilityLabel } = props;
  return {
    ...(accessibilityHint && { accessibilityHint }),
    ...(accessibilityLabel && { accessibilityLabel }),
  };
};
