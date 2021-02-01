import React from 'react';
import { ViewProps } from 'react-native';
import { RatingProps, AirbnbRatingProps } from 'react-native-ratings';

import { AvatarProps } from './avatar/Avatar';
import { AccessoryProps } from './avatar/Accessory';
import { BadgeProps } from './badge/Badge';
import { BottomSheetProps } from './bottomSheet/BottomSheet';
import { ButtonProps } from './buttons/Button';
import { ButtonGroupProps } from './buttons/ButtonGroup';
import { CardProps } from './card/Card';
import { CheckBoxProps } from './checkbox/CheckBox';
import { Colors } from './config/colors';
import { DividerProps } from './divider/Divider';

/**
 * Rating, AirbnbRating, RatingProps, AirbnbRatingProps
 */
export * from 'react-native-ratings';

/**
 * Registers custom icons
 */
type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

export interface FullTheme {
  Avatar: Partial<AvatarProps>;
  Accessory: Partial<AccessoryProps>;
  Badge: Partial<BadgeProps>;
  BottomSheet: Partial<BottomSheetProps>;
  Button: Partial<ButtonProps>;
  ButtonGroup: Partial<ButtonGroupProps>;
  Card: Partial<CardProps>;
  CardDivider: Partial<DividerProps>;
  CardFeaturedSubtitle: Partial<TextProps>;
  CardFeaturedTitle: Partial<TextProps>;
  CardImage: Partial<ImageProps>;
  CardTitle: Partial<TextProps>;
  CheckBox: Partial<CheckBoxProps>;
  Divider: Partial<DividerProps>;
  Header: Partial<HeaderProps>;
  Icon: Partial<IconProps>;
  Image: Partial<ImageProps>;
  Input: Partial<InputProps>;
  ListItem: Partial<ListItemProps>;
  ListItemButtonGroup: Partial<ButtonGroupProps>;
  ListItemCheckBox: Partial<CheckBoxProps>;
  ListItemContent: Partial<ViewProps>;
  ListItemChevron: Partial<IconProps>;
  ListItemInput: Partial<InputProps>;
  ListItemSubtitle: Partial<TextProps>;
  ListItemTitle: Partial<TextProps>;
  Overlay: Partial<OverlayProps>;
  PricingCard: Partial<PricingCardProps>;
  Rating: Partial<RatingProps>;
  AirbnbRating: Partial<AirbnbRatingProps>;
  SearchBar: Partial<SearchBarProps>;
  Slider: Partial<SliderProps>;
  SocialIcon: Partial<SocialIconProps>;
  Text: Partial<TextProps>;
  Tile: Partial<TileProps>;
  Tooltip: Partial<TooltipProps>;
  colors: RecursivePartial<Colors>;
}

export type Theme<T = {}> = Partial<FullTheme> & T;

export type UpdateTheme = (updates: RecursivePartial<FullTheme>) => void;

export type ReplaceTheme = (updates: RecursivePartial<FullTheme>) => void;

export interface ThemeProps<T> {
  theme: Theme<T>;
  updateTheme: UpdateTheme;
  replaceTheme: ReplaceTheme;
}

export class ThemeProvider<T> extends React.Component<ThemeProviderProps<T>> {
  updateTheme: UpdateTheme;
  replaceTheme: ReplaceTheme;

  getTheme(): Theme<T>;
}

export interface ThemeConsumerProps<T> {
  children(props: ThemeProps<T>): React.ReactNode;
}

export class ThemeConsumer<T> extends React.Component<ThemeConsumerProps<T>> {}

export const ThemeContext: React.Context<ThemeProps<{}>>;

export function withTheme<P = {}, T = {}>(
  component: React.ComponentType<P & ThemeProps<T>>,
  themeKey?: string
): React.ComponentClass<Omit<P, keyof ThemeProps<T>>>;
