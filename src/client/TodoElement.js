
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//子コンポーネント
//引数props
const TodoElement = props => {
  return (
    <li>
      {props.content}
      <button onClick={props.onDelete}>削除</button>
    </li>
  );
};

export default TodoElement;