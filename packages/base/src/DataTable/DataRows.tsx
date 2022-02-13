import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Rows } from 'react-native-table-component';
import { RneFunctionComponent } from '../helpers';

export type DataRowsProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  cellTextStyle: StyleProp<TextStyle>;
  widthArr?: Array<Number>;
  height?: Array<Number>;
  flexArr?: Array<Number>;
  data?: Array<any>;
};
/*
 * Component for DataTable to render a single row of data.
 */
export const DataRows: RneFunctionComponent<DataRowsProps> = (props) => {
  return <Rows {...props} />;
};

Rows.displayName = 'DataRows';
