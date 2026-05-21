import { withTheme } from '../config';
import {
  ListItemProps,
  ListItemBase,
} from '@rneui/base/dist/ListItem/ListItem';
import {
  ListItemContent,
  ListItemContentProps,
} from '@rneui/base/dist/ListItem/ListItem.Content';
import {
  ListItemChevron,
  ListItemChevronProps,
} from '@rneui/base/dist/ListItem/ListItem.Chevron';
import {
  ListItemInput,
  ListItemInputProps,
} from '@rneui/base/dist/ListItem/ListItem.Input';
import {
  ListItemCheckBox,
  ListItemCheckBoxProps,
} from '@rneui/base/dist/ListItem/ListItem.CheckBox';
import {
  ListItemButtonGroup,
  ListItemButtonGroupProps,
} from '@rneui/base/dist/ListItem/ListItem.ButtonGroup';
import {
  ListItemTitle,
  ListItemTitleProps,
} from '@rneui/base/dist/ListItem/ListItem.Title';
import {
  ListItemSubtitle,
  ListItemSubtitleProps,
} from '@rneui/base/dist/ListItem/ListItem.Subtitle';
import {
  ListItemSwipeable,
  ListItemSwipeableProps,
} from '@rneui/base/dist/ListItem/ListItem.Swipeable';
import {
  ListItemAccordion,
  ListItemAccordionProps,
} from '@rneui/base/dist/ListItem/ListItem.Accordion';

export type {
  ListItemAccordionProps,
  ListItemSwipeableProps,
  ListItemProps as ListItemProps,
};

export default Object.assign(
  withTheme<ListItemProps>(ListItemBase, 'ListItem'),
  {
    Accordion: withTheme<ListItemAccordionProps>(
      ListItemAccordion,
      'ListItemAccordion'
    ),
    Chevron: withTheme<ListItemChevronProps>(
      ListItemChevron,
      'ListItemChevron'
    ),
    Content: withTheme<ListItemContentProps>(
      ListItemContent,
      'ListItemContent'
    ),
    Input: withTheme<ListItemInputProps>(ListItemInput, 'ListItemInput'),
    Title: withTheme<ListItemTitleProps>(ListItemTitle, 'ListItemTitle'),
    Subtitle: withTheme<ListItemSubtitleProps>(
      ListItemSubtitle,
      'ListItemSubtitle'
    ),
    Swipeable: withTheme<ListItemSwipeableProps>(
      ListItemSwipeable,
      'ListItemSwipeable'
    ),
    CheckBox: withTheme<ListItemCheckBoxProps>(
      ListItemCheckBox,
      'ListItemCheckBox'
    ),
    ButtonGroup: withTheme<ListItemButtonGroupProps>(
      ListItemButtonGroup,
      'ListItemButtonGroup'
    ),
  }
);
