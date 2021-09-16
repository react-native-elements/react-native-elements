/// <reference types="react" />
import { RneFunctionComponent } from '../helpers';
import { TabViewBaseProps } from './TabView';
import { TabViewItemProps } from './TabView.Item';
declare const ThemedTabViewItem: import("react").FunctionComponent<Omit<import("react-native").ViewProps & Partial<import("../config").ThemeProps<import("react-native").ViewProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & Partial<import("../config").ThemeProps<import("react-native").ViewProps>>>;
export declare type TabViewProps = RneFunctionComponent<TabViewBaseProps> & {
    Item: typeof ThemedTabViewItem;
};
export declare const TabView: TabViewProps;
export type { TabViewBaseProps, TabViewItemProps };
export declare const ThemedTabView: (import("react").FunctionComponent<Omit<TabViewBaseProps & Partial<import("../config").ThemeProps<TabViewBaseProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<TabViewBaseProps & Partial<import("../config").ThemeProps<TabViewBaseProps>>>) & {
    Item: import("react").FunctionComponent<Omit<import("react-native").ViewProps & Partial<import("../config").ThemeProps<import("react-native").ViewProps>>, keyof import("../config").ThemeProps<T>>> | import("react").ForwardRefExoticComponent<import("react-native").ViewProps & Partial<import("../config").ThemeProps<import("react-native").ViewProps>>>;
};
export default ThemedTabView;
