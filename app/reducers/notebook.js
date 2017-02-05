// @flow
// https://github.com/rajaraodv/react-redux-blog/blob/master/public/src/reducers/reducer_posts.js
import {LOAD_NOTEBOOK, LOAD_NOTEBOOK_SUCCESS, LOAD_NOTEBOOK_FAILURE} from '../actions/notebook';

const INITIAL_STATE = {
    notebook: {}
};

export default function(state : Object = INITIAL_STATE, action : Object) {
    let error;
    switch (action.type) {
        case LOAD_NOTEBOOK_SUCCESS:
        console.log('reducer success', state, action);
            return {
                ...state,
                notebook: action.data
            };

        case LOAD_NOTEBOOK_FAILURE:
        console.log('reducer failure', state, action);
            return {
                ...state,
                notebook: action.data
            };

        case LOAD_NOTEBOOK:
            console.log('notebook in reducer', action.data);
            return {
                ...state,
                notebook: action.data
            };

        default:
            console.log('reducer', state, action);
            return state;
    }
}
