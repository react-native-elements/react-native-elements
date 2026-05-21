import { moderateScale } from 'react-native-size-matters';

function normalize(number: number, factor = 0.25) {
  return moderateScale(number, factor);
}

export default normalize;
