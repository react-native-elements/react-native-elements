import { ListItemBase } from './ListItem';
import { ListItemContent } from './ListItem.Content';
import { ListItemChevron } from './ListItem.Chevron';
import { ListItemInput } from './ListItem.Input';
import { ListItemCheckBox } from './ListItem.CheckBox';
import { ListItemButtonGroup } from './ListItem.ButtonGroup';
import { ListItemTitle } from './ListItem.Title';
import { ListItemSubtitle } from './ListItem.Subtitle';
import {
  ListItemSwipeable,
  ListItemSwipeableProps,
} from './ListItem.Swipeable';
import {
  ListItemAccordion,
  ListItemAccordionProps,
} from './ListItem.Accordion';

export type ListItemProps = typeof ListItem;

export const ListItem = Object.assign(ListItemBase, {
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

export type { ListItemAccordionProps, ListItemSwipeableProps };
