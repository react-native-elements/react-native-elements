import { withTheme } from '../config';
import { Tile, TileProps } from './Tile';
import { FeaturedTile } from './components/FeaturedTile';

export { Tile, FeaturedTile };
export type { TileProps };
export default withTheme(Tile, 'Tile');
