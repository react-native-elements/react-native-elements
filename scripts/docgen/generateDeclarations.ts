import { docgenParser } from './docgenParser';

export function generateDeclarations(componentFilePaths: string[]) {
  return docgenParser
    .parse(componentFilePaths)
    .reduce((componentDocs, componentDoc) => {
      const componentDisplayName = componentDoc.displayName;
      const orderedProps = Object.keys(componentDoc.props)
        .sort()
        .reduce((obj, key) => {
          obj[key] = componentDoc.props[key];
          return obj;
        }, {});
      componentDoc.props = orderedProps;
      componentDocs[componentDisplayName] = componentDoc;

      return componentDocs;
    }, {});
}
