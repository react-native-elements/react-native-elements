// UI references
// https://ionicframework.com/docs/components/#buttons
// https://material.io/guidelines/components/buttons.html#buttons-raised-buttons
// https://material.angularjs.org/latest/demo/button
// Core
import {
  TapRatingProps,
  AirbnbRatingDefault as AirbnbRating,
} from './AirbnbRating';
import Avatar, { AvatarProps } from './Avatar';
import Badge, { BadgeProps, withBadge } from './Badge';
import BottomSheet, { BottomSheetProps } from './BottomSheet';
import Button, { ButtonProps } from './Button';
import ButtonGroup, { ButtonGroupProps } from './ButtonGroup';
import Card, { CardProps } from './Card';
import CheckBox, { CheckBoxProps } from './CheckBox';
import Chip, { ChipProps } from './Chip';
import Dialog, { DialogLoadingProps, DialogTitleProps } from './Dialog';
import Divider, { DividerProps } from './Divider';
import FAB, { FABProps } from './FAB';
import Header, { HeaderProps } from './Header';
import Icon, { IconProps } from './Icon';
import Image, { ImageProps } from './Image';
import Input, { InputProps } from './Input';
import LinearProgress, { LinearProgressProps } from './LinearProgress';
import ListItem, {
  ListItemProps,
  ListItemAccordionProps,
  ListItemSwipeableProps,
} from './ListItem';
import Overlay, { OverlayProps } from './Overlay';
import PricingCard, { PricingCardProps } from './PricingCard';
import Rating, { SwipeRatingProps } from './Rating';
import SearchBar, {
  SearchBarProps,
  SearchBarAndroidProps,
  SearchBarDefaultProps,
  SearchBarIosProps,
} from './SearchBar';
import Slider, { SliderProps } from './Slider';
import SocialIcon, { SocialIconProps, SocialMediaType } from './SocialIcon';
import SpeedDial, { SpeedDialActionProps, SpeedDialProps } from './SpeedDial';
import Switch, { SwitchProps } from './Switch';
import Skeleton, { SkeletonProps } from './Skeleton';
import Tab, { TabItemProps, TabProps } from './Tab';
import TabView, { TabViewProps } from './TabView';
import Text, { TextProps } from './Text';
import Tile, { TileProps } from './Tile';
import Tooltip, { TooltipProps } from './Tooltip';

import {
  Colors,
  lightColors,
  darkColors,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  withTheme,
  makeStyles,
  useTheme,
  useThemeMode,
  UpdateTheme,
  ReplaceTheme,
  FullTheme,
  Theme,
  ThemeMode,
  normalizeText,
  getIconType,
  registerCustomIconType,
  ComponentTheme,
  createTheme,
  CreateThemeOptions,
  ThemeOptions,
  ThemeSpacing,
} from './config';

// Components exports
export {
  AirbnbRating,
  Avatar,
  Badge,
  BottomSheet,
  Button,
  ButtonGroup,
  Card,
  CheckBox,
  Chip,
  Dialog,
  Divider,
  FAB,
  Header,
  Icon,
  Image,
  Input,
  LinearProgress,
  ListItem,
  Overlay,
  PricingCard,
  Rating,
  SearchBar,
  Slider,
  SocialIcon,
  SpeedDial,
  Skeleton,
  Switch,
  Tab,
  TabView,
  Text,
  Tile,
  Tooltip,
};

// Theme utils exports
export {
  lightColors,
  darkColors,
  getIconType,
  registerCustomIconType,
  normalizeText as normalize,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  withBadge,
  withTheme,
  useTheme,
  useThemeMode,
  makeStyles,
  createTheme,
};

// Components Props exports
export type {
  AvatarProps,
  BadgeProps,
  BottomSheetProps,
  ButtonGroupProps,
  ButtonProps,
  CardProps,
  CheckBoxProps,
  ChipProps,
  Colors,
  DialogLoadingProps,
  DialogTitleProps,
  DividerProps,
  FABProps,
  HeaderProps,
  IconProps,
  ImageProps,
  InputProps,
  LinearProgressProps,
  ListItemAccordionProps,
  ListItemProps,
  ListItemSwipeableProps,
  OverlayProps,
  PricingCardProps,
  SearchBarAndroidProps,
  SearchBarDefaultProps,
  SearchBarIosProps,
  SearchBarProps,
  SliderProps,
  SkeletonProps,
  SocialIconProps,
  SocialMediaType,
  SpeedDialActionProps,
  SpeedDialProps,
  SwipeRatingProps,
  SwitchProps,
  TabItemProps,
  TabProps,
  TabViewProps,
  TapRatingProps,
  TextProps,
  TileProps,
  TooltipProps,
};

// Theme props export
export type {
  FullTheme,
  ReplaceTheme,
  Theme,
  UpdateTheme,
  CreateThemeOptions,
  ThemeOptions,
  ThemeSpacing,
  ThemeMode,
  ComponentTheme,
};
