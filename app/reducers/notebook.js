// @flow
import { INCREMENT_COUNTER, DECREMENT_COUNTER, LOAD_NOTEBOOK_SUCCESS } from '../actions/notebook';

export function counter(state: number = 0, action: Object) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1;
    case DECREMENT_COUNTER:
      return state - 1;
    default:
      return state;
  }
}

export default function notebook(state: any = {}, action: Object) {
    switch (action.type) {
        case LOAD_NOTEBOOK_SUCCESS:
            return state;
        default:
            return state;
    }
}
