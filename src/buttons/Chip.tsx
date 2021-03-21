import React from 'react';
import {
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { withTheme } from '../config';
import Button from './Button';
import { IconNode } from '../icons/Icon';
import { Theme } from '../config/theme';
import { TextProps } from '../text/Text';

export type ChipProps = TouchableOpacityProps &
  TouchableNativeFeedbackProps & {
    title?: string | React.ReactElement<{}>;
    titleStyle?: StyleProp<TextStyle>;
    titleProps?: TextProps;
    type?: 'solid' | 'outline';
    containerStyle?: StyleProp<ViewStyle>;
    icon?: IconNode;
    iconContainerStyle?: StyleProp<ViewStyle>;
    iconRight?: boolean;
    linearGradientProps?: object;
    TouchableComponent?: typeof React.Component;
    ViewComponent?: typeof React.Component;
    disabled?: boolean;
    disabledStyle?: StyleProp<ViewStyle>;
    disabledTitleStyle?: StyleProp<TextStyle>;
    raised?: boolean;
    theme?: Theme;
  };

const Chip: React.FunctionComponent<ChipProps> = (props: ChipProps) => {
  return (
    <Button
      {...props}
      titleStyle={{ fontSize: 14, paddingHorizontal: 2 }}
      buttonStyle={{ borderRadius: 30 }}
    />
  );
};

export { Chip };

export default withTheme<ChipProps, {}>(Chip, 'Chip');
