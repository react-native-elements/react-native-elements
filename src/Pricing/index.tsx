import { withTheme } from '../config';
import { PricingCard, PricingCardProps } from './PricingCard';
import { PricingButton } from './components/PricingButton';

export { PricingCard, PricingButton };
export type { PricingCardProps };
export default withTheme(PricingCard, 'PricingCard');
