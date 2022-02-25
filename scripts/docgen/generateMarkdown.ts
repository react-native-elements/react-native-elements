import {
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
  AccessibilityProps: 'Acc',
  TouchableOpacityProps: 'Touch',
};

const pkgPath = path.join(__dirname, '../../packages');
const docsPath = path.join(__dirname, '../../website/docs');

export class Markdown implements ComponentDoc {
  description: string;
  displayName: string;
  filePath: string;
  props: Props;
  tags?: StringIndexedObject<string>;
  methods: Method[];

  constructor(component: ComponentDoc) {
    this.displayName = component.displayName;
    this.description = component.description;
    this.filePath = component.filePath;
    this.props = component.props;
    this.methods = component.methods;
    this.tags = component.tags;
    // const [_, pkg] = this.filePath.match(
    //   new RegExp(path.join(__dirname, '../../../packages/(.*)/src'))
    // );
    // const parentComp = this.displayName.split('.')[0];
  }

  printFiles(mdContent: string) {
    const isUniverse = !this.filePath.startsWith(pkgPath + '/base');
    const mdFilePath = path.join(
      docsPath,
      isUniverse ? 'universe' : 'components',
      `${this.displayName}.mdx`
    );
    console.log(this.displayName);

    fs.writeFileSync(mdFilePath, prettier.format(mdContent, { parser: 'mdx' }));
  }

  generateMarkdown() {
    // console.log(JSON.stringify(this.props, null, 2));
    const id = this.displayName.toLowerCase().replace('.', '_');
    const { usage = '', imports = '', installation = '' } = this.tags || {};

    const usageFileExists = Boolean(
      fs.existsSync(
        path.join(docsPath, `component_usage/${this.displayName}.mdx`)
      )
    );

    let mdContent = dedent`
  ---
  id: ${id}
  title: ${this.displayName}
  ---
  
  import Tabs from "@theme/Tabs";
  import TabItem from "@theme/TabItem";
  import { ${imports} } from 'react-native-elements';
  ${
    usageFileExists ? `import Usage from './usage/${this.displayName}.mdx'` : ''
  }
  
  ${snippetToCode(this.description)}
  
  ${installationTab(installation)}
  
  ## Usage
  
  ${usageFileExists ? '<Usage/>' : ''}
  
  ${tabify(snippetToCode(usage)).trim()}
  
  ${this.propTable}   
  `;

    this.printFiles(mdContent);
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
      declarations,
    } of orderedProps) {
      let shouldSkip = declarations.every(({ fileName, name: typeName }) => {
        if (/node_modules/.test(fileName)) {
          const allowedProp = ALLOWED_INCLUDES[typeName];
          if (allowedProp) {
            includes.add(allowedProp);
          }
          return true;
        } else if (!this.filePath.includes(fileName)) {
          includes.add(typeName);
          return true;
        }
        return false;
      });
      if (shouldSkip) {
        continue;
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

    const includedProps = includes.size
      ? dedent`
      :::note
      Include all props from ${[...includes].join(', ')}
      :::`
      : '';

    return dedent`
  
      ## Props
  
      ${includedProps}
  
      <div class='table-responsive'>
  
      | Name | Type | Default | Description |
      | ---- | ---- | ------- | ----------- |
      ${rows.join('\n')}
  
      </div>
      `;
  }
}
