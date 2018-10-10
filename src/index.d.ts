import * as React from 'react';
import {
  ViewStyle,
  TextStyle,
  ImageProperties,
  ImageStyle,
  ImageURISource,
  TouchableWithoutFeedbackProps,
  TouchableOpacityProps,
  TouchableNativeFeedbackProps,
  ViewProperties,
  TextInputProperties,
  TextInput,
  TextProperties,
  StatusBarProperties,
  StyleProp,
  Animated,
  ActivityIndicatorProperties,
  SwitchProperties,
  StatusBarStyle,
  ButtonProps as NativeButtonProps,
} from 'react-native';

/**
 * Supports auto complete for most used types as well as any other string type.
 */
export type IconType =
  | 'material'
  | 'material-community'
  | 'simple-line-icon'
  | 'zocial'
  | 'font-awesome'
  | 'octicon'
  | 'ionicon'
  | 'foundation'
  | 'evilicon'
  | 'entypo'
  | string;

export interface IconObject {
  name?: string;
  color?: string;
  size?: number;
  type?: IconType;
  style?: StyleProp<TextStyle>;
}

export interface AvatarIcon extends IconObject {
  iconStyle?: StyleProp<TextStyle>;
}

export interface TextProps extends TextProperties {
  /**
   * font size 40
   */
  h1?: boolean;

  /**
   * font size 34
   */
  h2?: boolean;

  /**
   * font size 28
   */
  h3?: boolean;

  /**
   * font size 22
   */
  h4?: boolean;

  /**
   * font family name
   */
  fontFamily?: string;

  /**
   * Additional styling for Text
   */
  style?: StyleProp<TextStyle>;
}

/**
 * HTML Style Headings
 *
 */
export class Text extends React.Component<TextProps, any> {}

export interface AvatarProps {
  /**
   * Component for enclosing element (eg: TouchableHighlight, View, etc)
   *
   * @default TouchableOpacity
   */
  component?: React.ComponentClass;

  /**
   * Callback function when pressing component
   */
  onPress?(): void;

  /**
   * Callback function when long pressing component
   */
  onLongPress?(): void;

  /**
   * Styling for outer container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Image source
   */
  source?: ImageURISource;

  /**
   * Style for avatar image
   */
  avatarStyle?: ImageStyle;

  /**
   * Determines the shape of avatar
   *
   * @default false
   */
  rounded?: boolean;

  /**
   * Renders title in the avatar
   */
  title?: string;

  /**
   * Style for the title
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * Style for the view outside image or icon
   */
  overlayContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Opacity when pressed
   *
   * @default 0.2
   */
  activeOpacity?: number;

  /**
   * Icon for the avatar
   */
  icon?: AvatarIcon;

  /**
   * extra styling for icon component
   */
  iconStyle?: StyleProp<TextStyle>;

  /**
   * Size of Avatar
   * @default "small"
   */

  size?: 'small' | 'medium' | 'large' | 'xlarge' | number;

  /**
   * Image Component of Avatar
   * @default React Native default Image component
   */

  ImageComponent?: React.ComponentClass;
}

/**
 * Avatar Component
 *
 */
export class Avatar extends React.Component<AvatarProps, any> {}

export interface ButtonProps
  extends TouchableOpacityProps,
    TouchableNativeFeedbackProps {
  /**
   * Specify other touchable such as TouchableOpacity/TouchableNativeFeedback
   *
   * Default is TouchableOpacity on IOS and TouchableNativeFeedback on Android
   */
  TouchableComponent?: React.ComponentClass;

  /**
   * Specify a different component as the background for the button.
   * Useful for if you want to make a button with a gradient background.
   *
   * @default View
   */
  ViewComponent?: React.ComponentClass<any>;

  /**
   * Additional styling for button (background) view component
   *
   * @default null
   */
  buttonStyle?: StyleProp<ViewStyle>;

  /**
   * Button title
   *
   * @default 'Welcome to\nReact Native Elements'
   */
  title?: string;

  /**
   * If to show the icon on the right
   *
   * @default false
   */
  iconRight?: boolean;

  /**
   * Icon to show in the button
   */
  icon?: IconNode;

  /**
   * Style for the container around the icon
   */
  iconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Title styling
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * Optional props for the title inside the button
   */
  titleProps?: TextProperties;

  /**
   * Styling for Component container
   *
   * @default null
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Display a loading spinner
   *
   * @default false
   */
  loading?: boolean;

  /**
   * Additional style to applied to the ActivityIndicator
   */
  loadingStyle?: StyleProp<ViewStyle>;

  /**
   * Additional props to applied to the ActivityIndicator
   */
  loadingProps?: ActivityIndicatorProperties;

  /**
   * Object of props to be applied to the linearGradient view(ViewComponent)
   */
  linearGradientProps?: Object;

  /**
   * If the button should appear without a background (clear style)
   *
   * @default false
   */
  clear?: boolean;

  /**
   * If the user is allowed to interact with the button
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Style of the title when the button is disabled
   */
  disabledTitleStyle?: StyleProp<TextStyle>;

  /**
   * Style of the button when disabled
   */
  disabledStyle?: StyleProp<ViewStyle>;

  /**
   * If the button has raised styling
   *
   * @default false
   */
  raised?: boolean;
}

