import {
  LinearProgress as LinearProgressBase,
  LinearProgressProps,
} from './LinearProgress';

/**
 * ### Linear Progress
 *
 * Progress indicators inform users about the status of ongoing processes, such as loading an app, submitting a form, or saving updates. They communicate an app’s state and indicate available actions, such as whether users can navigate away from the current screen.
 *
 * Usage ```<LinearProgress variant={LinearProgress.INDETERMINATE}  />```
 *
 * [API Documentation](https://reactnativeelements.com/docs/linearProgress)
 */
const LinearProgress = Object.assign(LinearProgressBase, {
  INDETERMINATE: 'indeterminate' as LinearProgressProps['variant'],
  DETERMINATE: 'determinate' as LinearProgressProps['variant'],
});

export { LinearProgress };
export type { LinearProgressProps };
