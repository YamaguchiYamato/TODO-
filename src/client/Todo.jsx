import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './AddTodo';

import TodoElement from './TodoElement';

//親コンポーネント
const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);


  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const add = () => {
    //setTodoListの配列の先頭にvalueの値が追加される。
    const newTodo = { id: todoList.length, content: value };
    if (newTodo.content !== "") {
      
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);

    //実行後にsetValueが空に置き換わる。
    setValue("");
    };
  };

  const handleDelete = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };

  //liタグ中のkeyにtodoListのインデックス、表示内容にtodoListが格納される。
  return (
    <div>
      <h1>TODO App</h1>
      <div>
        <AddTodo onChange={handleChange} add={add} />
      <ul>
        {todoList.map(todo => (
          <TodoElement
            key={todo.id}
            content={todo.content}
            onDelete={() => handleDelete(todo.id)}
          />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;