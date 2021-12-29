import { withTheme } from '../config';
import { ListItemBase } from './ListItem';
import { ListItemContent } from './ListItem.Content';
import { ListItemChevron } from './ListItem.Chevron';
import { ListItemInput } from './ListItem.Input';
import { ListItemCheckBox } from './ListItem.CheckBox';
import { ListItemButtonGroup } from './ListItem.ButtonGroup';
import { ListItemTitle } from './ListItem.Title';
import { ListItemSubtitle } from './ListItem.Subtitle';
import { ListItemSwipeable, } from './ListItem.Swipeable';
import { ListItemAccordion, } from './ListItem.Accordion';
const ThemedListItemContent = withTheme(ListItemContent, 'ListItemContent');
const ThemedListItemChevron = withTheme(ListItemChevron, 'ListItemChevron');
const ThemedListItemInput = withTheme(ListItemInput, 'ListItemInput');
const ThemedListItemCheckBox = withTheme(ListItemCheckBox, 'ListItemCheckBox');
const ThemedListItemButtonGroup = withTheme(ListItemButtonGroup, 'ListItemButtonGroup');
const ThemedListItemTitle = withTheme(ListItemTitle, 'ListItemTitle');
const ThemedListItemSubtitle = withTheme(ListItemSubtitle, 'ListItemSubtitle');
const ThemedListItemSwipeable = withTheme(ListItemSwipeable, 'ListItemSwipeable');
const ThemedListItemAccordion = withTheme(ListItemAccordion, 'ListItemAccordion');
export const ListItem = Object.assign(ListItemBase);
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
