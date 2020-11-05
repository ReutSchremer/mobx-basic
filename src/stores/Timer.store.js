import { action, autorun, makeObservable, observable, computed, when, reaction, makeAutoObservable } from "mobx"

export class TimerStore {

    secondsPassed = 0

    constructor() {

        makeObservable(this, {
            secondsPassed: observable, // this. var
            increaseTimer: action, // func
            getMintesPassed: computed
        })
    }

    get getMintesPassed() {
        // console.log("calc")
        // will return minutes (seconds / 60)
        return parseInt(this.secondsPassed / 60)
    }


    increaseTimer() {
        // will add a sec to this.secondsPassed
        this.secondsPassed += 1;
    }
}

// A function component wrapped with `observer` will react
// to any future change in an observable it used before.
// const TimerView = observer(({ timer }) => <span>Seconds passed: {timer.secondsPassed}</span>)