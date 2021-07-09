import { componentMap } from './componentMap.mjs';

const extractFiles = () => {
  const files = [];
  Object.values(componentMap).map((item) => {
    files.push({ name: item.name, base: item.base });
    if (item.childrens.length !== 0) {
      item.childrens.map((child) => {
        files.push({ ...child, parent: item.name });
      });
    }
  });
  return files;
};

export { extractFiles };
