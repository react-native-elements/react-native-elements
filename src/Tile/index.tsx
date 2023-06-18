import { withTheme } from '../config';
import { Tile, TileProps } from '@rneui/base/dist/Tile/Tile';
import { FeaturedTile as BaseFeaturedTile } from '@rneui/base/dist/Tile/components/FeaturedTile';

export type { TileProps };
export const FeaturedTile = withTheme<TileProps>(
  BaseFeaturedTile,
  'FeaturedTile'
);
export default withTheme<TileProps>(Tile, 'Tile');
