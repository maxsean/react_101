export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';

export const addToDo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

export const removeToDo = (index) => ({
  type: REMOVE_TODO,
  payload: index
});
