import React from 'react';
import deepmerge from 'deepmerge';
import hoistNonReactStatics from 'hoist-non-react-statics';
import { ThemeConsumer } from './ThemeProvider';
import DefaultTheme from './theme';

const isClassComponent = (Component: any) =>
  Boolean(Component.prototype && Component.prototype.isReactComponent);

export interface ThemedComponent extends React.FunctionComponent {
  displayName: string;
}

function ThemedComponent(
  WrappedComponent,
  themeKey,
  displayName
): ThemedComponent {
  return Object.assign(
    (props) => {
      // @ts-ignore
      const { forwardedRef, children, ...rest } = props;

      return (
        <ThemeConsumer>
          {(context) => {
            // If user isn't using ThemeProvider
            if (!context) {
              const newProps = { ...rest, theme: DefaultTheme, children };
              return isClassComponent(WrappedComponent) ? (
                <WrappedComponent ref={forwardedRef} {...newProps} />
              ) : (
                <WrappedComponent {...newProps} />
              );
            }
            const { theme, updateTheme, replaceTheme } = context;
            const newProps = {
              theme,
              updateTheme,
              replaceTheme,
              // @ts-ignore
              ...deepmerge((themeKey && theme[themeKey]) || {}, rest, {
                clone: false,
              }),
              children,
            };
            if (isClassComponent(WrappedComponent)) {
              return <WrappedComponent ref={forwardedRef} {...newProps} />;
            }
            return <WrappedComponent {...newProps} />;
          }}
        </ThemeConsumer>
      );
    },
    { displayName: displayName }
  );
}

const withTheme = (WrappedComponent: any, themeKey: string) => {
  const name = themeKey
    ? `Themed.${themeKey}`
    : `Themed.${
        WrappedComponent.displayName || WrappedComponent.name || 'Component'
      }`;
  const Component = ThemedComponent(WrappedComponent, themeKey, name);

  if (isClassComponent(WrappedComponent)) {
    const ClassComponent = Object.setPrototypeOf(Component, WrappedComponent);
    const forwardRef = (props, ref) => (
      <ClassComponent {...props} forwardedRef={ref} />
    );

    return hoistNonReactStatics(React.forwardRef(forwardRef), WrappedComponent);
  }
  return hoistNonReactStatics(Component, WrappedComponent);
};

export default withTheme;
