import React, { FunctionComponent, useState, useRef, createRef } from 'react';
import { observer } from 'mobx-react'
import Button from './Button';
import { storesContext } from '../stores/context';
import { useStore } from '../hooks/useStore'
import { debug } from 'webpack';

const AddTodoArea = observer((props: any) => {
  const { TodoStore, Tracker, AddTodoArea } = useStore()

  // const [name, setName] = useState('')
  // const [desc, setDesc] = useState('')

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
        value={AddTodoArea.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          AddTodoArea.addName(e.target.value)
          // setName(e.target.value)
          console.log(e.target.value, name)
          Tracker.log(refName, e.type, e.target.value, e.currentTarget.tagName)
        }}
      />
      <input
        type="text"
        placeholder="Description"
        ref={refDesc}
        value={AddTodoArea.description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          AddTodoArea.addDescription(e.target.value)
          Tracker.log(refDesc, e.type, e.target.value, e.currentTarget.tagName)
        }}
      />
      <Button
        txt="Add Todo"
        ref={refBtnAdd}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          TodoStore.addTodo(AddTodoArea.name, AddTodoArea.description)
          Tracker.log(refBtnAdd, e.type, null, e.currentTarget.tagName)
          AddTodoArea.reset()
        }}
        className="lib-display-inline" />
    </div>
  );
});

export default AddTodoArea;