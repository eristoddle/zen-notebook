// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import counter from './counter';
import notebook from './notebook'

const rootReducer = combineReducers({
  counter,
  routing,
  notebook
});

export default rootReducer;
