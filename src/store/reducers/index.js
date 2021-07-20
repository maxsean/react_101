import { combineReducers } from 'redux';

import todo from './todo';

const createRootReducer = combineReducers({
  todo
});

export default createRootReducer;
