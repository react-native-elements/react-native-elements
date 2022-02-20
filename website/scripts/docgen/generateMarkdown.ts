import { snippetToCode, code, removeNewline, tabify } from './utils';
import { ComponentDoc, Props } from 'react-docgen-typescript';
import orderBy from 'lodash/orderBy';
import prettier from 'prettier';
import dedent from 'dedent';
import path from 'path';
import fs from 'fs';

const INCLUDES = {
  Button: 'Button',
};
let cachePkg = '';

export const generateMarkdown = (doc: ComponentDoc): string => {
  const { displayName, description, tags, props, filePath } = doc;
  const [_, pkg] = filePath.match(
    new RegExp(path.join(__dirname, '../../../packages/(.*)/src'))
  );
  // console.log(pkg);
  const id = displayName.toLowerCase().replace('.', '_');
  const parentComp = displayName.split('.')[0];
  const { usage = '', imports = '' } = tags || {};

  const usageFileExists = Boolean(
    fs.existsSync(
      path.join(__dirname, `../../docs/components/usage/${displayName}.mdx`)
    )
  );

  const mdContent = dedent`
  ---
  id: ${id}
  title: ${displayName}
  ---

  import Tabs from "@theme/Tabs";
  import TabItem from "@theme/TabItem";
  import { ${parentComp}, ${imports} } from 'react-native-elements';
  ${usageFileExists ? `import Usage from '../usage/${displayName}.mdx'` : ''}

  ${snippetToCode(description)}

  ## Usage

  ${usageFileExists ? `<Usage/>` : ''}


  ${snippetToCode(tabify(usage))}


  ${propsTable(props)}   
  `;
  cachePkg !== pkg &&
    console.log('\n', '@react-native-elements/' + (cachePkg = pkg));
  console.log('   ', displayName);
  return prettier.format(mdContent, { parser: 'mdx' });
};

const filterPropType = (value: string) => {
  if (!value) return '`None`';
  if (value.includes('|')) return value.split('|').map(code).join(' or ');
  if (value.includes('&')) return value.split('&').map(code).join(' and ');
  return value;
};

const propsTable = (props: Props) => {
  const orderedProps = orderBy(Object.values(props), ['name'], ['asc']);
  if (!orderedProps.length) return '';

  const includes = new Set<string>();

  const rows = orderedProps
    .map(({ name, defaultValue, type, description, parent }) => {
      parent?.name && includes.add(parent?.name);
      return [
        '',
        code(name),
        filterPropType(type.name),
        code(defaultValue?.value),
        removeNewline(description),
        '',
      ].join('|');
    })
    .join('\n');

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
    ${rows}

    </div>
    


    `;
};
