import { render } from '@testing-library/react-native';
import React from 'react';
import { Text, View, ViewProps } from 'react-native';
import { Button as BaseButton } from '../../Button';
import { ThemeProvider } from '../ThemeProvider';
import { styled } from '../styled';
import { TextProps } from '@rneui/base';

describe('withTheme', () => {
  it('should work', () => {
    const Component = styled<ViewProps>(View)({
      root: {
        alignContent: 'center',
      },
    });
    const { queryByTestId } = render(<Component testID="myText" />);
    const wrapper = queryByTestId('myText');
    expect(wrapper).toBeTruthy();
    expect(wrapper!.props.style).toMatchObject({
      alignContent: 'center',
    });
  });

  it('should use props and theme', () => {
    type MyCompProps = { bold?: boolean };
    const Component = styled(Text)<MyCompProps>((theme, { bold }) => ({
      root: {
        fontWeight: bold ? 'bold' : 'normal',
        color: theme.colors.primary,
      },
    }));
    const { queryByTestId } = render(
      <ThemeProvider>
        <Component bold testID="myText" />
      </ThemeProvider>
    );
    const wrapper = queryByTestId('myText');
    expect(wrapper).toBeTruthy();
    expect(wrapper!.props.style).toEqual(
      expect.objectContaining({ fontWeight: 'bold', color: '#2089dc' })
    );
  });

  it('should work with RNE components', () => {
    const Component = styled(BaseButton)({
      root: {
        alignContent: 'center',
      },
      containerStyle: {
        backgroundColor: 'red',
      },
    });
    const { queryByTestId } = render(<Component testID="myText" />);
    const wrapper = queryByTestId('myText');
    expect(wrapper).toBeTruthy();
    expect(wrapper!.props.style).toMatchObject({
      alignContent: 'center',
    });

    expect(queryByTestId('RNE_BUTTON_WRAPPER')!.props.style).toEqual(
      expect.arrayContaining([
        {
          backgroundColor: 'red',
        },
      ])
    );
  });
});
