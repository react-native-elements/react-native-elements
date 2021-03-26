// UI references
// https://ionicframework.com/docs/components/#buttons
// https://material.io/guidelines/components/buttons.html#buttons-raised-buttons
// https://material.angularjs.org/latest/demo/button
// Core
import Button, { ButtonProps } from './buttons/Button';
import Input, { InputProps } from './input/Input';
import Icon, { IconProps } from './icons/Icon';
import ListItem, { ListItemProps } from './list/ListItem';
import SocialIcon, { SocialIconProps } from './social/SocialIcon';
import Overlay, { OverlayProps } from './overlay/Overlay';

// Utilities
import SearchBar, { SearchBarProps } from './searchbar/SearchBar';
import { SearchBarAndroidProps } from './searchbar/SearchBar-android';
import { SearchBarDefaultProps } from './searchbar/SearchBar-default';
import { SearchBarIosProps } from './searchbar/SearchBar-ios';
import Badge, { BadgeProps } from './badge/Badge';
import withBadge from './badge/withBadge';
import CheckBox, { CheckBoxProps } from './checkbox/CheckBox';
import Divider, { DividerProps } from './divider/Divider';
import Slider, { SliderProps } from './slider/Slider';
import ButtonGroup, { ButtonGroupProps } from './buttons/ButtonGroup';
import Image, { ImageProps } from './image/Image';
import FAB, { FABProps } from './buttons/FAB';
// Productivity
import Card, { CardProps } from './card/Card';
import Tile, { TileProps } from './tile/Tile';
import Avatar, { AvatarProps } from './avatar/Avatar';
import Accessory, { AccessoryProps } from './avatar/Accessory';
import Header, { HeaderProps } from './header/Header';
import PricingCard, { PricingCardProps } from './pricing/PricingCard';
import Tooltip, { TooltipProps } from './tooltip/Tooltip';
import BottomSheet, { BottomSheetProps } from './bottomSheet/BottomSheet';
import LinearProgress, { LinearProgressProps } from './linearProgress';
import Switch, { SwitchProps } from './switch/switch';
import {
  AirbnbRating as BaseAirbnbRating,
  Rating as BaseRating,
  RatingProps,
  AirbnbRatingProps,
} from 'react-native-ratings';
// helpers
import Text, { TextProps } from './text/Text';
import {
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
  Input,
  ListItem,
  LinearProgress,
  PricingCard,
  Tooltip,
  Switch,
  SocialIcon,
  Text,
  Divider,
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
  Accessory,
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
};
export type {
  AvatarProps,
  ButtonProps,
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
  TileProps,
  AccessoryProps,
  HeaderProps,
  PricingCardProps,
  TooltipProps,
  BottomSheetProps,
  RatingProps,
  AirbnbRatingProps,
  SwitchProps,
  TextProps,
  UpdateTheme,
  ReplaceTheme,
  FullTheme,
  Theme,
  LinearProgressProps,
  FABProps,
  ThemeProps,
};
