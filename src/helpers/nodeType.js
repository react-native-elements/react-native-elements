import PropTypes from 'prop-types';

export default PropTypes.oneOfType([
  PropTypes.element,
  PropTypes.object,
  PropTypes.bool,
  PropTypes.func,
]);