/**
 * Button component
 *
 */
export class Button extends React.Component<ButtonProps, any> {}

export interface BadgeProps {
  /**
   * Text value to be displayed by badge
   *
   * @default null
   */
  value?: string | number;

  /**
   * Style for the outer badge component
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Style for the outer-most badge component
   */
  wrapperStyle?: StyleProp<ViewStyle>;

  /**
   * Style for the text in the badge
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * Override the default badge contents, mutually exclusive with 'value' property
   */
  children?: React.ReactElement<{}>;

  /**
   * Custom component to replace the badge outer component
   *
   * @default View (if onPress then TouchableOpacity)
   */
  component?: React.ComponentClass;

  /**
   * Function called when pressed on the badge
   */
  onPress?(): void;
}

/**
 * Badge component
 *
 */
export class Badge extends React.Component<BadgeProps, any> {}

export interface CardProps {
  /**
   * Flex direction (row or column)
   *
   * @default 'column'
   */
  flexDirection?: 'column' | 'row';

  /**
   * Outer container style
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Inner container style
   */
  wrapperStyle?: StyleProp<ViewStyle>;

  /**
   * Card title
   */
  title?: string | React.ReactElement<{}>;

  /**
   * Additional title styling (if title provided)
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * Title rendered over the image
   * (only works if image prop is present)
   */
  featuredTitle?: string;

  /**
   * Styling for featured title
   */
  featuredTitleStyle?: StyleProp<TextStyle>;

  /**
   * Subtitle rendered over the image
   * (only works if image prop is present)
   */
  featuredSubtitle?: string;

  /**
   * Styling for featured subtitle
   */
  featuredSubtitleStyle?: StyleProp<TextStyle>;

  /**
   * Additional divider styling
   * (if title provided)
   */
  dividerStyle?: StyleProp<ViewStyle>;

  /**
   * Specify different font family
   *
   * @default System font bold (iOS), Sans Serif Bold (android)
   */
  fontFamily?: string;

  /**
   * Specify image styling if image is provided
   */
  imageStyle?: ImageStyle;

  /**
   * Specify styling for view surrounding image
   */
  imageWrapperStyle?: StyleProp<ViewStyle>;

  /**
   * Add an image as the heading with the image prop
   */
  image?: ImageURISource;

  /**
   * Optional properties to pass to the image if provided e.g "resizeMode"
   */
  imageProps?: Partial<ImageProperties>;
}

/**
 * Card component
 *
 */
export class Card extends React.Component<CardProps, any> {}

/**
 * Set the buttons within a Group.
 */
export interface ElementObject {
  element: React.ReactElement<{}> | React.ReactType;
}

/**
 * Set the border styles for a component.
 */
export interface InnerBorderStyleProperty {
  color?: string;
  width?: number;
}

export interface ButtonGroupProps {
  /**
   * Allows the user to select multiple items
   *
   * @default false
   */
  selectMultiple?: boolean;

  /**
   * Current selected index of array of buttons
   */
  selectedIndex: number;

  /**
   * The indexes that are selected. Used with 'selectMultiple'
   *
   * @default []
   */
  selectedIndexes?: number[];

  /**
   * Method to update Button Group Index
   */
  onPress(selectedIndex: number): void;

  /**
   * Array of buttons for component, if returning a component, must be an object with { element: componentName }
   */
  buttons: string[] | ElementObject[];

  /**
   * Choose other button component such as TouchableOpacity
   *
   * @default TouchableHighlight
   */
  component?: React.ComponentClass;

  /**
   * Specify styling for main button container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * inherited styling	specify styling for button
   */
  buttonStyle?: StyleProp<ViewStyle>;

  /**
   * Specify styling selected button
   *
   * @default 'white'
   */
  selectedButtonStyle?: StyleProp<ViewStyle>;

  /**
   * Specify specific styling for text
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * Specify specific styling for text in the selected state
   */
  selectedTextStyle?: StyleProp<TextStyle>;

  /**
   * inherited styling	object { width, color }	update the styling of the interior border of the list of buttons
   */
  innerBorderStyle?: InnerBorderStyleProperty;

