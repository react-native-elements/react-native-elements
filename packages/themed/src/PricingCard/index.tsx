import { withTheme } from '../config';
import {
  PricingCard,
  PricingCardProps,
} from '@rneui/base/PricingCard/PricingCard';

export { PricingCard };
export type { PricingCardProps };
export default withTheme<PricingCardProps>(PricingCard, 'PricingCard');
