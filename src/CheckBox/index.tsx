import { withTheme } from '../config';
import { CheckBox, CheckBoxProps } from '@rneui/base/dist/CheckBox/CheckBox';

export { CheckBox };
export type { CheckBoxProps };
export default withTheme<CheckBoxProps>(CheckBox, 'CheckBox');
