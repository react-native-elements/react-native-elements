import fs from 'fs-extra';
import path from 'path';
import { generateComponentDocs } from './generateComponentDocs';
import { getComponentFiles } from './getComponentFiles';
import { generateMarkdown } from './generateMarkdown';

const filePaths = getComponentFiles();
const componentDocs = generateComponentDocs(filePaths);

// To make the mapping such the the componentDocs for Compound Component's children are inside the childrens property of the component.
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

// Function to set the componentDocs to their respective file and storing it in the .docgen folder.
Object.keys(componentDocs).map((componentDisplayName) => {
  // Condition check for compound components display name.

  let componentDoc = componentDocs[componentDisplayName];

  const markdownData = generateMarkdown(componentDoc);

  fs.outputFile(
    path.join(__dirname, `../../docs/main/${componentDisplayName}.md`),
    markdownData
  );
});