  /**
   * Specify underlayColor for TouchableHighlight
   *
   * @default 'white'
   */
  underlayColor?: string;

  /**
   * Disables the currently selected button if true
   *
   * @default false
   */
  disableSelected?: boolean;

  /**
   * Determines what the opacity of the wrapped view should be when touch is active.
   */
  activeOpacity?: number;

  /**
   * Border radius for the container
   */
  containerBorderRadius?: number;

  /**
   * Styling for the final border edge
   */
  lastBorderStyle?: StyleProp<TextStyle | ViewStyle>;

  /**
   *
   * Called immediately after the underlay is hidden
   */
  onHideUnderlay?(): void;

  /**
   * Called immediately after the underlay is shown
   */
  onShowUnderlay?(): void;

  /**
   * Animate the touchable to a new opacity.
   */
  setOpacityTo?(value: number): void;
}

export class ButtonGroup extends React.Component<ButtonGroupProps, any> {}

export interface CheckBoxProps {
  /**
   * Icon family, can be one of the following
   * (required only if specifying an icon that is not from font-awesome)
   */
  iconType?: IconType;

  /**
   *  Specify React Native component for main button
   */
  component?: React.ComponentClass;

  /**
   * Flag for checking the icon
   *
   * @default false
   */
  checked: boolean;

  /**
   * Moves icon to right of text.
   *
   * @default false
   */
  iconRight?: boolean;

  /**
   * Aligns checkbox to right
   *
   * @default false
   */
  right?: boolean;

  /**
   * Aligns checkbox to center
   *
   *  @default false
   */
  center?: boolean;

  /**
   * Title of checkbox
   */
  title?: string | React.ReactElement<{}>;

  /**
   * Style of main container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Style of container that wraps the check box and text
   */
  wrapperStyle?: StyleProp<ViewStyle>;

  /**
   * style of text
   */
  textStyle?: StyleProp<TextStyle>;

  /**
   * Size of the checkbox
   *
   * @default 24
   */
  size?: number;

  /**
   * onLongPress function for checkbox
   */
  onLongPress?(): void;

  /**
   * onLongPress function for checkbox
   */
  onLongIconPress?(): void;

  /**
   * onPress function for container
   */
  onPress?(): void;

  /**
   * onPress function for checkbox
   */
  onIconPress?(): void;

  /**
   * Default checked icon (Font Awesome Icon)
   *
   * @default 'check-square-o'
   */
  checkedIcon?: string | React.ReactElement<{}>;

  /**
   * Default checked icon (Font Awesome Icon)
   *
   * @default 'square-o'
   */
  uncheckedIcon?: string | React.ReactElement<{}>;

  /**
   * Default checked color
   *
   * @default 'green'
   */
  checkedColor?: string;

  /**
   * Default unchecked color
   * @default '#bfbfbf'
   */
  uncheckedColor?: string;

  /**
   * Specify a custom checked message
   */
  checkedTitle?: string;

  /**
   * Specify different font family
   * @default 'System font bold (iOS)'
   * @default 'Sans Serif Bold (android)'
   */
  fontFamily?: string;
}
export class CheckBox extends React.Component<CheckBoxProps, any> {}

export interface DividerProps {
  /**
   * Style the divider
   *
   * @default {height: 1, backgroundColor: #e1e8ee}
   */
  style?: StyleProp<ViewStyle>;
}

export class Divider extends React.Component<DividerProps, any> {}

export interface InputProps extends TextInputProperties {
  /**
   * Styling for Input Component Container (optional)
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Styling for Input Component Container (optional)
   */
  inputContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Displays an icon to the left (optional)
   */
  leftIcon?: IconNode;

  /**
   * Styling for left Icon Component container
   */
  leftIconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Displays an icon to the right (optional)
   */
  rightIcon?: IconNode;

  /**
   * Styling for the right icon container
   */
  rightIconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Renders component in place of the React Native `TextInput` (optional)
   */
  inputComponent?: React.ComponentClass<any>;

  /**
   * 	Adds styling to input component (optional)
   */
  inputStyle?: StyleProp<TextStyle>;

  /**
   * Adds shaking effect to input component (optional)
   */
  shake?: any;

  /**
   * 	Add styling to error message (optional)
   */
  errorStyle?: StyleProp<TextStyle>;

  /**
   * 	Adds error message (optional)
   */
  errorMessage?: string;

  /**
   * 	props to be passed to the React Native Text component used to display the error message (optional)
   */
  errorProps?: TextProps;

  /**
   * 	Add styling to label (optional)
   */
  labelStyle?: StyleProp<TextStyle>;

