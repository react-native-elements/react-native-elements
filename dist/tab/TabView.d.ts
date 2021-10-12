import { Animated, ViewProps } from 'react-native';
import { RneFunctionComponent } from '../helpers';
declare const TabViewItem: RneFunctionComponent<ViewProps>;
export declare type TabViewProps = {
    value?: number;
    onChange?: (value: number) => any;
    animationType?: 'spring' | 'timing';
    animationConfig?: Omit<Animated.SpringAnimationConfig & Animated.TimingAnimationConfig, 'toValue'>;
};
declare const TabView: RneFunctionComponent<TabViewProps>;
interface TabView extends RneFunctionComponent<TabViewProps> {
    Item: typeof TabViewItem;
}
declare const TabViewComponent: TabView;
export default TabViewComponent;
