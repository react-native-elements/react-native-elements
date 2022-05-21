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
  onCancel?: () => any;
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
  showCancel?: boolean;
  searchIcon?: IconNode;
  clearIcon?: IconNode;
  /**
   * @type Callback Function on cancel icon press
   */
  onCancel?: () => any;
};

export type SearchBarDefaultProps = SearchBarBaseProps & {
  platform?: 'default';
  lightTheme?: boolean;
  round?: boolean;
};

export interface SearchBarBaseProps extends InputProps {
  containerStyle?: StyleProp<ViewStyle>;
  inputContainerStyle?: StyleProp<ViewStyle>;
  clearIcon?: IconNode;
  searchIcon?: IconNode;
  inputStyle?: StyleProp<TextStyle>;
  loadingProps?: ActivityIndicatorProps;
  showLoading?: boolean;
  leftIconContainerStyle?: StyleProp<ViewStyle>;
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
