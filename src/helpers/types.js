import PropTypes from 'prop-types';

export const ImageSourceType = PropTypes.oneOfType([
  PropTypes.shape({
    uri: PropTypes.string,
    headers: PropTypes.objectOf(PropTypes.string),
  }),
  PropTypes.number,
  PropTypes.string,
  PropTypes.arrayOf(
    PropTypes.shape({
      uri: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
      headers: PropTypes.objectOf(PropTypes.string),
    })
  ),
]);
