import { withCustomConfig } from 'react-docgen-typescript';
import path from 'path';

const themeProps = ['theme', 'updateTheme', 'replaceTheme'];
const componentsWithParentsTypeToBeParsed = ['AirbnbRating'];
const componentWithButtonPropsAsParent = [
  'Chip',
  'FAB',
  'SpeedDial',
  'ButtonGroup',
  'Tab.Item',
  'Dialog.Button',
];
const componentWithButtonGroupPropsAsParent = ['ListItem.ButtonGroup'];
const componentWithCheckBoxPropsAsParent = ['ListItem.CheckBox'];

const componentWithIconPropsAsParent = ['ListItem.Chevron'];
const componentWithTextPropsAsParent = [
  'Card.FeaturedSubtitle',
  'Card.FeaturedTitle',
  'Card.Title',
  'ListItem.Content',
  'ListItem.Subtitle',
  'ListItem.Title',
];

const componentWithImagePropsAsParent = ['Card.Image'];
const componentWithDividerPropsAsParent = ['Card.Divider'];
const componentWithListItemBasePropsAsParent = [
  'ListItem.Accordion',
  'ListItem.Swipeable',
];

export const docgenParser = withCustomConfig(
  path.join(__dirname, '../../tsconfig.json'),
  {
    savePropValueAsString: true,
    propFilter: (prop, component) => {
      if (themeProps.includes(prop.name)) {
        return false;
      }
      if (component.name === 'Avatar.Accessory') {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          return Boolean(
            prop.declarations.find((decleration) => {
              return (
                !decleration.fileName.includes('node_modules') &&
                !decleration.fileName.includes('Icon.tsx') &&
                !decleration.fileName.includes('Image.tsx')
              );
            })
          );
        }
      }
      if (componentWithButtonPropsAsParent.includes(component.name)) {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          return Boolean(
            prop.declarations.find((decleration) => {
              return (
                !decleration.fileName.includes('node_modules') &&
                !decleration.fileName.includes('Button.tsx')
              );
            })
          );
        }
      }
      if (componentWithButtonGroupPropsAsParent.includes(component.name)) {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          return Boolean(
            prop.declarations.find((decleration) => {
              return (
                !decleration.fileName.includes('node_modules') &&
                !decleration.fileName.includes('ButtonGroup.tsx')
              );
            })
          );
        }
      }
      if (componentWithCheckBoxPropsAsParent.includes(component.name)) {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          return Boolean(
            prop.declarations.find((decleration) => {
              return (
                !decleration.fileName.includes('node_modules') &&
                !decleration.fileName.includes('CheckBox.tsx') &&
                !decleration.fileName.includes('CheckBoxIcon.tsx')
              );
            })
          );
        }
      }
      if (componentWithIconPropsAsParent.includes(component.name)) {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          return Boolean(
            prop.declarations.find((decleration) => {
              return (
                !decleration.fileName.includes('node_modules') &&
                !decleration.fileName.includes('Icon.tsx')
              );
            })
          );
        }
      }
      if (componentWithTextPropsAsParent.includes(component.name)) {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          return Boolean(
            prop.declarations.find((decleration) => {
              return (
                !decleration.fileName.includes('node_modules') &&
                !decleration.fileName.includes('Text.tsx')
              );
            })
          );
        }
      }
      if (componentWithImagePropsAsParent.includes(component.name)) {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          return Boolean(
            prop.declarations.find((decleration) => {
              return (
                !decleration.fileName.includes('node_modules') &&
                !decleration.fileName.includes('Image.tsx')
              );
            })
          );
        }
      }
      if (componentWithDividerPropsAsParent.includes(component.name)) {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          return Boolean(
            prop.declarations.find((decleration) => {
              return (
                !decleration.fileName.includes('node_modules') &&
                !decleration.fileName.includes('Divider.tsx')
              );
            })
          );
        }
      }
      if (componentWithListItemBasePropsAsParent.includes(component.name)) {
        if (prop.declarations !== undefined && prop.declarations.length > 0) {
          return Boolean(
            prop.declarations.find((decleration) => {
              return (
                !decleration.fileName.includes('node_modules') &&
                !decleration.fileName.includes('ListItemBase.tsx')
              );
            })
          );
        }
      }
      if (
        prop.declarations !== undefined &&
        prop.declarations.length > 0 &&
        !componentsWithParentsTypeToBeParsed.includes(component.name)
      ) {
        return Boolean(
          prop.declarations.find((declaration) => {
            return !declaration.fileName.includes('node_modules');
          })
        );
      }

      return true;
    },
  }
);
