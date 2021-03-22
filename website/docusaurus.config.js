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
  /* path to images for header/footer */
  favicon: 'img/favicon.png',
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  scripts: ['https://buttons.github.io/buttons.js'],
  plugins: [
    [
    '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
      },
    ]
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'getting_started',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editUrl: 'https://github.com/react-native-elements/react-native-elements/edit/next/website/'
        },
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        }
      }
    ]
  ],
  themeConfig: {
    sidebarCollapsible: false,
    navbar: {
      title: 'React Native Elements',
      logo: {
        alt: 'React Native Elements Logo',
        src: 'img/logo-icon.svg'
      },
      items: [
        { to: 'docs/', label: 'Docs', position: 'right' },
        { to: 'docs/overview', label: 'Components', position: 'right' },
        { to: 'help', label: 'Help', position: 'right' },
        {
          href: 'https://github.com/react-native-elements/react-native-elements',
          label: 'GitHub',
          position: 'right'
        },
        { to: 'blog', label: 'Blog', position: 'right' },
        { to: 'versions', label: 'Versions'}
      ]
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
        src: 'img/logo.png'
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/'
            },
            {
              label: 'Components',
              to: 'docs/overview'
            }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Chat with us on Slack',
              to: 'https://react-native-elements-slack.herokuapp.com/'
            },
            {
              label: 'Submit a bug or feature',
              to: 'https://github.com/react-native-elements/react-native-elements/issues/'
            },
            {
              label: 'Support us on Open Collective',
              to: 'https://opencollective.com/react-native-elements'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              to: 'https://github.com/react-native-elements/react-native-elements'
            }
          ]
        }
      ]
    }
  }
};
