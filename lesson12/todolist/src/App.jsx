import React from 'react';
import TodoList from './TodoList';

const App = () => {
  return (
    <div id="root">
      <h1 className="title">Todo List</h1>
      <TodoList />
    </div>
  );
};

export default App;
