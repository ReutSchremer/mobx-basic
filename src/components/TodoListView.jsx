import { observer } from 'mobx-react-lite';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTodoStore } from '../stores/index.store';

const TodoListView = () => {

  const todoStore = useTodoStore()

  const [search, setSearch] = useState(null)
  const [ren, setren] = useState(1)

  useEffect(() => {
    todoStore.setSearchText(search)
  }, [search])

  const render = () => {
    setren(ren + 1)
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }


  return (
    <div className="App">
      <div>
        <input onChange={handleChange} />
        <h4>this is content: {todoStore.getTodoList.map((todo, i) => <li key={"k" + i + todo} >{todo}</li>)} </h4>
        <button onClick={() => todoStore.addTodo(Math.random() < 0.5 ? "lalal" : "boo")}>push me</button>
        <button onClick={render}>click me to render anyway</button>
        <p>this means im renderd:{ren}</p>
      </div>
    </div>
  );
}


export default observer(TodoListView);