//Kept for future
module.exports = {
  componentsSidebar: [
    {
      type: 'category',
      label: 'Introduction',
      collapsed: false,
      items: [
        'getting_started',
        'overview',
        'customization',
        'web_usage',
        'troubleshooting',
      ],
    },
    {
      type: 'category',
      label: 'Components',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: 'Data Display',
          collapsed: false,
          items: [
            'main/avatar',
            'main/card',
            'main/chip',
            'main/listitem',
            'main/pricing',
          ],
        },
        {
          type: 'category',
          label: 'Forms',
          collapsed: false,
          items: [
            'main/button',
            'main/button_group',
            'main/checkbox',
            'main/input',
            'main/slider',
            'main/switch',
          ],
        },
        {
          type: 'category',
          label: 'Feedback',
          collapsed: false,
          items: [
            'main/badge',
            'main/bottomsheet',
            'main/divider',
            'main/linearProgress',
            'main/rating',
          ],
        },
        {
          type: 'category',
          label: 'Navigation',
          collapsed: false,
          items: [
            'main/header',
            'main/fab',
            'main/searchbar',
            'main/speeddial',
            'main/tab',
          ],
        },
        {
          type: 'category',
          label: 'Overlay',
          collapsed: false,
          items: ['main/overlay', 'main/tooltip'],
        },
        {
          type: 'category',
          label: 'Media',
          collapsed: false,
          items: ['main/icon', 'main/image', 'main/social_icon'],
        },
        {
          type: 'category',
          label: 'Typography',
          collapsed: false,
          items: ['main/text', 'main/tile'],
        },
      ],
    },
    {
      type: 'category',
      label: 'Universe Components',
      collapsed: false,
      items: ['universe/circularslider'],
    },
    {
      type: 'category',
      label: 'Repo',
      collapsed: false,
      items: ['repo/contributing', 'repo/testing', 'repo/labels'],
    },
  ],
};
