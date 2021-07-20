import React from 'react';

import ToDoForm from './ToDoForm';

const ToDoContainer = () => {
  // how should we use useState?

  const handleChange = (e) => {
    // how do we handle user input field changes?
  };

  const addTask = (input) => {
    // how do we add a todo task to our state?
  }

  const removeTask = (index) => {
    // how do we remove a todo task from our state?
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // how do we handle a form submission?
  }

  return (
    <div className="Container">
      <h1><strong>TO DO Container</strong></h1>
      <ToDoForm
        value={''}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className="Items">
        <h2>TO DO Items</h2>
        <p>Implement Me!</p>
      </div>
    </div>
  );
}

export default ToDoContainer;
