import React from 'react';
import './Main.css';
import Button from './Button';
import AddTodoArea from './AddTodoArea';

const Main = () => {
  return (
    <div className="Main">
      <div className="item-1">
        <AddTodoArea />
      </div>
      <div className="item-2">

      <div className="wrapper">
        <div className="side-left">side-left</div>
        <div className="side-right">side-right</div>
      </div>

      </div>
      <div className="item-3">
        <Button txt="Record"/>
        <Button txt="Stop Recording"/>
        <Button txt="Clear Recording"/>
        <Button txt="Play Recording"/>
      </div>
      <div className="item-4">Footer</div>
    </div>
  );
};

export default Main;