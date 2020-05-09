import React, { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react'
import Button from './Button';
import { storesContext } from '../stores/context';
import { useStore } from '../hooks/useStore'
import EventTracker from '../EventTracker'

const AddTodoArea = observer((props: any) => {

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const { TodoStore } = useStore()

  return (
    <div>
      <strong>Add a todo please</strong> <br />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e: React.FormEvent<EventTarget>): void => {
          setName((e.target as HTMLInputElement).value)
          EventTracker.log('Name', name)
        }}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e: React.FormEvent<EventTarget>): void => {
          setDesc((e.target as HTMLInputElement).value)
          EventTracker.log('Description', desc)
        }}
      />
      <Button
        txt="Add Todo"
        onClick={() => {
          console.log('onClick Record', [name, desc])
          TodoStore.addTodo(name, desc)
          EventTracker.log('Add Todo', '')
        }}
        className="lib-display-inline" />
    </div>
  );
});

export default AddTodoArea;