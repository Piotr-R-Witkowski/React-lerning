import {connect} from 'react-redux';
import Info from './Info';

const mapStateToProps = state => ({
  title: state.info.title,
  image: state.info.image,
  content: state.info.content,
});

export default connect(mapStateToProps)(Info);