import { createStore } from 'redux';
import createRootReducer from './reducers/index';

const store = createStore(createRootReducer);

export default function getStore() {
  return store
};
