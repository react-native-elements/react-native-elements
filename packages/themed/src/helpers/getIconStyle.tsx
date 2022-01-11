import { IconType } from '../Icon';

export default (type: IconType, extraProps: any) => {
  switch (type) {
    case 'zocial':
      return {};
    case 'octicon':
      return {};
    case 'material':
      return {};
    case 'material-community':
      return {};
    case 'ionicon':
      return {};
    case 'foundation':
      return {};
    case 'evilicon':
      return {};
    case 'entypo':
      return {};
    case 'font-awesome':
      return {};
    case 'font-awesome-5':
      return {
        solid: extraProps.solid || false,
        brand: extraProps.brand || false,
      };
    case 'simple-line-icon':
      return {};
    case 'feather':
      return {};
    case 'antdesign':
    case 'ant-design':
      return {};
    case 'fontisto':
      return {};
    default:
      return {};
  }
};
