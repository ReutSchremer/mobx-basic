import React, { useContext, useEffect, useState, createContext } from 'react';

import './App.css';

import { observer, } from 'mobx-react-lite';
import { Timer } from './stores/Timer'

const App = observer(() => {

  return (
    <div className="App">
      <TimerView></TimerView>

    </div>
  );
})

export default App;



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
