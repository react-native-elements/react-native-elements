import { withTheme } from '../config';
import { TabBase } from '@rneui/base/dist/Tab/Tab';
import { TabItem } from '@rneui/base/dist/Tab/Tab.Item';
export const ThemedTab = Object.assign(withTheme(TabBase, 'Tab'), {
    Item: withTheme(TabItem, 'TabItem'),
});
export default ThemedTab;
