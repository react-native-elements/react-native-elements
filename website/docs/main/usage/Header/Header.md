import Snack from './snack/index.md'

<!-- To show the guide to configure Header Component to a project.
This is not added as description in comments of the component so is added here. -->

**Note:**
Make sure that you have completed [Step 3](getting_started.md#step-3-setup-react-native-safe-area-context) in the setup guide before using `Header`.

Headers are navigation components that display information and actions relating
to the current screen.

<Snack />

<!-- The react-native-linear-gradient is not configured with snack so the usage guide is added here to be displayed in documentation. -->

### LinearGradient Usage

Using LinearGradient in React Native Elements is supported through the
[react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)
package. If you're using expo or create-react-native-app then you can use
`linearGradientProps` prop right out the box with no additional setup.

For react-native-cli users, make sure to follow the
[installation instructions](https://github.com/react-native-community/react-native-linear-gradient#add-it-to-your-project)
and use it like this:

```jsx
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

...

<Header
  ViewComponent={LinearGradient} // Don't forget this!
  linearGradientProps={{
    colors: ['red', 'pink'],
    start: { x: 0, y: 0.5 },
    end: { x: 1, y: 0.5 },
  }}
/>
```
