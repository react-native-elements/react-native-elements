import React from 'react';
import { StyleSheet } from 'react-native';
import { DividerProps, Divider } from '../Divider';
import { RneFunctionComponent } from '../helpers';

export interface CardDividerProps extends DividerProps {}

/** Add divider to the card which acts as a separator between elements.
 * This, Receives all [Divider](divider#props) props. */
export const CardDivider: RneFunctionComponent<CardDividerProps> = ({
  style,
  ...rest
}) => <Divider style={StyleSheet.flatten([styles.divider, style])} {...rest} />;

const styles = StyleSheet.create({
  divider: {
    marginBottom: 15,
  },
});

CardDivider.displayName = 'Card.Divider';