  /**
   * 	Adds label (optional)
   */
  label?: string;

  /**
   *  props to be passed to the React Native Text component used to display the label (optional)
   */
  labelProps?: TextProps;
}

export class Input extends React.Component<InputProps, any> {
  /**
   * Shakes the Input
   *
   * eg `this.inputRef.shake()`
   */
  shake(): void;

  /**
   * Calls focus on the Input
   *
   * eg `this.inputRef.focus()`
   */
  focus(): void;

  /**
   * Calls isFocused() on the Input
   *
   * eg `let focused = this.inputRef.isFocused()`
   */
  isFocused(): boolean;

  /**
   * Calls blur on the Input
   *
   * eg `this.inputRef.blur()`
   */
  blur(): void;

  /**
   * Calls clear on the Input
   *
   * eg `this.inputRef.clear()`
   */
  clear(): void;
}

export interface HeaderIcon extends IconObject {
  icon?: string;
  text?: string;
  color?: string;
  style?: StyleProp<TextStyle>;
}

/**
 * Defines the types that can be used in a header sub component
 */
export type HeaderSubComponent =
  | React.ReactElement<{}>
  | TextProps
  | HeaderIcon;

export interface HeaderProps extends ViewProperties {
  /**
   * Accepts all props for StatusBar
   */
  statusBarProps?: StatusBarProperties;

  /**
   * Sets the color of the status bar text.
   *
   * @default 'default'
   */
  barStyle?: StatusBarStyle;

  /**
   * Configuration object for default component (icon: string, ...props for React Native Elements Icon) or a valid React Element	define your left component here
   */
  leftComponent?: HeaderSubComponent;

  /**
   * Configuration object for default component (text: string, ...props for React Native Text component) valid React Element	define your center component here
   */
  centerComponent?: HeaderSubComponent;

  /**
   * Configuration object for default component (icon: string, ...props for React Native Elements Icon component) or a valid React Element	define your right component here
   */
  rightComponent?: HeaderSubComponent;

  /**
   * Sets backgroundColor of the parent component
   */
  backgroundColor?: string;

  /**
   * Determines the alignment of the title
   *
   * @default 'center'
   */
  placement?: boolean;

  /**
   * Styling for main container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Styles for the container surrounding the title
   */
  centerContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Styling for container around the leftComponent
   */
  leftContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Styling for container around the rightComponent
   */
  rightContainerStyle?: StyleProp<ViewStyle>;
}

/**
 * Header component
 */
export class Header extends React.Component<HeaderProps, any> {}

export interface IconProps {
  /**
   * Name of icon
   */
  name: string;

  /**
   * Type (defaults to material, options are material-community, zocial, font-awesome, octicon, ionicon, foundation, evilicon, simple-line-icon, or entypo)
   * @default 'material'
   */
  type?: IconType;

  /**
   * Size of icon
   * @default 26
   */
  size?: number;

  /**
   * Color of icon
   *
   * @default 'black'
   */
  color?: string;

  /**
   * Additional styling to icon
   */
  iconStyle?: StyleProp<TextStyle | ViewStyle>;

  /**
   * View if no onPress method is defined, TouchableHighlight if onPress method is defined	React Native component	update React Native Component
   */
  component?: React.ComponentClass;

  /**
   * onPress method for button
   */
  onPress?(): void;

  /**
   * onLongPress method for button
   */
  onLongPress?(): void;

  /**
   * UnderlayColor for press event
   */
  underlayColor?: string;

  /**
   * Reverses color scheme
   *
   * @default false
   */
  reverse?: boolean;

  /**
   * Adds box shadow to button
   *
   * @default false
   */
  raised?: boolean;

  /**
   * Add styling to container holding icon
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Specify reverse icon color
   *
   * @default 'white'
   */
  reverseColor?: string;

  /**
   * Disables the Icon
   *
   * Only works if `onPress` passed in
   */
  disabled?: boolean;

  /**
   * Styles for the Icon when disabled
   */
  disabledStyle?: StyleProp<ViewStyle>;
}

/**
 * Icon component
 */
export class Icon extends React.Component<IconProps, any> {}

export interface ScaleProps extends TouchableWithoutFeedbackProps {
  style?: StyleProp<ViewStyle>;
  defaultNumber?: number;
  activeScale?: number;
  tension?: number;
  friction?: number;
  pressInTension?: number;
  pressInFriction?: number;
  pressOutTension?: number;
  pressOutFriction?: number;
  useNativeDriver?: boolean;
}

