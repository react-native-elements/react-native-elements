import { withTheme } from '../config';
import { TabBase } from './Tab';
import { TabItem } from './Tab.Item';
const ThemedTabItem = withTheme(TabItem, 'TabItem');
export const Tab = Object.assign(TabBase);
export const ThemedTab = Object.assign(withTheme(Tab, 'Tab'), {
    Item: ThemedTabItem,
});
export default ThemedTab;
