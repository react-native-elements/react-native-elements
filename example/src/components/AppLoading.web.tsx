import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
});

const emptyFunc = () => null;

const callbackHandler = (startAsync, successCb, errorCb) => {
  Promise.resolve(startAsync()).then(successCb).catch(errorCb);
};

const AppLoading = (props) => {
  useEffect(() => {
    const { startAsync, onError, onFinish } = props;
    const successCb = onFinish || emptyFunc;
    const errorCb = onError || emptyFunc;
    return !startAsync
      ? successCb()
      : callbackHandler(startAsync, successCb, errorCb);
  }, [props]);
  const { startAsync, onError, onFinish, autoHideSplash, ...others } = props;
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} {...others} />
    </View>
  );
};

export default AppLoading;
