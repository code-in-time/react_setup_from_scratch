import React, { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react'
import Button from './Button';
import { storesContext } from '../stores/context';
import { useStore } from '../hooks/useStore'

const AddTodoArea = observer((props: any) => {

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const { TodoStore } = useStore()

  console.log('TodoStore', TodoStore)
  console.log('props', props)
  return (
    <div>
      <strong>Add a todo please</strong> <br />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e: React.FormEvent<EventTarget>): void => setName((e.target as HTMLInputElement).value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={desc}
        onChange={(e: React.FormEvent<EventTarget>): void => setDesc((e.target as HTMLInputElement).value)}
      />
      <Button
        txt="Add Todo"
        onClick={() => {
          console.log('onClick Record', [name, desc])
          TodoStore.addTodo(name, desc)
        }}
        className="lib-display-inline" />
    </div>
  );
});

export default AddTodoArea;