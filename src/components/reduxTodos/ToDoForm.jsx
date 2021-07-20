import React from 'react';

const ToDoForm = (props) => (
  <div className="Form">
    <h2>TO DO Form</h2>
    <form onSubmit={props.handleSubmit}>
      <input
        value={props.value}
        type="text"
        onChange={props.handleChange}
        placeholder="Enter task..."
      />
      <input type="submit" value="Submit" />
    </form>
  </div>
)

export default ToDoForm;
