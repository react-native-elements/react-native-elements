import { withTheme } from '../config';
import { TabViewBase } from '@rneui/base/dist/TabView/TabView';
import { TabViewItem, } from '@rneui/base/dist/TabView/TabView.Item';
export default Object.assign(withTheme(TabViewBase, 'TabView'), {
    Item: withTheme(TabViewItem, 'TabViewItem'),
});
