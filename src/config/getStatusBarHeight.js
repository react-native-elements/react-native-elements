import { getStatusBarHeight as ovrGetStatusBarHeight } from 'react-native-status-bar-height';

export const expoRoot = (global.Expo || global.__expo || global.__exponent);
export const expoManifest = (!expoRoot || !expoRoot.Constants || !expoRoot.Constants.manifest) ? {} : expoRoot.Constants.manifest;

export const getStatusBarHeight = (forceSkipAndroid=false) =>
  ovrGetStatusBarHeight(forceSkipAndroid || !!expoManifest.androidStatusBar);
