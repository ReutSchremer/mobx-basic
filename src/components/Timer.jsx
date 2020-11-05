import { observer } from 'mobx-react-lite';
import React, { useEffect } from 'react';
import { useTimerStore } from '../stores/index.store';



const Timer = observer(({ }) => {

  const timerStore = useTimerStore()

  useEffect(() => {
    setInterval(() => {
      // every one second, increate timer by one sec
      // console.log("timer.increaseTimer()");
      timerStore.increaseTimer()
    }, 1000)

  }, [])


  return (
    <div>
      <div>Seconds passed: {timerStore.secondsPassed}</div>
      <div>Minutes passed: {timerStore.getMintesPassed}</div>
    </div>
  )
})

export default Timer;