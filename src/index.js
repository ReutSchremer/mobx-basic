import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';

//mobx provider
import { TimerStoreProvider, TodoStoreProvider } from './stores/index.store';

// pages
import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <TimerStoreProvider>
      <TodoStoreProvider>
        <App />
      </TodoStoreProvider>
    </TimerStoreProvider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
