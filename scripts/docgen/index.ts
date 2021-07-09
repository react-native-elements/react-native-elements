import fs from 'fs-extra';
import path from 'path';
// import glob from "fast-glob";
import _ from 'lodash';
import { generateDeclarations } from './generateDeclarations';
import { extractFiles, FileType } from './serveFiles';

async function runFileScript() {
  const files: FileType[] = extractFiles();
  return files;
}

runFileScript()
  .then(async (result: FileType[]) => {
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
