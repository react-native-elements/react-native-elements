import { Dimensions } from 'react-native';

let { width, height } = Dimensions.get('window');

function normalize(number: number, factor = 0.25) {
  const guidelineBaseWidth = 350;
  const shortDimension = height < width ? height : width;
  const scale = (size) => (shortDimension / guidelineBaseWidth) * size;
  const moderateScale = number + (scale(number) - number) * factor;
  return moderateScale;
}

export default normalize;
