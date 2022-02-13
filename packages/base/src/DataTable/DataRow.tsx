import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Row } from 'react-native-table-component';
import { RneFunctionComponent } from '../helpers';

export type DataRowProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  cellTextStyle: StyleProp<TextStyle>;
  widthArr?: Array<Number>;
  height?: Array<Number>;
  flexArr?: Array<Number>;
  data?: Array<any>;
};
/*
 * Component for DataTable to render data passed in through props in rows.
 */
export const DataRow: RneFunctionComponent<DataRowProps> = (props) => {
  return <Row {...props} />;
};

Row.displayName = 'DataRow';
