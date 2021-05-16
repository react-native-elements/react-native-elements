import React from 'react';
import { create } from 'react-test-renderer';
import { makeStyles, useTheme } from '../makeStyles';
import Text from '../../text/Text';
import { ThemeProvider } from '..';

describe('useTheme()', () => {
  it('should return theme, updateTheme and replaceTheme', () => {
    const Inner = () => {
      return <Text />;
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
    const container = create(
      <ThemeProvider>
        <Component />
      </ThemeProvider>
    );

    const innerProps = container.root.children[0].children[0].props;

    expect(typeof innerProps.theme).toEqual('object');
    expect(typeof innerProps.replaceTheme).toEqual('function');
    expect(typeof innerProps.updateTheme).toEqual('function');
  });
});

describe('makeStyles()', () => {
  it('should pass the theme and the component props', () => {
    const Component = (props) => {
      const styles = useStyles(props);

      return <Text style={styles.container} />;
    };
    const useStyles = makeStyles((theme, props) => ({
      container: {
        backgroundColor: theme.colors.primary,
        width: props.fullWidth ? '100%' : 'auto',
      },
    }));

    const container = create(
      <ThemeProvider>
        <Component fullWidth />
      </ThemeProvider>
    );

    const textProps = container.root.children[0].children[0].props;

    expect(textProps.style).toEqual({
      backgroundColor: '#2089dc',
      width: '100%',
    });
  });
});
