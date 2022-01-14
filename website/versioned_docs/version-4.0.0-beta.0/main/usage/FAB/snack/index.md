```SnackPlayer name=RNE FAB
import React from 'react';
import { View, Text } from 'react-native';
import { FAB } from 'react-native-elements';

export default () => {
  const [visible, setVisible] = React.useState(true);

  return (
    <>
      <View
        style={{
          alignItems: 'center',
          paddingVertical: 5,
          flexGrow: 1,
        }}
      >
        <Text style={{ color: '#397af8', paddingVertical: 10 }}>
          Small Size
        </Text>
        <FAB
          loading
          visible={visible}
          icon={{ name: 'add', color: 'white' }}
          size="small"
        />
        <Text style={{ color: '#397af8', paddingVertical: 10 }}>
          Large Size
        </Text>
        <FAB
          visible={visible}
          icon={{ name: 'add', color: 'white' }}
          color="green"
        />
        <Text style={{ color: '#397af8', paddingVertical: 10 }}>
          Primary Color
        </Text>
        <FAB
          visible={visible}
          title="Navigate"
          upperCase
          icon={{ name: 'place', color: 'white' }}
        />

        <Text style={{ color: '#397af8', paddingVertical: 10 }}>Disabled</Text>

        <FAB
          visible={visible}
          disabled
          title="Extended"
          icon={{
            name: 'place',
            color: 'white',
          }}
        />
        <FAB
          visible={visible}
          onPress={() => setVisible(!visible)}
          placement="right"
          title="Hide"
          icon={{ name: 'delete', color: 'white' }}
          color="red"
        />
        <FAB
          visible={!visible}
          onPress={() => setVisible(!visible)}
          placement="left"
          title="Show"
          icon={{ name: 'edit', color: 'white' }}
          color="green"
        />
      </View>
    </>
  );
};
```
