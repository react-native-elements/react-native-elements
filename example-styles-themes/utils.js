// @flow
import React from "react";
import PropTypes from "prop-types";
import merge from "deepmerge";

function getDisplayName(WrappedComponent) {
  if (!WrappedComponent) return "Component";
  return WrappedComponent.displayName || WrappedComponent.name || "Component";
}

const proppedComponent = (Component: Object, propMerge: Function | Object) => {
  class ProppedComponent extends React.Component<*> {
    static displayName = `ProppedComponent(${getDisplayName(Component)})`;

    render() {
      const localProps = this.props;
      const nextProps =
        typeof propMerge === "function" ? propMerge(localProps) : propMerge;

      const mergedProps = merge(localProps, nextProps);

      return <Component {...mergedProps} />;
    }
  }
  return ProppedComponent;
};

const themedProppedComponent = (
  Component: Object,
  propMerge: Function | Object | void
) => {
  class ProppedComponent extends React.Component<*> {
    static displayName = `ThemedProppedComponent(${getDisplayName(Component)})`;
    static contextTypes = {
      getTheme: PropTypes.func
    };

    render() {
      const theme = this.context.getTheme && this.context.getTheme();
      const localProps = { ...this.props, theme };
      if (propMerge) {
        const nextProps =
          typeof propMerge === "function" ? propMerge(localProps) : propMerge;

        const mergedProps = merge(this.props, nextProps);

        return <Component {...mergedProps} />;
      } else {
        return <Component {...localProps} />;
      }
    }
  }
  return ProppedComponent;
};

class ThemeProvider extends React.Component<*> {
  static childContextTypes = {
    getTheme: PropTypes.func
  };

  static propTypes = {
    theme: PropTypes.object
  };

  getChildContext() {
    return {
      getTheme: () => this.props.theme
    };
  }

  render() {
    return this.props.children;
  }
}

export {
  proppedComponent,
  themedProppedComponent,
  ThemeProvider,
  themedProppedComponent as withTheme
};
