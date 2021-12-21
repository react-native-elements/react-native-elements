import _ from 'lodash';
import glob from 'fast-glob';
import path from 'path';

// These are the Class-based components. Once there Functional implementation is done and
// auto-generation of docuentaion works for them they can be removed.
const filesToExclude = [
  path.join(__dirname, '..', '..', '..', 'src', 'Input', 'Input.tsx'),
  path.join(__dirname, '..', '..', '..', 'src', 'Rating', 'Rating.tsx'),
  path.join(
    __dirname,
    '..',
    '..',
    '..',
    'src',
    'SearchBar',
    'SearchBar-android.tsx'
  ),
  path.join(
    __dirname,
    '..',
    '..',
    '..',
    'src',
    'SearchBar',
    'SearchBar-default.tsx'
  ),
  path.join(
    __dirname,
    '..',
    '..',
    '..',
    'src',
    'SearchBar',
    'SearchBar-ios.tsx'
  ),
  path.join(__dirname, '..', '..', '..', 'src', 'SearchBar', 'SearchBar.tsx'),
];

export const runFileScript = (filesAsInput: string[] = []): string[] => {
  const allFiles = [path.resolve(__dirname, '..', '..', '..', 'src')].map(
    (folderPath) => {
      return glob.sync('+([A-Z])*/+([A-Z])*.tsx', {
        absolute: true,
        cwd: folderPath,
      });
    }
  );

  const filesInSrc = _.flatten(allFiles);
  const files =
    filesAsInput.length > 0
      ? filesAsInput
      : _.difference(filesInSrc, filesToExclude);

  return files;
};
