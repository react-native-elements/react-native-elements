import { GridBase, GridProps } from './Grid';
import { GridItemBase, GridItemProps } from './GridItem';

export const Grid = Object.assign(GridBase, {
  Item: GridItemBase,
});

export { GridProps, GridItemProps };
