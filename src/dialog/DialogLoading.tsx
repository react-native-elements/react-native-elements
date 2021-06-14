import React from 'react';
import {
  StyleSheet,
  ViewStyle,
  ActivityIndicatorProps,
  ActivityIndicator,
  StyleProp,
  View,
} from 'react-native';
import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';

export type DialogLoadingProps = {
  loadingStyle?: StyleProp<ViewStyle>;
  loadingProps?: ActivityIndicatorProps;
};

const DialogLoading: RneFunctionComponent<DialogLoadingProps> = ({
  loadingStyle,
  loadingProps,
  theme,
}) => {
  return (
    <View style={styles.loadingView}>
      <ActivityIndicator
        style={StyleSheet.flatten([styles.loading, loadingStyle])}
        color={loadingProps?.color ?? theme?.colors?.primary}
        size={loadingProps?.size ?? 'large'}
        testID="Dialog__Loading"
        {...loadingProps}
      />
    </View>
  );
};

DialogLoading.defaultProps = {
  loadingProps: { size: 'large' },
};

const styles = StyleSheet.create({
  loading: {
    marginVertical: 20,
  },
  loadingView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default withTheme(DialogLoading, 'DialogLoading');
