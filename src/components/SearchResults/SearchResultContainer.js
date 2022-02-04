import {getCardsForSearchResults} from '../../redux/cardsRedux';
import {connect} from 'react-redux';
import SearchResults from './SearchResults';

const mapStateToProps = (state, props) => ({
  cards: getCardsForSearchResults(state, props.match.params.id),
});

export default connect(mapStateToProps)(SearchResults);