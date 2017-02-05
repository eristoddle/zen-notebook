// @flow
// https://github.com/rajaraodv/react-redux-blog/blob/master/public/src/reducers/reducer_posts.js
import {LOAD_NOTEBOOK_SUCCESS, LOAD_NOTEBOOK_FAILURE} from '../actions/notebook';

const INITIAL_STATE = {
    notebook: {},
    activeEntry: {},
    activeContent: ''
};

export default function(state : Object = INITIAL_STATE, action : Object) {

    switch (action.type) {
        
        case LOAD_NOTEBOOK_SUCCESS:
            console.log('reducer success', state, action);
            return Object.assign({}, state, {notebook: action.data});

        case LOAD_NOTEBOOK_FAILURE:
            console.log('reducer failure', state, action);
            return Object.assign({}, state, {notebook: action.data});

        default:
            return state;
    }
}
