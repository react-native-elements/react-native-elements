import { TabBase, TabBaseProps } from './Tab';
import { TabItem, TabItemProps } from './Tab.Item';

export const Tab = Object.assign(TabBase, {
  Item: TabItem,
});
export type TabProps = typeof Tab;

export type { TabBaseProps, TabItemProps };
