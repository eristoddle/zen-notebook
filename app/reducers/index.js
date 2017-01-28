// @flow
import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import notebook from './notebook'

const rootReducer = combineReducers({
  routing,
  notebook
});

export default rootReducer;
