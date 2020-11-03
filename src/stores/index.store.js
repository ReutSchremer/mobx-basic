import { createContext, createElement, useContext } from "react";
import { TimerStore } from "./Timer.store";
import { TodoListStore } from "./Todo.store";

// timer store
const TimerStoreContext = createContext()

export const TimerStoreProvider = ({ children }) => createElement(TimerStoreContext.Provider, { value: new TimerStore() }, children)

export const useTimerStore = () => useContext(TimerStoreContext)

// store: todo

const TodoStoreContext = createContext();

export const TodoStoreProvider = ({ children }) => createElement(TodoStoreContext.Provider, { value: new TodoListStore() }, children)

export const useTodoStore = () => useContext(TodoStoreContext)