import React from 'react'
import TodoStore from './TodoStore'
import Tracker from './Tracker'

export const storesContext = React.createContext({
  TodoStore,
  Tracker
  // TODO add the next store here
})