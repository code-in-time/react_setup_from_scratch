import React, { FunctionComponent, useState } from 'react';

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
    </div>
  );
};

export default AddTodoArea;