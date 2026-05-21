import { ListItemBase, ListItemProps } from './ListItem';
import { ListItemContent, ListItemContentProps } from './ListItem.Content';
import { ListItemChevron, ListItemChevronProps } from './ListItem.Chevron';
import { ListItemInput, ListItemInputProps } from './ListItem.Input';
import { ListItemCheckBox, ListItemCheckBoxProps } from './ListItem.CheckBox';
import {
  ListItemButtonGroup,
  ListItemButtonGroupProps,
} from './ListItem.ButtonGroup';
import { ListItemTitle, ListItemTitleProps } from './ListItem.Title';
import { ListItemSubtitle, ListItemSubtitleProps } from './ListItem.Subtitle';
import {
  ListItemSwipeable,
  ListItemSwipeableProps,
} from './ListItem.Swipeable';
import {
  ListItemAccordion,
  ListItemAccordionProps,
} from './ListItem.Accordion';

export const ListItem = Object.assign(ListItemBase, {
  Accordion: ListItemAccordion,
  ButtonGroup: ListItemButtonGroup,
  CheckBox: ListItemCheckBox,
  Chevron: ListItemChevron,
  Content: ListItemContent,
  Input: ListItemInput,
  Subtitle: ListItemSubtitle,
  Swipeable: ListItemSwipeable,
  Title: ListItemTitle,
});

export type {
  ListItemAccordionProps,
  ListItemButtonGroupProps,
  ListItemCheckBoxProps,
  ListItemChevronProps,
  ListItemContentProps,
  ListItemInputProps,
  ListItemProps,
  ListItemSubtitleProps,
  ListItemSwipeableProps,
  ListItemTitleProps,
};
