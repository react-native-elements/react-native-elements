```SnackPlayer name=RNE Input
import React from 'react';
import { View, Text } from 'react-native';
import { Input, Icon } from 'react-native-elements';

export default () => {

  return (
    <>
      <Input
        placeholder='BASIC INPUT'
      />

      <Input
        placeholder='INPUT WITH ICON'
        leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
      />

      <Input
        placeholder='INPUT WITH CUSTOM ICON'
        leftIcon={
          <Icon
            name='user'
            size={24}
            color='black'
          />
        }
      />


      <Input
        placeholder="Comment"
        leftIcon={{ type: 'font-awesome', name: 'comment' }}
        onChangeText={value => this.setState({ comment: value })}
        />


      <Input
        placeholder='INPUT WITH ERROR MESSAGE'
        errorStyle={{ color: 'red' }}
        errorMessage='ENTER A VALID ERROR HERE'
      />

      <Input placeholder="Password" secureTextEntry={true} />
    </>
  );
};
```
