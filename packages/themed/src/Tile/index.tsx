import { withTheme } from '../config';
import { Tile, TileProps } from '@react-native-elements/base/dist/Tile/Tile';
import { FeaturedTile as BaseFeaturedTile } from '@react-native-elements/base/dist/Tile/components/FeaturedTile';

export type { TileProps };
export const FeaturedTile = withTheme<TileProps>(
  BaseFeaturedTile,
  'FeaturedTile'
);
export default withTheme<TileProps>(Tile, 'Tile');
