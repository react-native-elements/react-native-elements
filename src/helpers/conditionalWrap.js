export default ({condition, wrap, children}) => condition ? wrap(children) : children;
