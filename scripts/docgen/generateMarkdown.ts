import {
  isTrue,
  tabify,
  codify,
  snippetToCode,
  removeNewline,
  filterPropType,
  installationTab,
} from './utils';
import { ComponentDoc, Props } from 'react-docgen-typescript';
import orderBy from 'lodash/orderBy';
import prettier from 'prettier';
import dedent from 'dedent';
import path from 'path';
import fs from 'fs';
import {
  Method,
  StringIndexedObject,
} from 'react-docgen-typescript/lib/parser';

const ALLOWED_INCLUDES = {
  TextProps: '[TextProps](https://reactnative.dev/docs/text#props)',
  ViewProps: '[ViewProps](https://reactnative.dev/docs/view#props)',
  ImageProps:
    '[React Native ImageProps](https://reactnative.dev/docs/image#props)',
  TouchableOpacityProps:
    '[TouchableOpacityProps](https://reactnative.dev/docs/touchableopacity#props)',
  TextInputProps:
    '[React Native TextInputProps](https://reactnative.dev/docs/textinput#props)',
};

const pkgPath = path.join(__dirname, '../../packages');
const docsPath = path.join(__dirname, '../../website/docs');

const mustAddProps = ['InlinePressableProps'];

export class Markdown implements ComponentDoc {
  description: string;
  displayName: string;
  filePath: string;
  props: Props;
  tags?: StringIndexedObject<string>;
  methods: Method[];
  static packageName: string;

  constructor(component: ComponentDoc) {
    this.displayName = component.displayName;
    this.description = component.description;
    this.filePath = component.filePath;
    this.props = component.props;
    this.methods = component.methods;
    this.tags = component.tags;
  }

  save() {
    this.print(this.generate());
  }

  private print(mdContent: string) {
    const pkgRegExp = new RegExp('packages/(.*)/src');
    const [, pkg] = this.filePath.match(pkgRegExp);
    const [parentComp = '', childComp = ''] = this.displayName.split('.');
    if (pkg !== Markdown.packageName) {
      Markdown.packageName = pkg;
      console.log();
      console.log(`@react-native-elements/${pkg}`);
    }
    const isUniverse = !this.filePath.startsWith(pkgPath + '/base');
    const mdFilePath = path.join(
      docsPath,
      isUniverse ? 'universe' : 'components',
      `${this.displayName}.mdx`
    );
    console.log('', childComp ? '  ' + childComp : parentComp);

    fs.writeFileSync(mdFilePath, prettier.format(mdContent, { parser: 'mdx' }));
  }

  private generate() {
    const id = this.displayName.toLowerCase().replace('.', '_');
    const { imports = '', installation = '' } = this.tags || {};

    const usagePath = `component_usage/${this.displayName}.mdx`;
    const usageFileExists = fs.existsSync(path.join(docsPath, usagePath));

    return dedent`
  ---
  id: ${id}
  title: ${this.displayName}
  ---
  
  import Tabs from "@theme/Tabs";
  import TabItem from "@theme/TabItem";
  import { ${imports} } from 'react-native-elements';
  ${isTrue(usageFileExists, `import Usage from '../${usagePath}';`)}
  
  ${snippetToCode(this.description)}
  
  ${installationTab(installation)}
  

  ${this.usage(usageFileExists)}
  
  ${this.propTable}`;
  }

  private usage(usageFileExists: boolean) {
    const { usage = '' } = this.tags || {};

    return dedent`
    ${isTrue(usageFileExists || !!usage, '## Usage')}
  
    ${isTrue(usageFileExists, '<Usage/>')}
    
    ${tabify(snippetToCode(usage)).trim()}`;
  }

  private get propTable() {
    const orderedProps = orderBy(Object.values(this.props), ['name'], ['asc']);
    if (!orderedProps.length) {
      return '';
    }

    const includes = new Set<string>();
    const rows = [];

    for (const {
      name,
      type,
      description,
      defaultValue,
      parent,
    } of orderedProps) {
      if (parent) {
        const { name: parentName, fileName: parentFileName } = parent;
        if (!mustAddProps.includes(parentName)) {
          if (parentFileName.includes('node_modules')) {
            if (ALLOWED_INCLUDES[parentName]) {
              includes.add(ALLOWED_INCLUDES[parentName]);
            }
            continue;
          } else if (
            parentFileName.includes('base/src') &&
            !this.filePath.includes(parentFileName)
          ) {
            const parentID = parentName.toLowerCase().replace('props', '');
            includes.add(
              `[${parentName}](/docs/documentation/${parentID}#props)`
            );
            continue;
          }
        }
      }

      rows.push(
        [
          '',
          codify(name),
          filterPropType(type.name),
          codify(defaultValue?.value),
          removeNewline(description),
          '',
        ].join('|')
      );
    }

    return dedent`
  
      ## Props
  
      ${isTrue(
        includes.size,
        `:::note
        Includes all props from ${[...includes].sort().join(', ')}
        :::`
      )}

      ${isTrue(
        rows.length,
        `<div class='table-responsive'>
      
         | Name | Type | Default | Description |
         | ---- | ---- | ------- | ----------- |
         ${rows.join('\n')}
      
         </div>`
      )}

      `;
  }
}
