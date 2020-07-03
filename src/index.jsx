import React, { useState } from 'react';
import ReactDOM from 'react-dom';

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
    const newTodo = {id: todoList.length, content: value};
    const newTodoList = [...todoList, newTodo];
    setTodoList(newTodoList);

    //実行後にsetValueが空に置き換わる。
    setValue("");
  };

  //liタグ中のkeyにtodoListのインデックス、表示内容にtodoListが格納される。
  return (
    <div>
      <h1>TODO App</h1>
      <div>
        <AddTodo onChange={handleChange} add={add} />
      <ul>
        {todoList.map(todo => (
          <TodoElement key={todo.id} content={todo.content} />
            ))}
        </ul>
      </div>
    </div>
  );
};

const AddTodo = props => {
  return (
    <div>
      <input type="text" value={props.value} onChange={props.onChange} />
      <button onClick={props.add}>追加</button>
    </div>
  );
};

//子コンポーネント
//引数props
const TodoElement = props => {
  return (
    <li>
      {props.content}
    </li>
  )
}