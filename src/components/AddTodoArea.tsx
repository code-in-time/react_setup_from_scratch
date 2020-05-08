import React, { FunctionComponent, useState } from 'react';
import Button from './Button';

const AddTodoArea = () => {
  const [value, setValue] = useState('test')
  return (
    <div>
      <strong>Add a todo please</strong> <br />
      <input
        type="text"
        value={value}
        onChange={(e: React.FormEvent<EventTarget>):void => setValue((e.target as HTMLInputElement).value)}
      />
      <Button txt="Add Todo" onClick={() => console.log('onClick Record')} className="lib-display-inline"/>
    </div>
  );
};

export default AddTodoArea;