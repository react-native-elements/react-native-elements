import React from 'react';
import { StyleSheet, View } from 'react-native';
import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';
import { TextProps } from '../text/Text';

type ItemContentProps = TextProps & { right?: boolean };

const ListItemContent: RneFunctionComponent<ItemContentProps> = ({
  style,
  right,
  children,
  ...props
}) => {
  const containerStyle = right ? styles.rightContainer : styles.container;
  return (
    <View style={[containerStyle, style]} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  rightContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});

export default withTheme(ListItemContent, 'ListItemContent');
