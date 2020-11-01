import React, { useContext, useEffect, useState, createContext } from 'react';
import logo from './logo.svg';
import './App.css';
import { useStore, StoreContext } from './helpers/create-context'
// import { useObserver } from 'mobx-react'
import { observer, } from 'mobx-react-lite';
import { Timer } from './stores/Timer'

const App = observer(() => {
  const td = useStore()

  return (
    <div className="App">
      <div>
        this is content: {td.list.length}
        <button onClick={() => td.addTodo('lalala')}>push me</button>
      </div>
      <TimerView></TimerView>

    </div>
  );
})

export default App;


// import {observer} from 'mobx-react-lite'

const TimerContext = createContext(new Timer())

const TimerView = observer(({ }) => {
  // Grab the timer from the context.

  const timer = useContext(TimerContext) // See the Timer definition above.
  useEffect(() => {
    
    setInterval(() => {
      timer.increaseTimer()
    }, 1000)

  }, [])
  return (<>
    <div>minutes passed: {timer.getMintesPassed}</div>
    <div>Seconds passed: {timer.secondsPassed}</div>
  </>
  )
})
