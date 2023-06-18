import { withTheme } from '../config';
import { Tile } from '@rneui/base/dist/Tile/Tile';
import { FeaturedTile as BaseFeaturedTile } from '@rneui/base/dist/Tile/components/FeaturedTile';
export const FeaturedTile = withTheme(BaseFeaturedTile, 'FeaturedTile');
export default withTheme(Tile, 'Tile');
