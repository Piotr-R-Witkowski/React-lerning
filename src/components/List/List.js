import React from 'react';
import styles from './List.scss';
import Hero from '../Hero/Hero.js';
import PropTypes from 'prop-types';
import Column from '../Column/Column.js';

class List extends React.Component {
  static propTypes = {
    title: PropTypes.node.isRequired,
    imageSource: PropTypes.string.isRequired,
    imageDescription: PropTypes.string.isRequired,
    children: PropTypes.node,
  }

  static defaultProps = {
    children: <p>I can do all the things!!!</p>,
  }

  render() {
    return ( 
      <section className={styles.component}>
        <h2>
          <Hero 
            titleText={this.props.title} 
            heroImageSource={this.props.imageSource} 
            heroImageDescription={this.props.imageDescription} 
          />
          <div className={styles.description}>
            {this.props.children}
          </div>
          <div className={styles.columns}>
            <Column title="Animals" />
            <Column title="Plants" />
            <Column title="Minerals" />
          </div>
        </h2> 
      </section>
    )
  }
}

export default List;