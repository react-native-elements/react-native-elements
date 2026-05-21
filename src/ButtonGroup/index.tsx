import { withTheme } from '../config';
import {
  ButtonGroup,
  ButtonGroupProps,
} from '@rneui/base/dist/ButtonGroup/ButtonGroup';

export { ButtonGroup };
export type { ButtonGroupProps };
export default withTheme<ButtonGroupProps>(ButtonGroup, 'ButtonGroup');
