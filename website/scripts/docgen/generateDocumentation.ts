import path from 'path';
import { generateComponentDocs } from './generateComponentDocs';
import { generateMarkdown } from './generateMarkdown';
import nodefs from 'fs';

export const generateDocumentation = (filePaths) => {
  const componentDocs = generateComponentDocs(filePaths);

  // To make the mapping such that the componentDocs for Compound Component's children are inside the children's property of the component.
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

    nodefs.writeFileSync(
      path.join(__dirname, `../../docs/main/${componentDisplayName}.md`),
      markdownData
    );
  });
};
