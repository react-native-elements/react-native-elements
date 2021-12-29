// UI references
// https://ionicframework.com/docs/components/#buttons
// https://material.io/guidelines/components/buttons.html#buttons-raised-buttons
// https://material.angularjs.org/latest/demo/button
// Core
import AirbnbRating from './AirbnbRating';
import Avatar from './Avatar';
import Badge, { withBadge } from './Badge';
import BottomSheet from './BottomSheet';
import Button from './Button';
import ButtonGroup from './ButtonGroup';
import Card from './Card';
import CheckBox from './CheckBox';
import Chip from './Chip';
import Dialog from './Dialog';
import Divider from './Divider';
import FAB from './FAB';
import Header from './Header';
import Icon from './Icon';
import Image from './Image';
import Input from './Input';
import LinearProgress from './LinearProgress';
import ListItem from './ListItem';
import Overlay from './Overlay';
import PricingCard from './PricingCard';
import Rating from './Rating';
import SearchBar from './SearchBar';
import Slider from './Slider';
import SocialIcon from './SocialIcon';
import SpeedDial from './SpeedDial';
import Switch from './Switch';
import Tab from './Tab';
import TabView from './TabView';
import Text from './Text';
import Tile from './Tile';
import Tooltip from './Tooltip';
import { colors, ThemeProvider, ThemeConsumer, ThemeContext, withTheme, makeStyles, useTheme, } from './config';
import getIconType, { registerCustomIconType } from './helpers/getIconType';
import normalize from './helpers/normalizeText';
// Components exports
export { AirbnbRating, Avatar, Badge, BottomSheet, Button, ButtonGroup, Card, CheckBox, Chip, Dialog, Divider, FAB, Header, Icon, Image, Input, LinearProgress, ListItem, Overlay, PricingCard, Rating, SearchBar, Slider, SocialIcon, SpeedDial, Switch, Tab, TabView, Text, Tile, Tooltip, };
// Theme utils exports
export { colors, getIconType, registerCustomIconType, normalize, ThemeProvider, ThemeConsumer, ThemeContext, withBadge, withTheme, useTheme, makeStyles, };
