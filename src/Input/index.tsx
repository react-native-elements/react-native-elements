import React from 'react';
import { TextInput } from 'react-native';
import { withTheme } from '../config';
import { Input, InputProps } from './Input';

export { Input };
export type { InputProps };
export default withTheme(Input, 'Input');

() => {
  const me = React.useRef<TextInput>();
  return <Input ref={me} />;
  me.current.shake;
};
