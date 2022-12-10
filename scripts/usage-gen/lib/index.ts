// import fs from 'fs';
import { parse } from './parser';
import glob from 'fast-glob';
import path from 'path';

const rootPath = path.join(__dirname, '../../packages/');

function main(source = '*/src/**/*.usage.tsx') {
  const filePaths = glob.sync(path.join(rootPath, source), {
    absolute: true,
    onlyFiles: true,
  });

  console.log('Found', filePaths.length, 'components');

  const componentDocs = parse(filePaths);

  Markdown.parents = separateParent(componentDocs);

  componentDocs.forEach((componentDoc) => {
    new Markdown(componentDoc).save();
  });
}

// const { argv } = yargs(process.argv.slice(2)).options({
//   source: { type: 'string', alias: 's' },
//   component: { type: 'string', alias: 'c' },
//   pkg: { type: 'string', alias: 'p' },
// });

// main(argv);
