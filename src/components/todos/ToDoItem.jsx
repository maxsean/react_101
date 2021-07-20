import React from 'react';

const ToDoItem = (props) => (
  <li>
    {props.task}
    <button onClick={() => props.handleClick(props.id)}>remove</button>
  </li>
)

export default ToDoItem;
