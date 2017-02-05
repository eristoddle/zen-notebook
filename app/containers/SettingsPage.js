// @flow
// https://github.com/rajaraodv/react-redux-blog/blob/master/public/src/containers/PostsListContainer.js
//import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Settings from '../components/Settings/Settings';
import {loadNotebook} from '../actions/notebook';

function mapStateToProps(state) {
    return {notebook: state.notebook};
}

function mapDispatchToProps(dispatch) {
    // TODO: Figure out this
    // return bindActionCreators(NotebookActions, dispatch);
    return {
        loadNotebook: () => {
            dispatch(loadNotebook());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
