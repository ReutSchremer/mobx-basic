import React from 'react';

import Timer from './components/Timer';
import TodoListView from './components/TodoListView'

import './App.css';


const App = () => {

  return (
    <div className="App">
      <TodoListView />
    </div>
  );
}

export default App;