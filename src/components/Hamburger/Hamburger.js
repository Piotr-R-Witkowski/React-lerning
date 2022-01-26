import React from 'react';
import styles from './Hamburger.scss';
import PropTypes from 'prop-types';

const Hamburger = props => (
  <button {...props}></button>
)

Hamburger.propTypes = {
  children: PropTypes.string.isRequired,
}

export default Hamburger;