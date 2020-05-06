import React from 'react';
import { observer } from 'mobx-react'

import { storesContext } from '../stores/context'
import TodoStore from '../stores/TodoStore';
import { ITodo } from '../types';

export const useStores = () => React.useContext(storesContext)

const TodoArea = observer(() => {
  const { TodoStore } = useStores()

  console.log('TodoStore', TodoStore)


  const s = TodoStore.data[0]
  
  return (
    <div>
      {s.ID} <br />
      {s.description}
    </div>
  );
});

export default TodoArea;