export interface ListItemProps {
  component?: React.ReactElement<{}>;
  containerStyle?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
  rightContentContainerStyle?: StyleProp<ViewStyle>;
  chevron?: boolean | IconProps;
  checkmark?: boolean | IconProps;
  onPress?(): void;
  onLongPress?(): void;
  title?: string | React.ReactElement<{}>;
  titleStyle?: StyleProp<TextStyle>;
  titleProps?: TextProperties;
  subtitle?: string | React.ReactElement<{}>;
  subtitleStyle?: StyleProp<TextStyle>;
  subtitleProps?: TextProperties;
  rightTitle?: string | React.ReactElement<{}>;
  rightTitleStyle?: StyleProp<TextStyle>;
  rightTitleProps?: TextProperties;
  rightSubtitle?: string | React.ReactElement<{}>;
  rightSubtitleStyle?: StyleProp<TextStyle>;
  rightSubtitleProps?: TextProperties;
  leftIcon?: IconProps | React.ReactElement<{}>;
  rightIcon?: IconProps | React.ReactElement<{}>;
  leftAvatar?: AvatarProps | React.ReactElement<{}>;
  rightAvatar?: AvatarProps | React.ReactElement<{}>;
  leftElement?: React.ReactElement<{}>;
  rightElement?: React.ReactElement<{}>;
  switch?: SwitchProperties;
  input?: InputProps;
  buttonGroup?: ButtonGroupProps;
  checkbox?: CheckBoxProps;
  badge?: BadgeProps;
  disabled?: boolean;
  disabledStyle?: StyleProp<ViewStyle>;
  topDivider?: boolean;
  bottomDivider?: boolean;
  scaleProps?: ScaleProps;
  ViewComponent?: React.ComponentClass;
  pad?: number;
}

/**
 * ListItem component
 */
export class ListItem extends React.Component<ListItemProps, any> {}

export interface OverlayProps {
  /**
   * Content of the overlay
   */
  children: React.ReactNode;

  /**
   * If true, the overlay is visible
   */
  isVisible: boolean;

  /**
   * Style for the overlay container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Style of the actual overlay
   */
  overlayStyle?: StyleProp<ViewStyle>;

  /**
   * Background color of the actual overlay
   *
   * @default white
   */
  windowBackgroundColor?: string;

  /**
   * Background color for the overlay background
   *
   * @default rgba(0, 0, 0, .5)
   */
  overlayBackgroundColor?: string;

  /**
   * Border radius for the overlay
   *
   * @default 3
   */
  borderRadius?: number;

  /**
   * Width of the overlay
   *
   * @default 'Screen width -80'
   */
  width?: number | string;

  /**
   * Height of the overlay
   *
   * @default 'Screen height - 180'
   */
  height?: number | string;

  /**
   * If to take up full screen width and height
   *
   * @default false
   */
  fullScreen?: boolean;

  /**
   * Callback when user touches the backdrop
   */
  onBackdropPress?(): void;
}

export class Overlay extends React.Component<OverlayProps> {}

export interface ButtonInformation {
  title: string;
  icon: string;
  buttonStyle?: StyleProp<ViewStyle>;
}

export interface PricingCardProps {
  /**
   * Title
   */
  title?: string;

  /**
   * Price
   */
  price: string;

  /**
   * Color scheme for button & title
   */
  color?: string;

  /**
   * Pricing information
   */
  info?: string[];

  /**
   * {title, icon, buttonStyle}
   * Button information
   */
  button: ButtonInformation;

  /**
   * Function to be run when button is pressed
   */
  onButtonPress?(): void;

  /**
   * Outer component styling
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Inner wrapper component styling
   */
  wrapperStyle?: StyleProp<ViewStyle>;

  /**
   * component title style
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * component pricing text style
   */
  pricingStyle?: StyleProp<TextStyle>;

  /**
   * component info text style
   */
  infoStyle?: StyleProp<TextStyle>;
}

/**
 * PricingCard component
 */
export class PricingCard extends React.Component<PricingCardProps, any> {}

export interface RatingProps {
  /**
   * Callback method when the user finishes rating. Gives you the final rating value as a whole number
   */
  onFinishRating?(rating: number): void;

  /**
   * Callback method when the user starts rating.
   */
  onStartRating?(): void;

  /**
   * Choose one of the built-in types: star, rocket, bell, heart or use type custom to render a custom image
   */
  type?: 'star' | 'rocket' | 'bell' | 'heart' | 'custom';

  /**
   * Pass in a custom image source; use this along with type='custom' prop above
   */
  ratingImage?: ImageURISource | string | number;

  /**
   * Pass in a custom fill-color for the rating icon; use this along with type='custom' prop above
   *
   * @default '#f1c40f'
   */
  ratingColor?: string;

