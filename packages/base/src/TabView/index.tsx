import { TabViewBase, TabViewBaseProps } from './TabView';
import { TabViewItem, TabViewItemProps } from './TabView.Item';

export const TabView = Object.assign(TabViewBase, {
  Item: TabViewItem,
});
export type { TabViewBaseProps, TabViewItemProps };
