import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';
import {
  TabBase,
  TabBaseProps,
} from '@react-native-elements/base/dist/Tab/Tab';
import {
  TabItem,
  TabItemProps,
} from '@react-native-elements/base/dist/Tab/Tab.Item';

const ThemedTabItem = withTheme(TabItem, 'TabItem');

export type TabProps = RneFunctionComponent<TabBaseProps> & {
  Item: typeof ThemedTabItem;
};

export const Tab: TabProps = Object.assign(TabBase);

export type { TabBaseProps, TabItemProps };

export const ThemedTab = Object.assign(withTheme(Tab, 'Tab'), {
  Item: ThemedTabItem,
});

export default ThemedTab;
