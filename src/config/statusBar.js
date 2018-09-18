import { Dimensions, Platform, StatusBar } from 'react-native';

// Borrowed from https://github.com/ptelad/react-native-iphone-x-helper

function isIphoneX() {
  const dimen = Dimensions.get('window');
  return (
    Platform.OS === 'ios' &&
    !Platform.isPad &&
    !Platform.isTVOS &&
    (dimen.height === 812 || dimen.width === 812)
  );
}

function getIphoneStatusBarHeight() {
  if (isIphoneX()) {
    return 44;
  }
  return 20;
}

function getAndroidStatusBarHeight(skip) {
  if (skip) {
    return 0;
  }
  return StatusBar.currentHeight;
}

export function getStatusBarHeight(skipAndroid = false) {
  return Platform.select({
    ios: getIphoneStatusBarHeight(),
    android: getAndroidStatusBarHeight(skipAndroid),
    default: 0,
  });
}
