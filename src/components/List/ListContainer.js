import {connect} from 'react-redux';
import List from './List';
import { getColumnsForList, createActionAddColumn} from '../../redux/columnsRedux';

//change state (from store) to props for List component
const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

//this function returns methods which we can use in our List component to dispach actions
const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

//connect function links two world: react and redux. In second () we write component name for which we prepared components
export default connect(mapStateToProps, mapDispatchToProps)(List);