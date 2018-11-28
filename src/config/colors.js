import { Platform, StyleSheet } from 'react-native';

export default {
  primary: Platform.select({
    default: '#2196f3', // rgb(33, 150, 243) Android
    ios: '#007aff' // rgb(0, 122, 255)
  }),
  secondary: '#8F0CE8',
  grey0: '#393e42',
  grey1: '#43484d',
  grey2: '#5e6977',
  grey3: '#86939e',
  grey4: '#bdc6cf',
  grey5: '#e1e8ee',
  greyOutline: '#bbb',
  searchBg: '#303337',
  success: Platform.select({
    default: '#4caf50', // Android
    ios: '#4cd964'
  }),
  error: Platform.select({
    default: '#f44336', // Android
    ios: '#ff3b30'
  }),
  warning: Platform.select({
    default: '#ffeb3b', // Android
    ios: '#ffcc00'
  }),
  disabled: 'hsl(208, 8%, 90%)',
  // Darker color if hairlineWidth is not thin enough
  divider: StyleSheet.hairlineWidth < 1 ? '#bcbbc1' : 'rgba(0, 0, 0, 0.12)',
};
