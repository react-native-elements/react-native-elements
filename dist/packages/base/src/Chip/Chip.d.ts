import { RneFunctionComponent } from '../helpers';
import { ButtonProps } from '../Button';
export declare type ChipProps = Omit<ButtonProps, 'loading' | 'loadingStyle' | 'loadingProps'> & {
    /** Type of button. */
    type?: 'solid' | 'outline';
};
/** Chips are compact elements that represent an input, attribute, or action.
 * They may display text, icons, or both. */
export declare const Chip: RneFunctionComponent<ChipProps>;
