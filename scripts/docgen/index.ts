import fs from 'fs-extra';
import path from 'path';
import { generateDeclarations } from './generateDeclarations';
import { getComponentFiles } from './getComponentFiles';

const runFileScript = () => {
  const filePaths: string[] = getComponentFiles();
  const componentDocs = generateDeclarations(filePaths);
  Object.keys(componentDocs).map((componentDisplayName) => {
    const [componentName, childComponentName] = componentDisplayName.split('.');
    let fileName = componentName;
    if (childComponentName) {
      fileName = childComponentName;
    }

    fs.ensureDirSync(path.join(__dirname, `../../.docgen/${componentName}`));
    fs.writeJSONSync(
      path.join(__dirname, `../../.docgen/${componentName}/${fileName}.json`),
      componentDocs[componentDisplayName],
      {
        spaces: 2,
      }
    );
  });
};

runFileScript();
