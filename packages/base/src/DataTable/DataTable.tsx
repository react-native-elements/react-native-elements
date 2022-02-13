import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Table } from 'react-native-table-component';
import { RneFunctionComponent } from '../helpers';

export type DataTableProps = {
  style?: StyleProp<ViewStyle>;
  borderStyle?: StyleProp<ViewStyle>;
};
/** Data tables are used to represent data in a tabular format.
 * This component is imported from [react-native-table-component](https://github.com/Gil2015/react-native-table-component).
 * NOTE:
 * - Cells in Col and Cols components do not support adaptive height.
 * - Please set the magin value in the textStyle property to adjust the padding and do not use the padding.
 * - If parent element is not Table component，please add the type of borderstyle. */
export const DataTable: RneFunctionComponent<DataTableProps> = (props) => {
  return <Table {...props} />;
};

Table.displayName = 'DataTable';
