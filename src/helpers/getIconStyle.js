export default (type, extraProps) => {
  switch (type) {
    case 'zocial':
    case 'octicon':
    case 'material':
    case 'material-community':
    case 'ionicon':
    case 'foundation':
    case 'evilicon':
    case 'entypo':
    case 'font-awesome':
    case 'simple-line-icon':
    case 'feather':
    case 'antdesign':
    case 'ant-design':
    case 'fontisto':
      return {};
    case 'font-awesome-5':
      return {
        solid: extraProps.solid || false,
        brand: extraProps.brand || false,
      };
    default:
      return {};
  }
};
