import React from 'react';
import styles from './Card.scss';
import PropTypes from 'prop-types';

const Card = (props) => {
  const {title} = props;
  return (
    <div className={styles.component}>
      {title}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Card;