import { createContext, useContext } from 'react';
import { TodoListStore } from "../stores/todo.store";

export const StoreContext = createContext<TodoListStore>(new TodoListStore());
export const StoreProvider = StoreContext.Provider;

export const useStore = (): TodoListStore => useContext(StoreContext);
