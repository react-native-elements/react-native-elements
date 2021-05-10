import { withTheme } from '../config';
import { ListItemProps, ListItemBase } from './ListItemBase';
import ListItemContent from './ListItemContent';
import ListItemChevron from './ListItemChevron';
import ListItemInput from './ListItemInput';
import ListItemCheckBox from './ListItemCheckBox';
import ListItemButtonGroup from './ListItemButtonGroup';
import ListItemTitle from './ListItemTitle';
import ListItemSubtitle from './ListItemSubtitle';
import ListItemSwipeable from './ListItemSwipeable';
import ListItemAccordion from './ListItemAccordion';
import { RneFunctionComponent } from '../helpers';

interface ListItem extends RneFunctionComponent<ListItemProps> {
  Accordion: typeof ListItemAccordion;
  Chevron: typeof ListItemChevron;
  Content: typeof ListItemContent;
  Input: typeof ListItemInput;
  Title: typeof ListItemTitle;
  Subtitle: typeof ListItemSubtitle;
  Swipeable: typeof ListItemSwipeable;
  CheckBox: typeof ListItemCheckBox;
  ButtonGroup: typeof ListItemButtonGroup;
}

const ListItem: ListItem = Object.assign(ListItemBase);

export { ListItem };

const ThemedListItem = Object.assign(withTheme(ListItem, 'ListItem'), {
  Accordion: ListItemAccordion,
  Chevron: ListItemChevron,
  Content: ListItemContent,
  Input: ListItemInput,
  Title: ListItemTitle,
  Subtitle: ListItemSubtitle,
  Swipeable: ListItemSwipeable,
  CheckBox: ListItemCheckBox,
  ButtonGroup: ListItemButtonGroup,
});

export default ThemedListItem;
