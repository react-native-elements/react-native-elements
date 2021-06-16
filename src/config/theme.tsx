import { ViewProps } from 'react-native';
import { SwipeRatingProps } from '../Rating';
import { TapRatingProps } from '../AirbnbRating';
import { AvatarProps, AccessoryProps } from '../Avatar';
import { BadgeProps } from '../Badge';
import { BottomSheetProps } from '../BottomSheet';
import { ButtonProps } from '../Button';
import { ButtonGroupProps } from '../ButtonGroup';
import { CardProps } from '../card/Card';
import { CheckBoxProps } from '../Checkbox';
import { DividerProps } from '../Divider';
import { HeaderProps } from '../Header';
import { IconProps } from '../Icon';
import { ImageProps } from '../Image';
import { InputProps } from '../Input';
import { ListItemProps } from '../ListItem';
import { ListItemAccordionProps } from '../ListItem';
import { OverlayProps } from '../Overlay';
import { PricingCardProps } from '../PricingCard';
import { SearchBarProps } from '../searchbar/SearchBar';
import { SliderProps } from '../Slider';
import { SocialIconProps } from '../SocialIcon';
import { TextProps } from '../Text';
import { TileProps } from '../Tile';
import { TooltipProps } from '../Tooltip';
import { SwitchProps } from '../Switch';
import { TabItemProps, TabProps } from '../tab/Tab';
import { TabViewProps } from '../tab/TabView';
import { FABProps } from '../FAB';
import { SpeedDialProps, SpeedDialActionProps } from '../SpeedDial';
import { LinearProgressProps } from '../LinearProgress';
import { ChipProps } from '../Chip';
import {
  DialogActionsProps,
  DialogLoadingProps,
  DialogProps,
  DialogTitleProps,
} from '../Dialog';

import colors, { Colors } from './colors';

export default {
  colors,
};

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export interface FullTheme {
  Avatar: Partial<AvatarProps>;
  AvatarAccessory: Partial<AccessoryProps>;
  Badge: Partial<BadgeProps>;
  BottomSheet: Partial<BottomSheetProps>;
  Button: Partial<ButtonProps>;
  ButtonGroup: Partial<ButtonGroupProps>;
  Chip: Partial<ChipProps>;
  Card: Partial<CardProps>;
  CardDivider: Partial<DividerProps>;
  CardFeaturedSubtitle: Partial<TextProps>;
  CardFeaturedTitle: Partial<TextProps>;
  CardImage: Partial<ImageProps>;
  CardTitle: Partial<TextProps>;
  CheckBox: Partial<CheckBoxProps>;
  Divider: Partial<DividerProps>;
  Dialog: Partial<DialogProps>;
  DialogActions: Partial<DialogActionsProps>;
  DialogButton: Partial<ButtonProps>;
  DialogLoading: Partial<DialogLoadingProps>;
  DialogTitle: Partial<DialogTitleProps>;
  Header: Partial<HeaderProps>;
  Icon: Partial<IconProps>;
  Image: Partial<ImageProps>;
  Input: Partial<InputProps>;
  ListItem: Partial<ListItemProps>;
  ListItemAccordion: Partial<ListItemAccordionProps>;
  ListItemButtonGroup: Partial<ButtonGroupProps>;
  ListItemCheckBox: Partial<CheckBoxProps>;
  ListItemContent: Partial<ViewProps>;
  ListItemChevron: Partial<IconProps>;
  ListItemInput: Partial<InputProps>;
  ListItemSubtitle: Partial<TextProps>;
  ListItemTitle: Partial<TextProps>;
  Overlay: Partial<OverlayProps>;
  PricingCard: Partial<PricingCardProps>;
  Rating: Partial<SwipeRatingProps>;
  AirbnbRating: Partial<TapRatingProps>;
  SearchBar: Partial<SearchBarProps>;
  Slider: Partial<SliderProps>;
  SocialIcon: Partial<SocialIconProps>;
  Text: Partial<TextProps>;
  Tile: Partial<TileProps>;
  Switch: Partial<SwitchProps>;
  Tooltip: Partial<TooltipProps>;
  colors: RecursivePartial<Colors>;
  Tab: Partial<TabProps>;
  TabItem: Partial<TabItemProps>;
  TabView: Partial<TabViewProps>;
  TabViewItem: Partial<ViewProps>;
  FAB: Partial<FABProps>;
  SpeedDial: Partial<SpeedDialProps>;
  SpeedDialAction: Partial<SpeedDialActionProps>;
  LinearProgress: Partial<LinearProgressProps>;
}

export type Theme<T = {}> = Partial<FullTheme> & T;

export type UpdateTheme = (updates: RecursivePartial<FullTheme>) => void;

export type ReplaceTheme = (updates: RecursivePartial<FullTheme>) => void;
