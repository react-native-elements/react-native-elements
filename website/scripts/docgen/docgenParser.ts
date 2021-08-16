import { withDefaultConfig } from 'react-docgen-typescript';

const themeProps = ['theme', 'updateTheme', 'replaceTheme'];
const componentsWithParentsTypeToBeParsed = ['AirbnbRating'];

function platformMappingHandler(value) {
  const formattedString = value
    .substring(value.lastIndexOf('{') + 1, value.lastIndexOf('}') - 1)
    .replace(/ /g, '')
    .replace(/\r\n/g, '');
  const platforms = formattedString.split(',');

  const platformTypes = { ios: '', android: '', web: '' };

  platforms.map((item) => {
    if (item !== '') {
      const [platform, type] = item.split(':');
      if (platform !== 'default') {
        platformTypes[platform] = type;
      } else {
        Object.keys(platformTypes).map((key) => {
          if (!platformTypes[key]) platformTypes[key] = type;
        });
      }
    }
  });
  const defaultValue = Object.keys(platformTypes)
    .map((key) => {
      return `${platformTypes[key]}(${key})`;
    })
    .join(',');

  return defaultValue;
}

// The config object is passed to the parser.
const parserOptions = {
  savePropValueAsString: true,
  propFilter: (prop, component) => {
    // This removes the theme props(theme, updateTheme, replaceTheme) from the documentation as they are common to all
    if (themeProps.includes(prop.name)) {
      return false;
    }

    // To replace all the '|' in props with 'or'
    // Input - TouchableOpacity | View
    // Output - TouchableOpacity or View
    if (prop.type && prop.type.name && prop.type.name.includes('|')) {
      prop.type.name = prop.type.name.replace(/\|/g, 'or');
    }

    // To replace all the '&' in props with 'and'
    // Input - TouchableOpacity & View
    // Output - TouchableOpacity and View
    if (prop.type && prop.type.name && prop.type.name.includes('&')) {
      prop.type.name = prop.type.name.replace(/&/g, 'and');
    }

    // To deal with the props of type StyleProp<ViewStyle> and StyleProp<TextStyle> which breaks the markdown
    // Input - StyleProp<ViewStyle>
    // Output - View style(Object)
    if (prop.type && prop.type.name && prop.type.name.includes('StyleProp')) {
      if (prop.type.name.includes('TextStyle')) {
        prop.type.name = 'Text Style(Object)';
      } else {
        prop.type.name = 'View style(Object)';
      }
    }

    // To deal with the props of type `() => void` or `() => any`
    // Input - () => void or () => any
    // Ouput - Function
    if (
      prop.type &&
      prop.type.name &&
      (prop.type.name === '() => void' || prop.type.name === '() => any')
    ) {
      prop.type.name = 'Function';
    }

    // To deal with prop's defaultValue of type `() => null` or `() => {}`
    // Input - `() => null` or `() => {}`
    // Output - Function
    if (
      prop.defaultValue &&
      prop.defaultValue.value &&
      (prop.defaultValue.value === '() => {}' ||
        prop.defaultValue.value === '() => null')
    ) {
      prop.defaultValue.value = 'Function';
    }

    // To deal with the props of type Partial<> which breaks the markdown
    // Input - Partial<ImageProps>
    // Output - ImageProps(Object)
    if (prop.type && prop.type.name && prop.type.name.includes('Partial')) {
      const propName = prop.type.name;
      prop.type.name =
        propName.substring(
          propName.lastIndexOf('<') + 1,
          propName.lastIndexOf('>')
        ) + '(Object)';
    }

    // Replace the occurances of type Component/ViewComponent to React Component
    // Input - Component/ViewComponent
    // Output - React Component
    if (prop.name === 'Component' || prop.name === 'ViewComponent') {
      prop.type.name = 'React Component';
    }

    // To replace the containerStyle props with 'typeof styles'(Object) to Style Object
    // Input - typeof styles
    // Output - Style Object
    if (component.name === 'Slider' && prop.name === 'containerStyle') {
      prop.type.name = 'Style Object';
    }

    // To replace the animation prop to a valid type of ListItem.Accordion
    // Input - {
    //     type?: 'timing' | 'spring';
    //     duration?: number;
    //   }
    // | boolean;
    // Output -  Boolean or Object
    if (component.name === 'ListItem.Accordion' && prop.name == 'animation') {
      prop.type.name = 'Boolean or Object';
    }

    // To deal with the platform specific props default value in ButtonGroup
    // Input - Platform.select<typeof React.Component>({
    //   android: TouchableNativeFeedback,
    //   default: TouchableOpacity,
    // })
    // Output - TouchableOpacity(ios),TouchableNativeFeedback(android),TouchableOpacity(web)
    if (component.name === 'ButtonGroup' && prop.name === 'Component') {
      prop.defaultValue.value = platformMappingHandler(prop.defaultValue.value);
    }

    // To replace '\r\n' which breaks the markdown for certain props to ''
    if (
      prop.defaultValue &&
      prop.defaultValue.value &&
      prop.defaultValue.value.includes('\r\n')
    ) {
      prop.defaultValue.value = prop.defaultValue.value.replace(/\r\n/g, '');
    }

    // To deal with the Badge Component with prop name onPress
    // Input - (...args: any[]) => an
    // Output - Function
    if (component.name === 'Badge' && prop.name === 'onPress') {
      prop.type.name = 'Function';
    }

    // To deal with the platform specific props default value in Icon
    // Image -  onPress ? Platform.select<typeof React.Component>({
    //   android: TouchableNativeFeedback,
    //   default: TouchableHighlight,
    // }) | View
    // Output - TouchableHighlight(ios),TouchableNativeFeedback(android),TouchableHighlight(web) | View
    if (component.name === 'Icon' && prop.name === 'Component') {
      prop.defaultValue.value =
        platformMappingHandler(prop.defaultValue.value) + ' | View';
    }

    // To deal with the ViewComponent prop default value in Header
    // linearGradientProps || !backgroundImage
    // ? View
    // : ImageBackground
    // Output - ImageBackground or View Component
    if (component.name === 'Header' && prop.name === 'ViewComponent') {
      prop.defaultValue.value = 'ImageBackground or View Component';
    }

    // Replace all the props with default value theme?.colors?.primary to Color(Primary)
    // Input - theme?.colors?.primary
    // Output - Color(Primary)
    if (
      prop.defaultValue &&
      prop.defaultValue.value === 'theme?.colors?.primary'
    ) {
      prop.defaultValue.value = 'Color(Primary)';
    }

    // To deal with the prop of default value onPress || onLongPress ? TouchableOpacity : View in Avatar
    // Input - onPress || onLongPress ? TouchableOpacity : View
    // Output - TouchableOpacity or View
    if (
      prop.defaultValue &&
      prop.defaultValue.value ===
        'onPress || onLongPress ? TouchableOpacity : View'
    ) {
      prop.defaultValue.value = 'TouchableOpacity or View';
    }

    // To deal with the prop of default value onPress || onLongPress ? TouchableOpacity : View in Avatar
    // Input - onPress || onLongPress ? TouchableHighlight : View
    // Output - TouchableHighlight or View
    if (
      prop.defaultValue &&
      prop.defaultValue.value ===
        'onPress || onLongPress ? TouchableHighlight : View'
    ) {
      prop.defaultValue.value = 'TouchableHighlight or View';
    }

    // Filter to show the props of the components only related to the src and ignore the props of the noe modules
    if (
      prop.declarations !== undefined &&
      prop.declarations.length > 0 &&
      !componentsWithParentsTypeToBeParsed.includes(component.name)
    ) {
      return Boolean(
        prop.declarations.find((declaration) => {
          return declaration.fileName.includes(component.name);
        })
      );
    }
    return true;
  },
};

export const docgenParser = withDefaultConfig(parserOptions);
