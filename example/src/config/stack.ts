import { Platform } from 'react-native';

// Fix scrolls on web platform

export default Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});
