import _ from 'lodash';
import glob from 'fast-glob';
import path from 'path';

const basePath = path.join(__dirname, '../../../packages/base/src');
// These are the Class-based components. Once there Functional implementation is done and
// auto-generation of documentation works for them they can be removed.
const filesToExclude = [
  path.join(basePath, 'Input', 'Input.tsx'),
  path.join(basePath, 'Rating', 'Rating.tsx'),
  path.join(basePath, 'SearchBar', 'SearchBar-android.tsx'),
  path.join(basePath, 'SearchBar', 'SearchBar-default.tsx'),
  path.join(basePath, 'SearchBar', 'SearchBar-ios.tsx'),
  path.join(basePath, 'SearchBar', 'SearchBar.tsx'),
];

export const runFileScript = (filesAsInput: string[] = []): string[] => {
  const allFiles = [path.resolve(basePath)].map((folderPath) => {
    return glob.sync('+([A-Z])*/+([A-Z])*.tsx', {
      absolute: true,
      cwd: folderPath,
    });
  });

  const filesInSrc = _.flatten(allFiles);
  const files =
    filesAsInput.length > 0
      ? filesAsInput
      : _.difference(filesInSrc, filesToExclude);

  return files;
};
