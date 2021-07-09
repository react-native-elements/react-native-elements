import { componentMap, ItemType } from './componentMap';

export type FileType = {
  name: string;
  base?: string;
  path?: string;
  parent?: string;
};

export const extractFiles = () => {
  const files: FileType[] = [];
  Object.values(componentMap).map((item: ItemType) => {
    files.push({ name: item.name, base: item.base });
    if (item.childrens.length !== 0) {
      item.childrens.map((child) => {
        return files.push({ ...child, parent: item.name });
      });
    }
  });
  return files;
};
