import { withCustomConfig } from 'react-docgen-typescript';
import path from 'path';

const themeProps = ['theme', 'updateTheme', 'replaceTheme'];
const componentsWithParentsTypeToBeParsed = ['AirbnbRating'];

// The config object is passed to the parser.
const configs = {
  savePropValueAsString: true,
  propFilter: (prop, component) => {
    if (themeProps.includes(prop.name)) {
      return false;
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

export const docgenParser = withCustomConfig(
  path.join(__dirname, '../../tsconfig.json'),
  configs
);
