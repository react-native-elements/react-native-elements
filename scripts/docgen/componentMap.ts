import path from 'path';

type ChildrenType = {
  name: string;
  path: string;
};

type ItemType = {
  name: string;
  base: string;
  childrens: ChildrenType[];
};

const componentMap = {
  AirbnbRating: {
    name: 'AirbnbRating',
    base: path.join(__dirname, '../../src/AirbnbRating/AirbnbRating.tsx'),
    childrens: [],
  },
  Avatar: {
    name: 'Avatar',
    base: path.join(__dirname, '../../src/Avatar/Avatar.tsx'),
    childrens: [
      {
        name: 'Accessory',
        path: path.join(__dirname, '../../src/Avatar/Accessory.tsx'),
      },
    ],
  },
  Badge: {
    name: 'Badge',
    base: path.join(__dirname, '../../src/Badge/Badge.tsx'),
    childrens: [],
  },
  // WithBadge: {base:path.join(__dirname, "../../src/Badge/withBadge.tsx")}
  BottomSheet: {
    name: 'BottomSheet',
    base: path.join(__dirname, '../../src/BottomSheet/BottomSheet.tsx'),
    childrens: [],
  },
  Button: {
    name: 'Button',
    base: path.join(__dirname, '../../src/Button/Button.tsx'),
    childrens: [],
  },
  ButtonGroup: {
    name: 'ButtonGroup',
    base: path.join(__dirname, '../../src/ButtonGroup/ButtonGroup.tsx'),
    childrens: [],
  },
  Card: {
    name: 'Card',
    base: path.join(__dirname, '../../src/Card/CardBase.tsx'),
    childrens: [
      {
        name: 'Divider',
        path: path.join(__dirname, '../../src/Card/CardDivider.tsx'),
      },
      {
        name: 'FeaturedSubtitle',
        path: path.join(__dirname, '../../src/Card/CardFeaturedSubtitle.tsx'),
      },
      {
        name: 'FeaturedTitle',
        path: path.join(__dirname, '../../src/Card/CardFeaturedTitle.tsx'),
      },
      {
        name: 'Image',
        path: path.join(__dirname, '../../src/Card/CardImage.tsx'),
      },
      {
        name: 'Title',
        path: path.join(__dirname, '../../src/Card/CardTitle.tsx'),
      },
    ],
  },
  CheckBox: {
    name: 'CheckBox',
    base: path.join(__dirname, '../../src/Checkbox/CheckBox.tsx'),
    childrens: [],
  },
  Chip: {
    name: 'Chip',
    base: path.join(__dirname, '../../src/Chip/Chip.tsx'),
    childrens: [],
  },
  Dialog: {
    name: 'Dialog',
    base: path.join(__dirname, '../../src/Dialog/DialogBase.tsx'),
    childrens: [
      {
        name: 'Actions',
        path: path.join(__dirname, '../../src/Dialog/DialogActions.tsx'),
      },
      {
        name: 'Button',
        path: path.join(__dirname, '../../src/Dialog/DialogButton.tsx'),
      },
      {
        name: 'Loading',
        path: path.join(__dirname, '../../src/Dialog/DialogLoading.tsx'),
      },
      {
        name: 'Title',
        path: path.join(__dirname, '../../src/Dialog/DialogTitle.tsx'),
      },
    ],
  },
  Divider: {
    name: 'Divider',
    base: path.join(__dirname, '../../src/Divider/Divider.tsx'),
    childrens: [],
  },
  FAB: {
    name: 'FAB',
    base: path.join(__dirname, '../../src/FAB/FAB.tsx'),
    childrens: [],
  },
  Header: {
    name: 'Header',
    base: path.join(__dirname, '../../src/Header/Header.tsx'),
    childrens: [],
  },
  Icon: {
    name: 'Icon',
    base: path.join(__dirname, '../../src/Icon/Icon.tsx'),
    childrens: [],
  },
  LinearProgress: {
    name: 'LinearProgress',
    base: path.join(__dirname, '../../src/LinearProgress/LinearProgress.tsx'),
    childrens: [],
  },
  ListItem: {
    name: 'ListItem',
    base: path.join(__dirname, '../../src/ListItem/ListItemBase.tsx'),
    childrens: [
      {
        name: 'Accordion',
        path: path.join(__dirname, '../../src/ListItem/ListItemAccordion.tsx'),
      },
      {
        name: 'ButtonGroup',
        path: path.join(
          __dirname,
          '../../src/ListItem/ListItemButtonGroup.tsx'
        ),
      },
      {
        name: 'CheckBox',
        path: path.join(__dirname, '../../src/ListItem/ListItemCheckBox.tsx'),
      },
      {
        name: 'Chevron',
        path: path.join(__dirname, '../../src/ListItem/ListItemChevron.tsx'),
      },
      {
        name: 'Content',
        path: path.join(__dirname, '../../src/ListItem/ListItemContent.tsx'),
      },
      {
        name: 'Input',
        path: path.join(__dirname, '../../src/ListItem/ListItemInput.tsx'),
      },
      {
        name: 'Swipeable',
        path: path.join(__dirname, '../../src/ListItem/ListItemSwipeable.tsx'),
      },
      {
        name: 'SubTitle',
        path: path.join(__dirname, '../../src/ListItem/ListItemSubtitle.tsx'),
      },
      {
        name: 'Title',
        path: path.join(__dirname, '../../src/ListItem/ListItemTitle.tsx'),
      },
    ],
  },
  Overlay: {
    name: 'Overlay',
    base: path.join(__dirname, '../../src/Overlay/Overlay.tsx'),
    childrens: [],
  },
  PricingCard: {
    name: 'PricingCard',
    base: path.join(__dirname, '../../src/PricingCard/PricingCard.tsx'),
    childrens: [],
  },
  Slider: {
    name: 'Slider',
    base: path.join(__dirname, '../../src/Slider/Slider.tsx'),
    childrens: [],
  },
  SocialIcon: {
    name: 'SocialIcon',
    base: path.join(__dirname, '../../src/SocialIcon/SocialIcon.tsx'),
    childrens: [],
  },
  SpeedDial: {
    name: 'SpeedDial',
    base: path.join(__dirname, '../../src/SpeedDial/SpeedDial.tsx'),
    childrens: [],
  },
  Switch: {
    name: 'Switch',
    base: path.join(__dirname, '../../src/Switch/Switch.tsx'),
    childrens: [],
  },
  Tab: {
    name: 'Tab',
    base: path.join(__dirname, '../../src/Tab/Tab.tsx'),
    childrens: [
      { name: 'Item', path: path.join(__dirname, '../../src/Tab/TabItem.tsx') },
    ],
  },
  TabView: {
    name: 'TabView',
    base: path.join(__dirname, '../../src/TabView/TabView.tsx'),
    childrens: [
      {
        name: 'Item',
        path: path.join(__dirname, '../../src/TabView/TabViewItem.tsx'),
      },
    ],
  },
  Text: {
    name: 'Text',
    base: path.join(__dirname, '../../src/Text/Text.tsx'),
    childrens: [],
  },
  Tile: {
    name: 'Tile',
    base: path.join(__dirname, '../../src/Tile/Tile.tsx'),
    childrens: [],
  },
};

export { componentMap, ItemType };
