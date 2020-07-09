import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import AddTodo from './AddTodo';

import TodoElement from './TodoElement';

//親コンポーネント
const TodoApp = () => {
  //新規追加用
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);


  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const add = () => {
    //setTodoListの配列の先頭にvalueの値が追加される。
    const newTodo = { id: todoList.length, content: value };
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);

    //実行後にsetValueが空に置き換わる。
    setValue("");
  };

  const handleEdit = id => {
    //input呼び出し
    const TargetTodo = todoList.filter(todo => todo.id == id);
    TargetTodo.content=
    //TodoListから、idと一致するTodoのContentを新規入力した値で置き換え
    
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
            onEdit = {() => handleEdit(todo.id)}
            onDelete={() => handleDelete(todo.id)}
          />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;