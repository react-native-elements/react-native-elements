import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Cols } from 'react-native-table-component';
import { RneFunctionComponent } from '@react-native-elements/base/src/helpers';

export type DataColsProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  widthArr?: Array<Number>;
  heightArr?: Array<Number>;
  flexArr?: Array<Number>;
  data?: Array<any>;
};
/*
 * Component for DataTable to render data passed in through props in rows.
 */
export const DataCols: RneFunctionComponent<DataColsProps> = (props) => {
  return <Cols {...props} />;
};

Cols.displayName = 'DataCols';
