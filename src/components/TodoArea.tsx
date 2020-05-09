import React, { useState } from 'react';
import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import './TodoArea.css'
import { ITodo } from '../types';
import AddTodoArea from './AddTodoArea';
import Button from './Button';
import { useStore } from '../hooks/useStore'
import TodoStore from '../stores/TodoStore';

const TodoArea = observer(() => {
  const { TodoStore } = useStore()
  const [isEditItem, setIsEditItem] = useState(null)
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')

  console.log('TodoStore', TodoStore)

  const s: ITodo[] = toJS(TodoStore.data);

  console.log(toJS(s))
  return (
    <div className="TodoArea">

      {s.length === 0 && <div>There are no To do's</div>}

      {s.length >= 1 &&
        s.map((v: ITodo) => (
          <div className="area" key={v.ID}>
            <div className="itemID">ID: {v.ID}</div>
            <div className="itemName">Name: 
            
              { isEditItem !== v.ID && v.name}
              { isEditItem === v.ID &&
                <input
                  type="text"
                  value={name}
                  onChange={
                    (e: React.FormEvent<EventTarget>): void => setName((e.target as HTMLInputElement).value)}/>}
            
            </div>
            <div className="itemDate">{v.creationDate.toString()}</div>
            <div className="itemDesc">Desc:

            { isEditItem !== v.ID && v.description}
            { isEditItem === v.ID &&
              <input
                type="text"
                value={desc}
                onChange={(e: React.FormEvent<EventTarget>): void => setDesc((e.target as HTMLInputElement).value)}/>}
              
            </div>
            <div className="itemControl">
              <Button txt={isEditItem === v.ID ? 'save' : 'edit'} onClick={() => {
                console.log('isEdit', isEditItem)
                if (isEditItem === v.ID) {
                  TodoStore.updateTodo(v.ID, name, desc)
                  setIsEditItem(null)
                  setDesc('')
                  setName('')
                } else {
                  setIsEditItem(v.ID)
                  setDesc(v.description)
                  setName(v.name)
                }
              }} />
              <Button disable={isEditItem === v.ID} txt="delete" onClick={() => {
                TodoStore.deleteTodo(v.ID)
              }} />

            </div>
          </div>
        ))}
    </div>
  );
});

export default TodoArea;
