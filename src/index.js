import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { TodoListStore } from './stores/todo.store';
import { StoreProvider } from './helpers/create-context'
let myStore = new TodoListStore();

window.store = myStore;
ReactDOM.render(
  // <React.StrictMode>
  <StoreProvider value={myStore}>
    <App />
  </StoreProvider >
  // </React.StrictMode>,
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
