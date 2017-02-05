// @flow
import ZenEditor from '../components/ZenEditor/ZenEditor';
import {connect} from 'react-redux';
import {loadNotebookSuccess} from '../actions/notebook';

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

export default connect(mapStateToProps, mapDispatchToProps)(ZenEditor);
