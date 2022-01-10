import React from 'react';
import { renderWithWrapper } from '../../../.ci/testHelper';
import { useTheme, makeStyles } from '../makeStyles';
import Text from '../../Text';
import { ThemeProps } from '../ThemeProvider';
import { StyleSheet } from 'react-native';

describe('useTheme()', () => {
  it('should return theme, updateTheme and replaceTheme', () => {
    const Inner: React.FC<ThemeProps<{}>> = () => {
      return <Text testID="myComponent" />;
    };
    const Component = () => {
      const { theme, replaceTheme, updateTheme } = useTheme();
      return (
        <Inner
          theme={theme}
          replaceTheme={replaceTheme}
          updateTheme={updateTheme}
        />
      );
    };
    const { wrapper } = renderWithWrapper(<Component />, 'myComponent');
    const innerProps = wrapper.parent.parent.props;
    expect(typeof innerProps.theme).toEqual('object');
    expect(typeof innerProps.replaceTheme).toEqual('function');
    expect(typeof innerProps.updateTheme).toEqual('function');
  });
});

describe('makeStyles()', () => {
  it('should pass the theme and the component props', () => {
    const Component = (props) => {
      const styles = useStyles(props);
      return <Text testID="myComponent" style={styles.container} />;
    };
    const useStyles = makeStyles<
      StyleSheet.NamedStyles<any>,
      { fullWidth: boolean }
    >((theme, props) => ({
      container: {
        backgroundColor: theme.colors.primary,
        width: props.fullWidth ? '100%' : 'auto',
      },
    }));
    const { wrapper } = renderWithWrapper(
      <Component fullWidth />,
      'myComponent'
    );
    expect(wrapper.props.style).toMatchObject({
      backgroundColor: '#2089dc',
      width: '100%',
    });
  });
});
