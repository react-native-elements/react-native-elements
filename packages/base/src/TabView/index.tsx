import { TabViewBase, TabViewProps } from './TabView';
import { TabViewItem, TabViewItemProps } from './TabView.Item';

export const TabView = Object.assign(TabViewBase, {
  Item: TabViewItem,
});
export type { TabViewProps, TabViewItemProps };
