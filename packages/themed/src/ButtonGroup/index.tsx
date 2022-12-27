import { withTheme } from '../config';
import {
  ButtonGroup,
  ButtonGroupProps,
} from '@rneui/base/ButtonGroup/ButtonGroup';

export { ButtonGroup };
export type { ButtonGroupProps };
export default withTheme<ButtonGroupProps>(ButtonGroup, 'ButtonGroup');
