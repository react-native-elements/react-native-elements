// UI references
// https://ionicframework.com/docs/components/#buttons
// https://material.io/guidelines/components/buttons.html#buttons-raised-buttons
// https://material.angularjs.org/latest/demo/button
// Core
import Button, { ButtonProps } from './Button';
import Chip, { ChipProps } from './Chip';
import Input, { InputProps } from './input/Input';
import Icon, { IconProps } from './icons/Icon';
import ListItem from './list/ListItem';
import { ListItemProps } from './list/ListItemBase';
import { ListItemAccordionProps } from './list/ListItemAccordion';
import { ListItemSwipeableProps } from './list/ListItemSwipeable';
import SocialIcon, { SocialIconProps } from './SocialIcon';
import Overlay, { OverlayProps } from './Overlay';

// Utilities
import SearchBar, { SearchBarProps } from './searchbar/SearchBar';
import { SearchBarAndroidProps } from './searchbar/SearchBar-android';
import { SearchBarDefaultProps } from './searchbar/SearchBar-default';
import { SearchBarIosProps } from './searchbar/SearchBar-ios';
import Badge, { BadgeProps, withBadge } from './Badge';
import CheckBox, { CheckBoxProps } from './Checkbox';
import Divider, { DividerProps } from './Divider';
import Slider, { SliderProps } from './Slider';
import ButtonGroup, { ButtonGroupProps } from './ButtonGroup';
import Image, { ImageProps } from './image/Image';
import FAB, { FABProps } from './FAB';
import SpeedDial, { SpeedDialActionProps, SpeedDialProps } from './SpeedDial';
// Productivity
import Card, { CardProps } from './card/Card';
import Dialog from './dialog/Dialog';
import { DialogLoadingProps } from './dialog/DialogLoading';
import { DialogTitleProps } from './dialog/DialogTitle';
import Tile, { TileProps } from './Tile';
import Avatar, { AvatarProps } from './Avatar';
import Header, { HeaderProps } from './Header';
import PricingCard, { PricingCardProps } from './PricingCard';
import Tooltip, { TooltipProps } from './tooltip/Tooltip';
import BottomSheet, { BottomSheetProps } from './BottomSheet';
import LinearProgress, { LinearProgressProps } from './LinearProgress';
import Switch, { SwitchProps } from './Switch';
import Tab, { TabItemProps, TabProps } from './tab/Tab';
import TabView, { TabViewProps } from './tab/TabView';
import {
  AirbnbRating as BaseAirbnbRating,
  Rating as BaseRating,
  TapRatingProps,
  SwipeRatingProps,
} from 'react-native-ratings';
// helpers
import Text, { TextProps } from './Text';
import {
  Colors,
  colors,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  withTheme,
  makeStyles,
  useTheme,
  UpdateTheme,
  ReplaceTheme,
  FullTheme,
  Theme,
  ThemeProps,
} from './config';
import getIconType, { registerCustomIconType } from './helpers/getIconType';
import normalize from './helpers/normalizeText';

const AirbnbRating = withTheme(BaseAirbnbRating, 'AirbnbRating');
const Rating = withTheme(BaseRating, 'Rating');

export {
  Badge,
  BottomSheet,
  Button,
  ButtonGroup,
  Card,
  Chip,
  Input,
  ListItem,
  LinearProgress,
  PricingCard,
  Tooltip,
  Switch,
  SocialIcon,
  Text,
  Divider,
  Dialog,
  CheckBox,
  SearchBar,
  Icon,
  colors,
  getIconType,
  registerCustomIconType,
  normalize,
  Tile,
  Slider,
  Avatar,
  Rating,
  AirbnbRating,
  Header,
  Overlay,
  ThemeProvider,
  ThemeConsumer,
  ThemeContext,
  withBadge,
  withTheme,
  useTheme,
  makeStyles,
  Image,
  FAB,
  SpeedDial,
  Tab,
  TabView,
};
export type {
  AvatarProps,
  ButtonProps,
  Colors,
  ChipProps,
  InputProps,
  IconProps,
  ListItemProps,
  SocialIconProps,
  OverlayProps,
  SearchBarProps,
  SearchBarAndroidProps,
  SearchBarDefaultProps,
  SearchBarIosProps,
  BadgeProps,
  CheckBoxProps,
  DividerProps,
  SliderProps,
  ButtonGroupProps,
  ImageProps,
  CardProps,
  DialogLoadingProps,
  DialogTitleProps,
  TileProps,
  HeaderProps,
  PricingCardProps,
  TooltipProps,
  BottomSheetProps,
  TapRatingProps,
  SwipeRatingProps,
  SwitchProps,
  TextProps,
  UpdateTheme,
  ReplaceTheme,
  FullTheme,
  Theme,
  LinearProgressProps,
  FABProps,
  SpeedDialActionProps,
  SpeedDialProps,
  ThemeProps,
  TabItemProps,
  TabProps,
  ListItemAccordionProps,
  ListItemSwipeableProps,
  TabViewProps,
};
