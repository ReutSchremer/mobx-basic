import { observer } from 'mobx-react-lite';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useTodoStore } from '../stores/index.store';

const TodoListView = () => {

  const todoStore = useTodoStore()

  const [search, setSearch] = useState(null)

  useEffect(() => {
    todoStore.setSearchText(search)
  }, [search])


  const handleChange = (e) => {
    setSearch(e.target.value)
  }


  return (
    <div className="App">
      <div>
        <input onChange={handleChange} />
        <h4>this is content: {todoStore.getTodoList.map((todo, i) => <li key={"k" + i + todo} >{todo}</li>)} </h4>
        <button onClick={() => todoStore.addTodo(Math.random() < 0.5 ? "lalal" : "boo")}>push me</button>
      </div>
    </div>
  );
}


export default observer(TodoListView);