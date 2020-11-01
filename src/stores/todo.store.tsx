import { action, observable } from 'mobx';
export class TodoListStore {
    @observable list: Array<any> = []

    @action
    addTodo(myobg: string) {
        this.list.push({ myText: myobg });

    }
}
