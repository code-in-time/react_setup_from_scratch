import React from 'react'
import TodoStore from './TodoStore'

export const storesContext = React.createContext({
  TodoStore: new TodoStore(),
  // TODO add the next store here
})