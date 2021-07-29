import { withDefaultConfig } from 'react-docgen-typescript';

const themeProps = ['theme', 'updateTheme', 'replaceTheme'];
const componentsWithParentsTypeToBeParsed = ['AirbnbRating'];

function platformMappingHandler(value) {
  const formattedString = value
    .substring(value.lastIndexOf('{') + 1, value.lastIndexOf('}') - 1)
    .replace(/ /g, '');
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
    if (themeProps.includes(prop.name)) {
      return false;
    }

    if (prop.type && prop.type.name.includes('|')) {
      prop.type.name = prop.type.name.replace(/\|/g, 'or');
    }

    if (prop.type && prop.type.name.includes('&')) {
      prop.type.name = prop.type.name.replace(/&/g, 'and');
    }

    // To deal with the props of type StyleProp<ViewStyle> and StyleProp<TextStyle>
    if (prop.type && prop.type.name.includes('StyleProp')) {
      if (prop.type.name.includes('TextStyle')) {
        prop.type.name = 'Text Style(Object)';
      } else {
        prop.type.name = 'View style(Object)';
      }
    }

    // To deal with the props of type Partial<>
    if (prop.type && prop.type.name.includes('Partial')) {
      const propName = prop.type.name;
      prop.type.name =
        propName.substring(
          propName.lastIndexOf('<') + 1,
          propName.lastIndexOf('>')
        ) + '(Object)';
    }

    if (prop.name === 'Component' || prop.name === 'ViewComponent') {
      prop.type.name = 'React Component';
    }

    if (component.name === 'Slider' && prop.name === 'containerStyle') {
      prop.type.name = 'Style Object';
    }

    if (component.name === 'ListItem.Accordion' && prop.name == 'animation') {
      prop.type.name = 'Boolean or Object';
    }

    // To deal with the platform specific props default value
    if (component.name === 'ButtonGroup' && prop.name === 'Component') {
      prop.defaultValue.value = platformMappingHandler(prop.defaultValue.value);
    }

    if (component.name === 'Icon' && prop.name === 'Component') {
      prop.defaultValue.value = platformMappingHandler(prop.defaultValue.value);
    }

    if (component.name === 'Header' && prop.name === 'ViewComponent') {
      prop.defaultValue.value = 'ImageBackground or View Component';
    }

    if (prop.defaultValue && prop.defaultValue.value.includes('\r\n')) {
      prop.defaultValue.value = prop.defaultValue.value.replace(/\r\n/g, '');
    }

    if (
      prop.defaultValue &&
      prop.defaultValue.value === 'theme?.colors?.primary'
    ) {
      prop.defaultValue.value = 'Color(Primary)';
    }

    // To deal with the prop of defaultValue onPress || onLongPress ? TouchableOpacity : View in Avatar
    if (
      prop.defaultValue &&
      prop.defaultValue.value ===
        'onPress || onLongPress ? TouchableOpacity : View'
    ) {
      prop.defaultValue.value = 'TouchableOpacity or View';
    }

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
