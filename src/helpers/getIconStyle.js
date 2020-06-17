export default (type, extraProps) => {
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
      return {};
    case 'fontisto':
      return {};
    default:
      return {};
  }
};
