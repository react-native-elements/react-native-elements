import React from 'react';
import { Text, View } from 'react-native';
import { RneFunctionComponent } from '../../src/helpers';

export type ComponentProps = {
  /** Type of the Component. */
  type?: string;

  /** Color of the Component. */
  color?: string;
};

/** The docs of the Component. */
export const Component: RneFunctionComponent<ComponentProps> = ({
  type = 'demoType',
  color = 'demoColor',
}) => {
  return (
    <View>
      <Text>{type}</Text>
      <Text>{color}</Text>
    </View>
  );
};

Component.displayName = 'Component';
