import glob from 'fast-glob';
import path from 'path';
import { Component } from './utils/markdown';
import { separateParent } from './utils/parentProps';
import { docgenParser } from './parser/docgenParser';
import { findIgnoredComponents } from './utils/common';
import yargs from 'yargs';

const rootPath = path.join(__dirname, '../../../packages/');

function main({ source = '*/src/**/*.tsx' }: typeof argv) {
  const ignoredFiles = findIgnoredComponents(rootPath);

  const filePaths = glob.sync(path.join(rootPath, source), {
    absolute: true,
    ignore: ignoredFiles,
    onlyFiles: true,
  });

  console.log('Found', filePaths.length, 'components');

  const componentDocs = docgenParser.parse(filePaths);

  Component.parents = separateParent(componentDocs);

  componentDocs.forEach((doc) => {
    const component = new Component(doc);
    component.generate();
  });
}

const { argv } = yargs(process.argv.slice(2)).options({
  source: { type: 'string', alias: 's' },
  component: { type: 'string', alias: 'c' },
  pkg: { type: 'string', alias: 'p' },
});

main(argv);
