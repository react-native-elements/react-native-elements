import React from 'react';
import ButtonGroup from '../index';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { Text } from 'react-native';
import { CreateThemeOptions, FullTheme } from '../../config';

const buttons = ['Button 1', 'Button 2', 'Button 3'];

describe('ButtonGroup Component', () => {
  it('should apply props from theme', () => {
    const testTheme: Partial<CreateThemeOptions> = {
      components: {
        ButtonGroup: {
          selectedTextStyle: {
            color: 'red',
          },
        },
      },
    };
    const { wrapper } = renderWithWrapper(
      <ButtonGroup buttons={buttons} selectedIndex={0} />,
      '',
      testTheme
    );
    expect(wrapper.findAllByType(Text)[0].props.style).toMatchObject({
      color: 'red',
    });
  });
});
