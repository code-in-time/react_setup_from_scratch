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
        onChange={(e: React.FormEvent<EventTarget>): void => {
          setName((e.target as HTMLInputElement).value)
          debugger
          Tracker.log(refName, e.type, name, e.target.toString())
        }}
      />
      <input
        type="text"
        placeholder="Description"
        ref={refDesc}
        value={desc}
        onChange={(e: React.FormEvent<EventTarget>): void => {
          setDesc((e.target as HTMLInputElement).value)
          Tracker.log(refDesc, e.type, desc, e.target.toString())
        }}
      />
      <Button
        txt="Add Todo"
        ref={refBtnAdd}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          TodoStore.addTodo(name, desc)
          Tracker.log(refBtnAdd, e.type, null, e.target.toString())
        }}
        className="lib-display-inline" />
    </div>
  );
});

export default AddTodoArea;