import { withTheme } from '../config';
import { TabViewBase } from './TabView';
import { TabViewItem } from './TabView.Item';
const ThemedTabViewItem = withTheme(TabViewItem, 'TabViewItem');
export const TabView = Object.assign(TabViewBase);
export const ThemedTabView = Object.assign(withTheme(TabView, 'TabView'), {
    Item: ThemedTabViewItem,
});
export default ThemedTabView;
