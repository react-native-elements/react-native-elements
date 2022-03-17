import { IconObject } from '../../Icon';
import { StyleProp, TextStyle } from 'react-native';

export interface HeaderIcon extends IconObject {
  icon?: string;
  text?: string;
  color?: string;
  style?: StyleProp<TextStyle>;
}
