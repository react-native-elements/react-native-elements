import { Text, TextProps } from '@rneui/base/Text/Text';
import { withTheme } from '../config';

export { Text };
export type { TextProps };
export default withTheme<TextProps>(Text, 'Text');
