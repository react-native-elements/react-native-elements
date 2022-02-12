import json2md from 'json2md';
import _ from 'lodash';
import { tagToTab, snippetToCode } from './utils';

json2md.converters.header = function (input) {
  return input.id
    ? json2md([
        { hr: '' },
        { p: `id: ${input.id.toLowerCase()}` },
        { p: `title: ${input.id}` },
        // { p: `slug: /${input.id.toLowerCase()}` },
        { hr: '' },
      ])
    : '';
};

function generateComponentsDescriptions(input) {
  const childComponentDescriptions = input
    ? Object.keys(input).map((key) => {
        return json2md([
          {
            link: {
              title: key,
              source: `#${key.replace('.', '').toLowerCase()}`,
            },
          },
          {
            p: input[key].description,
          },
        ]);
      })
    : '';
  return childComponentDescriptions;
}

json2md.converters.components = function (input) {
  if (input.childrens) {
    let markdown = json2md({ h2: 'Components' });
    markdown += json2md({
      ul: generateComponentsDescriptions(input.childrens),
    });
    return markdown;
  } else {
    return '';
  }
};

json2md.converters.imports = function (input) {
  return input.component
    ? json2md([
        {
          p: `import Usage from './usage/${input.component}/${input.component}.mdx'`,
        },
        {
          p: `import { ${input.component} } from 'react-native-elements'`,
        },
        {
          p: `import Tabs from '@theme/Tabs';`,
        },
        {
          p: `import TabItem from '@theme/TabItem';`,
        },
      ])
    : '';
};

json2md.converters.usage = function (input) {
  const tabName = input.tabName;
  const tabItem = input.tabItem;
  const tabLabel = eval(input?.tabLabel);

  const tags = [
    (tabName || input?.usage) && { h2: `Usage` },
    tabName && { h3: tabName },
    tabName && { p: tagToTab(tabLabel, tabItem) },
    (tabName || input?.usage) && { hr: '' },
    { p: snippetToCode(input?.usage) || '' },
    { h2: `Usage` },
    { p: `<Usage />` },
  ].filter(Boolean);

  return json2md(tags);
};

function generatePropsLinks(props) {
  const propLinks = props
    ? Object.keys(props).map((key) => {
        return json2md({
          link: { title: key, source: `#${key.toLowerCase()}` },
        });
      })
    : '';
  return propLinks;
}

json2md.converters.props = function (input) {
  let markdown = json2md([
    { h2: 'Props' },
    { h3: input.displayName },
    { ul: generatePropsLinks(input.props) },
  ]);
  if (input.childrens) {
    markdown += Object.keys(input.childrens)
      .map((key) => {
        const props = input.childrens[key].props;
        return json2md([
          { h3: key },
          _.isEmpty(props)
            ? { p: 'None' }
            : { ul: generatePropsLinks(input.childrens[key].props) },
        ]);
      })
      .join('');
  }
  return markdown;
};

function generatePropsReference(props) {
  const propsReference =
    props &&
    Object.keys(props)
      .map((key) => {
        const prop = props[key];
        return json2md([
          { h4: prop.name },
          { p: prop.description },
          {
            table: {
              headers: ['Type', 'Default'],
              rows: [
                {
                  Type: prop?.type?.name || 'None',
                  Default: prop?.defaultValue?.value || 'None',
                },
              ],
            },
          },
          { hr: '' },
        ]);
      })
      .join('');
  return propsReference;
}

json2md.converters.propsData = function (input) {
  let markdown = json2md([{ h2: 'Reference' }, { h3: input.displayName }]);
  markdown += generatePropsReference(input.props);
  if (input.childrens) {
    markdown += Object.keys(input.childrens)
      .map((key) => {
        const props = input.childrens[key].props;
        return (
          json2md([{ h3: key }]) +
          (_.isEmpty(props)
            ? json2md({ p: 'None' })
            : generatePropsReference(props))
        );
      })
      .join('');
  }
  return markdown;
};

export const generateMarkdown = (data) => {
  return json2md([
    { header: { id: data.displayName } },
    {
      imports: {
        component: data.displayName,
      },
    },
    { p: snippetToCode(data.description) },
    {
      components: {
        childrens: data.childrens,
      },
    },
    { usage: data?.tags || {} },
    { props: data },
    { propsData: data },
  ]);
};
