import { withTheme } from '../config';
import { Skeleton, SkeletonProps } from '@rneui/base/Skeleton';

export { Skeleton };
export type { SkeletonProps };

export default withTheme<SkeletonProps>(Skeleton, 'Skeleton');
