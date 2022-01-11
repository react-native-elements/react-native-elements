import { withTheme } from '../config';
import {
  ListItemBaseProps,
  ListItemBase,
} from '@react-native-elements/base/dist/ListItem/ListItem';
import { ListItemContent } from '@react-native-elements/base/dist/ListItem/ListItem.Content';
import { ListItemChevron } from '@react-native-elements/base/dist/ListItem/ListItem.Chevron';
import { ListItemInput } from '@react-native-elements/base/dist/ListItem/ListItem.Input';
import { ListItemCheckBox } from '@react-native-elements/base/dist/ListItem/ListItem.CheckBox';
import { ListItemButtonGroup } from '@react-native-elements/base/dist/ListItem/ListItem.ButtonGroup';
import { ListItemTitle } from '@react-native-elements/base/dist/ListItem/ListItem.Title';
import { ListItemSubtitle } from '@react-native-elements/base/dist/ListItem/ListItem.Subtitle';
import {
  ListItemSwipeable,
  ListItemSwipeableProps,
} from '@react-native-elements/base/dist/ListItem/ListItem.Swipeable';
import {
  ListItemAccordion,
  ListItemAccordionProps,
} from '@react-native-elements/base/dist/ListItem/ListItem.Accordion';
import { RneFunctionComponent } from '../helpers';

const ThemedListItemContent = withTheme(ListItemContent, 'ListItemContent');
const ThemedListItemChevron = withTheme(ListItemChevron, 'ListItemChevron');
const ThemedListItemInput = withTheme(ListItemInput, 'ListItemInput');
const ThemedListItemCheckBox = withTheme(ListItemCheckBox, 'ListItemCheckBox');
const ThemedListItemButtonGroup = withTheme(
  ListItemButtonGroup,
  'ListItemButtonGroup'
);
const ThemedListItemTitle = withTheme(ListItemTitle, 'ListItemTitle');
const ThemedListItemSubtitle = withTheme(ListItemSubtitle, 'ListItemSubtitle');
const ThemedListItemSwipeable = withTheme(
  ListItemSwipeable,
  'ListItemSwipeable'
);
const ThemedListItemAccordion = withTheme(
  ListItemAccordion,
  'ListItemAccordion'
);

export type ListItemProps = RneFunctionComponent<ListItemBaseProps> & {
  Accordion: typeof ThemedListItemAccordion;
  Chevron: typeof ThemedListItemChevron;
  Content: typeof ThemedListItemContent;
  Input: typeof ThemedListItemInput;
  Title: typeof ThemedListItemTitle;
  Subtitle: typeof ThemedListItemSubtitle;
  Swipeable: typeof ThemedListItemSwipeable;
  CheckBox: typeof ThemedListItemCheckBox;
  ButtonGroup: typeof ThemedListItemButtonGroup;
};

export const ListItem: ListItemProps = Object.assign(ListItemBase);

export type { ListItemAccordionProps, ListItemSwipeableProps };

const ThemedListItem = Object.assign(withTheme(ListItem, 'ListItem'), {
  Accordion: ThemedListItemAccordion,
  Chevron: ThemedListItemChevron,
  Content: ThemedListItemContent,
  Input: ThemedListItemInput,
  Title: ThemedListItemTitle,
  Subtitle: ThemedListItemSubtitle,
  Swipeable: ThemedListItemSwipeable,
  CheckBox: ThemedListItemCheckBox,
  ButtonGroup: ThemedListItemButtonGroup,
});

export default ThemedListItem;
