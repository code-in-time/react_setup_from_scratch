import React, { FunctionComponent, useState } from 'react';
import { observer } from 'mobx-react'
import Button from './Button';
import { storesContext } from '../stores/context';
import {useStore} from '../hooks/useStore'

const AddTodoArea = observer((props: any) => {

  const [value, setValue] = useState('test')
  const {TodoStore} = useStore()


  console.log('TodoStore', TodoStore)
  console.log('props', props)
  return (
    <div>
      <strong>Add a todo please</strong> <br />
      <input
        type="text"
        value={value}
        onChange={(e: React.FormEvent<EventTarget>):void => setValue((e.target as HTMLInputElement).value)}
      />
      <Button
        txt="Add Todo"
        onClick={() => {
          console.log('onClick Record', value)
          TodoStore.addTodo('a','b')
        }}
        className="lib-display-inline"/>
    </div>
  );
});

export default AddTodoArea;