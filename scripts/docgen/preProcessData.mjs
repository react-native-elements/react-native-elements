// import { ComponentDoc } from "react-docgen-typescript";

export function prepareDeclaration(declaration) {
  const data = { ...declaration };
  delete data.tags;
  delete data.methods;
  Object.keys(data.props).forEach((prop) => {
    delete data.props[prop].parent;
    delete data.props[prop].declarations;
  });

  // This sorts the props object in ascending order
  const ordered = Object.keys(data.props)
    .sort()
    .reduce((obj, key) => {
      obj[key] = data.props[key];
      return obj;
    }, {});

  data.props = ordered;
  return data;
}
