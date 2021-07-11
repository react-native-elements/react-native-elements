import fs from 'fs-extra';
import path from 'path';
import { generateComponentDocs } from './generateComponentDocs';
import { getComponentFiles } from './getComponentFiles';

const getAndStoreComponentDocs = () => {
  const filePaths: string[] = getComponentFiles();
  const componentDocs = generateComponentDocs(filePaths);

  // Function to set the componentDocs to their respective file and storing it in the .docgen folder.
  Object.keys(componentDocs).map((componentDisplayName) => {
    // Condition check for compound components display name.
    const [componentName, childComponentName] = componentDisplayName.split('.');
    let fileName = componentName;
    if (childComponentName) {
      fileName = childComponentName;
    }

    // Ensuring that the directory is present, and if not, create it.
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

getAndStoreComponentDocs();
