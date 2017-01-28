// @flow
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Settings from '../components/Settings/Settings';
import * as NotebookActions from '../actions/notebook';

function mapStateToProps(state) {
  return {
    counter: state.counter
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(NotebookActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
