import React from 'react';
import { View, Platform, StyleSheet, StyleProp, ViewStyle } from 'react-native';
import { RneFunctionComponent } from '../helpers';

export type CardBaseProps = {
  containerStyle?: StyleProp<ViewStyle>;
  wrapperStyle?: StyleProp<ViewStyle>;
};

export const CardBase: RneFunctionComponent<CardBaseProps> = ({
  children,
  containerStyle,
  wrapperStyle,
  theme,
  ...attributes
}) => {
  return (
    <View
      {...attributes}
      style={StyleSheet.flatten([
        {
          backgroundColor: theme?.colors?.white,
          borderWidth: 1,
          padding: 15,
          margin: 15,
          marginBottom: 0,
          borderColor: theme?.colors?.grey5,
          ...Platform.select({
            android: {
              elevation: 1,
            },
            default: {
              shadowColor: 'rgba(0,0,0, .2)',
              shadowOffset: { height: 0, width: 0 },
              shadowOpacity: 1,
              shadowRadius: 1,
            },
          }),
        },
        containerStyle && containerStyle,
      ])}
    >
      <View
        style={StyleSheet.flatten([
          styles.wrapper,
          wrapperStyle && wrapperStyle,
        ])}
      >
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'transparent',
  },
});

CardBase.displayName = 'CardBase';
