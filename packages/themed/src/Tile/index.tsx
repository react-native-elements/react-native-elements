import { withTheme } from '../config';
import { Tile, TileProps } from '@rneui/base/Tile/Tile';
import { FeaturedTile as BaseFeaturedTile } from '@rneui/base/Tile/components/FeaturedTile';

export type { TileProps };
export const FeaturedTile = withTheme<TileProps>(
  BaseFeaturedTile,
  'FeaturedTile'
);
export default withTheme<TileProps>(Tile, 'Tile');
