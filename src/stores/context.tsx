import React from 'react'
import TodoStore from './TodoStore'
import ThemeStore from './ThemeStore'

export const storesContext = React.createContext({
  TodoStore: new TodoStore(),
  // TODO add the next store here
})