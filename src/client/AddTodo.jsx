import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//inputのvalueには、onChange発火直後の入力値が格納される。
const AddTodo = props => {
    return (
        <div>
            <input type="text" value={props.value} onChange={props.onChange} />
            <button onClick={props.add}>追加</button>
        </div>
    );
};
export default AddTodo;