import {
  BottomSheet,
  BottomSheetProps,
} from '@react-native-elements/base/dist/BottomSheet/BottomSheet';
import { withTheme } from '../config';

export { BottomSheet };
export type { BottomSheetProps };
export default withTheme<BottomSheetProps>(BottomSheet, 'BottomSheet');
