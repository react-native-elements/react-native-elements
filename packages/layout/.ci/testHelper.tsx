import React, { JSXElementConstructor } from 'react';
import { View } from 'react-native';
import {
  render,
  RenderOptions,
  fireEvent,
  act,
} from '@testing-library/react-native';

export { fireEvent, act };

// for getting findByType e.g. wrapper.findByType(Icon) see implementation in Avatar Component
export const renderWithWrapper = (
  children: React.ReactElement<any, string | JSXElementConstructor<any>>,
  wrapperTestID?: string,
  _themeProp: unknown = {},
  renderOptions?: RenderOptions
) => {
  const options: RenderOptions = {
    ...(!wrapperTestID && {
      wrapper: (props) => <View {...props} testID="wrapper" />,
    }),
    ...renderOptions,
  };
  const renderApi = render(children, options);
  const wrapper = renderApi.queryByTestId(wrapperTestID || 'wrapper')!;
  return { wrapper, ...renderApi };
};
