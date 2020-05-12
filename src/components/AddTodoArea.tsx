import React, { FunctionComponent, useState, useRef, createRef } from 'react';
import { observer } from 'mobx-react'
import Button from './Button';
import { storesContext } from '../stores/context';
import { useStore } from '../hooks/useStore'
import { debug } from 'webpack';

const AddTodoArea = observer((props: any) => {
  const { TodoStore, Tracker } = useStore()

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')

  const refBtnAdd = useRef<HTMLButtonElement>(null)
  const refName = useRef(null);
  const refDesc = useRef(null);

  return (
    <div>
      <strong>Add a todo please</strong> <br />
      <input
        type="text"
        placeholder="Name"
        ref={refName}
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setName(e.target.value)
          console.log(e.target.value, name)
          Tracker.log(refName, e.type, e.target.value, e.currentTarget.tagName)
        }}
      />
      <input
        type="text"
        placeholder="Description"
        ref={refDesc}
        value={desc}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          setDesc(e.target.value)
          Tracker.log(refDesc, e.type, e.target.value, e.currentTarget.tagName)
        }}
      />
      <Button
        txt="Add Todo"
        ref={refBtnAdd}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          TodoStore.addTodo(name, desc)
          Tracker.log(refBtnAdd, e.type, null, e.currentTarget.tagName)
        }}
        className="lib-display-inline" />
    </div>
  );
});

export default AddTodoArea;