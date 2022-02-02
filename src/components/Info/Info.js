import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import PropTypes from 'prop-types';

const Info = ({title, image, content}) => (
  <>
    <h2>
      <Hero 
        title={title} 
        image={image} 
      />
    </h2>
    <Container>
      <p>{content}</p>
    </Container>
  </>
);

Info.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Info;