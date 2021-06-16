// UI references
// https://ionicframework.com/docs/components/#buttons
// https://material.io/guidelines/components/buttons.html#buttons-raised-buttons
// https://material.angularjs.org/latest/demo/button
// Core
import Button, { ButtonProps } from './Button';
import Chip, { ChipProps } from './Chip';
import Input, { InputProps } from './Input';
import Icon, { IconProps } from './Icon';
import ListItem from './ListItem';
import { ListItemProps } from './ListItem';
import { ListItemAccordionProps } from './ListItem/ListItemAccordion';
import { ListItemSwipeableProps } from './ListItem/ListItemSwipeable';
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
import Image, { ImageProps } from './Image';
import FAB, { FABProps } from './FAB';
import SpeedDial, { SpeedDialActionProps, SpeedDialProps } from './SpeedDial';
// Productivity
import Card, { CardProps } from './card/Card';
import Dialog from './Dialog';
import { DialogLoadingProps } from './Dialog/DialogLoading';
import { DialogTitleProps } from './Dialog/DialogTitle';
import Tile, { TileProps } from './Tile';
import Avatar, { AvatarProps } from './Avatar';
import Header, { HeaderProps } from './Header';
import PricingCard, { PricingCardProps } from './PricingCard';
import Tooltip, { TooltipProps } from './Tooltip';
import BottomSheet, { BottomSheetProps } from './BottomSheet';
import LinearProgress, { LinearProgressProps } from './LinearProgress';
import Switch, { SwitchProps } from './Switch';
import Tab, { TabItemProps, TabProps } from './tab/Tab';
import TabView, { TabViewProps } from './tab/TabView';
import Rating, { SwipeRatingProps } from './Rating';
import AirbnbRating, { TapRatingProps } from './AirbnbRating';

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
