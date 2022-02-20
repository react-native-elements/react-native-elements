import glob from 'fast-glob';
import path from 'path';
import fs from 'fs';
import { generateMarkdown } from './generateMarkdown';
import { docgenParser } from './docgenParser';

const rootPath = path.join(__dirname, '../../../packages/');
const docsPath = path.join(__dirname, `../../docs`);

const ignore = [
  // Ignore themed package
  rootPath + 'themed/**',
  '**/index.tsx',
  '**/src/*/components/**',
  '**/__tests__/**',
  '**/helpers/**',
  '**/config/**',
  '**/base/src/SearchBar/SearchBar-**',
];
function main() {
  const filePaths = glob.sync(path.join(rootPath, '*/src/**/*.tsx'), {
    absolute: true,
    ignore,
    onlyFiles: true,
  });
  console.log('Found', filePaths.length, 'components');

  const componentDocs = docgenParser.parse(filePaths);

  componentDocs.forEach((componentDoc) => {
    const { displayName, filePath } = componentDoc;
    const mdContent = generateMarkdown(componentDoc);

    const isUniverse = !filePath.startsWith(rootPath + 'base');
    const mdFilePath = path.join(
      docsPath,
      isUniverse ? `universe` : `components`,
      `${displayName}.mdx`
    );

    fs.writeFileSync(mdFilePath, mdContent);
  });
}

main();
