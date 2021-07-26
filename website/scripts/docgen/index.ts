import fs from 'fs-extra';
import path from 'path';
import { generateComponentDocs } from './generateComponentDocs';
import { getComponentFiles } from './getComponentFiles';
import { generateMarkdown } from './generateMarkdown';

const filePaths = getComponentFiles();
const componentDocs = generateComponentDocs(filePaths);

Object.keys(componentDocs).map((componentDisplayName) => {
  let componentDoc = componentDocs[componentDisplayName];
  const [componentName, childComponentName] = componentDisplayName.split('.');
  if (childComponentName) {
    let parentComponent = componentDocs[componentName];
    if (!('childrens' in parentComponent)) parentComponent['childrens'] = {};
    parentComponent['childrens'][componentDisplayName] = componentDoc;
    componentDocs[componentName] = parentComponent;
    delete componentDocs[componentDisplayName];
  }
});

// console.log(componentDocs);

// Function to set the componentDocs to their respective file and storing it in the .docgen folder.
Object.keys(componentDocs).map((componentDisplayName) => {
  // Condition check for compound components display name.

  let componentDoc = componentDocs[componentDisplayName];

  const markdownData = generateMarkdown(componentDoc);

  // Ensuring that the directory is present, and if not, create it.
  fs.ensureDirSync(
    path.join(__dirname, `../../.docgen/${componentDisplayName}`)
  );
  fs.outputFile(
    path.join(__dirname, `../../docs/main/${componentDisplayName}.md`),
    markdownData
  );
  fs.writeJSONSync(
    path.join(
      __dirname,
      `../../.docgen/${componentDisplayName}/${componentDisplayName}.json`
    ),
    componentDoc,
    {
      spaces: 2,
    }
  );
});
