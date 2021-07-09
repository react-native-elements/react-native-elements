import { prepareDeclaration } from './preProcessData.mjs';
import { docgenParser } from './docgenParser.mjs';
// import { formatJSON } from "../json-to-markdown/mdast";

export function generateDeclarations(paths) {
  const declarations = paths.reduce((acc, info) => {
    if (info.parent === undefined) {
      return [...acc, info.base];
    } else {
      return [...acc, info.path];
    }
  }, []);

  return docgenParser.parse(declarations).reduce((acc, declaration) => {
    const componentName = declaration.displayName;
    acc[componentName] = prepareDeclaration(declaration);
    // const data = formatJSON(acc[componentName]);

    return acc;
  }, {});
}
