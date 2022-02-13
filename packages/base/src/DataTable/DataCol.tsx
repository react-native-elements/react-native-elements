import React from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import { Col } from 'react-native-table-component';
import { RneFunctionComponent } from '../helpers';

export type DataColProps = {
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  heightArr?: Array<Number>;
  flexArr?: Array<Number>;
  height?: Array<Number>;
  width?: Number;
  data?: Array<any>;
  flex?: Number;
};
/*
 * Component for DataTable to render data passed in through props in rows.
 */
export const DataCol: RneFunctionComponent<DataColProps> = (props) => {
  return <Col {...props} />;
};

Col.displayName = 'DataCol';
