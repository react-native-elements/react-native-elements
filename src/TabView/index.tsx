import { withTheme } from '../config';
import { RneFunctionComponent } from '../helpers';

import { TabViewBase, TabViewBaseProps } from './TabView';
import { TabViewItem } from './TabViewItem';

const ThemedTabViewItem = withTheme(TabViewItem, 'TabViewItem');

export type TabViewProps = RneFunctionComponent<TabViewBaseProps> & {
  Item: typeof ThemedTabViewItem;
};

export const TabView: TabViewProps = Object.assign(TabViewBase);

export type { TabViewBaseProps };

export const ThemedTabView = Object.assign(withTheme(TabView, 'TabView'), {
  Item: ThemedTabViewItem,
});

export default ThemedTabView;
