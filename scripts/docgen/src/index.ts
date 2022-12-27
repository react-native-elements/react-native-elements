import glob from 'fast-glob';
import path from 'path';
import { Component } from './components';
import { separateParent } from './utils/parentProps';
import { docgenParser } from './parser/docgenParser';
import { findIgnoredComponents } from './utils/common';
import yargs from 'yargs';
import ora from 'ora';

const rootPath = path.join(__dirname, '../../../packages/');

async function main({ source = '*/src/**/*.tsx' }: typeof argv) {
  const ignoredFiles = findIgnoredComponents(rootPath);
  ignoredFiles.push('**/*.usage.tsx');

  const filePaths = glob.sync(path.join(rootPath, source), {
    absolute: true,
    ignore: ignoredFiles,
    onlyFiles: true,
  });
  const spinner = ora('Starting...').start();
  spinner.text = `Found ${filePaths.length} components`;
  await wait();

  const componentDocs = docgenParser.parse(filePaths);

  Component.parents = separateParent(componentDocs);

  for (const doc of componentDocs) {
    spinner.text = `Generating ${doc.displayName}`;
    await wait();
    await new Component(doc).generate();
  }
  spinner.stop();
  console.log('Done!');
}

const wait = () => new Promise((r) => setTimeout(r, 10));

const { argv } = yargs(process.argv.slice(2)).options({
  source: { type: 'string', alias: 's' },
  component: { type: 'string', alias: 'c' },
  pkg: { type: 'string', alias: 'p' },
});

main(argv);
