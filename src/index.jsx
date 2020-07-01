import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const TodoApp = () => {
  const [value, setValue] = useState("");
  const [todoList, setTodoList] = useState([]);


  const handleChange = e => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  const add = () => {
    //setTodoListの配列の先頭にvalueの値が追加される。
    const newTodo = [...todoList, value];
    setTodoList(newTodo);

    //実行後にsetValueが空に置き換わる。
    setValue("");
  };

  //liタグ中のkeyにtodoListのインデックス、表示内容にtodoListが格納される。
  return (
    <div>
      <h1>TODO App</h1>
      <input type="text" value={value} onChange={handleChange} />
      <ul>
        {todoList.map((todo, i) => (
          <li key={i}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};