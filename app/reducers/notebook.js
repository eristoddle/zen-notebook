// @flow
import {INCREMENT_COUNTER, DECREMENT_COUNTER, LOAD_NOTEBOOK_SUCCESS} from '../actions/notebook';

export type notebookStateType = {
    notebook: Object
};

// type actionType = {
//   type: string,
//   data: Object
// };

export function counter(state : number = 0, action : Object) {
    switch (action.type) {
        case INCREMENT_COUNTER:
            return state + 1;
        case DECREMENT_COUNTER:
            return state - 1;
        default:
            return state;
    }
}

// export function notebook(state: any = {}, action: Object) {
//     switch (action.type) {
//         case LOAD_NOTEBOOK_SUCCESS:
//             return state;
//         default:
//             return state;
//     }
// }

export default function notebook(state : any = {}, action : Object) {
    switch (action.type) {
            // case 'ADD_TODO':
            //     return [
            //         ...state,
            //         todo(undefined, Object.assign(action, {id: state.length}))
            //     ]
            // case 'TOGGLE_TODO':
            //     return state.map(t => todo(t, action))
        case 'LOAD_NOTEBOOK_SUCCESS':
            console.log('reducer load', state, action);
            // return action.data
            return Object.assign({}, state, {
                notebook: action.data
            })
        default:
            return state
    }
}
