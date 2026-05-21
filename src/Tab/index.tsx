import { TabBase, TabProps } from './Tab';
import { TabItem, TabItemProps } from './Tab.Item';

export const Tab = Object.assign(TabBase, {
  Item: TabItem,
});

export type { TabProps, TabItemProps };
