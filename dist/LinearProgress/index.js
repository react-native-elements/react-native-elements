import { withTheme } from '../config';
import { LinearProgress } from './LinearProgress';
export { LinearProgress };
/**
 * ### Linear Progress
 *
 * Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. They communicate an app’s state and indicate available actions, such as whether users can navigate away from the current screen.
 *
 * Usage ```<LinearProgress variant={LinearProgress.INDETERMINATE}  />```
 *
 * [API Documentation](https://reactnativeelements.com/docs/linearProgress)
 */
export default Object.assign(withTheme(LinearProgress, 'LinearProgress'), {
    INDETERMINATE: 'indeterminate',
    DETERMINATE: 'determinate',
});
