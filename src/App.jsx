import React from 'react';

import Timer from './components/Timer';
import TodoListView from './components/TodoListView'

import './App.css';
import { TimerStoreProvider, TodoStoreProvider } from './stores/index.store';


const App = () => {

  return (
    <div className="App">
      <TodoStoreProvider>
        <TodoListView />
      </TodoStoreProvider>
----------------------------------------------------------

      <TimerStoreProvider>
        <Timer />
      </TimerStoreProvider>
    </div>
  );
}

export default App;