  /**
   * Pass in a custom background-fill-color for the rating icon; use this along with type='custom' prop above
   *
   * @default 'white'
   */
  ratingBackgroundColor?: string;

  /**
   * Number of rating images to display
   *
   * @default 5
   */
  ratingCount?: number;

  /**
   * The size of each rating image
   *
   * @default 50
   */
  imageSize?: number;

  /**
   * Displays the Built-in Rating UI to show the rating value in real-time
   */
  showRating?: boolean;

  /**
   * Whether the rating can be modiefied by the user
   *
   * @default false
   */
  readonly?: boolean;

  /**
   * The initial rating to render
   *
   * @default ratingCount/2
   */
  startingValue?: number;

  /**
   * The number of decimal places for the rating value; must be between 0 and 20
   *
   * @default undefined
   */
  fractions?: number;

  /**
   * Exposes style prop to add additonal styling to the container view
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * Rating component
 */
export class Rating extends React.Component<RatingProps, any> {}

export type IconNode = boolean | React.ReactElement<{}> | IconProps;

export interface SearchBarWrapper {
  /**
   * What style of search bar to display
   *
   * @default is 'default
   */
  platform?: 'default' | 'ios' | 'android';
}

export interface SearchBarBase extends TextInputProperties {
  /**
   * Styling for the searchbar container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Optional styling for the TextInput's container
   */
  inputContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Override the clear Icon props or use a custom component. Use null or false to hide the icon.
   */
  clearIcon?: IconNode;

  /**
   * Override the search Icon props or use a custom component. Use null or false to hide the icon.
   */
  searchIcon?: IconNode;

  /**
   * TextInput styling
   */
  inputStyle?: StyleProp<TextStyle>;

  /**
   * Optional props to pass to the ActivityIndicator
   */
  loadingProps?: ActivityIndicatorProperties;

  /**
   * If to show the loading indicator
   *
   * @default false
   */
  showLoading?: boolean;

  /**
   * Container style for the left icon
   */
  leftIconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Container style for the right icon
   */
  rightIconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Callback fired when the clear button is pressed
   */
  onClear?(): void;

  /**
   * Callback fired when the input is focused
   */
  onFocus?(): void;

  /**
   * Callback fired when the input is blurred via the keyboard
   */
  onBlur?(): void;

  /**
   * Method to fire when text is changed
   */
  onChangeText?(text: string): void;
}

export interface TooltipProps {
  /**
   * sets backgroundColor of the tooltip and pointer.
   */
  backgroundColor?: string;

  /**
   * Color to highlight the item the tooltip is surrounding.
   */
  highlightColor?: string;

  /**
   * function which gets called on closing the tooltip.
   */
  onClose?(): void;

  /**
   * function which gets called on opening the tooltip.
   */
  onOpen?(): void;

  /**
   * Color of tooltip pointer, it defaults to the backgroundColor if none passed .
   */
  pointerColor?: string;

  /**
   * Flag to determine to toggle or not the tooltip on press.
   */
  toggleOnPress?(): void;

  /**
   * Component to be rendered as the display container.
   */
  popover?: React.ReactElement<{}>;

  /**
   * Passes style object to tooltip container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Tooltip container height. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container.
   * @default 40
   */
  height?: number;

  /**
   * Tooltip container width. Necessary in order to render the container in the correct place. Pass height according to the size of the content rendered inside the container.
   * @default 150
   */
  width?: number;

  /**
   *  Flag to determine whether or not dislay overlay shadow when tooltip is open.
   *
   * @default true
   */
  withOverlay?: boolean;

  /**
   * Flag to determine whether or not dislay pointer.
   */
  withPointer?: boolean;
}

export class Tooltip extends React.Component<TooltipProps, any> {}

export interface SearchBarDefault extends SearchBarBase {
  /**
   * Change theme to light theme
   *
   * @default false
   */
  lightTheme?: boolean;

  /**
   * Change TextInput styling to rounded corners
   *
   * @default false
   */
  round?: boolean;
}

export interface SearchBarPlatform extends SearchBarBase {
  /**
   * Callback fired when the cancel button is pressed
   */
  onCancel?(): void;
}

export interface SearchBarAndroid extends SearchBarPlatform {
  /**
   * Override the cancel Icon props or use a custom component. Use null or false to hide the icon.
   */
  cancelIcon?: IconNode;
}

export interface SearchBarIOS extends SearchBarPlatform {
  /**
   * Props passed to cancel button
   */
  cancelButtonProps?: Partial<NativeButtonProps>;
}

type SearchBarProps = SearchBarWrapper &
  SearchBarBase &
  SearchBarPlatform &
  SearchBarDefault &
  SearchBarIOS &
  SearchBarAndroid;

/**
 * SearchBar component
 */
export class SearchBar extends React.Component<SearchBarProps, any> {
  /**
   * Holds reference to the stored input.
   */
  input: TextInput;

