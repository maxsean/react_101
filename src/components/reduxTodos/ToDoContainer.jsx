import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ToDoSelector from '../../store/selectors/todo';
import * as actions from '../../store/actions/todo';
import ToDoItem from './ToDoItem';
import ToDoForm from './ToDoForm';

const ToDoContainer = () => {
  const dispatch = useDispatch();
  const todos = useSelector(ToDoSelector);
  const [userInput, setUserInput] = useState('');

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const removeTask = (index) => {
    dispatch(actions.removeToDo(index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.addToDo(userInput));

    setUserInput('');
  };

  return (
    <div className="Container">
      <h1><strong>TO DO Container</strong></h1>
      <ToDoForm
        value={userInput}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className="Items">
        <h2>TO DO Items</h2>
        <ol>
          {todos.map((todo, index) => (
            <ToDoItem
              key={index}
              id={index}
              task={todo}
              handleClick={removeTask}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ToDoContainer;
