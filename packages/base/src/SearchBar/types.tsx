import {
  PressableProps,
  ViewStyle,
  StyleProp,
  TextStyle,
  ActivityIndicatorProps,
} from 'react-native';
import { Theme } from '../helpers';
import { IconNode } from '../Icon';
import { InputProps } from '../Input';

export type SearchBarAndroidProps = SearchBarBaseProps & {
  platform?: 'android';
  cancelIcon?: IconNode;
  /**
   * Callback Function on cancel icon press
   */
  onCancel?: () => any;
  /**
   * Callback Function on keyboard hides
   */
  onKeyboardHide?: () => any;
};

export type SearchBarIosProps = SearchBarBaseProps & {
  platform?: 'ios';
  cancelButtonProps?: Partial<PressableProps> & {
    buttonStyle?: StyleProp<ViewStyle>;
    buttonTextStyle?: StyleProp<TextStyle>;
    color?: string;
    buttonDisabledStyle?: StyleProp<ViewStyle>;
    buttonDisabledTextStyle?: StyleProp<ViewStyle>;
  };
  cancelButtonTitle?: string;
  /**
   * Show cancel
   */
  showCancel?: boolean;
  /**
   * Icon for search
   */
  searchIcon?: IconNode;
  clearIcon?: IconNode;
  /**
   * Callback Function on cancel icon press
   */
  onCancel?: () => any;
};

export type SearchBarDefaultProps = SearchBarBaseProps & {
  /**
   * @default default
   */
  platform?: 'default';
  lightTheme?: boolean;
  round?: boolean;
};

export interface SearchBarBaseProps extends InputProps {
  /**
   * Style for container
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Style for input container
   */
  inputContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Clear Icon
   */
  clearIcon?: IconNode;
  /**
   * Icon for search
   */
  searchIcon?: IconNode;
  /**
   * Input Style
   */
  inputStyle?: StyleProp<TextStyle>;
  /**
   * ActivityIndicatorProps
   */
  loadingProps?: ActivityIndicatorProps;
  /**
   * Show loading
   */
  showLoading?: boolean;
  /**
   * Left Icon Container Style
   */
  leftIconContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Right Icon Container Style
   */
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  /**
   * @type Callback Function on clear icon press
   */
  onClear?(): void;
  theme?: Theme;
}

export type SearchBarProps =
  | SearchBarDefaultProps
  | SearchBarAndroidProps
  | SearchBarIosProps;
