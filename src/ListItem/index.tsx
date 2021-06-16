import { withTheme } from '../config';
import { ListItemBaseProps, ListItemBase } from './ListItemBase';
import ListItemContent from './ListItemContent';
import ListItemChevron from './ListItemChevron';
import ListItemInput from './ListItemInput';
import ListItemCheckBox from './ListItemCheckBox';
import ListItemButtonGroup from './ListItemButtonGroup';
import ListItemTitle from './ListItemTitle';
import ListItemSubtitle from './ListItemSubtitle';
import ListItemSwipeable, { ListItemSwipeableProps } from './ListItemSwipeable';
import ListItemAccordion, { ListItemAccordionProps } from './ListItemAccordion';
import { RneFunctionComponent } from '../helpers';

export type ListItemProps = RneFunctionComponent<ListItemBaseProps> & {
  Accordion: typeof ListItemAccordion;
  Chevron: typeof ListItemChevron;
  Content: typeof ListItemContent;
  Input: typeof ListItemInput;
  Title: typeof ListItemTitle;
  Subtitle: typeof ListItemSubtitle;
  Swipeable: typeof ListItemSwipeable;
  CheckBox: typeof ListItemCheckBox;
  ButtonGroup: typeof ListItemButtonGroup;
};

export const ListItem: ListItemProps = Object.assign(ListItemBase);

export type { ListItemAccordionProps, ListItemSwipeableProps };

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