  /**
   * Call focus on the TextInput
   */
  focus(): void;

  /**
   * Call blur on the TextInput
   */
  blur(): void;

  /**
   * Call clear on the TextInput
   */
  clear(): void;
}

export interface SliderProps {
  /**
   * Initial value of the slider
   *
   * @default 0
   */
  value?: number;

  /**
   * If true the user won't be able to move the slider
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Initial minimum value of the slider
   *
   * @default	0
   */
  minimumValue?: number;

  /**
   * Initial maximum value of the slider
   *
   * @default 1
   */
  maximumValue?: number;

  /**
   * Step value of the slider. The value should be between 0 and maximumValue - minimumValue)
   *
   * @default 0
   */
  step?: number;

  /**
   * The color used for the track to the left of the button
   *
   * @default '#3f3f3f'
   */
  minimumTrackTintColor?: string;

  /**
   * The color used for the track to the right of the button
   *
   * @default '#b3b3b3'
   */
  maximumTrackTintColor?: string;

  /**
   * The color used for the thumb
   *
   * @default '#343434'
   */
  thumbTintColor?: string;

  /**
   * The size of the touch area that allows moving the thumb. The touch area has the same center as the visible thumb.
   * This allows to have a visually small thumb while still allowing the user to move it easily.
   *
   * @default "{width: 40, height: 40}"
   */
  thumbTouchSize?: {
    width?: number;
    height?: number;
  };

  /**
   * Callback continuously called while the user is dragging the slider
   */
  onValueChange?(value: number): void;

  /**
   * Callback called when the user starts changing the value (e.g. when the slider is pressed)
   */
  onSlidingStart?(value: number): void;

  /**
   * Callback called when the user finishes changing the value (e.g. when the slider is released)
   */
  onSlidingComplete?(value: number): void;

  /**
   * The style applied to the slider container
   */
  style?: StyleProp<ViewStyle>;

  /**
   * The style applied to the track
   */
  trackStyle?: StyleProp<ViewStyle>;

  /**
   * The style applied to the thumb
   */
  thumbStyle?: StyleProp<ViewStyle>;

  /**
   * Set this to true to visually see the thumb touch rect in green.
   *
   * @default false
   */
  debugTouchArea?: boolean;

  /**
   * Set to true if you want to use the default 'spring' animation
   *
   * @default false
   */
  animateTransitions?: boolean;

  /**
   * Set to 'spring' or 'timing' to use one of those two types of animations with the default animation properties.
   *
   * @default 'timing'
   */
  animationType?: 'spring' | 'timing';

  /**
   * Used to configure the animation parameters. These are the same parameters in the Animated library.
   *
   * @default undefined
   */
  animationConfig?:
    | Animated.TimingAnimationConfig
    | Animated.SpringAnimationConfig;
}

/**
 * Slider component
 */
export class Slider extends React.Component<SliderProps, any> {}

export type SocialMediaType =
  | 'facebook'
  | 'twitter'
  | 'google-plus-official'
  | 'pinterest'
  | 'linkedin'
  | 'youtube'
  | 'vimeo'
  | 'tumblr'
  | 'instagram'
  | 'quora'
  | 'foursquare'
  | 'wordpress'
  | 'stumbleupon'
  | 'github'
  | 'github-alt'
  | 'twitch'
  | 'medium'
  | 'soundcloud'
  | 'gitlab'
  | 'angellist'
  | 'codepen';

export interface SocialIconProps {
  /**
   * Title if made into a button
   */
  title?: string;

  /**
   * Social media type
   */
  type: SocialMediaType;

  /**
   * Adds a drop shadow, set to false to remove
   *
   * @default true
   */
  raised?: boolean;

  /**
   * Creates button
   *
   * @default false
   */
  button?: boolean;

  /**
   * onPress method
   */
  onPress?(): void;

  /**
   * @default none	function	onLongPress method
   */
  onLongPress?(): void;

  /**
   * Reverses icon color scheme, setting background to white and icon to primary color
   *
   * @default false
   */
  light?: boolean;

  /**
   * Extra styling for icon component
   */
  iconStyle?: StyleProp<ViewStyle>;

  /**
   * Button styling
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Icon color
   */
  iconColor?: string;

  /**
   * Icon size
   *
   * @default 24
   */
  iconSize?: number;

  /**
   * Component Type of button
   *
   * @default TouchableHighlight
   */
  component?: React.ComponentClass;

  /**
   * Specify different font family
   *
   * @default System font bold (iOS), Sans Serif Black (android)
   */
  fontFamily?: string;

