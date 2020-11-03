import { action, computed, makeObservable, observable } from 'mobx';


export class TodoListStore {

    list = []
    searchText = null

    constructor() {
        makeObservable(this, {
            list: observable,
            addTodo: action,
            getTodoList: computed,

            searchText: observable,
            setSearchText: action
        })
    }

    setSearchText = (text) => {
        this.searchText = text
    }

    addTodo(text) {
        this.list.push(text);
    }

    get getTodoList() { //filtered by search
        if(!this.searchText || !this.searchText.length) return this.list
        let regexFilter = new RegExp("^" + this.searchText, "i");
        return this.list.filter(todo => regexFilter.test(todo))
    }
}