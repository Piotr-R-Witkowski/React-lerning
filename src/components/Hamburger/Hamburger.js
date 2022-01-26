import React from 'react';
import PropTypes from 'prop-types';

const Hamburger = props => (
  <button {...props}></button>
);

Hamburger.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Hamburger;