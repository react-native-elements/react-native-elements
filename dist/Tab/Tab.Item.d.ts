import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ButtonProps } from '../Button';
import { RneFunctionComponent } from '../helpers';
export interface ParentProps {
    dense?: boolean;
    buttonStyle?: ActiveTabItemStyle<ViewStyle>;
    titleStyle?: ActiveTabItemStyle<TextStyle>;
    containerStyle?: ActiveTabItemStyle<ViewStyle>;
    iconPosition?: ButtonProps['iconPosition'];
}
declare type ActiveTabItemStyle<T = {}> = ((active: boolean) => StyleProp<T>) | StyleProp<T>;
export interface TabItemProps extends Omit<ButtonProps, 'buttonStyle' | 'titleStyle' | 'containerStyle' | 'iconContainerStyle'>, ParentProps {
    active?: boolean;
    variant?: 'primary' | 'default';
    iconContainerStyle?: ActiveTabItemStyle<ViewStyle>;
    _parentProps?: ParentProps;
}
export declare const TabItem: RneFunctionComponent<TabItemProps>;
export {};
