import { withTheme } from '../config';
import { TabBase, TabProps } from '@react-native-elements/base/dist/Tab/Tab';
import {
  TabItem,
  TabItemProps,
} from '@react-native-elements/base/dist/Tab/Tab.Item';

export type { TabProps, TabItemProps };

export const ThemedTab = Object.assign(withTheme(TabBase, 'Tab'), {
  Item: withTheme<TabItemProps>(TabItem, 'TabItem'),
});

export default ThemedTab;
