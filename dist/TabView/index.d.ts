/// <reference types="react" />
import { TabViewProps } from '@rneui/base/dist/TabView/TabView';
import { TabViewItemProps } from '@rneui/base/dist/TabView/TabView.Item';
export type { TabViewProps, TabViewItemProps };
declare const _default: (import("react").FunctionComponent<import("react").PropsWithChildren<TabViewProps & {
    theme?: import("@rneui/base").Theme;
    children?: import("react").ReactNode;
}>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<TabViewProps & {
    theme?: import("@rneui/base").Theme;
    children?: import("react").ReactNode;
}>>>) & {
    Item: import("react").FunctionComponent<import("react").PropsWithChildren<TabViewItemProps>> | import("react").ForwardRefExoticComponent<import("react").RefAttributes<import("react").PropsWithChildren<TabViewItemProps>>>;
};
export default _default;
