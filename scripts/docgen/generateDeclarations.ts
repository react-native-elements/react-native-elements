import { prepareDeclaration } from './preProcessData';
import { docgenParser } from './docgenParser';
import { FileType } from './serveFiles';
// import { formatJSON } from "../json-to-markdown/mdast";

export function generateDeclarations(paths: FileType[]) {
  const declarations: string[] = paths.reduce((acc, info) => {
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
