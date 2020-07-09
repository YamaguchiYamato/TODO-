import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import TodoApp from './Todo';

ReactDOM.render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
  document.getElementById('index')
);
