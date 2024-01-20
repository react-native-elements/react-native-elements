import React from 'react';
import Dialog from '..';
import { CreateThemeOptions, darkColors, lightColors } from '../..';
import { renderWithWrapper } from '../../../.ci/testHelper';

describe('Dialog Component', () => {
  it('should apply props from theme', () => {
    const theme: Partial<CreateThemeOptions> = {
      components: {
        Dialog: {
          transparent: false,
        },
      },
    };
    const { wrapper } = renderWithWrapper(
      <Dialog isVisible />,
      'Internal__Overlay',
      theme
    );
    expect(wrapper.props.transparent).toBeFalsy();
  });
  it.each`
    mode       | expectedColor
    ${'dark'}  | ${darkColors.black}
    ${'light'} | ${lightColors.black}
  `('should apply $mode theme mode to Dialog', ({ mode, expectedColor }) => {
    const theme: Partial<CreateThemeOptions> = {
      lightColors,
      darkColors,
      mode,
    };
    const { getByText, toJSON } = renderWithWrapper(
      <Dialog isVisible={true}>
        <Dialog.Title title={'Unit Test Title'} />
      </Dialog>,
      'Dialog__Title',
      theme
    );
    const textComponent = getByText('Unit Test Title');
    expect(textComponent.props.style.color).toEqual(expectedColor);
  });
});
