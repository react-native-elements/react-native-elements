import {
  // tabify,
  codify,
  snippetToCode,
  removeNewline,
  filterPropType,
} from './utils/common';
import { MUST_INCLUDE_PROP_TYPES } from './utils/parentProps';
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
import { ComponentUsage, usageGenParser } from './parser/usageParser';

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
  usages: ComponentUsage['usage'];
  showProps: boolean;
  props?: PropRowT[];
  themeKey: string;
  includeProps?: string;
};

const root = path.join(__dirname, '../../../');
// const pkgRegExp = new RegExp('packages/(.*)/src');
// const pkgPath = path.join(root, 'packages');
const docsPath = path.join(root, 'website/docs');
const usagePath = path.join(docsPath, 'component_usage');
const playgroundPath = path.join(docsPath, '..', 'playground');

const File = {
  exist(...paths: string[]) {
    return fs.existsSync(path.join(...paths));
  },
  read(...paths: string[]) {
    return String(fs.readFileSync(path.join(...paths)));
  },
  write(content: string, ...paths: string[]) {
    fs.writeFileSync(path.join(...paths), content);
  },
};

const template = Handlebars.compile(
  File.read(__dirname, './templates/mdx-template.hbs')
);

export class Component implements ComponentDoc {
  description: string;
  displayName: string;
  filePath: string;
  props: Props;
  tags?: StringIndexedObject<string>;
  methods: Method[];
  usages: ComponentUsage['usage'];
  meta: ComponentUsage['meta'];

  static parents: Record<string, string[]>;

  constructor(component: ComponentDoc) {
    this.displayName = component.displayName;
    this.description = component.description;
    this.filePath = component.filePath;
    this.props = component.props;
    this.methods = component.methods;
    this.tags = component.tags;

    this.extractUsage();
  }

  extractUsage() {
    const usageFilePath = path.resolve(
      this.filePath,
      '..',
      `${this.displayName}.usage.tsx`
    );
    if (!File.exist(usageFilePath)) {
      return;
    }
    const { desc, meta, usage } = usageGenParser(usageFilePath);
    this.usages = usage;
    this.meta = meta;
    this.description = desc || this.description;
  }

  async generate() {
    return new Promise((resolve) => {
      const { displayName, tags, description } = this;
      const id = displayName.toLowerCase().replace('.', '_');
      const themeKey = displayName.replace('.', '');
      const [parentComponent] = displayName.split('.');
      // const [, pkg] = this.filePath.match(pkgRegExp);

      const { imports = '', installation = '', usage = '' } = tags || {};

      const usageFileExists = File.exist(usagePath, `${displayName}.mdx`);

      const playgroundExists = File.exist(
        playgroundPath,
        displayName,
        `${id}.playground.tsx`
      );
      const handleBar: TemplateOptionsT = {
        id,
        title: displayName,
        description,
        imports,
        parentComponent,
        installation,
        showUsage: !!this.usages?.length || Boolean(usage) || usageFileExists,
        usageFileExists,
        playgroundExists,
        usage: this.makeUsages() || dedent(snippetToCode(usage).trim()),
        usages: this.usages,
        showProps: true,
        themeKey,
        ...this.propTable(),
      };
      const mdFile = prettier.format(template(handleBar), { parser: 'mdx' });

      const mdFilePath = path.join(
        docsPath,
        'components',
        `${this.displayName}.mdx`
      );
      // console.log(pkg, parentComponent, childComponent);

      File.write(mdFile, mdFilePath);
      resolve(displayName);
    });
  }

  private makeUsages() {
    return (
      this.usages
        ?.map(({ title, desc, code, metaData }) => {
          let lang = 'tsx';
          let live = 'live';
          const defTags = {
            lang: (v) => ((lang = v), ''),
            live: (v) => ((live = v ? 'live' : ''), ''),
          };
          const props = metaData
            ?.map(([tag, value]) =>
              defTags[tag] ? defTags[tag](value) : `${tag}=${value}`
            )
            .join(' ');

          return `### ${title} \n ${desc} \n \`\`\`${lang} ${live} ${props} \n ${code} \n\`\`\`\n `;
        })
        .join('\n') || ''
    );
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
      includeProps: Component.parents[this.displayName].sort().join(', '),
    };
  }
}
