import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
//import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore.js';
import Icon from '../Icon/Icon.js';


class SearchResults extends React.Component {
  static propTypes = {
    cards: PropTypes.array,
  };

  render() {
    const {cards} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={settings.defaultColumnIcon}/>
          </span>
          Matching cards
        </h3>
        
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </section>
    );
  }
}

export default SearchResults;