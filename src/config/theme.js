import colors from './colors';

const theme = {
  colors,
  spacingUnit: 4,
};

theme.spacing = function(unit) {
  return unit * theme.spacingUnit;
};

export default theme;
