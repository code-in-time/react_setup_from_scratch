import React, { useState } from 'react';
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import './TodoArea.css'
import { ITodo } from '../types';
import AddTodoArea from './AddTodoArea';
import Button from './Button';
import { useStore } from '../hooks/useStore'

const TodoArea = observer(() => {
  const { TodoStore } = useStore()
  const [isEditBtn, setIsEditBtn] = useState(true)

  console.log('TodoStore', TodoStore)

  const s: ITodo[] = toJS(TodoStore.data);

  console.log(toJS(s))
  return (
    <div className="TodoArea">

      {s.length === 0 && <div>There are no To do's</div>}

      {s.length >= 1 &&
        s.map((v: any) => (
          <div className="area" key={v.ID}>
            <div className="itemID">ID: {v.ID}</div>
            <div className="itemName">Name: {v.name}</div>
            <div className="itemDate">{v.creationDate.toString()}</div>
            <div className="itemDesc">Desc: {v.description}</div>
            <div className="itemControl">
              <Button txt={isEditBtn ? 'edit' : 'save'} onClick={() => {
                console.log('isEdit', isEditBtn)
                setIsEditBtn((prev) => !prev)
              }} />
              <Button disable={!isEditBtn} txt="delete" onClick={() => {
                TodoStore.deleteTodo(v.ID)
              }} />

            </div>
          </div>
        ))}
    </div>
  );
});

export default TodoArea;
