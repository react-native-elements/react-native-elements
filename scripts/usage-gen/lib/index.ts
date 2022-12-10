// import fs from 'fs';
import { parse } from './parser';

import path from 'path';

const rootPath = path.join(__dirname);

const f = parse(path.join(rootPath, './demo.tsx'));
console.log(f);

// import { Markdown } from './generateMarkdown';
// import { separateParent } from './parentProps';
// import { docgenParser } from './docgenParser';
// import { findIgnoredComponents } from './utils';
// import yargs from 'yargs';

// function main({ source = '*/src/**/*.tsx' }: typeof argv) {
//   const ignoredFiles = findIgnoredComponents(rootPath);

//   const filePaths = glob.sync(path.join(rootPath, source), {
//     absolute: true,
//     ignore: ignoredFiles,
//     onlyFiles: true,
//   });

//   console.log('Found', filePaths.length, 'components');

//   const componentDocs = docgenParser.parse(filePaths);

//   Markdown.parents = separateParent(componentDocs);

//   componentDocs.forEach((componentDoc) => {
//     new Markdown(componentDoc).save();
//   });
// }

// const { argv } = yargs(process.argv.slice(2)).options({
//   source: { type: 'string', alias: 's' },
//   component: { type: 'string', alias: 'c' },
//   pkg: { type: 'string', alias: 'p' },
// });

// main(argv);
