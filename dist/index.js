// UI references
// https://ionicframework.com/docs/components/#buttons
// https://material.io/guidelines/components/buttons.html#buttons-raised-buttons
// https://material.angularjs.org/latest/demo/button
// Core
import Button from './buttons/Button';
import Chip from './buttons/Chip';
import Input from './input/Input';
import Icon from './icons/Icon';
import ListItem from './list/ListItem';
import SocialIcon from './social/SocialIcon';
import Overlay from './overlay/Overlay';
// Utilities
import SearchBar from './searchbar/SearchBar';
import Badge from './badge/Badge';
import withBadge from './badge/withBadge';
import CheckBox from './checkbox/CheckBox';
import Divider from './divider/Divider';
import Slider from './slider/Slider';
import ButtonGroup from './buttons/ButtonGroup';
import Image from './image/Image';
import FAB from './buttons/FAB';
import SpeedDial from './buttons/SpeedDial';
// Productivity
import Card from './card/Card';
import Dialog from './dialog/Dialog';
import Tile from './tile/Tile';
import Avatar from './avatar/Avatar';
import Accessory from './avatar/Accessory';
import Header from './header/Header';
import PricingCard from './pricing/PricingCard';
import Tooltip from './tooltip/Tooltip';
import BottomSheet from './bottomSheet/BottomSheet';
import LinearProgress from './linearProgress';
import Switch from './switch/switch';
import Tab from './tab/Tab';
import TabView from './tab/TabView';
import { AirbnbRating as BaseAirbnbRating, Rating as BaseRating, } from 'react-native-ratings';
// helpers
import Text from './text/Text';
import { colors, ThemeProvider, ThemeConsumer, ThemeContext, withTheme, makeStyles, useTheme, } from './config';
import getIconType, { registerCustomIconType } from './helpers/getIconType';
import normalize from './helpers/normalizeText';
const AirbnbRating = withTheme(BaseAirbnbRating, 'AirbnbRating');
const Rating = withTheme(BaseRating, 'Rating');
export { Badge, BottomSheet, Button, ButtonGroup, Card, Chip, Input, ListItem, LinearProgress, PricingCard, Tooltip, Switch, SocialIcon, Text, Divider, Dialog, CheckBox, SearchBar, Icon, colors, getIconType, registerCustomIconType, normalize, Tile, Slider, Avatar, Accessory, Rating, AirbnbRating, Header, Overlay, ThemeProvider, ThemeConsumer, ThemeContext, withBadge, withTheme, useTheme, makeStyles, Image, FAB, SpeedDial, Tab, TabView, };