  /**
   * Specify font weight of title if set as a button with a title
   *
   * @default bold (ios), black(android)
   */
  fontWeight?: string;

  /**
   * Specify text styling
   */
  fontStyle?: StyleProp<TextStyle>;

  /**
   * Disable button
   *
   * @default false
   */
  disabled?: boolean;

  /**
   * Shows loading indicator
   *
   * @default false
   */
  loading?: boolean;
}

/**
 * SocialIcon component
 */
export class SocialIcon extends React.Component<SocialIconProps, any> {}

export interface TileProps {
  /**
   * Icon Component Props
   */
  icon?: IconObject;

  /**
   * Styling for the outer icon container
   */
  iconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Text inside the tile
   */
  title?: string;

  /**
   * Styling for the title
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * Text inside the tile when tile is featured
   */
  caption?: string;

  /**
   * Styling for the caption
   */
  captionStyle?: StyleProp<TextStyle>;

  /**
   * Changes the look of the tile
   */
  featured?: boolean;

  /**
   * @default none	object (style)	Styling for the outer tile container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * Source for the image
   */
  imageSrc: ImageURISource | string | number;

  /**
   * Styling for the image
   */
  imageContainerStyle?: StyleProp<ViewStyle>;

  /**
   * @default none	function (event)	Function to call when tile is pressed
   */
  onPress?(): void;

  /**
   * Number passed to control opacity on press
   *
   * @default 0.2
   */
  activeOpacity?: number;

  /**
   * Styling for bottom container when not featured tile
   */
  contentContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Width for the tile
   *
   * @default Device Width
   */
  width?: number;

  /**
   * Height for the tile
   *
   * @default Device Width * 0.8
   */
  height?: number;
}

/**
 * Tile component
 */
export class Tile extends React.Component<TileProps, any> {}

/**
 * Colors
 */

export interface Colors {
  readonly primary: string;
  readonly secondary: string;
  readonly grey0: string;
  readonly grey1: string;
  readonly grey2: string;
  readonly grey3: string;
  readonly grey4: string;
  readonly grey5: string;
  readonly greyOutline: string;
  readonly searchBg: string;
  readonly error: string;
  readonly [key: string]: string;
}

export const colors: Colors;

/* Utility Functions */

/**
 * TODO make the Icon Type an export of the react-native-vector-icons type definitions.
 */
export function getIconType(type: IconType): any;

/**
 * Method to normalize size of fonts across devices
 */
export function normalize(size: number): number;

/**
 * Registers custom icons
 */
export function registerCustomIconType(id: string, font: any): void;

type RecursivePartial<T> = { [P in keyof T]?: RecursivePartial<T[P]> };

type PartialExcept<T, K extends keyof T> = RecursivePartial<T> & Pick<T, K>;

export interface FullTheme {
  Avatar: Partial<AvatarProps>;
  Badge: Partial<BadgeProps>;
  Button: Partial<ButtonProps>;
  ButtonGroup: Partial<ButtonGroupProps>;
  Card: Partial<CardProps>;
  CheckBox: Partial<CheckBoxProps>;
  Divider: Partial<DividerProps>;
  Header: Partial<HeaderProps>;
  Icon: Partial<IconProps>;
  Input: Partial<InputProps>;
  ListItem: Partial<ListItemProps>;
  Overlay: Partial<OverlayProps>;
  PricingCard: Partial<PricingCardProps>;
  Rating: Partial<RatingProps>;
  SearchBar: Partial<SearchBarProps>;
  Slider: Partial<SliderProps>;
  SocialIcon: Partial<SocialIconProps>;
  Text: Partial<TextProps>;
  Tile: Partial<TileProps>;
  Tooltip: Partial<TooltipProps>;
  colors: RecursivePartial<Colors>;
}

export type Theme<T> = PartialExcept<FullTheme, 'colors'> & T;

export type UpdateTheme = (updates: RecursivePartial<FullTheme>) => void;

export interface ThemeProps {
  theme: Theme<{}>;
  updateTheme: UpdateTheme;
}

/**
 * ThemeProvider
 */
export interface ThemeProviderProps {
  theme?: Theme<{}>;
  children: React.ReactChild;
}

export class ThemeProvider extends React.Component<ThemeProviderProps> {
  updateTheme: UpdateTheme;
  getTheme(): Theme<{}>;
}

export interface ThemeConsumerProps {
  children(props: ThemeProps): React.ReactChild;
}

export class ThemeConsumer extends React.Component<ThemeConsumerProps> {}

export function withTheme<P extends {}>(
  component: React.ComponentType<P & ThemeProps>
): React.ComponentClass<P>;
