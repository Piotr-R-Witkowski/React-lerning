import {connect} from 'react-redux';
import FAQ from './FAQ';

const mapStateToProps = state => ({
  title: state.faq.title,
  image: state.faq.image,
  content: state.faq.content,
});

export default connect(mapStateToProps)(FAQ);