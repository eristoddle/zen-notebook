// @flow
import Editor from '../components/Editor/Editor';
import {connect} from 'react-redux';
import {loadNotebook, loadNotebookSuccess, loadNotebookFailure} from '../actions/notebook';

function mapStateToProps(state) {
    return {notebook: state.notebook};
}

function mapDispatchToProps(dispatch) {
    // TODO: Figure out this
    // return bindActionCreators(NotebookActions, dispatch);
    // return {
    //     loadNotebook: () => {
    //         dispatch(loadNotebook());
    //     }
    // }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
