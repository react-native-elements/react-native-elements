import fs from 'fs-extra';
import path from 'path';
// import glob from "fast-glob";
import _ from 'lodash';
import { generateDeclarations } from './generateDeclarations.mjs';
import { extractFiles } from './serveFiles.mjs';

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function runFileScript() {
  const files = extractFiles();
  // const allFiles = await Promise.all(
  //   [path.resolve(__dirname, "../src")].map((folderPath) => {
  //     return glob("([a-z])*/+([a-z])*.*(d.ts|tsx|ts)", {
  //       absolute: true,
  //       cwd: folderPath,
  //     });
  //   })
  // );

  // const filesInDist = await _.flatten(allFiles);
  // const files = filesInDist.filter(
  //   (item) => !item.match("((config|helpers)/|index).*(d.ts|tsx|ts)")
  // );
  return files;
}

runFileScript()
  .then(async (result) => {
    const data = generateDeclarations(result);
    return data;
  })
  .then((result) => {
    Object.keys(result).map((item) => {
      const directoryAndFileName = item.split('.');
      const dirName = directoryAndFileName[0];
      const fileName =
        directoryAndFileName.length === 2
          ? directoryAndFileName[1]
          : directoryAndFileName[0];
      fs.ensureDirSync(path.join(__dirname, '../../.docgen'));
      fs.ensureDirSync(path.join(__dirname, `../../.docgen/${dirName}`));
      fs.writeJSONSync(
        path.join(__dirname, `../../.docgen/${dirName}/${fileName}.json`),
        result[item],
        {
          spaces: 2,
        }
      );
    });
  });
