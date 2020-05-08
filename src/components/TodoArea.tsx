import React from 'react';
import { observer } from 'mobx-react'
import {toJS} from 'mobx'
import './TodoArea.css'
import { storesContext } from '../stores/context'
import TodoStore from '../stores/TodoStore';
import { ITodo } from '../types';
import AddTodoArea from './AddTodoArea';

export const useStores = () => React.useContext(storesContext)

const TodoArea = observer(() => {
  const { TodoStore } = useStores()

  console.log('TodoStore', TodoStore)

  const s: ITodo[] = toJS(TodoStore.data);

  console.log (toJS(s))
  return (
    <div className="TodoArea">
      {s.map((v:any) => (
        <div className="area" key={v.ID}>
          <div className="itemID">{v.ID}</div>
          <div className="itemName">{v.name}</div>
          {/*<div className="itemDate">{v.creationDate}</div>*/}
          <div className="itemDesc">{v.description}</div>
        </div>
      ))}
    </div>
  );
});

export default TodoArea;



