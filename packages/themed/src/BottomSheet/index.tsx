import {
  BottomSheet,
  BottomSheetProps,
} from '@rneui/base/BottomSheet/BottomSheet';
import { withTheme } from '../config';

export { BottomSheet };
export type { BottomSheetProps };
export default withTheme<BottomSheetProps>(BottomSheet, 'BottomSheet');
