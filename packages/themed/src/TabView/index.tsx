import { withTheme } from '../config';
import { TabViewBase, TabViewProps } from '@rneui/base/TabView/TabView';
import {
  TabViewItem,
  TabViewItemProps,
} from '@rneui/base/TabView/TabView.Item';

export type { TabViewProps, TabViewItemProps };

export default Object.assign(withTheme(TabViewBase, 'TabView'), {
  Item: withTheme<TabViewItemProps>(TabViewItem, 'TabViewItem'),
});
