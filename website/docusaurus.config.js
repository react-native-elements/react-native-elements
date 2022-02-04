/** @type {import('@docusaurus/types').Config} */
const config = {
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
  themes: ['@docusaurus/theme-live-codeblock'],
  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        fromExtensions: ['html'],
      },
    ],
    './plugins/react-native-elements-web.js',
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        /** https://github.com/facebook/docusaurus/pull/5832 */
        googleAnalytics: {
          trackingID: 'UA-173589068-1',
        },
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.json'),
          remarkPlugins: [require('./plugins/remark-snackplayer')],
          editUrl:
            'https://github.com/react-native-elements/react-native-elements/edit/next/website/',
        },
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    announcementBar: {
      id: 'support_us',
      content:
        'If you like React Native Elements, give it a  <a target="_blank" rel="noopener noreferrer" href="https://github.com/react-native-elements/react-native-elements">star on GitHub!</a> ⭐' +
        ' and support us via <a target="_blank" rel="noopener noreferrer" href="https://github.com/sponsors/react-native-elements">Github Sponsor</a>!',
      backgroundColor: 'var(--ifm-hero-background-color)',
      textColor: 'var(--ifm-navbar-link-color)', // Defaults to `#000`.
      isCloseable: false,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '2px',
        },
        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '🌞',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: 'React Native Elements',
      logo: {
        alt: 'React Native Elements Logo',
        src: '/img/website/logo.png',
      },
      hideOnScroll: true,
      items: [
        {
          type: 'docsVersionDropdown',
          position: 'left',
          dropdownItemsAfter: [{ to: 'versions', label: 'All versions' }],
          // Do not add the link active class when browsing docs.
          dropdownActiveClassDisabled: true,
          docsPluginId: 'default',
        },
        { to: 'docs/', label: 'Docs', position: 'right' },
        { to: 'help', label: 'Help', position: 'right' },
        { to: 'blog', label: 'Blog', position: 'right' },
        {
          href: 'https://github.com/sponsors/react-native-elements',
          // label: 'Sponsor',
          position: 'right',
          className: 'header-github-sponsor-link',
          'aria-label': 'GitHub Sponsor',
        },
        {
          href: 'https://github.com/react-native-elements/react-native-elements',
          // label: 'GitHub',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
        { type: 'search', position: 'right' },
      ],
    },
    prism: {
      darkTheme: require('prism-react-renderer/themes/vsDark'),
      theme: require('prism-react-renderer/themes/vsDark'),
    },
    algolia: {
      apiKey: '89e04a9445d16350e100c2d2421f2d39',
      indexName: 'react_native_elements',
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
            {
              label: 'Contribution Guide',
              to: 'docs/repo/contributing',
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
              to: 'https://github.com/react-native-elements/react-native-elements/issues/',
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
              to: 'https://github.com/react-native-elements/react-native-elements',
            },
            {
              label: 'StackOverflow',
              to: 'https://stackoverflow.com/questions/tagged/react-native-elements',
            },
            {
              label: 'VS Code Extension',
              to: 'https://marketplace.visualstudio.com/items?itemName=rne.snippets',
            },
          ],
        },
      ],
    },
  },
  baseUrlIssueBanner: false,
  trailingSlash: false,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
    },
  },
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  onDuplicateRoutes: 'warn',
  staticDirectories: ['static'],
};

module.exports = config;
