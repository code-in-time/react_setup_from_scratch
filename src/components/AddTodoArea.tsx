import React, { FunctionComponent, useState, useRef, createRef, useEffect } from 'react';
import { observer } from 'mobx-react'
import Button from './Button';
import { storesContext } from '../stores/context';
import { useStore } from '../hooks/useStore'
import { debug } from 'webpack';

const AddTodoArea = observer((props: any) => {
  const { TodoStore, Tracker } = useStore()

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')

  const refBtnAdd = useRef<HTMLButtonElement>(null)
  const refName = useRef(null);
  const refDesc = useRef(null);

  useEffect(() => {
    console.log('name')
  }, [name])

  useEffect(() => {
    console.log('desc')
  }, [description])

  const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    Tracker.log(refName, e.type, e.target.value, e.currentTarget.tagName, setName.bind(this))
  }

  const onChangeDescHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
    Tracker.log(refDesc, e.type, e.target.value, e.currentTarget.tagName, setDescription.bind(this))
  }


  return (
    <div>
      <strong>Add a todo please</strong> <br />
      <input
        type="text"
        placeholder="Name"
        ref={refName}
        value={name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          onChangeNameHandler(e)
        }}
      />
      <input
        type="text"
        placeholder="Description"
        ref={refDesc}
        value={description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>): void => {
          onChangeDescHandler(e)
        }}
      />
      <Button
        txt="Add Todo"
        ref={refBtnAdd}
        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
          TodoStore.addTodo(name, description)
          Tracker.log(refBtnAdd, e.type, null, e.currentTarget.tagName)
          setName('')
          setDescription('')
        }}
        className="lib-display-inline" />
    </div>
  );
});

export default AddTodoArea;