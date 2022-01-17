import { withTheme } from '../config';
import {
  ButtonGroup,
  ButtonGroupProps,
} from '@react-native-elements/base/dist/ButtonGroup/ButtonGroup';

export { ButtonGroup };
export type { ButtonGroupProps };
export default withTheme<ButtonGroupProps>(ButtonGroup, 'ButtonGroup');
