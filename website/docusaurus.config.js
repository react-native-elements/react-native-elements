/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

module.exports = {
  title: 'React Native Elements' /* title for your website */,
  tagline: 'Cross Platform React Native UI Toolkit',
  url: 'https://reactnativeelements.com/' /* your website url */,
  baseUrl: '/' /* base url for your project */,
  projectName: 'react-native-elements',
  organizationName: 'react-native-elements',
  clientModules: [require.resolve('./snackPlayerInitializer.js')],
  /* path to images for header/footer */
  favicon: '/img/website/logo.png',
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  scripts: [
    'https://buttons.github.io/buttons.js',
    { src: 'https://snack.expo.io/embed.js', defer: true },
  ],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          homePageId: 'getting_started',
          sidebarPath: require.resolve('./sidebars.json'),
          remarkPlugins: [require('./plugins/remark-snackplayer')],
          editUrl:
            'https://github.com/react-native-elements/react-native-elements/edit/next/website/',
          sidebarCollapsible: false,
        },
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: 'support_us', // Any value that will identify this message.
      content:
        '⭐️ If you like React Native Elements, give it a  <a target="_blank" rel="noopener noreferrer" href="https://github.com/react-native-elements/react-native-elements">star on GitHub!</a> ⭐',
      backgroundColor: 'var(--ifm-hero-background-color)', // Defaults to `#fff`.
      textColor: 'var(--ifm-navbar-link-color)', // Defaults to `#000`.
    },
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: 'React Native Elements',
      logo: {
        alt: 'React Native Elements Logo',
        src: '/img/website/logo.png',
      },
      hideOnScroll: true,
      items: [
        { to: 'docs/', label: 'Documentation', position: 'right' },
        {
          href:
            'https://github.com/react-native-elements/react-native-elements',
          label: 'GitHub',
          position: 'right',
        },
        { to: 'help', label: 'Help', position: 'right' },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          type: 'docsVersionDropdown',

          position: 'left',
          dropdownItemsAfter: [{ to: 'versions', label: 'All versions' }],
          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
          docsPluginId: 'default',
        },
      ],
    },
    algolia: {
      apiKey: '89e04a9445d16350e100c2d2421f2d39',
      indexName: 'react_native_elements',
    },
    googleAnalytics: {
      trackingID: 'UA-173589068-1',
    },
    footer: {
      style: 'dark',
      logo: {
        src: 'img/logo.png',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/',
            },
            {
              label: 'Components',
              to: 'docs/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Chat with us on Slack',
              to: 'https://react-native-elements-slack.herokuapp.com/',
            },
            {
              label: 'Submit a bug or feature',
              to:
                'https://github.com/react-native-elements/react-native-elements/issues/',
            },
            {
              label: 'Support us on Open Collective',
              to: 'https://opencollective.com/react-native-elements',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              to:
                'https://github.com/react-native-elements/react-native-elements',
            },
            {
              label: 'StackOverflow',
              to:
                'https://stackoverflow.com/questions/tagged/react-native-elements',
            },
            {
              label: 'VS Code Extension',
              to:
                'https://marketplace.visualstudio.com/items?itemName=rne.snippets',
            },
          ],
        },
      ],
    },
  },
};
