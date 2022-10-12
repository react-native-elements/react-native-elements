/* eslint-disable no-console */
import {
  tabify,
  codify,
  snippetToCode,
  removeNewline,
  filterPropType,
} from './utils';
import { MUST_INCLUDE_PROP_TYPES } from './parentProps';
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
import Handlebars from 'handlebars';

type PropRowT = {
  name?: string;
  description?: string;
  default?: string;
  type?: string;
};

type TemplateOptionsT = {
  id: string;
  title: string;
  description: string;
  imports: string;
  installation: string;
  showUsage: boolean;
  parentComponent: string;
  usageFileExists: boolean;
  playgroundExists: boolean;
  usage: string;
  showProps: boolean;
  props?: PropRowT[];
  themeKey: string;
  includeProps?: string;
};

const pkgPath = path.join(__dirname, '../../packages');
const docsPath = path.join(__dirname, '../../website/docs');

const template = Handlebars.compile(
  String(fs.readFileSync(path.join(__dirname, 'mdx-template.hbs')))
);

export class Markdown implements ComponentDoc {
  description: string;
  displayName: string;
  filePath: string;
  props: Props;
  tags?: StringIndexedObject<string>;
  methods: Method[];
  static packageName: string;
  static parents: Record<string, string[]>;

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

  private print(mdContent: TemplateOptionsT) {
    const pkgRegExp = new RegExp('packages/(.*)/src');
    const [, pkg] = this.filePath.match(pkgRegExp);
    const [parentComp = '', childComp = ''] = this.displayName.split('.');

    if (pkg !== Markdown.packageName) {
      Markdown.packageName = pkg;
      console.log();
      console.log(`@rneui/${pkg}`);
    }
    const isUniverse = !this.filePath.startsWith(pkgPath + '/base');
    const mdFilePath = path.join(
      docsPath,
      isUniverse ? 'universe' : 'components',
      `${this.displayName}.mdx`
    );
    console.log('', childComp ? '  ' + childComp : parentComp);

    fs.writeFileSync(
      mdFilePath,
      // './test.mdx',
      prettier.format(template(mdContent), { parser: 'mdx' })
    );
  }

  private generate(): TemplateOptionsT {
    const id = this.displayName.toLowerCase().replace('.', '_');
    const themeKey = this.displayName.replace('.', '');

    const parentComponent = this.displayName.split('.')[0];
    const { imports = '', installation = '', usage = '' } = this.tags || {};

    const usagePath = `component_usage/${this.displayName}.mdx`;
    const usageFileExists = fs.existsSync(path.join(docsPath, usagePath));
    const playgroundPath = `../playground/${this.displayName}/${id}.playground.tsx`;
    const playgroundExists = fs.existsSync(path.join(docsPath, playgroundPath));
    return {
      id,
      title: this.displayName,
      description: dedent(snippetToCode(this.description)),
      imports,
      parentComponent,
      installation: installation,
      showUsage: Boolean(usage) || usageFileExists,
      usageFileExists,
      playgroundExists,
      usage: dedent(tabify(snippetToCode(usage)).trim()),
      showProps: true,
      themeKey,
      ...this.propTable(),
    };
  }

  private propTable() {
    const orderedProps = orderBy(Object.values(this.props), ['name'], ['asc']);
    if (!orderedProps.length) {
      return '';
    }

    const rows: PropRowT[] = [];

    for (const props of orderedProps) {
      const { name, type, description, defaultValue, parent } = props;
      if (parent) {
        const { name: parentName, fileName: parentFileName } = parent;
        if (!MUST_INCLUDE_PROP_TYPES.includes(parentName)) {
          if (
            parentFileName.includes('node_modules') ||
            (parentFileName.includes('base/src') &&
              !this.filePath.includes(parentFileName))
          ) {
            continue;
          }
        }
      }

      rows.push({
        name: codify(name),
        type: filterPropType(type.name),
        default: codify(defaultValue?.value),
        description: removeNewline(description),
      });
    }
    return {
      props: rows,
      includeProps: Markdown.parents[this.displayName].sort().join(', '),
    };
  }
}
