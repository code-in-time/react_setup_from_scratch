import React from 'react'
import TodoStore from './TodoStore'
import Tracker from './Tracker'
import AddTodoArea from './AddTodoArea';

export const storesContext = React.createContext({
  TodoStore,
  Tracker,
  AddTodoArea
  // TODO add the next store here
})