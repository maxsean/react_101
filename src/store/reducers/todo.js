import * as actions from '../actions/todo';

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADD_TODO:
      return [
        ...state,
        action.payload
      ];
    case actions.REMOVE_TODO:
      let list = [...state];
      list.splice(action.payload, 1);
      return list;
    default:
      return state;
  }
}

export default todoReducer;
