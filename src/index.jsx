import React from 'react';
import ReactDOM from 'react-dom';

const { useState } = require({ React });

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const add = () => {
    const newTodo = [...todoList, value];
    setTodoList(newTodo);
  };
};

  return (
    <div>
      <h1>TODO App</h1>
      <input type="text" value={value} onChange={handleChange} />
      <p>{value}</p>
      <button onClick={add}>追加</button>
    </div>
  );
