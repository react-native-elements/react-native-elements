import { ButtonProps } from '../Button';
import { RneFunctionComponent } from '../helpers';
export declare type TabItemProps = ButtonProps & {
    /** Allows to define if TabItem is active. */
    active?: boolean;
    /** Define the background Variant. */
    variant?: 'primary' | 'default';
};
/** They are indivual item of the parent Tab.
 * They are clickable and allows users to click and change Tab.
 * Receives all [Button](https://reactnativeelements.com/docs/button#props) props. */
export declare const TabItem: RneFunctionComponent<TabItemProps>;
