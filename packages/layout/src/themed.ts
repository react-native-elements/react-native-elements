import { withTheme } from '@rneui/themed';
import { Box as BoxBase, BoxProps } from './Box';
import { Grid as GridBase, GridItemProps, GridProps } from './Grid';
import { GridItemBase } from './Grid/GridItem';
import { Stack as StackBase, StackProps } from './Stack';

export { BoxProps, GridProps, GridItemProps, StackProps };

export const Box = withTheme(BoxBase, 'Box');
export const Stack = withTheme(StackBase, 'Stack');
export const Grid = Object.assign(withTheme(GridBase, 'Grid'), {
  Item: withTheme(GridItemBase, 'GridItem'),
});

declare module '@rneui/themed' {
  export interface ComponentTheme {
    Box: Partial<BoxProps>;
    Grid: Partial<GridProps>;
    GridItem: Partial<GridItemProps>;
    Stack: Partial<StackProps>;
  }
}
