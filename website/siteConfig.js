/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const siteConfig = {
  title: 'React Native Elements' /* title for your website */,
  tagline: 'Cross Platform React Native UI Toolkit',
  url: 'https://react-native-training.github.io/' /* your website url */,
  baseUrl: '/react-native-elements/' /* base url for your project */,
  projectName: 'react-native-elements',
  organizationName: 'react-native-training',
  defaultVersionShown: '0.19.0',
  headerLinks: [
    { doc: 'getting_started', label: 'Docs' },
    { doc: 'overview', label: 'Components' },
    { page: 'help', label: 'Help' },
    {
      href: 'https://github.com/react-native-training/react-native-elements',
      label: 'Github',
    },
    // { blog: true, label: 'Blog' },
  ],
  // Algolia configuration for search feature
  algolia: {
    apiKey: '89e04a9445d16350e100c2d2421f2d39',
    indexName: 'react_native_elements',
  },
  /* path to images for header/footer */
  headerIcon: 'img/logo.png',
  footerIcon: 'img/logo.png',
  favicon: 'img/favicon.png',
  disableHeaderTitle: true,
  /* colors for website */
  colors: {
    primaryColor: '#2089dc',
    secondaryColor: '#212121',
  },
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: '',
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'default',
  },
  editUrl:
    'https://github.com/react-native-training/react-native-elements/edit/master/docs/',
  scripts: ['https://buttons.github.io/buttons.js'],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: 'https://github.com/react-native-training/react-native-elements',
};

module.exports = siteConfig;
