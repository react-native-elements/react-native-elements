import { componentMap, ComponentType } from './componentMap';
import _ from 'lodash';

export const getComponentFiles = () => {
  const files: string[] = [];
  Object.values(componentMap).map((component: ComponentType) => {
    files.push(component.path);
    if (_.isEmpty(component.childrens) === false) {
      component.childrens.map((child) => files.push(child.path));
    }
  });
  return files;
};
