import React, { useState } from 'react';
import { Switch as S } from 'react-native';
import { CheckBox, Icon, Switch, Text } from '@rneui/themed';
import { Header } from '../components/header';
import { Stack } from '@rneui/layout';

type CheckboxComponentProps = {};

const CheckboxComponent: React.FunctionComponent<
  CheckboxComponentProps
> = () => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  return (
    <>
      <Header title="Checkbox" view="checkbox" />

      <CheckBox
        center
        title="Click Here"
        checked={check1}
        onPress={() => setCheck1(!check1)}
      />

      <CheckBox
        center
        title="Click Here"
        checkedIcon="dot-circle-o"
        uncheckedIcon="circle-o"
        checked={check2}
        onPress={() => setCheck2(!check2)}
      />

      <CheckBox
        center
        title={`Click Here to ${check3 ? 'Remove' : 'Add'} This Item`}
        iconRight
        iconType="material"
        checkedIcon="clear"
        uncheckedIcon="add"
        checkedColor="red"
        checked={check3}
        onPress={() => setCheck3(!check3)}
      />

      <CheckBox
        center
        checkedIcon={
          <Icon
            name="radio-button-checked"
            type="material"
            color="green"
            size={25}
            iconStyle={{ marginRight: 10 }}
          />
        }
        uncheckedIcon={
          <Icon
            name="radio-button-unchecked"
            type="material"
            color="grey"
            size={25}
            iconStyle={{ marginRight: 10 }}
          />
        }
        checked={check4}
        onPress={() => setCheck4(!check4)}
      />
      <Text>As a Switch</Text>
      <Stack align="center">
        <Switch value={check5} onValueChange={setCheck5} />
        <Switch disabled value={check5} onValueChange={setCheck5} />
        <S value={check5} onValueChange={setCheck5} />
      </Stack>
    </>
  );
};

export default CheckboxComponent;
