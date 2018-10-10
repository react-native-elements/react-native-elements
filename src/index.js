// UI references
// https://ionicframework.com/docs/components/#buttons
// https://material.io/guidelines/components/buttons.html#buttons-raised-buttons
// https://material.angularjs.org/latest/demo/button

// Core
import Button from './buttons/Button';
import Input from './input/Input';

import Icon from './icons/Icon';
import ListItem from './list/ListItem';
import SocialIcon from './social/SocialIcon';
import Overlay from './overlay/Overlay';

// Utilities
import SearchBar from './searchbar/SearchBar';
import Badge from './badge/badge';
import CheckBox from './checkbox/CheckBox';
import Divider from './divider/Divider';
import Slider from './slider/Slider';
import ButtonGroup from './buttons/ButtonGroup';

// Productivity
import Card from './card/Card';
import Tile from './tile/Tile';
import Avatar from './avatar/Avatar';
import Rating from './rating/Rating';
import Header from './header/Header';
import PricingCard from './pricing/PricingCard';
import Tooltip from './tooltip/Tooltip';

// helpers
import Text from './text/Text';
import { colors, ThemeProvider, ThemeConsumer, withTheme } from './config';
import getIconType, { registerCustomIconType } from './helpers/getIconType';
import normalize from './helpers/normalizeText';

export {
  Badge,
  Button,
  ButtonGroup,
  Card,
  Input,
  ListItem,
  PricingCard,
  Tooltip,
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
  Rating,
  Header,
  Overlay,
  ThemeProvider,
  ThemeConsumer,
  withTheme,
};
