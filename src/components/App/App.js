import React from 'react';
import styles from './App.scss';
import List from '../List/List.js';
import {pageContents, listData, settings} from '../../data/dataStore.js';
import Creator from '../Creator/Creator.js';
import Hamburger from '../Hamburger/Hamburger.js';


class App extends React.Component {
  state = {
    lists: listData || [],
    hamburgerContent: 'zakryj',
    listVisibility: '',
  };
  
  addList(title) {
    this.setState(state => (
      {
        lists: [
          ...state.lists,
          {
            key: state.lists.length ? state.lists[state.lists.length - 1].key + 1 : 0,
            title,
            description: 'All my dreams',
            image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
            imageDescription: 'Rocket in space',
            columns: [],
          },
        ],
      }
    ));
  }

  handleHamburgerClick = () => {
    const isVisible = this.state.listVisibility === '' ? 'invisibility' : '';
    console.log(isVisible);
    this.setState({
      hamburgerContent: this.state.hamburgerContent === 'zakryj' ? 'odkryj' : 'zakryj',
      listVisibility: isVisible,
    });
  };

  render() {
    console.log(this.state.hamburgerContent);
    console.log('blavlalva');
    return ( 
      <main className={styles.component}>
        <h1 className={styles.title}>{pageContents.title}</h1> 
        <h2 className={styles.subtitle}>{pageContents.subtitle}</h2> 
        <div>
          <Hamburger content={this.state.hamburgerContent} onClick={this.handleHamburgerClick}>
            {this.state.hamburgerContent}
          </Hamburger>
        </div>
        <section className={styles[this.state.listVisibility]}>
          <div>
            {this.state.lists.map(({key, ...listProps})=>(
              <List key={key} {...listProps} />
            ))}
          </div>

          {/*<List {...lists}/>*/}
          <Creator 
            text={settings.listCreatorText}
            action={title => this.addList(title)} 
          />
        </section>
      </main>
    );
  }
}

export default App;