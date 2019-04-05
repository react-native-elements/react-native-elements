import { getStatusBarHeight as ovrGetStatusBarHeight } from 'react-native-status-bar-height';

/* eslint-disable no-underscore-dangle */
export const expoRoot = global.Expo || global.__expo || global.__exponent;
export const expoManifest =
  !expoRoot || !expoRoot.Constants || !expoRoot.Constants.manifest
    ? {}
    : expoRoot.Constants.manifest;

export const getStatusBarHeight = (skipAndroid = false) =>
  ovrGetStatusBarHeight(skipAndroid || !!expoManifest.androidStatusBar);
