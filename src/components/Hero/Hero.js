import React from 'react';
import styles from './Hero.scss';
import PropTypes from 'prop-types';
import ReactHTMLParser from 'react-html-parser';

const Hero = props => (
  <header className={styles.component}>
    <h2 className={styles.title}>{ReactHTMLParser(props.title)}</h2>
    <img 
      className={styles.image} 
      src={props.image} 
      alt={props.imageDescription}
    />
  </header>
);

Hero.propTypes = {
  title: PropTypes.node.isRequired,
  image: PropTypes.string.isRequired,
  imageDescription: PropTypes.string,
};

export default Hero;