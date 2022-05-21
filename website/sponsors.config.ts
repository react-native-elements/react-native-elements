type Sponsor = {
  sponsorTitle: string;
  color?: string;
  colSize?: number;
  items: {
    title?: string;
    link?: string;
    img?: string;
    desc?: string;
  }[];
};

export const sponsors: Sponsor[] = [
  {
    sponsorTitle: '💎 Diamond Sponsor',
    colSize: 5,
    items: [],
  },
  {
    sponsorTitle: '🥇 Gold Sponsor',
    colSize: 4,
    items: [
      {
        title: 'onKeyPress LLC',
        img: 'https://avatars.githubusercontent.com/u/78321386?s=200&v=4',
        link: 'https://onkeypress.io/',
        desc: 'It offers a variety of design, technology and marketing services',
      },
      {
        title: 'Icons8',
        link: 'https://icons8.com/',
        img: 'https://avatars.githubusercontent.com/u/6615749?s=200&v=4',
        desc: 'Icons, illustrations, photos, music, and design tools',
      },
    ],
  },
  {
    sponsorTitle: '🥈 Silver Sponsor',
    colSize: 3,
    items: [],
  },
  {
    sponsorTitle: '🥉 Bronze Sponsor',
    colSize: 2,
    items: [],
  },
];
