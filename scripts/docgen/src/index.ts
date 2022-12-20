import glob from 'fast-glob';
import path from 'path';
import { usageGenParser } from './parser/usageParser';
import { Markdown, UsageT } from './utils/markdown';
import { separateParent } from './utils/parentProps';
import { docgenParser } from './parser/docgenParser';
import { findIgnoredComponents } from './utils/common';
import yargs from 'yargs';

const rootPath = path.join(__dirname, '../../../packages/');

function usageGen(source = '*/src/**/*.usage.tsx'): Record<string, UsageT> {
  const filePaths = glob.sync(path.join(rootPath, source), {
    absolute: true,
    onlyFiles: true,
    ignore: [],
  });
  const usages: Record<string, UsageT> = {};
  filePaths.forEach((filePath) => {
    const { fileKey, info: desc, usage, meta } = usageGenParser.parse(filePath);
    usages[fileKey] = { desc, usage, ...Object.fromEntries(meta) };
  });

  return usages;
}

function main({ source = '*/src/**/*.tsx' }: typeof argv) {
  const ignoredFiles = findIgnoredComponents(rootPath);

  const filePaths = glob.sync(path.join(rootPath, source), {
    absolute: true,
    ignore: ignoredFiles,
    onlyFiles: true,
  });

  console.log('Found', filePaths.length, 'components');

  const componentDocs = docgenParser.parse(filePaths);

  Markdown.usages = usageGen();
  Markdown.parents = separateParent(componentDocs);

  componentDocs.forEach((componentDoc) => {
    new Markdown(componentDoc).save();
  });
}

const { argv } = yargs(process.argv.slice(2)).options({
  source: { type: 'string', alias: 's' },
  component: { type: 'string', alias: 'c' },
  pkg: { type: 'string', alias: 'p' },
});

main(argv);
