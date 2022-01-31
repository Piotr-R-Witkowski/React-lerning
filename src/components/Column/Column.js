import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import Creator from '../Creator/Creator.js';
import Card from '../Card/Card.js';
import {settings} from '../../data/dataStore.js';
import Icon from '../Icon/Icon.js';


class Column extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
    cards: PropTypes.array,
    addCard: PropTypes.func,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const {title, icon, cards, addCard} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon}/>
          </span>
          {title}
        </h3>
        
        {cards.map(cardData => (
          <Card key={cardData.id} {...cardData} />
        ))}
        
        <Creator 
          text={settings.cardCreatorText}
          action={addCard} 
        />
      </section>
    );
  }
}

export default Column;