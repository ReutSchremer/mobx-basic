import React from "react"
import ReactDOM from "react-dom"
import { action, autorun, makeObservable, observable, when, reaction, makeAutoObservable, computed } from "mobx"
import { observer } from "mobx-react-lite"

export class Timer {

    secondsPassed = 0

    constructor() {

        makeObservable(this, {
            secondsPassed: observable,
            increaseTimer: action,
            getMintesPassed: computed
        })

        autorun(() => {
            console.log("autoron:", this.secondsPassed)
        })

        when(
            () => this.secondsPassed % 3 == 0,
            () =>
                console.log("when::", this.secondsPassed, this.secondsPassed % 3),
            {}
        )

    }

    get getMintesPassed() {
        return parseInt(this.secondsPassed / 60);
    }


    increaseTimer() {
        this.secondsPassed += 1
    }
}

const myTimer = new Timer()

// A function component wrapped with `observer` will react
// to any future change in an observable it used before.
// const TimerView = observer(({ timer }) => <span>Seconds passed: {timer.secondsPassed}</span>)

// ReactDOM.render(<TimerView timer={myTimer} />, document.body)

// setInterval(() => {
//     myTimer.increaseTimer()
// }, 1000)