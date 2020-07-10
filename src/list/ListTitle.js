import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import Text from '../text/Text';
import { renderNode } from '../helpers';
import { withTheme } from '../config';

const ANDROID_SECONDARY = 'rgba(0, 0, 0, 0.54)';

const renderText = (content, defaultProps, style) =>
  renderNode(Text, content, {
    ...defaultProps,
    style: StyleSheet.flatten([style, defaultProps && defaultProps.style]),
  });

function ListTitle({
  title,
  subtitle,
  titleProps,
  subtitleProps,
  titleStyle,
  subtitleStyle,
  containerStyle,
  alignRight,
  ...props
}) {
  return (
    <View
      style={StyleSheet.flatten([
        styles.contentContainer,
        alignRight && styles.rightContentContainer,
        containerStyle,
      ])}
    >
      {renderText(
        title,
        { testID: 'listItemTitle', ...titleProps },
        StyleSheet.flatten([
          styles.title,
          alignRight && styles.rightTitle,
          titleStyle,
        ])
      )}
      {renderText(
        subtitle,
        subtitleProps,
        StyleSheet.flatten([
          styles.subtitle,
          alignRight && styles.rightSubtitle,
          subtitleStyle,
        ])
      )}
    </View>
  );
}

const styles = {
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  title: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        fontSize: 17,
      },
      default: {
        fontSize: 16,
      },
    }),
  },
  subtitle: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        fontSize: 15,
      },
      default: {
        color: ANDROID_SECONDARY,
        fontSize: 14,
      },
    }),
  },
  rightContentContainer: {
    flex: 0.5,
    alignItems: 'flex-end',
  },
  rightTitle: {
    color: ANDROID_SECONDARY,
  },
  rightSubtitle: {
    color: ANDROID_SECONDARY,
  },
};

export default withTheme(ListTitle, 'ListTitle');
