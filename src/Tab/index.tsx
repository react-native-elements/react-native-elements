import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';
import { TabBase, TabBaseProps } from './Tab';
import { TabItem, TabItemProps } from './TabItem';

const ThemedTabItem = withTheme(TabItem, 'TabItem');

export type TabProps = RneFunctionComponent<TabBaseProps> & {
  Item: typeof ThemedTabItem;
};

export const Tab: TabProps = Object.assign(TabBase);

export type { TabBaseProps, TabItemProps };

export const ThemedTab = Object.assign(withTheme(Tab, 'Tab'), {
  Item: ThemedTabItem,
});

/**
 * RNE Tab
 *
 * **Preview**
 *
 * ![URL](URL)
 *
 * [**Documentation**](https://reactnativeelements.com/docs/tab)
 */
export default ThemedTab;
